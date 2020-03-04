import { storiesOf } from '@storybook/vue'
import MButton from '@components/button/Button.vue'

import './styles.scss'

storiesOf('Button', module).add('default', () => {
  return {
    components: { MButton },
    template: '<m-button raised>Submit</m-button>'
  }
})
