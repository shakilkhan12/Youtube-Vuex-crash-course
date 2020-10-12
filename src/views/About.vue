<template>
  <div class="about">
    <h1>{{aboutData}}</h1>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["aboutData"])
}
</script>
