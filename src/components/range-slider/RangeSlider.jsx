import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class RangeSlider extends React.Component {
  constructor(props) {
    super(props);

    const { value, onChange, innerRef, min, max } = props;
    this.state = { value };

    this.inputRef = innerRef || React.createRef();
    this.hintRef = React.createRef();
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    this.placeHint(this.state.value);
    this.wrapperRef.current.addEventListener("wheel", this.handleWheel, {
      passive: false,
    });
  }

  componentWillUnmount() {
    this.wrapperRef.current.removeEventListener("wheel", this.handleWheel);
  }

  handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      return this.changeValue(1);
    }
    return this.changeValue(-1);
  };

  changeValue = (diff = 0) => {
    const value = Number(this.inputRef.current.value) + diff;
    this.setValue(value);
  };

  setValue = (value) => {
    const { min, max, onChange } = this.props;
    if (value < min || max < value) return;

    this.setState({ ...this.state, value });
    this.placeHint(value);
    if (onChange) onChange(value);
  };

  onChange = (e) => {
    e.stopPropagation();
    this.setValue(e.target.value);
  };

  placeHint(value) {
    const pixelOffset = 10;
    const thumbRadius = 6;
    const { min, max } = this.props;
    const percents = ((value - min) / (max - min)) * 100;
    this.hintRef.current.style.left = `calc(${percents}% + ${pixelOffset -
      (percents / 100) * (pixelOffset + thumbRadius)}px)`;
  }

  render() {
    const { className, theme, min, max, hideHint } = this.props;
    const classes = classNames(
      className,
      "slider",
      theme && `slider-${theme}`,
      hideHint && "slider-hide-hint"
    );
    const hitClasses = classNames(
      className,
      "slider-hint",
      theme && `slider-hint-${theme}`
    );

    return (
      <div className="slider-wrap" ref={this.wrapperRef}>
        <input
          ref={this.inputRef}
          type="range"
          className={classes}
          min={min}
          max={max}
          value={this.state.value}
          onChange={this.onChange}
        />
        <label ref={this.hintRef} className={hitClasses}>
          {this.state.value}
        </label>
      </div>
    );
  }
}

RangeSlider.propTypes = {
  /**
   *  Пользовательские классы компонента
   */
  className: PropTypes.string,
  /**
   * Контекстуальная тема
   * */
  theme: PropTypes.string,
  /**
   * Минимальное значение ползунка
   */
  min: PropTypes.number,
  /**
   *  Максимальное значение ползунка
   */
  max: PropTypes.number,
  /**
   *  Начальное значение ползунка
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Должна ли подсказка скрываться
   */
  hideHint: PropTypes.bool,
  /**
   *  Колбек получающий значение ползунка при изменении значения
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Ссылка передаваемая в HTML элемент
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
};

RangeSlider.defaultProps = {
  hideHint: false,
  min: 0,
  max: 100,
  value: 50,
};

export { RangeSlider };
