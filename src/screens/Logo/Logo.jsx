import React from "react";
import "./style.css";

export const Logo = () => {
  return (
    <div className="logo">
      <div className="div">
        <div className="overlap-group">
          <img className="imagem" alt="Imagem" src="/img/imagem-2023-06-16-151204566-removebg-preview-1.png" />
          <div className="decorations">
            <div className="ellipse" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <div className="ellipse-5" />
          </div>
          <p className="esperando-aquela">
            <span className="text-wrapper">Esperando aquela grande </span>
            <span className="span">encomenda</span>
            <span className="text-wrapper-2"> chegar? A gente resolve pra você e te avisa quando chegar!</span>
          </p>
        </div>
        <div className="div-2">
          <img className="icon-box-iso" alt="Icon box iso" src="/img/icon-box-iso.png" />
          <h1 className="h-1">Porteiro Digital</h1>
        </div>
        <div className="native-status-bar">
          <div className="text-wrapper-3">9:41</div>
          <div
            className="mobile-signal"
            style={{
              backgroundImage: "url(/img/mobile-signal.svg)",
            }}
          />
          <div
            className="wifi"
            style={{
              backgroundImage: "url(/img/union.svg)",
            }}
          />
          <img className="battery" alt="Battery" src="/img/battery.png" />
        </div>
      </div>
    </div>
  );
};
