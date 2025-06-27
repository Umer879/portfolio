// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',  // ✅ Correct for GitHub Pages
  plugins: [react()],
  build: {
    minify: 'esbuild',     // ✅ Fast & optimized minification
    cssCodeSplit: true,    // ✅ Split CSS for each component
    sourcemap: false,      // ❌ Disable sourcemaps for production (smaller size)
    rollupOptions: {
      output: {
        manualChunks: {
          // ✅ Split large vendor libraries (optional, helps caching)
          react: ['react', 'react-dom'],
        },
      },
    },
  },
});
