<template>
  <layout-grid-inner>
    <layout-grid-cell span="[2, 4-desktop]">
      <card>
        <textfield slot="title" value="Example"/>
        <span slot="subtitle">Subtitle</span>
        <span slot="supporting-text">Example text</span>
        <btn slot="actions" modifier="primary">TestPrimary</btn>
        <btn slot="actions" modifier="accent">TestAccent</btn>
      </card>
    </layout-grid-cell>
  </layout-grid-inner>
</template>

<script>
import LayoutGridInner from 'components/LayoutGridInner'
import LayoutGridCell from 'components/LayoutGridCell'
import Card from 'components/Card'
import Btn from 'components/Button'
import Textfield from 'components/Textfield'

export default {
  name: 'card-view',
  components: { LayoutGridInner, LayoutGridCell, Card, Btn, Textfield }
}
</script>