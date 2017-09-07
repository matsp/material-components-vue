<template>
  <layout-grid-inner>
    <layout-grid-cell :spanDesktop="4">
      <card :largeTitle="true" :verticalActions="true" :horizontal="true">
        <textfield slot="cardHorizontalTitle" type="text" v-model="textfieldOne" />
        <span slot="cardHorizontalSubtitle"> Subtitle </span>
        <span slot="cardSupportingText">Example text</span>
        <btn slot="cardActions" text="Test#1" :primary="true" />
        <btn slot="cardActions" text="Test#2" :accent="true" />
      </card>
    </layout-grid-cell>
    <layout-grid-cell :spanDesktop="4">
      <card>
        <textfield slot="cardSupportingText" type="password" required minlength=4 maxlength=8 id="pw" value="" label="Password" />
        <textfield-helptext slot="cardSupportingText" id="validation-msg" text="Must be at least 8 characters long" :validdation-msg="true" />
      </card>
    </layout-grid-cell>
    <layout-grid-cell :spanDesktop="12">
      <textfield-multiline v-model="textfieldOne" :rows="10" :cols="50" />
    </layout-grid-cell>
  </layout-grid-inner>
</template>

<script>
import LayoutGridInner from 'components/LayoutGrid/LayoutGridInner'
import LayoutGridCell from 'components/LayoutGrid/LayoutGridCell'

import Card from 'components/Card/Card'

import Btn from 'components/Button'
import Fab from 'components/Fab'
import Textfield from 'components/Textfield/Textfield'
import TextfieldMultiline from 'components/Textfield/TextfieldMultiline'
import TextfieldHelptext from 'components/Textfield/TextfieldHelptext'

export default {
  name: 'card-view',
  components: {
    LayoutGridInner,
    LayoutGridCell,
    Card,
    Btn,
    Textfield,
    TextfieldHelptext,
    TextfieldMultiline
  },
  data() {
    return {
      textfieldOne: 'Test'
    }
  }
}
</script>