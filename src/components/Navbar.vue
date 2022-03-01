<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="../assets/Logo.png" alt="" style="width:60px"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ">
      <li class="nav-item">
        <router-link to="/" class="nav-item"></router-link>
      </li> 
      <div v-if="!isLoggedIn">
        <li class="nav-item">
          <router-link to="/signup" class="nav-item">Signup</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-item">Login</router-link>
        </li>
      </div>
      <div v-if="isLoggedIn">
        <li class="nav-item">
          <router-link to="/updateprofile" class="nav-item">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-item">Products</router-link>
        </li>
        <li class="nav-item">
        <router-link to="/cart" class="nav-item">Cart</router-link>
      </li>
      </div>

      </ul>
        </div>
</nav>
      <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> -->
   
    <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
 
</template>

<script>
export default {
props: ['isLoggedIn']
}
</script>

<style scoped>
.nav-item{
  text-decoration: none;
  color: black;
  padding-left: 50px;
  justify-content: center;
  display: inline-block;
}
</style>
