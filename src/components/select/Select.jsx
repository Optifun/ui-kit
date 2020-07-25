import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { sizes } from "../constants";

class Select extends React.Component {
  render() {
    const {
      className,
      children,
      size,
      valid,
      invalid,
      innerRef,
      ...attrs
    } = this.props;

    const classes = classNames(
      className,
      "input-control",
      "custom-select",
      valid && "is-valid",
      invalid && "is-invalid",
      size && `input-control-${size}`
    );

    return (
      <select {...attrs} className={classes} ref={innerRef}>
        {children}
      </select>
    );
  }
}

Select.propTypes = {
  /**
   * Пользовательские классы компонента
   */
  className: PropTypes.string,
  /**
   * Дочерние элементы
   */
  children: PropTypes.node,
  /**
   * Размер компонента
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
   * Ссылка передаваемая в HTML элемент
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
};

Select.defaultProps = {
  size: "normal",
};

export { Select };
