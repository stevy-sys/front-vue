<template>
  <div class="chat-history">
    <ul class="m-b-0">
      <li class="clearfix">
        <div class="message-data text-right">
          <span class="message-data-time">10:10 AM, Today</span>
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            alt="avatar"
          />
        </div>
        <div class="message other-message float-right">
          Hi Aiden, how are you? How is the project coming along?
        </div>
      </li>
      <li class="clearfix">
        <div class="message-data">
          <span class="message-data-time">10:12 AM, Today</span>
        </div>
        <div class="message my-message">Are we meeting today?</div>
      </li>
      <li class="clearfix">
        <div class="message-data">
          <span class="message-data-time">10:15 AM, Today</span>
        </div>
        <div class="message my-message">
          Project has been already finished and I have results to show you.
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DiscussionComponent",
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
  background: #efefef;
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