import polyfiller from '@wide/polyfiller'
import presets    from '@wide/polyfiller/lib/presets'
import { expose } from '@wide/polyfiller/lib/capabilities'

// load polyfills
polyfiller({
  path: 'assets/polyfills/',
  load: {
    ...presets.babel,
    ...presets.fetch,
    ...presets.closest,
    ...presets.objectfit,
    ...presets.objectassign,
    ...presets.picturefill,
    ...presets.svg
  }
})

// expose browser capabilities
expose()