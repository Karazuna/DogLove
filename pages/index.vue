<template>
  <section class="section">
    <div class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <figure class="image is-128x128">
            <img src="~assets/dang.jpg" alt="">
          </figure>
          <h1 class="title is-1">개사랑</h1>
          <h2 class="subtitle">개사랑 사이트입니다.</h2>
        </div>
      </div>
    </div>
    <br>
    <article class="message">
      <div class="message-header">
        개는 어떻게 짖는가?
      </div>
      <div class="message-body">
        멍멍 왈왈 으르르 컹컹 크르릉
      </div>
    </article>
    <div class="notification">
      <iframe width="100%" height="360" src="https://www.youtube.com/embed/y-xjmYh5xEY?ecver=1" frameborder="0" allow="autoplay; encrypted-media"
        allowfullscreen></iframe>
    </div>

    <!-- <div class="container">
      <figure class="image is-square">
          <img src="https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/QsT/image/NSTeOeMe0MddpqlJ23FZV7hJGvg">
        </figure>
    </div> -->
    <br>
    <div class="columns">
      <div class="column">
        <div class="notification">
          <!-- <div class="container"> -->
          <figure class="image is-squre">
            <img src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Natural-Dog-Law-2-To-dogs%2C-energy-is-everything.jpg?itok=Z-ujUOUr"
              alt="">
          </figure>
        </div>
      </div>
      <div class="column">
        <div class="message is-info">
          <div class="message-header">
            <p>오늘의 -개-사진</p>
          </div>
          <div class="message-body">
            <figure class="image is-squre">
              <img v-bind:src="image" alt="">
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <h1 class="title">보고 싶은 개 정보를 누르세요.</h1>
      <span v-for="dog in dogs" v-bind:key="dog">
        <!-- <a href="#" class="button is-black is-focused"> -->
        <!-- <nuxt-link v-bind:to="'/dogs/' + dog" class="button is-info"> -->
        <nuxt-link :to="'/dogs/' + dog" class="button is-info">
          {{dog}}
        </nuxt-link> &nbsp;
      </span>
    </div>
    <!--     <div>
      연습테스트
      <p></p>
      {{ranking}}
    </div> -->

  </section>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {};
    },
    async asyncData() {
      const myImage = await axios.get('https://dog.ceo/api/breeds/image/random');
      const myDogs = await axios.get('https://dog.ceo/api/breeds/list');
      /* const myTest = await axios.get('http://rank.search.naver.com/rank.js'); */
      return {
        image: myImage.data.message,
        dogs: myDogs.data.message,
        /* ranking: myTest.data.data */
      };
    }
  };
</script>