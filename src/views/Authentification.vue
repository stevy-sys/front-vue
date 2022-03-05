<template>
  <!-- <v-container class="grey lighten-5"> -->
  <v-row no-gutters class="authentication">
    <v-col class="col-lg-7">
      <!-- card slide -->
      <v-carousel
        cycle
        height="570"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <template v-slot:prev="{ on, attrs }">
          <v-btn color="success" v-bind="attrs" v-on="on">Previous slide</v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn color="info" v-bind="attrs" v-on="on">Next slide</v-btn>
        </template>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col class="col-lg-5" sm="6">
      <v-row class="card">
        <v-card class="p-0 m-0" height="550px">
          <v-card-title class="blue white--text">
            <span class="text-h5">Login</span>

            <v-spacer></v-spacer>

            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>

          <login-component v-on:onSubmit="onSubmit"/>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
  <!-- </v-container> -->
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue';
import { login } from '@/services/Auth';
// @ is an alias to /src
// import LoginComponent from '@/components/LoginComponent.vue'
// import RegisterComponent from '@/components/RegisterComponent.vue'

export default {
  name: "Login",
  data() {
    return {
      type: "login",
      items: [{ title: "Login" }, { title: "register" }],
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  components: {
    LoginComponent
  },

  methods: {
    switchChange(change) {
      if ("login" == change) {
        this.type = "login";
      } else {
        this.type = "register";
      }
    },

    onSubmit(data){
      login(data).then(res => {
        console.log(res);
        if (!res.warning) {
          this.saveToken(res);
          this.$router.push("/Home");
        }
      })
    },

    saveToken(data) {
      localStorage.setItem("auth", data.accessToken);
      localStorage.setItem("id_user", data.user.id);
    },
  },
};
</script>

<style scoped>
.authentication {
  text-align: center;
  margin-top: 37px !important;
}
.card {
  display: flex;
  justify-content: center;
  margin-left: 100px;
  margin-top: 10px;
  margin-right: 10px;
}
</style>
