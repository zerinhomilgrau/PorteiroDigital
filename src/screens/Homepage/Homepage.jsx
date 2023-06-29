import React from "react";
import { CategoriesApp } from "../../components/CategoriesApp";
import "./style.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="div">
        <div className="overlap">
          <img
            className="native-home"
            alt="Native home"
            src="https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/native---home-indicator.svg"
          />
          <CategoriesApp
            categorie="home"
            className="categories-app-instance"
            favoritesFavorites="https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/favorites-4.svg"
            homeHome="https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/home-4.svg"
            settingsSettings="https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/settings-4.svg"
          />
        </div>
        <div className="orders">
          <div className="frame">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/rectangle-3764@2x.png"
            />
            <div className="frame-2">
              <div className="text-wrapper">ENC-0012</div>
              <div className="text-wrapper-2">Mercado Livre</div>
              <div className="frame-3">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/vector-1.svg"
                />
                <div className="text-wrapper-3">15/04/2023</div>
              </div>
              <div className="text-wrapper-4">Pequeno</div>
            </div>
          </div>
          <div className="frame-4">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/rectangle-3764-1@2x.png"
            />
            <div className="frame-2">
              <div className="text-wrapper">ENC-0001</div>
              <div className="text-wrapper-2">Amazon</div>
              <div className="frame-3">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/vector-1.svg"
                />
                <div className="text-wrapper-3">07/03/2023</div>
              </div>
              <div className="text-wrapper-4">Grande</div>
            </div>
          </div>
        </div>
        <div className="search">
          <img
            className="img"
            alt="Search"
            src="https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/search.svg"
          />
          <div className="text-wrapper-5">Pesquise suas encomendas anteriores...</div>
        </div>
        <div className="initial-message">
          <div className="overlap-group">
            <div className="overlap-group-2">
              <div className="ellipse" />
              <p className="voc-tem-duas">
                <span className="span">Você tem </span>
                <span className="text-wrapper-6">duas </span>
                <span className="span">encomendas para buscar! </span>
              </p>
              <img
                className="bengal-kitten"
                alt="Bengal kitten"
                src="https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/bengal-kitten-isolated-2@2x.png"
              />
              <div className="ellipse-2" />
              <div className="ellipse-3" />
              <div className="ellipse-4" />
              <div className="ellipse-5" />
              <div className="ellipse-6" />
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-7">Detalhes</div>
            </div>
          </div>
        </div>
        <h1 className="h-1">Boa tarde, Gabriel!</h1>
        <div className="native-status-bar">
          <div className="text-wrapper-8">9:41</div>
          <div className="mobile-signal" />
          <div className="wifi" />
          <img
            className="battery"
            alt="Battery"
            src="https://generation-sessions.s3.amazonaws.com/525cec57b60f12def3fc4927c53a2da3/img/battery@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
