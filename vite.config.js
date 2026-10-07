import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes asset paths relative, so it works under any GitHub Pages repo URL
export default defineConfig({ plugins: [react()], base: './' })
