module.exports = {
  content: ['./*.html'],   // 掃描根目錄下所有 .html 檔案
  theme: {
    screens: {             // 自訂響應式斷點
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {              // 擴充 Tailwind 預設主題
      colors: {            // 自訂顏色
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
      fontFamily: {        // 自訂字體
        sans: ['Bai Jamjuree', 'sans-serif'],
      },
    },
  },
  plugins: [],             // 插件，目前沒有
}