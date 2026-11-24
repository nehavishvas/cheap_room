import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const target = env.VITE_API_BASE_URL || 'http://192.168.1.72:5050'

  return {
    plugins: [react()],
    base: '/',
    server: {
      host: '0.0.0.0',
      port: 5180,
      proxy: {
        '/api': {
          target: target,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => {
            try {
              const url = new URL(target)
              if (url.pathname && url.pathname !== '/') {
                const basePath = url.pathname.replace(/\/$/, '')
                return `${basePath}${path}`
              }
            } catch (e) {
              // fallback
            }
            return path
          }
        }
      }
    }
  }
})
