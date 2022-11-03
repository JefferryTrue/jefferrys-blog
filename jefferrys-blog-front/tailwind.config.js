/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode:false,
  theme: {
    extend: {},
  },
  purge:[
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'  //包含了src文件夹下所有的vue,js等等文件
  ],
  plugins: [],
}
