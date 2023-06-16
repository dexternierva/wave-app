import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App.jsx";

// Global Styles
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    :root {
        --primary-clr: 236, 240, 241;
        --secondary-clr: 44, 62, 80;
        --accent-clr: 26, 188, 156;
        --surface-clr: 189, 195, 199;

        --primary-ff: 'Epilogue', sans-serif;
    }

    /* RESET
    -------------------------------------------------------------------- */

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    ul[role="list"],
    ol[role="list"] {
        list-style: none;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    button,
    fieldset,
    input,
    legend,
    select,
    textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font: inherit;
    }

    /* BASE
    -------------------------------------------------------------------- */
    body {
        background-color: var(--primary-clr);
        color: rgba(var(--secondary-clr), 1);
        font-family: var(--primary-ff);
        font-size: 100%;
        line-height: 1.5;
    }

    h1 {
        font-size: 1.802rem; /* 28.83px */
    }

    h2 {
        font-size: 1.602rem; /* 25.63px */
    }

    h3 {
        font-size: 1.424rem; /* 22.78px */
    }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>
);
