import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import MdcLinearProgress from './LinearProgress.vue'
import './styles.scss'

export default {
  title: 'Linear Progress',
  decorators: [withKnobs]
}

export const linearProgress = () => ({
  components: { MdcLinearProgress },
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
      <mdc-linear-progress :open="isOpen"
                         :area-label="ariaLabel"
                         :progress="0.5"
                         :buffer="0.5"
                         :reverse="isReverse"
                         indeterminate/>`
})
