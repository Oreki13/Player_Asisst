import Login from "./Views/Auth/Login";
import Register from "./Views/Auth/Register";
import Homes from "./Views/Home";

const Auth = [
  {
    path: "/",
    name: "Login",
    component: Login,
    layout: "/"
  },
  { path: "/register", name: "Register", component: Register, layout: "/" }
];

const Home = [
  {
    path: "/home",
    name: "Home",
    component: Homes,
    layout: "/home"
  }
];

export { Auth, Home };
