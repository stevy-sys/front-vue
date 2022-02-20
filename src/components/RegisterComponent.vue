<template>
  <div class="form">
    <v-form ref="form" lazy-validation>
      <v-text-field v-model="email" label="E-mail" required></v-text-field>

      <v-text-field v-model="name" label="username" required></v-text-field>

      <v-text-field
        v-model="password"
        label="password"
        type="password"
        required
      ></v-text-field>

      <v-text-field
        v-model="confirmPassword"
        label="comfirm password"
        type="password"
        required
      ></v-text-field>

      <v-btn color="warning" @click="onSubmit"> Inscription </v-btn>
    </v-form>
  </div>
</template>

<script>
import { register } from "@/services/Auth/index";

export default {
  name: "RegisterComponent",
  data() {
    return {
      confirmPassword: null,
      password: null,
      email: null,
      name: null,
    };
  },

  methods: {
    onSubmit() {
      let error = this.verif()
      if (error.length > 0) {
        alert(error)
      }else{
        let data = {
          name:this.name,
          password:this.password,
          email:this.email
        }
        register(data).then((res) => {
          if (res.success) {
            alert('inscription fait avec succes')
          }
        });
      }
    },

    verif(){
      let error = [];
      if (this.confirmPassword != this.password) {
        let error = 'mot de passe non conforme'
        error.push(error)
      }
      if (!this.email || !this.name || !this.password || !this.confirmPassword) {
        error.push('champ non remplit')
      }
      return error
    }
  },
};
</script>

<style scoped>
.form{
    padding: 100px;
    text-align: center;
  }
</style>