import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { CategoriesProvider } from "./useCategories";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CategoriesProvider>
        <App />
    </CategoriesProvider>
);
