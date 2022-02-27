<template>
  <v-container class="grey lighten-5">
    <v-row
      v-for="n in 2"
      :key="n"
      :class="n === 1 ? 'mb-6' : ''"
      no-gutters
    >
      <v-col
        v-for="k in n + 1"
        :key="k"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{ k }} of {{ n + 1 }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
