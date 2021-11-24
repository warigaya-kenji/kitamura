<template>
  <div
    id="order-precheck-page"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <div
      :class="{
        'content-area-wide': $vuetify.breakpoint.mdAndUp,
        'content-area-narrow': $vuetify.breakpoint.smAndDown
      }"
    >
      <!-- トクトク交換の説明 -->
      <div class="tokutoku">
        <div class="tokutoku-title">トクトク交換のお手続き</div>
        <dl class="tokutoku-description">
          <dt>選択された交換品はトクトク交換対象品です</dt>
          <dd>当社基準を満たしている場合、ご購入金額から直接、下取金額をひいた差額分のお支払いでお得にご購入できます</dd>
          <dt>【ご注意】</dt>
          <dd>
            ・お支払方法はクレジットカード限定となります（デビットカード・プリペイドカードはご利用できません）<br />
            ・受け取り方法は宅配受取限定となります（宅配ボックスを利用する場合、以下「梱包キット」のお申込みは「希望する」をご選択ください）<br />
            ・下取品はご注文日から起算して10日以内に弊社へ送品ください（一部商品を除く）<br />
            <br />
            以下の場合は「トクトク交換」対象外となり、トクトク交換査定額を省いた金額でのお支払いとなります<br />
            ・重要付属品がない、目立つへこみ、動作不良、カビ、クモリなど、当社で難ありと判断した場合<br />
            ・ご注文日から10日以内に下取品が到着していない場合<br />
            <br />
            以下の場合は「トクトク交換」対象商品であってもトクトク交換査定額を省いた金額でのお支払いとなり、下取金額は別途お客様の口座へお振り込みとなります。<br />
            ・送っていただいた下取品が「トクトク交換」対象外だった場合<br />・トクトク交換査定額が購入商品価格を上回る場合<br />※差額のお振込みとなります
            <v-checkbox
              class="tokutoku-input-check"
              v-model="agreement"
              label="注意書きを確認の上、「トクトク交換」の手続きを進めることに同意する（必須）"
            ></v-checkbox>
          </dd>
          <dt>
            梱包キットのお申込み（無料）希望確認
            <!-- 梱包キットについてのダイアログ -->
            <v-dialog class="tokutoku-dialog" max-width="640" v-model="tokutokuDialog">
              <template v-slot:activator="{ on, attrs }">
                <v-icon class="tokutoku-link mx-2" v-bind="attrs" v-on="on">far fa-question-circle</v-icon>
              </template>
              <v-card class="tokutoku-dialog-area">
                <v-card-title>【梱包キットについて】</v-card-title>
                <div class="tokutoku-dialog-discription">
                  下取り品を当社にお送り頂くための箱・緩衝材・伝票を無償でお届けしているサービスです。<br />
                  ご注文手続き後に、箱のサイズと数をご指定頂きます。<br />
                  <br />
                  当社から梱包キットが届きましたら、以下の手順にて下取り品をご発送ください。
                  <div class="ml-2">
                    ・下取り品を箱に入れる<br />
                    ・伝票を箱に貼付する<br />
                    ・コンビニ等でヤマト運輸へ箱を引き渡す<br />
                    （着払いなので、お客様の送料負担はございません）
                  </div>
                </div>
              </v-card>
            </v-dialog>
          </dt>
          <dd>
            <dl class="tokutoku-description">
              <dt>下取り品の発送について</dt>
              <dd>
                梱包キット（箱や緩衝材）を無償でお送りすることが可能です。
                <v-radio-group class="tokutoku-radio-group" v-model="offerPackKit" column mandatory>
                  <v-radio class="tokutoku-radio mb-2" :value="true">
                    <template slot="label">
                      <div>希望する（弊社の梱包キットを使って発送）</div>
                      <div class="tokutoku-radio-note">※ご注文のあと、本人確認書類、箱数・サイズをご登録いただきます</div>
                    </template>
                  </v-radio>
                  <v-radio class="tokutoku-radio" :value="false">
                    <template slot="label">
                      <div>希望しない（お手持ちの箱（もしくは新品受領時の箱）を使って発送）</div>
                      <div class="tokutoku-radio-note">※ご注文のあと、本人確認書類をご登録いただきます</div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </dd>
            </dl>
          </dd>
        </dl>
        <div class="tokutoku-text">注文完了後に、梱包キットの申し込み手続きへお進みください</div>
      </div>

      <!-- ページネーション -->
      <div class="pagination">
        <v-btn class="pagination-back-btn" depressed tile @click="back()">戻る</v-btn>
        <v-btn class="pagination-next-btn" :dark="agreement" depressed tile :disabled="!agreement" @click="next()">次へ</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import CartService from '@/logic/cart.service';

export default Vue.extend({
  name: 'order-precheck-page',
  components: {},
  setup: (_, context) => {
    document.title = '【カメラのキタムラ】トクトク交換のお手続き';

    const { errorStore } = context.root.$store;
    const state = reactive({
      agreement: false,
      offerPackKit: true,
      tokutokuDialog: false
    });

    /**
     * 戻る押下時処理
     */
    const back = () => {
      context.root.$router.push({ name: 'cart-list-page' });
    };

    /**
     * 次へ押下時処理
     */
    const next = async () => {
      try {
        const cashRegisterInfo = await CartService.fetchCashRegisterInfo();
        const reqParam = {
          registerId: cashRegisterInfo.registerId,
          ptnNo: 0,
          usePacking: state.offerPackKit ? 1 : 0
        };
        await CartService.updateCashRegisterInfo(reqParam);

        // 確認ページに遷移
        context.root.$router.push({ name: 'order-page' });
      } catch (error) {
        console.error(error);
        const errorCode = (error as any).response?.data?.details?.length ? (error as any).response?.data?.details[0].errorCode : '';
        if (errorCode === 'EN003') {
          // セッションタイムアウト
          context.root.$router.push({ name: 'cart-list-page' });
          errorStore.errorMessage = '最後に操作してから一定時間が経過したため、カートの情報はクリアされました。';
        }
      }
    };

    return {
      ...toRefs(state),
      back,
      next
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */

/** -------------------------------
  960px以上
------------------------------- */
// IE11対応
.container-wide {
  max-width: $ec-contents-max-width;
}

// トクトク交換の説明
.tokutoku {
  width: 100%;
  max-width: 700px;
  margin: 12px auto 0;
  padding: 8px;
  border: solid 1px $ec-light-grey2;
  border-radius: 4px;

  &-title {
    width: 100%;
    font-size: 20px;
    color: $text-white;
    padding: 0.25em 0.5em;
    line-height: 1.5;
    background: $bg-grey2;
  }

  &-description {
    dt {
      margin-top: 8px;
      font-weight: bold;
    }
    dd {
      margin-top: 4px;
      margin-left: 1em;
    }
  }

  &-input-check {
    display: inline-flex;

    ::v-deep .v-label {
      color: $text-primary;
    }
  }

  &-radio {
    align-items: normal;

    ::v-deep .v-label {
      display: block;
      margin-left: 12px;
      color: $text-black;
      font-weight: bold;
    }

    &-note {
      margin-top: 4px;
      font-size: 14px;
      font-weight: normal;
    }
  }

  // 梱包キットについて
  &-link {
    &:hover {
      color: $text-primary;
    }
  }

  &-dialog {
    z-index: 600;

    &-area {
      min-height: 200px;
    }

    &-discription {
      padding: 0 12px 12px;
    }
  }

  &-text {
    font-weight: bold;
    text-align: center;
  }
}

// ページネーション
.pagination {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 750px;
  margin: 20px auto;

  @at-root %page-btn {
    position: relative;
    width: 350px;
    height: 60px !important;
    font-size: 21px;
    font-weight: bold;
  }

  &-back-btn {
    @extend %page-btn;
    background-color: $bg-grey !important;
  }
  &-next-btn {
    @extend %page-btn;
    background-color: $bg-orange !important;
  }
}
/** -------------------------------
  960px未満
------------------------------- */
.container-narrow {
  // トクトク交換の説明
  .tokutoku {
    border: none;

    &-title {
      width: 100%;
      font-size: 18px;
      color: $text-black;
      padding: 0.25em 0.5em 0.25em 1em;
      line-height: 1.5;
      background: $bg-white;
      border-left: solid 6px $ec-primary;
      border-bottom: solid 1px $ec-primary;
    }
  }

  // ページネーション
  .pagination {
    max-width: none;
    margin: 8px auto;
    padding: 0 8px;

    &-back-btn {
      @extend %page-btn;
      width: 160px;
    }
    &-next-btn {
      @extend %page-btn;
      width: 160px;
    }
  }
}
</style>
