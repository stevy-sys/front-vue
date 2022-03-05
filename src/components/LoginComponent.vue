<template>
  <v-card-text>
    <!-- card formulaire -->
    <v-form class="mt-5" ref="form" lazy-validation>
      <v-text-field v-model="email" label="E-mail" required></v-text-field>

      <v-text-field v-model="password" label="password" required></v-text-field>

      <v-checkbox v-model="reMemberMe" label="Se souvenir de moi"></v-checkbox>

      <v-btn color="warning" @click="onSubmit"> connexion </v-btn>
    </v-form>
  </v-card-text>
</template>
<script>
// import { login } from "@/services/Auth/index";
export default {
  name: "LoginComponent",
  data() {
    return {
      password: null,
      email: null,
      reMemberMe:null
    };
  },

  methods: {
    onSubmit() {
      let data = {
        password:this.password,
        email:this.email,
        reMemberMe:this.reMemberMe
      }
      this.$emit('onSubmit',data)
    },
  
  },
};
</script>

<style  scoped>
.form {
  padding: 100px;
  text-align: center;
}
</style>
