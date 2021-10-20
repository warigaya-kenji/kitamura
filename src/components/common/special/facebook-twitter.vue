<template>
  <div>
    <v-container class="pt-2 mb-12">
      <iframe
        :src="`https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fshop.kitamura.jp${this.$route.path.replace(
          '/',
          '%2F'
        )}&width=190&layout=button_count&action=like&size=small&share=true&height=46&appId`"
        width="160"
        height="20"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      <v-btn
        class="mt-n3"
        color="#1b95e0"
        height="20px"
        width="100px"
        :href="`https://twitter.com/intent/tweet?url=https://shop.kitamura.jp${this.$route.path}&text=【カメラのキタムラ】デジカメ・ビデオカメラ・プリンター等の通販`"
        ><v-icon small color="white">fab fa-twitter</v-icon><span class="white--text caption">ツイート</span></v-btn
      >
      <v-icon large color="green darken-2"> mdi-domain </v-icon>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'facebook-twitter',
  mounted() {
    setTimeout(() => {
      const tweetScript = document.createElement('script')
      tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      tweetScript.setAttribute('async', 'true')
      document.head.appendChild(tweetScript)
    }, 100)
  }
};
</script>