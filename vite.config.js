/*
 * @Author: 李士杰 lisj@seeyon.com
 * @Date: 2022-11-29 19:49:29
 * @LastEditors: 李士杰 lisj@seeyon.com
 * @LastEditTime: 2022-11-29 19:50:49
 * @FilePath: /signature-front/vite.config.js
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
  }
})
