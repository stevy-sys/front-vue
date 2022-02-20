<template>
  <div class="home">
    <div class="mt-5">
      <v-btn
      color="warning"
      class="mr-5"
      @click="switchChange('login')"
    >
      Connexion
    </v-btn>
    <v-btn
      color="warning"
      @click="switchChange('register')"
    >
      Inscription
    </v-btn>
    </div>
    <div v-if="type == 'login'">
      <LoginComponent />
    </div>
    <div v-else>
      <RegisterComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from '@/components/LoginComponent.vue'
import RegisterComponent from '@/components/RegisterComponent.vue'

export default {
  name: 'Login',
  data(){
    return {
      type:'login'
    }
  },
  components: {
    LoginComponent,
    RegisterComponent
  },

  methods:{
    switchChange(change){
      if ('login' == change) {
        this.type = 'login'
      } else {
        this.type = 'register'
      }
    }
  }
}
</script>

<style scoped>
  .home{
    display: flex;
    justify-content: center;
  }
</style>
