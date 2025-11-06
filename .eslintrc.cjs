module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"], // Usar solo el tsconfig.json principal
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "jsx-a11y", "import"],
  rules: {
    "react/react-in-jsx-scope": "off", // Para React 17+ JSX transform
    "react/prop-types": "off", // No usar prop-types con TypeScript
    "@typescript-eslint/explicit-module-boundary-types": "off", // Permite inferencia de tipos en funciones
    "@typescript-eslint/no-explicit-any": "warn", // Advertir sobre el uso de 'any'
    "jsx-a11y/anchor-is-valid": "off", // Desactivar si se usa Next.js Link u otros componentes de enrutamiento
    "import/no-unresolved": "error", // Asegura que las importaciones se resuelvan correctamente
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  ignorePatterns: ["dist", "node_modules", ".eslintrc.cjs", "pnpm-lock.yaml"],
};