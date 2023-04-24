import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      {
        find: 'styles',
        replacement: path.resolve(__dirname, './src/styles'),
      },
    ],
  },
  css: {
    modules: {
      // https://github.com/madyankin/postcss-modules
      // generateScopedName: '[name]__[local]___[hash:base64:5]',
      generateScopedName: (name, filename, css) => {
        // vite error: Transforming const to the configured target environment ("es5") is not supported yet
        // using var instead of const for the moment
        var file = path
          .basename(filename, '.module.scss')
          .replace('module.scss?used', '_')
          .split('.')
          .join('');
        var i = css.indexOf('.' + name);
        var line = css.substr(0, i).split(/[\r\n]/).length;
        return file + '_' + name + '_' + line;
      },
    },
  },
});
