import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { themes, sizes } from "../constants";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      className,
      children,
      theme,
      size,
      squared,
      active,
      disabled,
      block,
      ...attrs
    } = this.props;

    const classes = classNames(
      className,
      "btn",
      theme && `btn-${theme}`,
      size && `btn-${size}`,
      squared && "btn-squared",
      block && "btn-block",
      active && "active"
    );

    return (
      <button
        className={classes}
        disabled={disabled}
        onClick={this.onClick}
        {...attrs}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  /**
   * Пользовательские классы компонента
   */
  className: PropTypes.string,
  /**
   * Дочерние компоненты
   */
  children: PropTypes.node,
  /**
   * Контекстуальная тема
   */
  theme: PropTypes.oneOf(themes),
  /**
   * Размер кнопки
   */
  size: PropTypes.oneOf(sizes),
  /**
   * Будет ли кнопка прямоугольной
   */
  squared: PropTypes.bool,
  /**
   * Несёт ли кнопка активное состояние
   */
  active: PropTypes.bool,
  /**
   * Имеет ли кнопка блочное поведение
   */
  block: PropTypes.bool,
  /**
   * Является ли кнопка выключенной
   */
  disabled: PropTypes.bool,
  /**
   * Калбек на нажатие кнопки
   */
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: "accept",
  size: "normal",
};

export { Button };
