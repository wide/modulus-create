import modulus from '@wide/modulus'

modulus.component('topmenu', class {
  run() {
    // hide / show on scroll
    this.on('scroll.down', e => this.el.classList.add('-hidden'))
    this.on('scroll.up', e => this.el.classList.remove('-hidden'))

    // user change language
    this.refs.lang.addEventListener('change', e => {
      console.log('lang changed to:', e.target.value)
    })
  }
})