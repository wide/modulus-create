module.exports = {
  namespaces: {
    '':       'src/components',       // ::slider/slider.twig
    'node':   'node_modules',         // node::bootstrap
    '@wide':  'node_modules/@wide'    // @wide::slider/src/slider.twig
  },
  data: {
    site: {
      title: 'My Project'
    },
    menu: {
      Home: 'index.html'
    }
  },
  functions: {
    svg: name => `<svg><use href="assets/sprite.svg#${name}"></svg>`
  }
}