import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Video ve büyük görseller her zaman ayrı dosya olarak kalsın (base64'e gömülmesin)
    assetsInlineLimit: 0,
  },
});
