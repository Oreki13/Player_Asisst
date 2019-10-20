import Login from "./Views/Auth/Login";
import Register from "./Views/Auth/Register";

const Routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/auth"
  },
  { path: "/register", name: "Register", component: Register, layout: "/auth" }
];

export default Routes;
