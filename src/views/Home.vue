<template>
  <div class="home">
    <Landing />
    <!--<Nav />-->
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  components: {
    Landing,
    Nav
  }
};
</script>
