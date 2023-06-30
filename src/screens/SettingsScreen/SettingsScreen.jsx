import React from "react";
import { CategoriesApp } from "../../components/CategoriesApp";
import "./style.css";

export const SettingsScreen = () => {
  return (
    <div className="settings-screen">
      <div className="div">
        <div className="native-status-bar">
          <div className="text-wrapper">9:41</div>
          <div className="mobile-signal" />
          <div className="wifi" />
          <img className="battery" alt="Battery" src="/img/battery.png" />
        </div>
        <div className="bars-nav-bars">
          <div className="text-wrapper-2">Configurações</div>
        </div>
        <div className="home-information">
          <p className="p">AP 603 - Bloco C</p>
          <div className="text-wrapper-3">Nicolas Gabriel</div>
        </div>
        <div className="list">
          <div className="account-section">
            <div className="heading">
              <div className="text-wrapper-4">Conta</div>
            </div>
            <div className="list-2">
              <div className="views-tables">
                <div className="overlap-group">
                  <div className="partials-tables">
                    <div className="text-wrapper-5">Meu perfil</div>
                  </div>
                  <img className="icon-placeholder" alt="Icon placeholder" src="/img/icon-placeholder-4.svg" />
                </div>
                <img className="avatar" alt="Avatar" src="/img/avatar.svg" />
              </div>
              <div className="views-tables">
                <div className="overlap-group">
                  <div className="partials-tables">
                    <div className="text-wrapper-5">Alterar senha</div>
                  </div>
                  <img className="icon-placeholder" alt="Icon placeholder" src="/img/icon-placeholder-4.svg" />
                </div>
                <img className="avatar" alt="Avatar" src="/img/avatar-1.svg" />
              </div>
              <div className="views-tables">
                <div className="overlap-group">
                  <div className="partials-tables">
                    <div className="text-wrapper-5">Notificações</div>
                  </div>
                  <img className="icon-placeholder" alt="Icon placeholder" src="/img/icon-placeholder-4.svg" />
                </div>
                <img className="avatar" alt="Avatar" src="/img/avatar-2.svg" />
              </div>
            </div>
          </div>
          <div className="more-section">
            <div className="heading">
              <div className="text-wrapper-4">Mais</div>
            </div>
            <div className="list-2">
              <div className="views-tables">
                <div className="overlap-group">
                  <div className="partials-tables">
                    <div className="text-wrapper-5">Avalie nosso sistema!</div>
                  </div>
                  <img className="icon-placeholder" alt="Icon placeholder" src="/img/icon-placeholder-4.svg" />
                </div>
                <img className="avatar" alt="Avatar" src="/img/avatar-3.svg" />
              </div>
              <div className="views-tables">
                <div className="overlap-group">
                  <div className="partials-tables">
                    <div className="text-wrapper-5">Ajuda</div>
                  </div>
                  <img className="icon-placeholder" alt="Icon placeholder" src="/img/icon-placeholder-4.svg" />
                </div>
                <img className="avatar" alt="Avatar" src="/img/avatar-4.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="overlap">
          <CategoriesApp
            categorie="settings"
            className="categories-app-instance"
            favoritesFavorites="/img/favorites-4.svg"
            homeHome="/img/home-4.svg"
            settingsSettings="/img/settings-4.svg"
          />
          <img className="native-home" alt="Native home" src="/img/native-home-indicator.svg" />
        </div>
        <div className="text-wrapper-6">Sair</div>
      </div>
    </div>
  );
};
