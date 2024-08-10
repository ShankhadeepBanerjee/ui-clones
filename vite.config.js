// vite.config.ts
import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    tsconfigPaths(),
    viteReact(),
    svgr({
      include: '**/*.svg',
      svgrOptions: { expandProps: true },
    }),
    // ...,
  ],
});
