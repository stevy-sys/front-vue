<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col class="col-lg-3 profil">
          <!-- profil -->
          <ProfilComponent />

          <ReportComponent />
        </v-col>

        <!-- actualite -->
        <v-col class="actu col-lg-6">
          <!-- new Status -->
          <StatuComponent />

          <v-divider></v-divider>

          <!-- OneStatut -->
          <OneStatuComponent />

          <v-divider></v-divider>

          <!-- statu with photo -->
          <StatuImageComponent />
        </v-col>

        <!-- others -->
        <v-col class="col-lg-3 others">
          <OtherPublication />
          <FriendsSuggest/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { profil } from "@/services/User/index";
import StatuComponent from "@/components/Accueil/StatuComponent";
import OneStatuComponent from "@/components/Accueil/OneStatuComponent";
import StatuImageComponent from "@/components/Accueil/StatuImageComponent";
import ProfilComponent from "@/components/Accueil/ProfilComponent";
import ReportComponent from "@/components/Accueil/ReportComponent";
import OtherPublication from "@/components/Accueil/OtherPublication";
import FriendsSuggest from "@/components/Accueil/FriendsSuggest";

export default {
  name: "Home",
  data() {
    return {
    };
  },
  components: {
    StatuComponent,
    OneStatuComponent,
    StatuImageComponent,
    ProfilComponent,
    ReportComponent,
    OtherPublication,
    FriendsSuggest
  },

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