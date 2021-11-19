<script lang="ts">
import Vue from 'vue';
import {AnMessage} from "@/AnMessage";

export default Vue.extend({
  name: 'ServeDev',
  components: {
    AnMessage
  },
  created() {
    AnMessage.error('该账号无权限，无法登陆')
  }
});
</script>

<template>
  <div id="app">
<!--    <an-message />-->
  </div>
</template>
