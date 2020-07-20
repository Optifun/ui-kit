import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

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
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
};

Select.defaultProps = {
  size: "normal",
};

export default Select;
