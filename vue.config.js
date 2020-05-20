module.exports = {
    pages: {
      index: {
        entry: './src/pages/welcome/main.ts', //entry for the public page
        template: 'public/index.html', // source template
        filename: 'index.html' // output as dist/*
      },
      lair: {
        entry: './src/pages/lair/main.ts',
        template: 'public/lair.html',
        filename: 'lair.html'
      }
    }
  }