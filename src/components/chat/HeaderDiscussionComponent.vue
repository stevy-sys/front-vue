<template>
  <div class="chat-header clearfix">
    <div class="row">
      <div class="col-lg-6">
        <a
          href="javascript:void(0);"
          data-toggle="modal"
          data-target="#view_info"
        >
          <img
            src="../../assets/moi.jpg"
            alt="avatar"
          />
        </a>
        <div class="chat-about">
          <h6 class="m-b-0">{{whoDiscuss.name}}</h6>
          <small>Last seen: 2 hours ago</small>
        </div>
      </div>
      <div class="col-lg-6 hidden-sm text-right">
        <v-btn class="mx-2" fab dark small color="indigo">
          <v-icon dark> mdi-image-album </v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark small color="indigo">
          <v-icon dark> mdi-cog </v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderDiscussionComponent",
  props:['whoDiscuss'],
  data(){
    return {
      // who:null
    }
  },
  mounted(){
    // this.who = this.whoDiscuss
  }
};
</script>

<style scoped>


.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

.chat-header {
  padding: 15px 20px;
  border-bottom: 2px solid #f4f7f6;
}

.chat-header img {
  float: left;
  border-radius: 40px;
  width: 40px;
}

.chat-header .chat-about {
  float: left;
  padding-left: 10px;
}
</style>