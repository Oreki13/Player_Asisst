import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../routes";

const Homes = () => {
  const getRouter = pages => {
    return pages.map((page, key) => {
      console.log(page.layout);

      if (page.layout === "/home") {
        console.log("kuy");
        return (
          <Route
            path={page.layout + page.path}
            render={props => <page.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div>
      <h1>hello</h1>
      <Switch>{getRouter(Home)}</Switch>
    </div>
  );
};

export default Homes;
