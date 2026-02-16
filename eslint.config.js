import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  js.configs.recommended,
  {
    plugins: {
      react,
      "react-hooks": reactHooks
    },
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly"
      }
    },
    rules: {
      "react-refresh/only-export-components": "off"
    }
  }
];
