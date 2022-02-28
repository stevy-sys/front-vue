<template>
<div class="chat-message clearfix">
  <div class="input-group mb-0">
    <input type="text" class="form-control" placeholder="Enter text here..." />
    <div class="input-group-prepend">
      <span class="input-group-text">
        <v-btn class="mx-2" fab dark small color="indigo">
          <v-icon dark> mdi-send </v-icon>
        </v-btn>
      </span>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name:'FooterDiscussionComponent'
};
</script>

<style scopedd>

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.chat-message {
  padding: 20px;
}
</style>