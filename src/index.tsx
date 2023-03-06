import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import './bootstrap-theme.scss'

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  // redux uses the context api to grant access to all the components
  <Provider store={store}>
    <IconContext.Provider value={{ color: "#800D0D", size: "50px" }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IconContext.Provider>
  </Provider>
);

reportWebVitals();
