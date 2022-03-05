<template>
  <div id="plist" class="people-list">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-search"></i></span>
      </div>
      <input type="text" class="form-control" placeholder="Search..." />
    </div>
    <ul class="list-unstyled chat-list mt-2 mb-0">
      <li v-for="conversation in listeConversation" :key="conversation.id" class="clearfix">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar1.png"
          alt="avatar"
        />
        <div class="about">
          <div class="name">{{conversation.who_discuss.user.name}}</div>
          <div class="status">
            <div>
              <i>Lorem ipsum dolor sit.</i>
            </div>
            <div>
              <i class="fa fa-circle offline text-right"></i> il y a 3 minute
            </div>
          </div>
        </div>
      </li>
      <!-- <li class="clearfix active">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar2.png"
          alt="avatar"
        />
        <div class="about">
          <div class="name">Aiden Chavez</div>
          <div class="status"><i class="fa fa-circle online"></i> online</div>
        </div>
      </li> -->
    </ul>
  </div>
</template>

<script>
import {getAllConversation} from '@/services/Chat/'
export default {
    name:'ConversationComponent',
    data(){
      return{
        listeConversation:[]
      }
    },
    mounted(){
      this.AllConversation()
    },
    methods:{
      AllConversation(){
        console.log('test');
        getAllConversation().then(res => {
          this.listeConversation = res.conversation
        })
        
      }
    }
};
</script>

<style scoped>
.v-application ul, .v-application ol {
    padding-left: 0px !important;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

.people-list {
  width: 280px;
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px;
  z-index: 7;
}

.people-list {
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.people-list .chat-list li {
  padding: 10px 15px;
  list-style: none;
  border-radius: 3px;
}

.people-list .chat-list li:hover {
  background: #efefef;
  cursor: pointer;
}

.people-list .chat-list li.active {
  background: #efefef;
}

.people-list .chat-list li .name {
  font-size: 15px;
}

.people-list .chat-list img {
  width: 45px;
  border-radius: 50%;
}

.people-list img {
  float: left;
  border-radius: 50%;
}

.people-list .about {
  float: left;
  padding-left: 8px;
}

.people-list .status {
  color: #999;
  font-size: 13px;
}
</style>