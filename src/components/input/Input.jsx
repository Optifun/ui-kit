import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { sizes } from "../constants";
import { INPUT_TYPES } from "../constants";

class Input extends React.Component {
  constructor(props) {
    super(props);

    const { innerRef } = props;
    this.ref = innerRef || React.createRef();
  }

  onBlur = (e) => {
    e.preventDefault();
    const { onBlur } = this.props;
    if (onBlur) onBlur(e.target.value);
  };

  onChange = (e) => {
    e.preventDefault();
    const { onChange } = this.props;
    if (onChange) onChange(e.target.value);
  };

  render() {
    const {
      className,
      size,
      placeHolder,
      invalid,
      valid,
      value,
      ...attrs
    } = this.props;

    const classes = classNames(
      className,
      "input-control",
      size && `input-control-${size}`,
      valid && "is-valid",
      invalid && "is-invalid"
    );

    return (
      <input
        {...attrs}
        ref={this.ref}
        className={classes}
        onBlur={this.onBlur}
        onChange={this.onChange}
        defaultValue={value}
        placeholder={placeHolder}
      />
    );
  }
}

Input.propTypes = {
  /**
   * Пользовательские классы компонента
   */
  className: PropTypes.string,
  /**
   * Плейсхолдер
   */
  placeHolder: PropTypes.string,
  /**
   * Тип значения поля
   */
  type: PropTypes.oneOf(INPUT_TYPES),
  /**
   * Размер поля
   */
  size: PropTypes.oneOf(sizes),
  /**
   * Является ли поле корректно заполненным
   */
  valid: PropTypes.bool,
  /**
   * Является ли поле ошибочно заполненным
   */
  invalid: PropTypes.bool,
  /**
   * Значение по-умолчанию
   */
  value: PropTypes.string,
  /**
   * Колбек получающий значение поля при потере фокуса
   */
  onBlur: PropTypes.func,
  /**
   * Колбек получающий значение поля при изменении значения
   */
  onChange: PropTypes.func,
  /**
   * Ссылка передаваемая в HTML элемент
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
};

Input.defaultProps = {
  size: "normal",
  type: "text",
};

export { Input };
