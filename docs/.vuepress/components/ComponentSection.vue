<template>
<section class="compSection">
  <slot/>
</section>
</template>

<style>
.compSection {
  display: flex;
  align-items: center;    
  justify-content: center;
  /* height: 200px; */
  /* min-height: 400px; */
  height: auto;
  max-width: 800px;
  margin: 16px;
  padding: 24px;
  background-color: #eeeeee;
}
</style>
