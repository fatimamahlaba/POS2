<template>
<div class="products" >
  <div style="text-align:center">

  <h1 style="text-align:center">Products</h1>
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add a product
</button>
  </div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Phone</h5>
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <!-- modal body -->
      <div class="container d-flex justify-content-end mb-3 mt-5 pt-4">
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort by category</label>
        <select
          class="form-select"
          name=""
          id="sortCategory"
          onchange="sortCategory()"
        >
          <option value="Samsung">Samsung</option>
          <option value="iphone">Iphone</option>
          <option value="Nokia">Nokia</option>
          <option value="huawei">Huawei</option>
        </select>
      </div>
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort name</label>
        <select class="form-select" name="" id="sortName" onchange="sortName()">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort price</label>
        <select
          class="form-select"
          name=""
          id="sortPrice"
          onchange="sortPrice()"
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- end of modal body -->


<div class="container">
<div class="row">


<div v-for="product of products" :key="product.name" class="card" style="width: 25rem;">
  <img :src="product.img" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">{{product.price}}</p>
    <p class="card-text">{{product.category}}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>

</div>
</div>



</div>


</template>

<script>
export default {
  data() {
    return {
      products: null,
    };
  },
  // fetching product
  created() {
    if (localStorage.getItem("jwt")) {
      fetch("https://pos-fj.herokuapp.com/products", {
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
              "https://pos-fj.herokuapp.com/products" + product.name,
              {
                method: "GET",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
              }
            )
              .then((response) => response.json())
              .then((json) => {
                product.author = json.name;
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
};
</script>

<style scoped>
</style>