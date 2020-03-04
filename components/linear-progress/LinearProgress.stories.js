import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import MLinearProgress from './LinearProgress.vue'
import './styles.scss'

export default {
  title: 'Linear Progress',
  decorators: [withKnobs]
}

export const exampleWithKnobs = () => ({
  components: { MLinearProgress },
  props: {
    isOpen: {
      default: boolean(':open', true)
    },
    ariaLabel: {
      default: text('aria-label', 'Example Progress Bar')
    },
    isReverse: {
      default: boolean(':reverse', false)
    }
  },

  template: `
      <m-linear-progress :open="isOpen"
                         :area-label="ariaLabel"
                         :progress="0.5"
                         :buffer="0.5"
                         :reverse="isReverse"
                         indeterminate/>`
})
