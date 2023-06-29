/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Home = ({
  className,
  home = "https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/home-3.png",
}) => {
  return <img className={`home ${className}`} alt="Home" src={home} />;
};

Home.propTypes = {
  home: PropTypes.string,
};
