let mix = require('laravel-mix');

class ESLint {

    constructor() {
        this.disableESLintPlugin = process.env.DISABLE_ESLINT_PLUGIN === 'true';
        this.isEnvDevelopment = process.env.NODE_ENV === 'development';
        this.emitErrorsAsWarnings = this.isEnvDevelopment && process.env.ESLINT_NO_DEV_ERRORS === 'true';
        this.ESLintPlugin = require('eslint-webpack-plugin');
    }

    dependencies() {
        this.requiresReload =
            'Dependencies have been installed. Please run "npm run dev" again.'

        return [
            '@typescript-eslint/eslint-plugin',
            '@typescript-eslint/parser',
            '@babel/eslint-parser',
            'eslint',
            'eslint-plugin-import',
            'eslint-plugin-jest',
            'eslint-plugin-jsx-a11y',
            'eslint-plugin-react',
            'eslint-plugin-react-hooks',
            'eslint-plugin-testing-library',
            'eslint-webpack-plugin',
            'chalk',
            'strip-ansi',
            'text-table'
        ]
    }

    /**
     * Register relative Path & additional options for ESLint Plugin
     *
     * @param path
     * @param options
     */
    register(options = {}) {
        this.options = options;
    }

    /**
     * Rules to be merged with the underlying webpack rules.
     *
     * @return {Array|Object}
     */
    webpackRules() {
        return {
            test: /\.(ts|js)x?$/i,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            },
        }
    }

    /*
     * Plugins to be merged with the underlying webpack plugins array.
     *
     * @return {Array|Object}
     */
    webpackPlugins() {
        return [
            !this.disableESLintPlugin &&
            new this.ESLintPlugin({
                extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx', 'vue'],
                eslintPath: require.resolve('eslint'),
                formatter: require.resolve('./config/formatter'),
                failOnError: !(this.isEnvDevelopment && this.emitErrorsAsWarnings),
                ...this.options
            })
        ]
    }

    /**
     * Override the underlying webpack configuration.
     *
     * @param  {Object} webpackConfig
     * @return {void}
     */
    webpackConfig(webpackConfig) {
        webpackConfig.resolve.extensions.push('.ts', '.tsx', 'js', 'jsx');
    }

    /**
     * Babel Configuration of ESLint for react typescript
     *
     * @returns {{presets: [string, string, string]}}
     */
    babelConfig() {
         return {
             presets: [
                 "@babel/preset-env",
                 "@babel/preset-typescript",
             ]
         };
    }

}

mix.extend('eslint', new ESLint());
