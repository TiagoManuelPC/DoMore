import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        proxy: {
            '/api': 'https://localhost:5001',
        },
    },
    plugins: [react()],
})
