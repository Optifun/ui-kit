import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

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
  children: PropTypes.node,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  theme: PropTypes.string,
  open: PropTypes.bool,
  dismissible: PropTypes.func,
};

Alert.defaultProps = {
  theme: "primary",
  open: true,
};

export default Alert;
