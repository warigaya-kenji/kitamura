<template>
  <v-app>
    <div class="campaign">
      <v-card>
        <v-img src="/ec/images2/special/camera/feature/backnumber/title.png" height="200px" class="woo">
          <v-avatar style="postion: absolute; left: 44%; top: 50%" rounded width="80px" class="pa-1" height="80px">
            <img width="80" height="100" src="/ec/images2/special/camera/feature/backnumber/bn-sns.png" />
          </v-avatar>
        </v-img>
      </v-card>

      <div class="grey lighten-3 main-contents-wrap">
        <p>下記ボタンよりメーカーを絞り込む事ができます</p>
        <div class="category-nav mb-6">
          <v-row>
            <v-col cols="3" class="text-center">
              <label class="pa-8 py-2 font-weight-bold font-small"> <input type="radio" v-model="category" value="new" />新着</label>
            </v-col>
            <v-col cols="3" class="text-center">
              <label class="pa-8 py-2 font-weight-bold font-small"> <input type="radio" v-model="category" value="canon" />キャノン</label>
            </v-col>
            <v-col cols="3" class="text-center">
              <label class="pa-8 py-2 font-weight-bold font-small"> <input type="radio" v-model="category" value="nikon" />ニコン</label>
            </v-col>
            <v-col cols="3" class="text-center">
              <label class="pa-8 py-2 font-weight-bold font-small"> <input type="radio" v-model="category" value="olympus" />オリンパス</label>
            </v-col>
            <v-col cols="3" class="text-center">
              <label class="pa-8 py-2 font-weight-bold font-small"> <input type="radio" v-model="category" value="sony" />ソニー</label>
            </v-col>
            <v-col cols="3" class="text-center">
              <label class="pa-8 py-2 font-weight-bold font-small"> <input type="radio" v-model="category" value="fujifilm" />フジフィルム</label>
            </v-col>
            <v-col cols="3" class="text-center">
              <label class="pa-8 py-2 font-weight-bold font-small"> <input type="radio" v-model="category" value="panasonic" />パナソニック</label>
            </v-col>
            <v-col cols="3" class="text-center">
              <label class="pa-8 py-2 font-weight-bold font-small"> <input type="radio" v-model="category" value="other" />その他</label>
            </v-col>
            <v-col cols="3" class="text-center">
              <label class="pa-8 py-2 font-weight-bold font-small"> <input type="radio" v-model="category" value="all" />全て</label>
            </v-col>
          </v-row>
        </div>

        <v-container>
          <v-row class="individual">
            <v-col v-for="image in filterByCategory" :key="image.index" cols="4" class="category-list">
              <v-hover v-slot="{ hover }" close-delay="200">
                <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" class="mx-auto">
                  <p class="white--text text-right font-weight-bold ma-0 pa-0">
                    <span style="background-color: #296c72" class="darken-4 font-small">{{ image.releaseDate }}</span>
                  </p>
                  <v-divider></v-divider>
                  <a href="/special/sale-fair/camera/feature/canon/rf14-35mmf4lisusm/">
                    <img :src="image.src" alt="" />
                    <span class="font-small product-name">{{ image.productName }}</span>
                    <img src="/ec/images2/special/camera/feature/backnumber/arrow-2-off.png" width="100%" />
                  </a>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script>
import { noimage, formatPrice } from '@/logic/utils';
export default {
  name: 'backnumber',
  data() {
    return {
      category: '',
      narrowingList: [
        { itemName: '新着' },
        { itemName: 'キャノン\ncanon' },
        { itemName: 'ニコン\nnikon' },
        { itemName: 'オリンパス\nolympus' },
        { itemName: 'ソニー\nsony' },
        { itemName: 'フジフィルム\nfujifilm' },
        { itemName: 'パナソニック\npanasonic' },
        { itemName: 'その他' },
        { itemName: '全て' }
      ],
      campaignlist: [
        {
          index: 1,
          category: 'canon',
          releaseDate: '2021年9月下旬発売予定',
          herf: '/special/sale-fair/camera/feature/canon/rf14-35mmf4lisusm/',
          src: 'https://shopimg.kitamura.jp/images/banner/8510.jpg',
          productName: 'キヤノン RF14-35mm F4 L IS USM'
        },
        {
          index: 2,
          category: 'nikon',
          releaseDate: '2021年7月下旬発売予定',
          herf: '/special/sale-fair/camera/feature/nikon/zfc/',
          src: 'https://shopimg.kitamura.jp/images/banner/8494.jpg',
          productName: 'ニコン Z fc'
        },
        {
          index: 3,
          category: 'olympus',
          releaseDate: '発売日 2021.6.25',
          herf: '/special/sale-fair/camera/feature/olympus/pen_e-p7/',
          src: 'https://shopimg.kitamura.jp/images/banner/8466.jpg',
          productName: 'オリンパス PEN E-P7'
        },
        {
          index: 4,
          category: 'nikon',
          releaseDate: '発売日 2021.6.25',
          herf: '/special/sale-fair/camera/feature/nikon/z_mc_105mm_f28_vr_s/',
          src: 'https://shopimg.kitamura.jp/images/banner/8458.jpg',
          productName: 'ニコン NIKKOR Z MC 105mm f/2.8 VR S'
        },
        {
          index: 5,
          category: 'panasonic',
          releaseDate: '発売日 2021.6.4',
          herf: '/special/sale-fair/camera/feature/panasonic/gh5m2/',
          src: 'https://shopimg.kitamura.jp/images/banner/8439.jpg',
          productName: 'ソニー α7R IV A & α7R III A'
        },
        {
          index: 6,
          category: 'tamron',
          releaseDate: '発売日 2021.6.24',
          herf: 'special/sale-fair/camera/feature/tamron/150-500mm-f5-6.7/',
          src: 'https://shopimg.kitamura.jp/images/banner/8456.jpg',
          productName: 'ソニー α7R IV A & α7R III A'
        },
        {
          index: 7,
          category: 'canon',
          releaseDate: '2021.7.15 発売予定',
          herf: '/special/sale-fair/camera/feature/canon/rf100-f28l/',
          src: 'https://shopimg.kitamura.jp/images/banner/8394.png',
          productName: 'キヤノン RF100mm F2.8 L MACRO IS USM'
        },
        {
          index: 8,
          category: 'canon',
          releaseDate: '2021.7.15 発売予定',
          herf: '/special/sale-fair/camera/feature/canon/rf400-f28l/',
          src: 'https://shopimg.kitamura.jp/images/banner/8396.png',
          productName: 'キヤノン RF400mm F2.8 L IS USM / RF600mm F4 L IS …'
        },
        {
          index: 9,
          category: 'other',
          releaseDate: '発売日 2021.4.23',
          herf: 'special/sale-fair/camera/feature/tamron/150-500mm-f5-6.7/',
          src: 'https://shopimg.kitamura.jp/images/banner/8376.jpg',
          productName: 'ソニー α7R IV A & α7R III A'
        },
        {
          index: 10,
          category: 'canon',
          releaseDate: '2021.7.15 発売予定',
          herf: '/special/sale-fair/camera/feature/canon/rf100-f28l/',
          src: 'https://shopimg.kitamura.jp/images/banner/8394.png',
          productName: 'キヤノン RF100mm F2.8 L MACRO IS USM'
        },
        {
          index: 11,
          category: 'canon',
          releaseDate: '2021.7.15 発売予定',
          herf: '/special/sale-fair/camera/feature/canon/rf400-f28l/',
          src: 'https://shopimg.kitamura.jp/images/banner/8396.png',
          productName: 'キヤノン RF400mm F2.8 L IS USM / RF600mm F4 L IS USM'
        },
        {
          index: 12,
          category: 'canon',
          releaseDate: '2021.7.15 発売予定',
          herf: '/special/sale-fair/camera/feature/canon/rf400-f28l/',
          src: 'https://shopimg.kitamura.jp/images/banner/8396.png',
          productName: 'キヤノン RF400mm F2.8 L IS USM / RF600mm F4 L IS USM'
        },
        {
          index: 13,
          category: ['all', 'general', 'new'],
          releaseDate: '発売日 2021.4.23',
          herf: '/special/sale-fair/camera/feature/pentax/k-3mk3/',
          src: 'https://shopimg.kitamura.jp/images/banner/8376.jpg',
          productName: 'ペンタックス K-3 Mark III'
        },
        {
          index: 14,
          category: ['all', 'sony'],
          releaseDate: '発売日 2021.4.23',
          herf: '/special/sale-fair/camera/feature/sony/sel24f28g/',
          src: 'https://shopimg.kitamura.jp/images/banner/8380.jpg',
          productName: 'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G'
        },
        {
          index: 15,
          category: ['all', 'general'],
          releaseDate: '発売日 2021.4.16',
          herf: '/special/sale-fair/camera/feature/sigma/fp_l/',
          src: 'https://shopimg.kitamura.jp/images/banner/8368.jpg',
          productName: 'シグマ fp L'
        }
      ]
    };
  },
  computed: {
    filterByCategory: function () {
      return this.campaignlist.filter((image) => !image.category.indexOf(this.category));
    }
  },
  setup: (props, context) => {
    return {
      noimage
    };
  }
};
</script>

<style lang="scss" scoped>
.product-name {
  display: block;
  height: 5em;
  margin-top: 5px;
  padding: 0 3%;
}
.category-list {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  list-style: none;
}
.category-list img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}

.category-nav label {
  background: #de1b27;
  color: #fff;
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
  min-width: 30px;
}
.category-nav input[type='radio'] {
  /* Hide radio buttonns */
  opacity: 0;
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
}
.v-enter-active,
.v-enter-active,
.v-leave-active,
.v-move {
  transition-property: transform, opacity;
  transition-duration: 0.3s;
}
.v-enter-active {
  opacity: 0;
  transform: translateY(50px);
}
.v-enter-to,
.v-leave-active {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.category-list ul {
  list-style: none;
}
.individual {
  height: auto;
  padding: 3% 3% 5%;
  box-sizing: border-box;
}
</style>