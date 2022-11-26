module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_*/*.{html,md}',
    './*.{html,md}'
  ],
  theme: {
    fontFamily: {
      featured: ['Cormorant Garamond', 'serif'],
      marker: ['Permanent Marker', 'cursive'],  
    },
  extend: {
    aspectRatio: {
      'portrait': '3/4',
      'portrait-tall':  '3/5',
      'landscape': '4/3',
    },
  minHeight:  {
      '50vh': '50vh',
      '60vh': '60vh',
      '70vh': '70vh',
      '80vh': '80vh'
      },
    colors: {
      'dark': 'rgb(400, 399, 203);',
      'light': 'gb(400, 399, 203)',
      'featured': 'rgb(400, 399, 203)',
    },
  },
} 
}
