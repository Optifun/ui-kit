import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { INPUT_TYPES } from "../constants";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.ref = null;

    this.getRef = this.getRef.bind(this);
    this.focus = this.focus.bind(this);
  }

  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  }

  focus() {
    if (this.ref) {
      this.ref.focus();
    }
  }

  render() {
    const { className, size, invalid, valid, innerRef, ...attrs } = this.props;

    const classes = classNames(
      className,
      size && `form-control-${size}`,
      valid && "is-valid",
      invalid && "is-invalid"
    );

    return <input {...attrs} ref={innerRef} className={classes} />;
  }
}

Input.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  inline: PropTypes.bool,
  type: PropTypes.oneOf(INPUT_TYPES),
  size: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
};

export default Input;
