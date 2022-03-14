module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ECEBE3',
      'lightgrey': "#525252",
      'grey': '#414141',
      'darkgrey': "#313131",
      'yellow': '#FFCE2B',
      'green': '#00944C'
    },
    animation: {
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
    },
    keyframes: {
        shake: {
            '10%, 90%': {
                transform: 'translate3d(-1px, 0, 0)'
            },
            '20%, 80%': {
                transform: 'translate3d(2px, 0, 0)'
            },
            '30%, 50%, 70%': {
                transform: 'translate3d(-4px, 0, 0)'
            },
            '40%, 60%': {
                transform: 'translate3d(4px, 0, 0)'
            },
        },
    },
  },
  plugins: [],
}
