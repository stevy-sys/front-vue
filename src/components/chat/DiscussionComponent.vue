<template>
  <div class="chat-history">
    <ul class="m-b-0">
      <li v-for="message in allDiscussion" :key="message.id" class="clearfix">
        <div class="message-data" :class="id_auth == message.user_id ? '' : 'text-right' ">
          <span class="message-data-time">10:10 AM, Today</span>
          <img
            v-if="id_auth != message.user_id"
            src="../../assets/moi.jpg"
            alt="avatar"
          />
        </div>
        <div class="message" :class="id_auth == message.user_id ? 'my-message' : 'other-message float-right' ">
          {{message.message}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DiscussionComponent",
  props:['allDiscussion'],
  data(){
    return {
      id_auth:localStorage.getItem("id_user")
    }
  }
};
</script>

<style scoped>

.float-right {
  float: right;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

.chat-history {
  padding: 20px;
  border-bottom: 2px solid #fff;
}

.chat-history ul {
  padding: 0;
}

.chat-history ul li {
  list-style: none;
  margin-bottom: 30px;
}

.chat-history ul li:last-child {
  margin-bottom: 0px;
}

.chat-history .message-data {
  margin-bottom: 15px;
}

.chat-history .message-data img {
  border-radius: 40px;
  width: 40px;
}

.chat-history .message-data-time {
  color: #434651;
  padding-left: 6px;
}

.chat-history .message {
  color: #444;
  padding: 18px 20px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  display: inline-block;
  position: relative;
}

.chat-history .message:after {
  bottom: 100%;
  left: 7%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #fff;
  border-width: 10px;
  margin-left: -10px;
}

.chat-history .my-message {
  background:skyblue;
}

.chat-history .my-message:after {
  bottom: 100%;
  left: 30px;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #efefef;
  border-width: 10px;
  margin-left: -10px;
}

.chat-history .other-message {
  background: #e8f1f3;
  text-align: right;
}

.chat-history .other-message:after {
  border-bottom-color: #e8f1f3;
  left: 93%;
}
</style>