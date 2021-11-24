<template>
  <v-app>
    <div class="campaign">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <h1>
          <span><img src="/ec/images2/special/camera/feature/backnumber/title.png" alt="話題の新製品特集 バックナンバー一覧" /></span>
        </h1>
        <p>下記ボタンよりメーカーを絞り込む事ができます</p>

        <div class="category-nav">
          <v-container fluid>
            <v-row>
              <v-col cols="6" sm="2" v-for="narrowing in narrowingList" :key="narrowing.value" class="pa-1">
                <v-hover v-slot="{ hover }">
                  <v-btn
                    :elevation="hover ? 10 : 2"
                    :color="hover ? '#ff0c00' : '#de1b27'"
                    width="140px"
                    height="60px"
                    v-model="category"
                    :value="narrowing.value"
                    @click="searchByCategory(narrowing.value)"
                  >
                    <v-img :src="narrowing.src" max-width="75%" height="auto"></v-img><v-icon small color="white">fas fa-chevron-right</v-icon>
                  </v-btn>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <v-container class="individual">
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="(campaign, index) in filterByCategory" :key="index">
              <v-hover v-slot="{ hover }">
                <v-expand-transition>
                  <v-card :elevation="hover ? 10 : 2">
                    <v-card-text class="text-right pa-0 ma-0"
                      ><span class="days2">{{ campaign.releaseDate }}</span></v-card-text
                    >
                    <a :href="campaign.href">
                      <v-img :src="campaign.src" max-width="100%" class="hover"></v-img>
                      <span class="item-name text-subtitle-2">{{ campaign.productName }}</span>
                    </a>
                  </v-card>
                </v-expand-transition>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
export default Vue.extend({
  name: 'backnumber',
  components: {
    breadcrumbs: Breadcrumbs
  },
  setup: () => {
    document.title = '話題の新製品特集バックナンバー | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '話題の新製品特集 バックナンバー一覧')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '',
          disabled: false
        },
        {
          path: '話題の新製品特集バックナンバー',
          disabled: true
        }
      ],
      category: 'all',
      narrowingList: [
        { src: '/ec/images2/special/camera/feature/backnumber/btn-new-w.png', value: 'new' },
        { src: '/ec/images2/special/camera/feature/backnumber/btn-canon-w.png', value: 'canon' },
        { src: '/ec/images2/special/camera/feature/backnumber/btn-nikon-w.png', value: 'nikon' },
        { src: '/ec/images2/special/camera/feature/backnumber/btn-olympus-w.png', value: 'olympus' },
        { src: '/ec/images2/special/camera/feature/backnumber/btn-sony-w.png', value: 'sony' },
        { src: '/ec/images2/special/camera/feature/backnumber/btn-fujifilm-w.png', value: 'fujifilm' },
        { src: '/ec/images2/special/camera/feature/backnumber/btn-panasonic-w.png', value: 'panasonic' },
        { src: '/ec/images2/special/camera/feature/backnumber/btn-general-w.png', value: 'general' },
        { src: '/ec/images2/special/camera/feature/backnumber/btn-all.png', value: 'all' }
      ],
      campaignlist: [
        {
          category: ['all', 'nikon', 'new'],
          releaseDate: '2021.11.2 10時 予約受付開始',
          href: '/ec/special/camera/feature/nikon/z_9',
          src: 'https://shopimg.kitamura.jp/images/banner/8685.jpg',
          productName: 'ニコン Z 9'
        },
        {
          category: ['all', 'nikon', 'new'],
          releaseDate: '2021.11.2 10時 予約受付開始',
          href: '/ec/special/camera/feature/nikon/z100-400mmf45-56vrs',
          src: 'https://shopimg.kitamura.jp/images/banner/8687.jpg',
          productName: 'ニコン NIKKOR Z 100-400mm f/4.5-5.6 VR S'
        },
        {
          category: ['all', 'sony', 'new'],
          releaseDate: '2021年11月26日発売予定',
          href: '/ec/special/camera/feature/sony/sel70200gm2',
          src: 'https://shopimg.kitamura.jp/images/banner/8657.jpg',
          productName: 'ソニー FE 70-200mm F2.8 GM OSS II'
        },
        {
          category: ['all', 'canon', 'new'],
          releaseDate: '2021年11月下旬発売予定',
          href: '/ec/special/camera/feature/canon/eosr3',
          src: 'https://shopimg.kitamura.jp/images/banner/8629.jpg',
          productName: 'キヤノン EOS R3'
        },
        {
          category: ['all', 'canon', 'new'],
          releaseDate: '発売日 2021.10.28',
          href: '/ec/special/camera/feature/canon/rf100-400_rf16',
          src: 'https://shopimg.kitamura.jp/images/banner/8631.jpg',
          productName: 'キヤノン RF100-400mm F5.6-8 IS USM / RF16mm F2.8 STM'
        },
        {
          category: ['all', 'nikon', 'new'],
          releaseDate: '発売日 2021.10.1',
          href: '/ec/special/camera/feature/nikon/z_40mm_f2',
          src: 'https://shopimg.kitamura.jp/images/banner/8623.jpg',
          productName: 'ニコン NIKKOR Z 40mm f/2'
        },
        {
          category: ['all', 'general', 'new'],
          releaseDate: '発売日 2021.10.1',
          href: '/ec/special/camera/feature/ricoh/gr3x',
          src: 'https://shopimg.kitamura.jp/images/banner/8625.jpg',
          productName: 'リコー GR IIIx'
        },
        {
          category: ['all', 'fujifilm', 'new'],
          releaseDate: '発売日 2021.9.29',
          href: '/ec/special/camera/feature/fujifilm/xf33f14',
          src: 'https://shopimg.kitamura.jp/images/banner/8627.jpg',
          productName: 'フジフイルム XF33mm F1.4 R LM WR'
        },
        {
          category: ['all', 'fujifilm', 'new'],
          releaseDate: '発売日',
          href: '/ec/special/camera/feature/fujifilm/gfx50sII',
          src: 'https://shopimg.kitamura.jp/images/banner/8603.jpg',
          productName: 'フジフイルム GFX 50S II'
        },
        {
          category: ['all', 'sony', 'new'],
          releaseDate: '発売日 2021.9.17',
          href: '/ec/special/camera/feature/sony/vlogcam_zv_e10',
          src: 'https://shopimg.kitamura.jp/images/banner/8551.jpg',
          productName: 'ソニー VLOGCAM ZV-E10'
        },
        {
          category: ['all', 'canon', 'new'],
          releaseDate: '発売日 2021.9.30',
          href: '/ec/special/camera/feature/canon/rf14-35mmf4lisusm',
          src: 'https://shopimg.kitamura.jp/images/banner/8510.jpg',
          productName: 'キヤノン RF14-35mm F4 L IS USM'
        },
        {
          category: ['all', 'nikon', 'new'],
          releaseDate: '発売日 2021.7.23',
          href: '/ec/special/camera/feature/nikon/zfc',
          src: 'https://shopimg.kitamura.jp/images/banner/8494.jpg',
          productName: 'ニコン Z fc'
        },
        {
          category: ['all', 'olympus', 'new'],
          releaseDate: '発売日 2021.6.25',
          href: '/ec/special/camera/feature/olympus/pen_e-p7',
          src: 'https://shopimg.kitamura.jp/images/banner/8466.jpg',
          productName: 'オリンパス PEN E-P7'
        },
        {
          category: ['all', 'nikon', 'new'],
          releaseDate: '発売日 2021.6.25',
          href: '/ec/special/camera/feature/nikon/z_mc_105mm_f28_vr_s',
          src: 'https://shopimg.kitamura.jp/images/banner/8458.jpg',
          productName: 'ニコン NIKKOR Z MC 105mm f/2.8 VR S'
        },
        {
          category: ['all', 'panasonic', 'new'],
          releaseDate: '発売日 2021.6.25',
          href: '/ec/special/camera/feature/panasonic/gh5m2',
          src: 'https://shopimg.kitamura.jp/images/banner/8439.jpg',
          productName: 'パナソニック LUMIX DC-GH5M2'
        },
        {
          category: ['all', 'sony', 'new'],
          releaseDate: '発売日 2021.6.4',
          href: '/ec/special/camera/feature/sony/7rm4a-7rm3a',
          src: 'https://shopimg.kitamura.jp/images/banner/8456.jpg',
          productName: 'ソニー α7R IV A & α7R III A'
        },
        {
          category: ['all', 'sony', 'new'],
          releaseDate: '発売日 2021.5.28',
          href: '/ec/special/camera/feature/sony/fe14f18gm',
          src: 'https://shopimg.kitamura.jp/images/banner/8405.png',
          productName: 'ソニー FE 14mm F1.8 GM [SEL14F18GM]'
        },
        {
          category: ['all', 'general', 'new'],
          releaseDate: '発売日 2021.6.24',
          href: '/ec/special/camera/feature/tamron/150-500mm-f5-6.7',
          src: 'https://shopimg.kitamura.jp/images/banner/8403.png',
          productName: 'タムロン 150-500mm F/5-6.7 Di III VC VXD、タムロン 11-20mm F/2.8 Di III-A RXD'
        },
        {
          category: ['all', 'fujifilm', 'new'],
          releaseDate: '発売日 2021.5.27',
          href: '/ec/special/camera/feature/fujifilm/xf18mmf14-r-lm-wr',
          src: 'https://shopimg.kitamura.jp/images/banner/8398.png',
          productName: 'フジフイルム XF18mm F1.4 R LM WR'
        },
        {
          category: ['all', 'canon', 'new'],
          releaseDate: '2021.7.15 発売予定',
          href: '/ec/special/camera/feature/canon/rf100-f28l',
          src: 'https://shopimg.kitamura.jp/images/banner/8394.png',
          productName: 'キヤノン RF100mm F2.8 L MACRO IS USM'
        },
        {
          category: ['all', 'canon', 'new'],
          releaseDate: '2021.7.15 発売予定',
          href: '/ec/special/camera/feature/canon/rf400-f28l',
          src: 'https://shopimg.kitamura.jp/images/banner/8396.png',
          productName: 'キヤノン RF400mm F2.8 L IS USM / RF600mm F4 L IS USM'
        },
        {
          category: ['all', 'general', 'new'],
          releaseDate: '発売日 2021.4.23',
          href: '/ec/special/camera/feature/pentax/k-3mk3',
          src: 'https://shopimg.kitamura.jp/images/banner/8376.jpg',
          productName: 'ペンタックス K-3 Mark III'
        },
        {
          category: ['all', 'sony'],
          releaseDate: '発売日 2021.4.23',
          href: '/ec/special/camera/feature/sony/sel24f28g',
          src: 'https://shopimg.kitamura.jp/images/banner/8380.jpg',
          productName: 'ソニー FE 24mm F2.8 G / FE 40mm F2.5 G / FE 50mm F2.5 G'
        },
        {
          category: ['all', 'general'],
          releaseDate: '発売日 2021.4.16',
          href: '/ec/special/camera/feature/sigma/fp_l',
          src: 'https://shopimg.kitamura.jp/images/banner/8368.jpg',
          productName: 'シグマ fp L'
        },
        {
          category: ['all', 'sony'],
          releaseDate: '発売日 2021.4.23',
          href: '/ec/special/camera/feature/sony/sel50f12gm',
          src: 'https://shopimg.kitamura.jp/images/banner/8354.jpg',
          productName: 'ソニー Cinema Line FX3'
        },
        {
          category: ['all', 'sony'],
          releaseDate: '発売日 2021.3.19',
          href: '/ec/special/camera/feature/sony/a1',
          src: 'https://shopimg.kitamura.jp/images/banner/8198.jpg',
          productName: 'ソニー a1'
        },
        {
          category: ['all', 'fujifilm'],
          releaseDate: '発売日 2021.2.25',
          href: '/ec/special/camera/feature/fujifilm/gfx100s',
          src: 'https://shopimg.kitamura.jp/images/banner/8232.jpg',
          productName: 'フジフイルム GFX100S'
        },
        {
          category: ['all', 'fujifilm'],
          releaseDate: '発売日 2021.2.25',
          href: '/ec/special/camera/feature/fujifilm/x-e4',
          src: 'https://shopimg.kitamura.jp/images/banner/8209.jpg',
          productName: 'フジフイルム X-E4'
        },
        {
          category: ['all', 'fujifilm'],
          releaseDate: '発売日 2021.3.18',
          href: '/ec/special/camera/feature/fujifilm/xf70-300mmf4-56rlm-ois-wr',
          src: 'https://shopimg.kitamura.jp/images/banner/8236.jpg',
          productName: 'フジフイルム XF70-300mmF4-5.6 R LM OIS WR / XF27mmF2.8 R WR'
        },
        {
          category: ['all', 'sony'],
          releaseDate: '発売日 2021.2.12',
          href: '/ec/special/camera/feature/sony/sel35f14gm',
          src: 'https://shopimg.kitamura.jp/images/banner/8186.jpg',
          productName: 'ソニー FE 35mm F1.4 GM'
        },
        {
          category: ['all', 'canon'],
          releaseDate: '発売日 2020.12.24',
          href: '/ec/special/camera/feature/canon/rf50-f18',
          src: 'https://shopimg.kitamura.jp/images/banner/8084.jpg',
          productName: 'キヤノン RF70-200mm F4 L IS USM'
        },
        {
          category: ['all', 'fujifilm', ''],
          releaseDate: '発売日 2020.11.19',
          href: '/ec/special/camera/feature/fujifilm/x-s10',
          src: 'https://shopimg.kitamura.jp/images/banner/8038.jpg',
          productName: 'フジフイルム X-S10'
        },
        {
          category: ['all', 'nikon', ''],
          releaseDate: '発売日 2020.12.11',
          href: '/ec/special/camera/feature/nikon/z6II_z7II',
          src: 'https://shopimg.kitamura.jp/images/banner/8030.jpg',
          productName: 'ニコン Z6II Z7II'
        },
        {
          category: ['all', 'canon', ''],
          releaseDate: '発売日 2020.11.27',
          href: '/ec/special/camera/feature/canon/eoskiss_m2',
          src: 'https://shopimg.kitamura.jp/images/banner/8022.jpg',
          productName: 'キヤノン EOS Kiss M2'
        },
        {
          category: ['all', 'nikon', ''],
          releaseDate: '発売日 2020.12.11',
          href: '/ec/special/camera/feature/nikon/z50mm_z14-24mm',
          src: 'https://shopimg.kitamura.jp/images/banner/7946.jpg',
          productName: 'ニコン NIKKOR Z 50mm f/1.2 S、NIKKOR Z 14-24mm f/2.8 S'
        },
        {
          category: ['all', 'sony'],
          releaseDate: '発売日 2020.10.23',
          href: '/ec/special/camera/feature/sony/7c',
          src: 'https://shopimg.kitamura.jp/images/banner/7942.jpg',
          productName: 'ソニー α7C'
        },
        {
          category: ['all', 'fujifilm', ''],
          releaseDate: '発売日 2020.9.24',
          href: '/ec/special/camera/feature/fujifilm/xf50mmf1.0rwr',
          src: 'https://shopimg.kitamura.jp/images/banner/7898.jpg',
          productName: 'フジフイルムXF50mm F1.0 R WR'
        },

        {
          category: ['all', 'sony', ''],
          releaseDate: '発売日 2020.10.9',
          href: '/ec/special/camera/feature/sony/7sm3',
          src: 'https://shopimg.kitamura.jp/images/banner/7770.jpg',
          productName: 'ソニー α7S III'
        },

        {
          category: ['all', 'nikon', ''],
          releaseDate: '発売日 2020.8.28',
          href: '/ec/special/camera/feature/nikon/z_5',
          src: 'https://shopimg.kitamura.jp/images/banner/7758.jpg',
          productName: 'ニコン Z 5'
        },

        {
          category: ['all', 'panasonic', ''],
          releaseDate: '発売日 2020.8.20',
          href: '/ec/special/camera/feature/panasonic/g100',
          src: 'https://shopimg.kitamura.jp/images/banner/7728.jpg',
          productName: 'パナソニックLUMIX G100'
        },

        {
          category: ['all', 'canon', ''],
          releaseDate: '発売日 R5 2020.7.30,R6 2020.8.27',
          href: '/ec/special/camera/feature/canon/eosr5_r6',
          src: 'https://shopimg.kitamura.jp/images/banner/7725.jpg',
          productName: 'キヤノン EOS R5 / EOS R6'
        },

        {
          category: ['all', 'canon', ''],
          releaseDate: '発売日 2020.8.27',
          href: '/ec/special/camera/feature/canon/rf100-500mm_f4.5_7.1l_is_usm',
          src: 'https://shopimg.kitamura.jp/images/banner/7712.jpg',
          productName: 'キヤノン RF100-500mm F4.5-7.1 L IS USM'
        },

        {
          category: ['all', 'canon'],
          releaseDate: '発売日 2020.7.30',
          href: '/ec/special/camera/feature/canon/rf600mm-rf800mm_f11_is_stm',
          src: 'https://shopimg.kitamura.jp/images/banner/7737.jpg',
          productName: 'キヤノン RF600mm F11 IS STM／キヤノン RF800mm F11 IS STM'
        },

        {
          category: ['all', 'sony', ''],
          releaseDate: '発売日 2020.6.19',
          href: '/ec/special/camera/feature/sony/vlogcam_zv1_zv1g',
          src: 'https://shopimg.kitamura.jp/images/banner/7632.jpg',
          productName: 'ソニーZV-1'
        },

        {
          category: ['all', 'fujifilm', ''],
          releaseDate: '発売日 シルバー2020.4.28 ブラック5.21',
          href: '/ec/special/camera/feature/fujifilm/xt4',
          src: 'https://shopimg.kitamura.jp/images/banner/7422.jpg',
          productName: 'フジフイルムX-T4'
        },

        {
          category: ['all', 'nikon', ''],
          releaseDate: '発売日 2020.6.5',
          href: '/ec/special/camera/feature/nikon/d6',
          src: 'https://shopimg.kitamura.jp/images/banner/7374.jpg',
          productName: 'ニコンD6'
        },

        {
          category: ['all', 'canon', ''],
          releaseDate: '発売日 2020.6.25',
          href: '/ec/special/camera/feature/canon/eoskiss10I',
          src: 'https://shopimg.kitamura.jp/images/banner/7373.jpg',
          productName: 'キヤノン EOS KISS X10i'
        },

        {
          category: ['all', 'olympus', ''],
          releaseDate: '発売日 2020.2.28',
          href: '/ec/special/camera/feature/olympus/em1m3',
          src: 'https://shopimg.kitamura.jp/images/banner/7342.jpg',
          productName: ' オリンパス OM-D E-M1 Mark III '
        },

        {
          category: ['all', 'olympus', ''],
          releaseDate: '発売日 2020.3.27',
          href: '/ec/special/camera/feature/olympus/ed_12-45mm_f4.0pro',
          src: 'https://shopimg.kitamura.jp/images/banner/7371.jpg',
          productName: 'オリンパスM.ZUIKO DIGITAL ED 12-45mm F4.0 PRO'
        },

        {
          category: ['all', 'fujifilm', ''],
          releaseDate: '発売日 シルバー2020.2.27ブラック3.12',
          href: '/ec/special/camera/feature/fujifilm/x100v',
          src: 'https://shopimg.kitamura.jp/images/banner/7275.jpg',
          productName: 'フジフイルムX100V'
        },

        {
          category: ['all', 'fujifilm', ''],
          releaseDate: '発売日 2020.2.27',
          href: '/ec/special/camera/feature/fujifilm/x-t200',
          src: 'https://shopimg.kitamura.jp/images/banner/7252.jpg',
          productName: 'フジフイルムX-T200'
        },

        {
          category: ['all', 'canon', ''],
          releaseDate: '発売日 2020.2.14',
          href: '/ec/special/camera/feature/canon/1dxmk3',
          src: 'https://shopimg.kitamura.jp/images/banner/7163.jpg',
          productName: 'キヤノン EOS-1D X Mark III'
        },

        {
          category: ['all', 'nikon', ''],
          releaseDate: '発売日 2020.1.24',
          href: '/ec/special/camera/feature/nikon/D780',
          src: 'https://shopimg.kitamura.jp/images/banner/7171.png',
          productName: 'ニコン D780'
        },

        {
          category: ['all', 'nikon', ''],
          releaseDate: '発売日 2020.2.14',
          href: '/ec/special/camera/feature/nikon/nikkorz_70-200mm_f2.8_vr_s',
          src: 'https://shopimg.kitamura.jp/images/banner/7165.jpg',
          productName: 'ニコン NIKKOR Z 70-200mm f/2.8 VR S'
        },

        {
          category: ['all', 'nikon', ''],
          releaseDate: '発売日 2020.2.29',
          href: '/ec/special/camera/feature/nikon/nikkor_120_300mm_f2.8_e_fl_ed_sr_vr',
          src: 'https://shopimg.kitamura.jp/images/banner/7180.jpg',
          productName: 'ニコン AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR'
        },

        {
          category: ['all', 'nikon', ''],
          releaseDate: '発売日 2020.2.7',
          href: '/ec/special/camera/feature/nikon/p950',
          src: 'https://shopimg.kitamura.jp/images/banner/7186.jpg',
          productName: 'ニコン COOLPIX P950'
        }
      ]
    });

    const filterByCategory = computed(() => {
      const result = state.campaignlist.filter((value) => {
        if (value.category.indexOf(state.category) !== -1) {
          return value;
        }
      });
      return result;
    });

    const searchByCategory = (value: string) => {
      state.category = value;
    };

    return {
      ...toRefs(state),
      filterByCategory,
      searchByCategory
    };
  }
});
</script>

<style lang="scss" scoped>
.campaign h1 {
  background: url(/ec/images2/special/camera/feature/backnumber/title-bg.jpg) no-repeat center;
}

.campaign h1 span {
  display: block;
  height: 200px;
  margin: 0 auto;
  text-align: center;
  width: 550px;
}

@media (max-width: 949px) {
  .campaign h1 span {
    display: block;
    height: auto;
    text-align: center;
    width: 100%;
  }
}

@media (max-width: 949px) {
  .campaign h1 img {
    width: 100%;
    max-width: 100%;
  }
}

span.days2 {
  width: auto;
  height: auto;
  font-size: 12px;
  color: #ffffff;
  background-color: /*#1F1F1F*/ #c3002a;
  padding: 0 5px;
}

.campaign .individual .item-name {
  display: block;
  height: 5em;
  margin-top: 5px;
  padding: 0 3%;
}
</style>