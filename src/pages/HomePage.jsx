 import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

const Homepage = () => {
  return (
    <div>
      <PageNav/>
      <AppNav/>
      <h1>World Wise</h1>
      <Link to="/app">Go to the App</Link>
    </div>
  );
};

export default Homepage;
