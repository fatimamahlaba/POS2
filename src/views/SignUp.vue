<template>
  <form @submit.prevent="register" class="form border">
    <h2 class="form-heading">SignUp</h2>
    <input
      class="form-input border-input"
      type="text"
      v-model="name"
      placeholder="Name"
    />
    <input
      class="form-input border-input"
      type="email"
      v-model="email"
      placeholder="Email"
    />
    <input
      class="form-input border-input"
      type="text"
      v-model="contact"
      placeholder="Contact Number"
    />
    <input
      class="form-input border-input"
      type="password"
      v-model="password"
      placeholder="Password"
    />
    <button type="submit" class="form-btn border">Sign up</button>
    <div class="form-social-login">
      <button class="form-btn border form-social-btn">
        <i class="fab fa-google"></i>
      </button>
      <button class="form-btn border form-social-btn">
        <i class="fab fa-facebook-f"></i>
      </button>
    </div>
    <div>
      <p>Already have a account? <router-link to="/login" class="login">Login</router-link></p>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      contact: "",
      password: "",
    };
  },
  methods: {
    register(){
    fetch('https://pos-fj.herokuapp.com/users', {
  method: 'POST',
  body: JSON.stringify({
    name: this.name,
    email: this.email,
    contact: this.contact,
    password: this.password,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
   localStorage.setItem("jwt", json.jwt);
   alert("User is signed up");
   this.name='',
    this.email='',
    this.contact='',
    this.password='',
   this.$router.push({ name: "Login"});
    })
    .catch((err) => {
      alert(err);
    });
  },
  },
};
</script>
<style scoped>
.border {
  border: none !important;
}


.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  margin-inline: auto;
}

.form-heading {
  text-align: center;
  text-transform: uppercase;
}

.form-input,
.form-btn {
  border: none;
  outline: none;
  padding: 20px;
}

.form-btn {
  cursor: pointer;
  transition: all 0.1s linear;
}

.form-btn:hover {
  transform: scale(1.05);
}

.form-social-login {
  display: flex;
  justify-content: space-between;
}

.form-social-btn {
  width: 45%;
  color: #333;
}
p{
  font-size: 25px;
}
.login {
  font-size: 25px;
  color: blue;
}
.login:hover{
  color: blue;
  border-bottom:1px solid blue ;
}
</style>