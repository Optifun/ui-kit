import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

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
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.string,
  size: PropTypes.string,
  squared: PropTypes.bool,
  active: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: "accept",
  size: "normal",
};

export default Button;
