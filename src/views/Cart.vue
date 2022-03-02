<template>
 <div v-for="product of products" :key="product.name" class="card" style="width: 25rem;">
  <img :src="product.img" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">{{product.price}}</p>
    <p class="card-text">{{product.category}}</p>
   <router-link to="/cart" class="login btn btn-primary">Check out</router-link>
  </div>
</div>
</template>

<script>
export default {
data: () => {
  return {
    products: []
  }
},

created() {
    if (localStorage.getItem("jwt")) {
      fetch("https://pos-fj.herokuapp.com/cart", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.products = json;
          this.products.forEach(async (product) => {
            await fetch(
              "https://pos-fj.herokuapp.com/cart" + product.name,
              {
                method: "POST",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
              }
            )
              .then((response) => response.json())
              .then((json) => {
                product.name = json.name;
              });
          });
        })
        .catch((err) => {
          alert("Log in failed");
        });
    } else {
      alert("Not logged in");
      this.$router.push({ name: "Login" });
    }
    
  },
}
</script>

<style>

</style>