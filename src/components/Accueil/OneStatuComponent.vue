<template>
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
        <v-dialog v-model="showPub" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="teal accent-4" dark text v-bind="attrs" v-on="on">
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

                    <v-toolbar-title class="text-h6 white--text pl-0">
                      John Doe
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn color="white" icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </v-app-bar>
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
</template>

<script>
export default {
  name: "OneStatuComponent",
  data() {
    return {
      showPub: false,
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
    };
  },
};
</script>

<style>
</style>