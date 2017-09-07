<template>
  <main>
    <layout-grid :toolbarAdjust="true">
        <router-view />
    </layout-grid>
  </main>
</template>

<script>
import LayoutGrid from 'components/LayoutGrid/LayoutGrid'

export default {
  name: 'main-panel',
  components: { LayoutGrid }
}
</script>

