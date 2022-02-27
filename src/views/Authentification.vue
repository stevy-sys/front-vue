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

          <v-card-text>
            <!-- card formulaire -->
            <v-form class="mt-5" ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="password"
                required
              ></v-text-field>

              <v-checkbox
                v-model="checkbox"
                :rules="[(v) => !!v || 'You must agree to continue!']"
                label="Se souvenir de moi"
                required
              ></v-checkbox>

              <v-btn color="warning" @click="resetValidation">
                connexion
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
  <!-- </v-container> -->
</template>

<script>
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
    // LoginComponent,
    // RegisterComponent
  },

  methods: {
    switchChange(change) {
      if ("login" == change) {
        this.type = "login";
      } else {
        this.type = "register";
      }
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
