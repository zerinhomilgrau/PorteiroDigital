import React from "react";
import ReactDOMClient from "react-dom/client";
import { Logo } from "./screens/Logo";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Logo />);
