import React from "react";
import PropTypes from "prop-types";

const Alert = (props) => {
  const { className, theme, open, children, dismissible, ...attrs } = props;

  const classes = classNames(
    className,
    "alert",
    `alert-${theme}`,
    dismissible && "alert-dismissible"
  );

  const closeClasses = classNames("close", closeClassName);

  return (
    <div className={classes}>
      {dismissible ? (
        <button type="button" className={closeClasses} onClick={dismissible}>
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
  transition: PropTypes.shape(Fade.propTypes),
};

Alert.defaultProps = {
  theme: "primary",
  open: true,
};

export default Alert;
