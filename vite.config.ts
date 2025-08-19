import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const cesiumSource = 'node_modules/cesium/Build/Cesium'
const cesiumBaseUrl = 'cesiumStatic'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: `${cesiumSource}/ThirdParty`, dest: cesiumBaseUrl },
        { src: `${cesiumSource}/Workers`, dest: cesiumBaseUrl },
        { src: `${cesiumSource}/Assets`, dest: cesiumBaseUrl },
        { src: `${cesiumSource}/Widgets`, dest: cesiumBaseUrl },
      ],
    }),
  ],
  define: {
    // Define relative base path in cesium for loading assets
    CESIUM_BASE_URL: JSON.stringify(`/${cesiumBaseUrl}`),
  },
  // Optimize Cesium for better performance
  optimizeDeps: {
    include: ['cesium'],
  },
  build: {
    // Increase chunk size limit for Cesium
    chunkSizeWarningLimit: 5000,
  },
})