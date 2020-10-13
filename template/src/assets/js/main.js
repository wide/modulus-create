import modulus from '@wide/modulus'

// behavior
import breakpoint from '@wide/breakpoint'
import pageflip from '@wide/pageflip'
import '@wide/viewport'
import '@wide/scroll'
import '@wide/scroll/lib/locker'
import '@wide/scroll/lib/parallax'

// modulus components
import accordion  from '@wide/modulus-accordion'
import dropdown   from '@wide/modulus-dropdown'
import slider     from '@wide/modulus-slider'
import modal      from '@wide/modulus-modal'

// project components (@ alias of src/)
import cardslider from '@/components/card-slider'
import topmenu    from '@/components/topmenu'

// define breakpoints
breakpoint({
  xs:  326,
  sm:  576,
  md:  768,
  lg:  1024,
  xl:  1200,
  xxl: 1600
})

// define page transition
pageflip({
  container: '#page',
  transition: 'fade'
})

// register components
modulus.components({
  accordion,
  dropdown,
  slider,
  modal,
  topmenu,
  cardslider
})