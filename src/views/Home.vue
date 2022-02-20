<template>
  <div>
    home
  </div>
</template>

<script>
  import { profil } from "@/services/User/index";
  export default {
    name: 'Home',

    components: {
          
    },

    methods:{
      getProfil(){
        profil().then(res => {
          console.log(res);
        })
      }
    },

    mounted(){
      // console.log('test');
      this.getProfil()
    }
  }
</script>
