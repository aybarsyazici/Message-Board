<template>
  <div class="home">
    <ul class="list-unstyled">
      <b-media tag="li"
        v-for="(message, index) in messageList" :key="index"
      >
        <template v-slot:aside>
          <img contain height="250px" width="250px"
          :src="[message.imageURL ? message.imageURL : 'https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640']">
        </template>
        <h5 class="username" style="color: green;">{{message.username}}</h5>
        <h6 class="topic" style="color: cyan;">{{message.subject}}</h6>
          <p class="message">
            {{message.message}}
          </p>
      </b-media>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

const API_URL = 'http://localhost:3000/messages';

export default {
  name: 'Home',
  data() {
    return {
      messageList: [],
    };
  },
  mounted() {
    fetch(API_URL).then((response) => response.json())
      .then((messageList) => {
        console.log(messageList);
        this.messageList = messageList;
      });
  },
};
</script>

<style>
.topic {
  padding-left:20px;
}
</style>
