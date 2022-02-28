<template>
  <form @submit.prevent="register" class="form border">
    <h2 class="form-heading">Contact Me</h2>
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
      type="messsage"
      v-model="message"
      placeholder="message"
    />
    <button type="submit" class="form-btn border">Send</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      contact: "",
      message: "",
    };
  },
  methods: {
    register() {
      console.log(this.name, this.email, this.contact, this.message);
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

</style>