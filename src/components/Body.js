import { Outlet } from "react-router-dom";
import Head from "./Head";
import { Provider } from "react-redux";
import { store } from "../utils/store";

const Body = () => {
    return (
      <Provider store={store}>
        <div>
          <Head />
          <Outlet />
        </div>
      </Provider>
    );
};

export default Body;