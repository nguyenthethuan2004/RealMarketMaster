import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/animations.css";
import "./styles/marquee.css";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}
