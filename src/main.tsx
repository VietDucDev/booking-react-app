import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./style/theme/theme.ts";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
// import "./assets/styles/css/main.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
// import "./assets/styles/css/main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
