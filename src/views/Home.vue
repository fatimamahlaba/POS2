<template>
<div class="container">
  <div class="row">
  <div class="col-6">
    <img src="../assets/phone.jpg" alt="" style="height: 500px; margin-top: 100px">
  </div>
  <div class="col-6" style="margin-top: 200px">
 <p> To FJ your number one cell phone service provider.</p>
 <button class="btn">
 <router-link to="/signup" class="signup">Sign Up</router-link>
 </button>
  </div>
</div>
</div>



</template>
<script>
export default {
  
}
</script>

<style scoped>
.home{
  display: inline-block;
}
.btn{
  border-radius: 50px;
  text-align: center;
  background-color: rgb(118, 171, 196);
  width: 200px;
  height: 60px;
  margin-top: 200px;
}
.signup{
  color: black;
  text-decoration: none;
}
</style>