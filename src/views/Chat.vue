<template>
  <div class="appChat">
    <div class="container">
      <div class="row clearfix">
        <div class="col-lg-12">
          <div class="card chat-app">
            <conversation-component />
            <div class="chat">
              <header-discussion-component />
              <discussion-component />
              <footer-discussion-component />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConversationComponent from "@/components/chat/ConversationComponent.vue";
import HeaderDiscussionComponent from "@/components/chat/HeaderDiscussionComponent.vue";
import DiscussionComponent from "@/components/chat/DiscussionComponent.vue";
import FooterDiscussionComponent from "@/components/chat/FooterDiscussionComponent.vue";
export default {
  name: "Chat",
  components: {
    ConversationComponent,
    HeaderDiscussionComponent,
    DiscussionComponent,
    FooterDiscussionComponent,
  },
};
</script>

<style scoped>
.appChat {
  background-color: #f4f7f6;
  margin-top: 20px;
}
.card {
  background: #fff;
  transition: 0.5s;
  border: 0;
  margin-bottom: 30px;
  border-radius: 0.55rem;
  position: relative;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
}

.chat-app .chat {
  margin-left: 280px;
  border-left: 1px solid #eaeaea;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

@media only screen and (max-width: 767px) {
  .chat-app .people-list {
    height: 465px;
    width: 100%;
    overflow-x: auto;
    background: #fff;
    left: -400px;
    display: none;
  }
  .chat-app .people-list.open {
    left: 0;
  }
  .chat-app .chat {
    margin: 0;
  }
  .chat-app .chat .chat-header {
    border-radius: 0.55rem 0.55rem 0 0;
  }
  .chat-app .chat-history {
    height: 300px;
    overflow-x: auto;
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  .chat-app .chat-list {
    height: 650px;
    overflow-x: auto;
  }
  .chat-app .chat-history {
    height: 600px;
    overflow-x: auto;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
  .chat-app .chat-list {
    height: 480px;
    overflow-x: auto;
  }
  .chat-app .chat-history {
    height: calc(100vh - 350px);
    overflow-x: auto;
  }
}
</style>