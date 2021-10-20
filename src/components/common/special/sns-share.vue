<template>
  <v-container>
    <v-row dense v-if="$vuetify.breakpoint.mdAndUp">
      <v-col>
        <v-btn dark block color="#3b5998" :href="`https://www.facebook.com/share.php?u=https://shop.kitamura.jp${this.$route.path}`">
          <v-img :src="facebookIcon" max-width="24" max-height="24"></v-img>
          <span class="white--text">シェア</span>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          dark
          block
          color="#1da1f2"
          :href="`https://twitter.com/share?count=horizontal&original_referer=https://shop.kitamura.jp${this.$route.path}&text=${title}`"
        >
          <v-img :src="twitterIcon" max-width="24" max-height="24"></v-img>
          <span class="white--text">シェア</span>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn dark block color="#08aed9" :href="`https://b.hatena.ne.jp/entry/https://shop.kitamura.jp${this.$route.path}`">
          <v-img :src="hatenaIcon" max-width="24" max-height="24"></v-img>
          <span class="white--text">シェア</span>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn dark block color="#00c300" :href="`https://line.me/R/msg/text/?https://shop.kitamura.jp${this.$route.path}`">
          <v-img :src="lineIcon" max-width="24" max-height="24"></v-img>
          <span class="white--text">シェア</span>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn dark block color="#f13d53" :href="`https://getpocket.com/edit?url=https://shop.kitamura.jp${this.$route.path}&title=${title}`">
          <v-img :src="pocketIcon" max-width="24" max-height="24"></v-img>
          <span class="white--text">シェア</span>
        </v-btn>
      </v-col>
    </v-row>

    <v-row dense v-if="$vuetify.breakpoint.smAndDown">
      <v-col>
        <v-btn dark block color="#3b5998" :href="`https://www.facebook.com/share.php?u=https://shop.kitamura.jp${this.$route.path}`" fab>
          <v-img :src="facebookIcon" max-width="24" max-height="24"></v-img>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          dark
          block
          color="#1da1f2"
          :href="`https://twitter.com/share?count=horizontal&original_referer=https://shop.kitamura.jp${this.$route.path}&text=${title}`"
          fab
        >
          <v-img :src="twitterIcon" max-width="24" max-height="24"></v-img>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn dark block color="#08aed9" :href="`https://b.hatena.ne.jp/entry/https://shop.kitamura.jp${this.$route.path}`" fab>
          <v-img :src="hatenaIcon" max-width="24" max-height="24"></v-img>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn dark block color="#00c300" :href="`https://line.me/R/msg/text/?https://shop.kitamura.jp${this.$route.path}`" fab>
          <v-img :src="lineIcon" max-width="24" max-height="24"></v-img>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn dark block color="#f13d53" :href="`https://getpocket.com/edit?url=https://shop.kitamura.jp${this.$route.path}&title=${title}`" fab>
          <v-img :src="pocketIcon" max-width="24" max-height="24"></v-img>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'sns-share',
  components: {},
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const state = reactive({
      facebookIcon: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/ic_f.png',
      twitterIcon: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/ic_t.png',
      hatenaIcon: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/ic_h.png',
      lineIcon: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/ic_l.png',
      pocketIcon: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/ic_p.png',
    });

    const linkToOtherWindow = (url: string | undefined) => {
      window.open(url, '_blank');
    };

    return {
      ...toRefs(state),
      linkToOtherWindow
    };
  }
});
</script>
