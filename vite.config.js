import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Allows setting up aliases for cleaner imports

// https://vitejs.dev/config/
export default defineConfig({
  // Base public path when serving the app
  base: './', 
  
  // Define plugins to be used
  plugins: [
    react(), // Integrates React with Vite
  ],

  // Server configuration for development
  server: {
    host: 'localhost', // Dev server host
    port: 3000, // Port number for dev server
    open: true, // Automatically opens the browser on server start
    proxy: {
      // Proxy API requests to a backend server during development
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  // Resolve configuration
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Shortcut for importing from the src directory
      'components': path.resolve(__dirname, 'src/components'), // Alias for the components directory
    },
  },

  // CSS Preprocessing Options
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/global.scss";`, // Automatically import global SCSS variables and mixins
      },
    },
  },

  // Build configuration for production
  build: {
    outDir: 'dist', // Output directory for build files
    assetsDir: 'assets', // Directory for assets (relative to outDir)
    sourcemap: true, // Enable source maps for debugging in production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Create a separate vendor chunk for dependencies
        },
      },
    },
  },

  // Optimize dependencies during development
  optimizeDeps: {
    include: ['react', 'react-dom'], // Pre-bundle these dependencies for faster HMR
  },
});
