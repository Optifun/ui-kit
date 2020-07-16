import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class RangeSlider extends React.Component {
  render() {
    const { className, theme } = this.props;
    const classes = classNames(className, theme && `slider-${theme}`);

    return <div className={classes} />;
  }
}

RangeSlider.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
};

export default RangeSlider;
