import path from 'node:path';
import { defineConfig } from 'vite';

const projectRootDir = path.resolve(__dirname);

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  console.log('====>', { command, mode, isSsrBuild, isPreview });

  return {
    resolve: {
      // 配置路径别名
      alias: {
        '@': path.resolve(projectRootDir, './src'),
      },
      extensions: ['.js', '.ts'],
    },
    clearScreen: false,
    envDir: path.resolve(projectRootDir, './env'),
    envPrefix: ['VITE_', 'CD_'],
    build: {
      target: 'modules',
      outDir: 'dist',
      sourcemap: false,
      lib: {
        entry: path.resolve(projectRootDir, './src/main.ts'),
        name: 'polygonCD',
        formats: ['es', 'umd'],
        minify: 'esbuild',
      },
    },
  };
});
