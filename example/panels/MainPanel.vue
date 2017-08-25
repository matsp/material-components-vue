<template>
  <main>
    <layout-grid>
        <router-view />
    </layout-grid>
  </main>
</template>

<script>
import LayoutGrid from 'components/LayoutGrid'

export default {
  name: 'main-panel',
  components: { LayoutGrid }
}
</script>

