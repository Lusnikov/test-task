import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import playwright from 'eslint-plugin-playwright'


export default defineConfig([

  {
      ...playwright.configs['flat/recommended'],
      files: ['tests/**'],
      rules: {
        ...playwright.configs['flat/recommended'].rules,
        'playwright/expect-expect': 'off',
        'playwright/no-conditional-in-test': 'off'
      },
  },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], rules: {
         'no-empty-pattern': 'off'
  } },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  
]);
