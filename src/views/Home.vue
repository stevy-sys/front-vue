<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col class="col-lg-3 profil">
          <!-- profil -->
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
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
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
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Complter votre profil</v-card-title>

            <v-card-text> </v-card-text>

            <v-card-actions class="text-center">
              <div>
                <div class="text-center">
                  <v-dialog v-model="dialog" width="700">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="indigo"
                        dark
                        fab
                        small
                        v-bind="attrs"
                        v-on="on"
                      >
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

                          <v-stepper-step step="3">
                            Name of step 3
                          </v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                          <v-stepper-content step="1">
                            <v-card
                              class="mb-12"
                              color="grey lighten-1"
                              height="300px"
                            ></v-card>

                            <v-btn color="primary" @click="e1 = 2">
                              Continue
                            </v-btn>

                            <v-btn text> Cancel </v-btn>
                          </v-stepper-content>

                          <v-stepper-content step="2">
                            <v-card
                              class="mb-12"
                              color="grey lighten-1"
                              height="300px"
                            ></v-card>

                            <v-btn color="primary" @click="e1 = 3">
                              Continue
                            </v-btn>

                            <v-btn text> Cancel </v-btn>
                          </v-stepper-content>

                          <v-stepper-content step="3">
                            <v-card
                              class="mb-12"
                              color="grey lighten-1"
                              height="300px"
                            ></v-card>

                            <v-btn color="primary" @click="e1 = 1">
                              Continue
                            </v-btn>

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
          <v-card class="mx-auto" max-width="300" tile>
            <v-list dense>
              <v-subheader>REPORTS</v-subheader>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>

        <!-- actualite -->
        <v-col class="actu col-lg-6">
          <div class="mb-10">
            <v-textarea
              label="say something"
              auto-grow
              outlined
              rows="5"
              row-height="25"
              shaped
            ></v-textarea>
            <div class="text-center">
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark> mdi-share </v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark> mdi-image </v-icon>
              </v-btn>
            </div>
          </div>

          <v-divider></v-divider>

          <div class="mt-10">
            <v-card class="mb-3 statut">
              <v-card-text>
                <div>Word of the Day</div>
                <p class="text-h4 text--primary">el·ee·mos·y·nar·y</p>
                <p>adjective</p>
                <div class="text--primary">
                  relating to or dependent on charity; charitable.<br />
                  "an eleemosynary educational institution."
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="teal accent-4" @click="reveal = true">
                  <v-icon dark> mdi-thumb-up </v-icon>
                </v-btn>
                <!-- <v-btn text color="teal accent-4" @click="reveal = true">
                  <v-icon dark> mdi-comment </v-icon>
                </v-btn> -->
                <v-dialog v-model="showPub" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="teal accent-4"
                      dark
                      text
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon dark> mdi-comment </v-icon>
                    </v-btn>
                  </template>

                  <v-container>
                    <v-row justify="space-around">
                      <v-card height="800" width="500">
                        <v-img
                          height="400px"
                          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                        >
                          <v-app-bar flat color="rgba(0, 0, 0, 0)">
                            <!-- <v-app-bar-nav-icon
                                color="white"
                              ></v-app-bar-nav-icon> -->

                            <v-toolbar-title class="text-h6 white--text pl-0">
                              John Doe
                            </v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn color="white" icon>
                              <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                          </v-app-bar>

                          <!-- <v-card-title class="white--text mt-8">
                              <v-avatar size="56">
                                <img
                                  alt="user"
                                  src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                />
                              </v-avatar>
                              <p class="ml-3">John Doe</p>
                            </v-card-title> -->
                        </v-img>

                        <v-card-text>
                          <div class="font-weight-bold ml-8 mb-2">Today</div>

                          <v-timeline align-top dense>
                            <v-timeline-item
                              v-for="message in messages"
                              :key="message.time"
                              :color="message.color"
                              small
                            >
                              <div>
                                <div class="font-weight-normal">
                                  <strong>{{ message.from }}</strong> @{{
                                    message.time
                                  }}
                                </div>
                                <div>{{ message.message }}</div>
                              </div>
                            </v-timeline-item>
                          </v-timeline>
                        </v-card-text>
                        <v-container>
                          <v-row class="ml-1">
                            <v-col class="col-lg-10">
                              <div>
                                <v-text-field
                                  v-model="firstname"
                                  :rules="nameRules"
                                  :counter="10"
                                  label="votre commentaire"
                                  required
                                ></v-text-field>
                              </div>
                            </v-col>
                            <v-col class="col-lg-2">
                              <div>
                                <v-btn class="" fab dark small color="indigo">
                                  <v-icon dark> mdi-send </v-icon>
                                </v-btn>
                              </div>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card>
                    </v-row>
                  </v-container>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </div>

          <div class="mb-5">
            <v-card class="mb-3 statut">
              <v-card-text>
                <div>Word of the Day</div>
                <p class="text-h4 text--primary">el·ee·mos·y·nar·y</p>
                <p>adjective</p>
                <div class="text--primary">
                  relating to or dependent on charity; charitable.<br />
                  "an eleemosynary educational institution."
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="teal accent-4" @click="reveal = true">
                  <v-icon dark> mdi-thumb-up </v-icon>
                </v-btn>
                <v-btn text color="teal accent-4" @click="reveal = true">
                  <v-icon dark> mdi-comment </v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <v-card
                  v-if="reveal"
                  class="transition-fast-in-fast-out v-card--reveal"
                  style="height: 100%"
                >
                  <v-card-text class="pb-0">
                    <p class="text-h4 text--primary">Origin</p>
                    <p>
                      late 16th century (as a noun denoting a place where alms
                      were distributed): from medieval Latin eleemosynarius,
                      from late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                      ‘compassion’
                    </p>
                  </v-card-text>
                  <v-card-actions class="pt-0">
                    <v-btn text color="teal accent-4" @click="reveal = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
            </v-card>
          </div>

          <div class="mb-5">
            <v-card class="mb-3 statut">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title> Top western road trips </v-card-title>

              <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

              <v-card-actions>
                <v-btn color="orange lighten-2" text> Explore </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing. Then
                    we'll go with that data file! Hey, you add a one and two
                    zeros to that or we walk! You're going to do his laundry?
                    I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </div>
        </v-col>

        <!-- others -->
        <v-col class="col-lg-3 others">
          <div>
            <v-carousel
              cycle
              height="550"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-card
                  :loading="loading"
                  class="mx-auto my-12"
                  max-width="374"
                >
                  <template slot="progress">
                    <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                    ></v-progress-linear>
                  </template>

                  <v-img
                    height="250"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
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
                      Small plates, salads & sandwiches - an intimate setting
                      with 12 indoor seats plus patio seating.
                    </div>
                  </v-card-text>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div>
            <v-card max-width="450" class="mx-auto">
              <v-toolbar color="cyan" dark>
                <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

                <v-toolbar-title>Amis</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-account-star</v-icon>
                </v-btn>
              </v-toolbar>

              <v-list three-line>
                <template v-for="(item, index) in amis">
                  <v-subheader
                    v-if="item.header"
                    :key="item.header"
                    v-text="item.header"
                  ></v-subheader>

                  <v-divider
                    v-else-if="item.divider"
                    :key="index"
                    :inset="item.inset"
                  ></v-divider>

                  <v-list-item v-else :key="item.title">
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { profil } from "@/services/User/index";
// import { mdiShareAll } from '@mdi/js';
export default {
  name: "Home",
  data() {
    return {
      messages: [
        {
          from: "You",
          message: `Sure, I'll see you later.`,
          time: "10:42am",
          color: "deep-purple lighten-1",
        },
        {
          from: "John Doe",
          message: "Yeah, sure. Does 1:00pm work?",
          time: "10:37am",
          color: "green",
        },
        {
          from: "You",
          message: "Did you still want to grab lunch today?",
          time: "9:47am",
          color: "deep-purple lighten-1",
        },
      ],
      showPub: false,
      e1: 1,
      dialog: false,
      alignments: ["start", "center", "end"],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      items: [
        { text: "Vos Evenement", icon: "mdi-calendar" },
        { text: "Parametre", icon: "mdi-cog" },
        { text: "Vos groupes", icon: "mdi-group" },
      ],
      amis: [
        { header: "Today" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        // { divider: true, inset: true },
        // {
        //   avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        //   title: "Birthday gift",
        //   subtitle:
        //     '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        // },
        // { divider: true, inset: true },
        // {
        //   avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        //   title: "Recipe to try",
        //   subtitle:
        //     '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        // },
      ],
    };
  },
  components: {},

  methods: {
    getProfil() {
      profil().then((res) => {
        console.log(res);
      });
    },
  },

  mounted() {
    // console.log('test');
    this.getProfil();
  },
};
</script>

<style scoped>
.actu {
  margin-top: 50px;
  text-align: center;
}

.statut {
  /* max-width: 90% !important; */
}

/* .profil{
  position: relative;
}*/
/* .profil .card-profil{
  position: fixed;
} */

.actu {
  position: relative;
}
/* .others{
  position: relative;
}

.others .others-plus{
  position: fixed;
} */
</style>