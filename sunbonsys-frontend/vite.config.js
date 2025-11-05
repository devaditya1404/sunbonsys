export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: process.env.VITE_BASE_PATH || "sunbonsys"
})
