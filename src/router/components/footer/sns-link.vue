<template>
  <div class="sns-link">
    <!-- SNSシェア 960px以上 -->
    <v-container class="container-wide" v-if="$vuetify.breakpoint.mdAndUp">
      <v-row>
        <v-col cols="3" sm="2" class="mx-auto">
          <a href="https://www.facebook.com/kitamura.jp" target="_blank">
            <img class="sns-icon" src="@/assets/sns/facebook-banner.png" />
          </a>
        </v-col>
        <v-col cols="3" sm="2" class="mx-auto">
          <a href="https://twitter.com/camera_kitamura" target="_blank">
            <img class="sns-icon" src="@/assets/sns/twitter-banner.png" />
          </a>
        </v-col>
        <v-col cols="3" sm="2" class="mx-auto">
          <a href="https://www.instagram.com/camera_kitamura/?hl=ja" target="_blank">
            <img class="sns-icon" src="@/assets/sns/instagram-banner.png" />
          </a>
        </v-col>
        <v-col cols="3" sm="2" class="mx-auto">
          <a href="https://www.youtube.com/user/kitamurablog" target="_blank">
            <img class="sns-icon" src="@/assets/sns/youtube-banner.png" />
          </a>
        </v-col>
      </v-row>
    </v-container>

    <!-- SNSシェア 960px未満 -->
    <v-container class="container-narrow" v-if="$vuetify.breakpoint.smAndDown">
      <v-row>
        <v-col class="sns-title">
          <span>キタムラ公式SNS</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <a href="https://www.facebook.com/kitamura.jp" target="_blank">
            <img class="align-center sns-icon" src="@/assets/sns/facebook-min.png" />
          </a>
        </v-col>
        <v-col>
          <a href="https://twitter.com/camera_kitamura" target="_blank">
            <img class="justify-center sns-icon" src="@/assets/sns/twitter-min.png" />
          </a>
        </v-col>
        <v-col>
          <a href="https://www.instagram.com/camera_kitamura/?hl=ja" target="_blank">
            <img class="sns-icon" src="@/assets/sns/instagram-min.png" />
          </a>
        </v-col>
        <v-col>
          <a href="https://www.youtube.com/user/kitamurablog" target="_blank">
            <img class="sns-icon" src="@/assets/sns/youtube-min.png" />
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'sns-link'
});
</script>

<style lang="scss" scoped>
.sns-link .container-wide {
  padding: 0 200px;
}

.sns-icon {
  display: flex;
  max-width: 100%;
  margin: 0 auto;
}

.sns-title {
  text-align: center;
}
</style>
