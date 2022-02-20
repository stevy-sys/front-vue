<template>
<div class="form">
  <v-form
    ref="form"
    lazy-validation
  >

    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="password"
      type="password"
      required
    ></v-text-field>

    <v-btn
      color="warning"
      @click="onSubmit"
    >
      Connexion
    </v-btn>
  </v-form>
</div>
</template>
<script>

  import { login } from "@/services/Auth/index";
  export default {
    name: 'LoginComponent',
    data(){
      return {
        password:null,
        email:null
      }
    },

    methods:{
      onSubmit(){
        let data = {
          email:this.email,
          password:this.password,
        }
        login(data).then(res => {   
            if (!res.warning) {
              this.saveToken(res)
              this.$router.push('/Home')
            }
        })
      },
      saveToken(data){
        localStorage.setItem("auth", data.accessToken);
        localStorage.setItem("id_user", data.user.id);
      }
    }
  }
</script>

<style  scoped>
  .form{
    padding: 100px;
    text-align: center;
  }
</style>
