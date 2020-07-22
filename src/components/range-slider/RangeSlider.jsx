import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class RangeSlider extends React.Component {
  constructor(props) {
    super(props);

    const { value, onChange, innerRef, min, max } = props;
    this.state = { value, min, max };

    this.inputRef = innerRef || React.createRef();
    this.hintRef = React.createRef();
    this.onChange = onChange;
    this.changeValue = this.changeValue.bind(this);
  }

  componentDidMount() {
    this.placeHint(this.state.value);
  }

  changeValue() {
    const value = this.inputRef.current.value;
    this.setState({ ...this.state, value });
    this.placeHint(value);
    this.onChange(value);
  }

  placeHint(value) {
    const pixelOffset = 10;
    const thumbRadius = 6;
    const { min, max } = this.state;
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
      <div className="slider-wrap">
        <input
          ref={this.inputRef}
          type="range"
          className={classes}
          min={min}
          max={max}
          value={this.state.value}
          onChange={this.changeValue}
        />
        <label ref={this.hintRef} className={hitClasses}>
          {this.state.value}
        </label>
      </div>
    );
  }
}

RangeSlider.propTypes = {
  /** Custom class names for component */
  className: PropTypes.string,
  /** Contextual theme */
  theme: PropTypes.string,
  /** Minimal range value */
  min: PropTypes.number,
  /** Maximal range value */
  max: PropTypes.number,
  /** Starting range value */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Should hint hide */
  hideHint: PropTypes.bool,
  /** Callback for onChange event */
  onChange: PropTypes.func.isRequired,
  /** Inner ref which will be passed to control */
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
