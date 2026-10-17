import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/elena-y-nicolas/',
  plugins: [react()],
})
