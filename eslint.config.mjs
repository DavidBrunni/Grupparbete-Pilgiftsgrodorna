import eslintPluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: { vue: eslintPluginVue },
        rules: {
            ...eslintPluginVue.configs['recommended'].rules,
            'vue/no-unused-vars': 'warn',
            quotes: ['error', 'single'],
            'no-console': 'warn',
            'no-debugger': 'error',
            semi: ['error', 'always'],
            eqeqeq: ['error', 'always'],
            curly: ['error', 'all'],
            'arrow-body-style': ['error', 'as-needed'],
            'vue/html-self-closing': ['error', { html: { void: 'always' } }],
            'vue/require-default-prop': 'error',
            'vue/multi-word-component-names': 'error',
            'vue/no-mutating-props': 'error',
            'vue/no-v-html': 'warn',
            'vue/no-use-v-if-with-v-for': 'error',
            'vue/attributes-order': 'error',
        },
    },
];
