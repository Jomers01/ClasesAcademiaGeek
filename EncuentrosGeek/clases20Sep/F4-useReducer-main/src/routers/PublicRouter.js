import React from "react";
import PropsTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export const PublicRouter = ({
  isAuthenticated, //Si esta autenticado
  component: Component, //Componentes de las rutas
  ...rest //Resto del historial
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

PublicRouter.propsTypes= {
    isAuthenticated: PropsTypes.bool.isRequired,
    component: PropsTypes.func.isRequired
}