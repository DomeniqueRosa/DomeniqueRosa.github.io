import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';


export default defineConfig({
  plugins: [vue()],
  build: {
    assetsDir: 'assets',  // Coloca as imagens na pasta 'assets' dentro de 'dist'
  },
});
