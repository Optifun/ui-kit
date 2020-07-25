import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { themes } from "../constants";

const Alert = (props) => {
  const { className, theme, open, children, dismissible, ...attrs } = props;

  const classes = classNames(
    className,
    "alert",
    `alert-${theme}`,
    open && "alert-open",
    dismissible && "alert-dismissible"
  );

  return (
    <div className={classes} {...attrs}>
      {dismissible ? (
        <button type="button" className="close" onClick={dismissible}>
          <span aria-hidden="true">&times;</span>
        </button>
      ) : null}
      {children}
    </div>
  );
};

Alert.propTypes = {
  /**
   * Дочерние компоненты
   */
  children: PropTypes.node,
  /**
   * Пользовательские классы компонента
   */
  className: PropTypes.string,
  /**
   * Пользовательские классы кнопки закрытия
   */
  closeClassName: PropTypes.string,
  /**
   * Контекстуальная тема
   */
  theme: PropTypes.oneOf(themes),
  /**
   * Отображается ли компонент на экране
   */
  open: PropTypes.bool,
  /**
   * Калбек вызываемый при нажатии на кнопку закрытия
   */
  dismissible: PropTypes.func,
};

Alert.defaultProps = {
  theme: "primary",
  open: true,
};

export { Alert };
