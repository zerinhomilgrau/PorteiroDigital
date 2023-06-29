/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Favorites } from "../Favorites";
import { Home } from "../Home";
import { Settings } from "../Settings";
import "./style.css";

export const CategoriesApp = ({
  categorie,
  className,
  settingsSettings = "https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/settings-2.svg",
  favoritesFavorites = "https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/favorites-2.svg",
  homeHome = "https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/home-2.svg",
}) => {
  return (
    <div className={`categories-app ${className}`}>
      <Settings className="settings-instance" settings={settingsSettings} />
      <Favorites className="favorites-instance" favorites={favoritesFavorites} />
      <Home className="home-instance" home={homeHome} />
    </div>
  );
};

CategoriesApp.propTypes = {
  categorie: PropTypes.oneOf(["products", "home", "settings"]),
  settingsSettings: PropTypes.string,
  favoritesFavorites: PropTypes.string,
  homeHome: PropTypes.string,
};
