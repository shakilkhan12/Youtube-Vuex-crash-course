<template>
  <div id="nav">
    <Nav />
  </div>
  <router-view />
</template>
<script>
import Nav from "./views/Nav"
export default {
  components: {
    Nav
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  background: #c8ebdf;
}
</style>
