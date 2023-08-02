import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // For localhost to be exposed in the network.
  server: { host: true },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // entry point for compilation; normally would be "./index.html"
        app: './public/index.html',
      },
    },
  },
});
