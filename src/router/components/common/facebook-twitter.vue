<template>
  <v-container>
    <v-row class="mt-30">
      <v-col cols="2">
        <v-btn color="#4267b2" height="25px" class="white--text ma-5"><v-icon small>fas fa-thumbs-up</v-icon> いいね! 42 </v-btn></v-col
      >
      <v-col cols="2">
        <v-btn
          color="#4267b2"
          height="25px"
          class="white--text ma-5"
          href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fshop.kitamura.jp%252Fspecial%252Fsale-fair%252Fcamera%252Ffeature%252Fcanon%252Feosr5_r6%252F%26display%3Dpopup%26ref%3Dplugin%26src%3Dlike%26kid_directed_site%3D0&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ja_JP&kid_directed_site=0"
          >シェア</v-btn
        ></v-col
      >
      <v-col cols="2">
        <v-btn
          color="#1b95e0"
          height="25px"
          class="white--text mt-5"
          href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fshop.kitamura.jp%2F&ref_src=twsrc%5Etfw&text=%E5%A5%BD%E8%A9%95%E7%99%BA%E5%A3%B2%E4%B8%AD%EF%BC%81%E3%82%AD%E3%83%A4%E3%83%8E%E3%83%B3EOS%20R5%20R6%20%7C%20%E3%82%AB%E3%83%A1%E3%83%A9%E3%81%AE%E3%82%AD%E3%82%BF%E3%83%A0%E3%83%A9%E3%83%8D%E3%83%83%E3%83%88%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97&tw_p=tweetbutton&url=https%3A%2F%2Fshop.kitamura.jp%2Fspecial%2Fsale-fair%2Fcamera%2Ffeature%2Fcanon%2Feosr5_r6%2F"
          ><v-icon small>fab fa-twitter</v-icon>ツイート</v-btn
        ></v-col
      >
      <v-col>
        <v-icon large color="green darken-2"> mdi-domain </v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'facebook-twitter'
};
</script>