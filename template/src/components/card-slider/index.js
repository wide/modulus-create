import Slider from '@wide/modulus-slider'
import { breakpoints } from '@wide/breakpoint'

export default class extends Slider {
    createSlider() {
        this.config.slidesPerView = 1.2
        this.config.spaceBetween = 10
        this.config.centeredSlides = true
        this.config.breakpoints = {
            [breakpoints.lg]: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
        super.createSlider()
    }
}