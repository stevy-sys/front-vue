<template>
  <v-card :loading="loading" class="my-12 card-profil" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="../../assets/moi.jpg"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Complter votre profil</v-card-title>

    <v-card-actions class="text-center">
      <div>
        <div class="text-center">
          <v-dialog v-model="dialog" width="700">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="indigo" dark fab small v-bind="attrs" v-on="on">
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-stepper v-model="e1">
                <v-stepper-header>
                  <v-stepper-step :complete="e1 > 1" step="1">
                    Name of step 1
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :complete="e1 > 2" step="2">
                    Name of step 2
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="3"> Name of step 3 </v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                  <v-stepper-content step="1">
                    <v-card
                      class="mb-12"
                      color="grey lighten-1"
                      height="300px"
                    ></v-card>

                    <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

                    <v-btn text> Cancel </v-btn>
                  </v-stepper-content>

                  <v-stepper-content step="2">
                    <v-card
                      class="mb-12"
                      color="grey lighten-1"
                      height="300px"
                    ></v-card>

                    <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

                    <v-btn text> Cancel </v-btn>
                  </v-stepper-content>

                  <v-stepper-content step="3">
                    <v-card
                      class="mb-12"
                      color="grey lighten-1"
                      height="300px"
                    ></v-card>

                    <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

                    <v-btn text> Cancel </v-btn>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
            </v-card>
          </v-dialog>
        </div>
        <!--  -->
      </div>
      <div>
        <v-btn class="mx-2" fab dark small color="indigo">
          <v-icon dark> mdi-image-album </v-icon>
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name:'ProfilComponent',
    data(){
        return{
            e1: 1,
            dialog: false,
        }
    }
};
</script>

<style>
</style>