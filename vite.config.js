import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    port: 3000,
  }
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import { nodePolyfills } from 'vite-plugin-node-polyfills'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//     nodePolyfills({
//       // Whether to polyfill `node:` protocol imports.
//       protocolImports: true,
//     }),
//   ],
//   server: {
//     port: 3000,
//   },
// })
