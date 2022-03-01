<template>
<Navbar :isLoggedIn="isLoggedIn"/>
<Background/>
   <router-view />
   <!-- <Footer /> -->
</template>

<script>
import Navbar from '../src/components/Navbar.vue'
import Background from '../src/components/Background.vue'

export default
{
  components: {
    Navbar,
    Background
  },
  data(){
    return {
      isLoggedIn: false
    }
  }
}
</script>

<style>

</style>
