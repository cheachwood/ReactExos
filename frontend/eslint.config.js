import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint(
  { ignores: ['dist', 'node_modules'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 1. CONFIGURATION GÉNÉRALE
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-console': 'error',
    },
  },

  // 2. EXCEPTION CIBLÉE (doit être après pour gagner la priorité)
  {
    // On cible très précisément les fichiers qui posent problème
    files: ['src/components/ui/badge.tsx', 'src/components/ui/button.tsx'],
    rules: {
      // On éteint complètement la règle pour ces fichiers spécifiques
      'react-refresh/only-export-components': 'off',
    },
  }
);
