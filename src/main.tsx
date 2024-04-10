import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import "./assets/styles/css/main.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./style/theme/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
