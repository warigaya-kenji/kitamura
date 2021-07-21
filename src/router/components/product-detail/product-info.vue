<template>
  <div id="product-info" class="basic-info-area d-flex">
    <!-- 商品名表示エリア 960px未満 -->
    <div class="product-name-area" v-if="$vuetify.breakpoint.smAndDown">
      <span class="secondary-link" v-if="isUsed">
        <router-link :to="'/ec/list?type=u&category=' + usedProduct.prdType + '&keyword=' + usedProduct.makerName">
          <span class="secondary-link-text"> {{ usedProduct.makerName }}</span>
        </router-link>
      </span>
      <span class="secondary-link" v-else>
        <router-link :to="makerProductListLink">
          <span class="secondary-link-text">{{ product.makerName }}</span>
        </router-link>
      </span>
      <h2>
        <span v-if="isUsed"> {{ usedProduct.itemName }}</span>
        <span v-else>
          {{ product.itemName }}
          <span v-if="product.ddDesc">【{{ product.ddDesc }}】</span>
        </span>
      </h2>
    </div>

    <!-- 画像表示エリア 960px以上 -->
    <div id="product-image-area" class="product-image-area area-pc" v-if="$vuetify.breakpoint.mdAndUp">
      <v-dialog v-model="imageDialog" width="unset" :scrollable="false" class="dialog">
        <template v-slot:activator="{ on, attrs }">
          <v-card class="product-image-main" tile>
            <template v-if="mainImageType === 'image'">
              <div v-bind="attrs" v-on="on" class="product-image-main-all" @click="selectProductImageInDialog(mainImagePath)">
                <i class="product-image-main-expansion-icon fas fa-search-plus"></i>
                <img class="product-image-main-img" :src="mainImagePath" :alt="product.itemName" @error="noimage" />
              </div>
            </template>
            <div class="product-image-youtube" v-else-if="mainImageType === 'movie'">
              <iframe id="product-movie-player" type="text/html" :src="mainImagePath" frameborder="0" allowfullscreen></iframe>
            </div>
          </v-card>
          <div class="product-image-thumbnail-list">
            <v-card
              class="product-image-thumbnail"
              v-for="image in productImageList"
              :key="image.key"
              tile
              @click="
                selectProductImage(image.imagePath);
                selectProductImageInDialog(image.imagePath);
              "
            >
              <img class="product-image-thumbnail-img" :src="image.imagePath" @error="noimage" :alt="product.itemName" />
            </v-card>
            <v-card
              class="product-image-thumbnail"
              v-if="product.videoId"
              tile
              @click="
                selectProductImage(getYouTubeUrl(product.videoId), 'movie');
                selectProductImageIjnDialog(getYouTubeUrl(product.videoId), 'movie');
              "
            >
              <img class="product-image-thumbnail-img" :src="getYouTubeThumbnailUrl(product.videoId)" @error="noimage" :alt="product.itemName" />
            </v-card>
          </div>
        </template>

        <!-- 商品画像のダイアログ -->
        <v-card class="image-dialog">
          <v-btn icon class="image-dialog-close" @click="imageDialog = false" color="black">
            <v-icon>fas fa-times</v-icon>
          </v-btn>
          <div class="image-dialog-head">
            <v-btn
              v-if="product.videoId"
              outlined
              class="image-tab-button"
              :class="{ active: selectedImageTypeInDialog === 'movie' }"
              @click="selectProductImageInDialog(getYouTubeUrl(product.videoId), 'movie')"
            >
              <v-icon class="image-tab-button-icon"> far fa-play-circle </v-icon>
              動画
            </v-btn>
            <v-btn
              outlined
              class="image-tab-button"
              :class="{ active: selectedImageTypeInDialog === 'image' }"
              @click="selectProductImageInDialog(productImageList[0].imagePath)"
            >
              <v-icon class="image-tab-button-icon">far fa-image</v-icon>
              画像
            </v-btn>
          </div>
          <div class="image-dialog-body">
            <v-card class="image-dialog-main py-3" tile>
              <product-inner-image-zoom
                v-if="mainImageTypeInDialog === 'image' && isZoomImg(mainImagePathInDialog)"
                class="image-dialog-main-img"
                className="image-dialog-main-inner-img"
                :src="mainImagePathInDialog"
              />
              <img
                v-else-if="mainImageTypeInDialog === 'image' && !isZoomImg(mainImagePathInDialog)"
                class="image-dialog-main-img"
                :class="{ portrait: isPortraitImg(mainImagePathInDialog) }"
                @error="noimage"
                :src="mainImagePathInDialog"
                :alt="product.itemName"
              />
              <div class="product-image-youtube" v-else-if="mainImageTypeInDialog === 'movie'">
                <iframe id="product-movie-player" type="text/html" :src="mainImagePathInDialog" frameborder="0" allowfullscreen></iframe>
              </div>
            </v-card>
            <div class="image-dialog-thumbnail-list" :class="{ 'one-line': productImageList.length < 4 }">
              <v-card
                v-for="image in productImageList"
                :key="image.key"
                class="image-dialog-thumbnail"
                tile
                @click="selectProductImageInDialog(image.imagePath)"
              >
                <img class="product-image-thumbnail-img" :src="image.imagePath" @error="noimage" :alt="product.itemName" />
              </v-card>
              <v-card class="image-dialog-thumbnail" tile v-if="product.videoId" @click="selectProductImageInDialog(getYouTubeUrl(product.videoId), 'movie')">
                <img class="product-image-thumbnail-img" :src="getYouTubeThumbnailUrl(product.videoId)" @error="noimage" :alt="product.itemName" />
              </v-card>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </div>

    <!-- 画像表示エリア 960px未満 -->
    <div id="product-image-area" class="product-image-area" v-if="$vuetify.breakpoint.smAndDown">
      <!-- アイコン -->
      <div class="product-image-icon-area">
        <!-- レビュー点数 -->
        <v-btn class="product-image-icon" v-if="product.reviewNum" :href="'/pd/review/list.html?jan_cd=' + product.janCode" large icon outlined>
          <v-rating half-increments readonly large length="1" :value="product.ratingTotal / 5" color="rgba(229, 130, 35, 1)"></v-rating>
        </v-btn>

        <!-- お気に入り登録 -->
        <v-dialog max-width="550px" v-model="favoriteDialog" class="dialog" v-if="product.janCode">
          <template v-slot:activator="{ attrs }">
            <v-btn class="product-image-icon" :class="{ active: memberProduct.isFavorite }" large icon outlined @click="registerFavorite()" v-bind="attrs">
              <v-icon>far fa-heart</v-icon>
            </v-btn>
          </template>
          <product-favorite-dialog
            :isUsed="isUsed"
            :janCode="isUsed ? usedProduct.janCode : product.janCode"
            :isFavorite="memberProduct.isFavorite"
            @onRegisterd="onFavoriteRegisterd()"
            @onClosed="onFavoriteDialogClosed()"
          ></product-favorite-dialog>
        </v-dialog>

        <!-- 持っている登録 -->
        <v-btn class="product-image-icon" :class="{ active: memberProduct.isHave }" large icon outlined @click="registerHaving()" v-if="product.janCode">
          <v-icon>far fa-hand-paper</v-icon>
        </v-btn>
      </div>
      <!-- 画像カルーセル -->
      <v-carousel class="product-image-carousel" v-model="imageCarouselItem" :cycle="false" :show-arrows="false" height="100%">
        <v-carousel-item
          v-for="(image, index) in productImageList"
          :key="image.key"
          class="product-image-carousel-item"
          @click.stop="
            imageDrawer = true;
            imageDrawerItem = index;
            selectedImageTypeInDialog = 'image';
          "
        >
          <img class="product-image-carousel-item-img" @error="noimage" :src="image.imagePath" :alt="product.itemName" />
        </v-carousel-item>
        <v-carousel-item
          class="product-image-carousel-item"
          v-if="product.videoId"
          @click.stop="
            imageDrawer = true;
            imageDrawerItem = productImageList.length;
            selectedImageTypeInDialog = 'movie';
          "
        >
          <div class="product-image-carousel-item-youtube">
            <iframe
              id="product-movie-player"
              class="product-image-carousel-item-player"
              type="text/html"
              :src="getYouTubeUrl(product.videoId)"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>

    <!-- 商品画像:ドロワー 960px未満  -->
    <v-navigation-drawer class="drawer-layout image-drawer" v-model="imageDrawer" fixed right temporary v-if="$vuetify.breakpoint.smAndDown">
      <div class="drawer-layout-area">
        <div class="drawer-layout-back" @click="imageDrawer = !imageDrawer">
          <v-icon class="drawer-layout-back-icon" small>fas fa-chevron-left</v-icon>
          <span class="drawer-layout-back-text">戻る</span>
        </div>
        <!-- 商品画像のリスト -->
        <div class="drawer-layout-contents image-drawer-main">
          <div class="image-drawer-main-tab">
            <v-btn
              class="image-tab-button"
              :class="{ active: selectedImageTypeInDialog === 'movie' }"
              v-if="product.videoId"
              outlined
              @click="
                imageDrawerItem = productImageList.length;
                selectedImageTypeInDialog = 'movie';
              "
            >
              <v-icon class="image-tab-button-icon"> far fa-play-circle </v-icon>
              動画
            </v-btn>
            <v-btn
              class="image-tab-button"
              outlined
              :class="{ active: selectedImageTypeInDialog === 'image' }"
              @click="
                imageDrawerItem = 0;
                selectedImageTypeInDialog = 'image';
              "
            >
              <v-icon class="image-tab-button-icon">far fa-image</v-icon>
              画像
            </v-btn>
          </div>
          <v-carousel
            class="product-image-carousel image-drawer-main-img"
            v-model="imageDrawerItem"
            :cycle="false"
            :show-arrows="false"
            hide-delimiters
            height="100%"
            @change="changeProductImageInDrawer"
          >
            <v-carousel-item v-for="image in productImageList" :key="image.key" class="product-image-carousel-item">
              <img class="product-image-carousel-item-img" @error="noimage" :src="image.imagePath" :alt="product.itemName" />
            </v-carousel-item>
            <v-carousel-item class="product-image-carousel-item" v-if="product.videoId">
              <div class="product-image-carousel-item-youtube">
                <iframe
                  id="product-movie-player"
                  class="product-image-carousel-item-player"
                  type="text/html"
                  :src="getYouTubeUrl(product.videoId)"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </v-carousel-item>
          </v-carousel>
          <div class="image-drawer-main-thumbnail-list">
            <v-card
              v-for="(image, index) in productImageList"
              :key="image.key"
              class="image-drawer-main-thumbnail"
              tile
              @click="
                imageDrawerItem = index;
                selectedImageTypeInDialog = 'image';
              "
            >
              <img class="image-drawer-main-thumbnail-img" @error="noimage" :src="image.imagePath" :alt="product.itemName" />
            </v-card>
            <v-card
              class="image-drawer-main-thumbnail"
              v-if="product.videoId"
              tile
              @click="
                imageDrawerItem = productImageList.length;
                selectedImageTypeInDialog = 'movie';
              "
            >
              <img class="image-drawer-main-thumbnail-img" @error="noimage" :src="getYouTubeThumbnailUrl(product.videoId)" :alt="product.itemName" />
            </v-card>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <!-- 製品情報エリア -->
    <div id="product-info-area" class="product-info-area">
      <!-- 製品名 960px以上 -->
      <div class="product-name-area" v-if="$vuetify.breakpoint.mdAndUp">
        <span class="secondary-link" v-if="isUsed">
          <router-link :to="'/ec/list?type=u&category=' + usedProduct.prdType + '&keyword=' + usedProduct.makerName">
            <span class="secondary-link-text">{{ usedProduct.makerName }}</span>
          </router-link>
        </span>
        <span class="secondary-link" v-else>
          <router-link :to="makerProductListLink">
            <span class="secondary-link-text">{{ product.makerName }}</span>
          </router-link>
        </span>
        <h2>
          <span v-if="isUsed"> {{ usedProduct.itemName }}</span>
          <span v-else>
            {{ product.itemName }}
            <span v-if="product.ddDesc">【{{ product.ddDesc }}】</span>
          </span>
        </h2>
        <!-- レビュー -->
        <div class="d-flex" v-if="product.reviewNum">
          <v-rating :value="product.ratingTotal" background-color="warning" color="warning accent-4" dense readonly half-increments size="18"></v-rating>
          <span class="secondary-link">
            <a :href="'/pd/review/list.html?jan_cd=' + product.janCode" class="ml-5">
              <span class="secondary-link-text">{{ product.reviewNum }}件のレビュー</span>
            </a>
          </span>
        </div>
        <!-- 商品アイコン（数量限定など） -->
        <div>
          <product-flags :flags="productIconFlags" />
        </div>
      </div>

      <hr v-if="product.salesCopy && $vuetify.breakpoint.mdAndUp" />

      <!-- 製品のキャッチコピー 960px以上 -->
      <div class="product-caption-area" v-if="$vuetify.breakpoint.mdAndUp">
        <span v-html="product.salesCopy"></span>
      </div>

      <!-- バリエーション 960px未満 -->
      <div class="product-variation" v-if="$vuetify.breakpoint.smAndDown && (product.variationItems || []).length">
        <div class="product-variation-title">バリエーション</div>
        <div class="product-variation-first-item" outlined tile @click.stop="variationDrawer = !variationDrawer">
          <div class="product-variation-first-item-img-area">
            <img
              class="product-variation-first-item-img"
              :src="product.variationItems[0].imagePath"
              @error="noimage"
              :alt="product.variationItems[0].itemName"
            />
          </div>
          <span class="product-variation-first-item-name">{{ product.variationItems[0].itemName }}</span>
          <v-icon class="product-variation-first-item-icon">fas fa-chevron-right</v-icon>
        </div>
      </div>

      <!-- バリエーション:ドロワー 960px未満  -->
      <v-navigation-drawer class="drawer-layout variation-drawer" v-model="variationDrawer" fixed right temporary v-if="$vuetify.breakpoint.smAndDown">
        <div class="drawer-layout-area">
          <div class="drawer-layout-back" @click="variationDrawer = !variationDrawer">
            <v-icon class="drawer-layout-back-icon" small>fas fa-chevron-left</v-icon>
            <span class="drawer-layout-back-text">戻る</span>
          </div>
          <!-- バリエーションのリスト -->
          <div class="drawer-layout-contents variation-drawer-list">
            <div class="variation-drawer-area">
              <div
                class="variation-drawer-item"
                :class="{
                  disabled:
                    isUsed &&
                    (!variationUsedProducts.filter((item) => item.janCode === variation.janCode).length ||
                      !variationUsedProducts.filter((item) => item.janCode === variation.janCode)[0].itemCount)
                }"
                v-for="variation in product.variationItems"
                :key="variation.janCode"
              >
                <router-link
                  class="variation-drawer-item-link"
                  :to="isUsed ? '/ec/list?keyword3=' + variation.janCode + '&type=u' : '/ec/pd/' + variation.janCode"
                >
                  <div class="variation-drawer-item-img-area">
                    <div v-if="isUsed" class="variation-drawer-item-count">
                      {{
                        variationUsedProducts.filter((item) => item.janCode === variation.janCode).length
                          ? variationUsedProducts.filter((item) => item.janCode === variation.janCode)[0].itemCount
                          : ''
                      }}
                    </div>
                    <img class="variation-drawer-item-img" :src="variation.imagePath" @error="noimage" :alt="variation.itemName" />
                  </div>
                  <span class="variation-drawer-item-name">{{ variation.itemName }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </v-navigation-drawer>

      <hr />

      <!-- 商品が購入できない場合 -->
      <div class="product-not-buy-text-area" v-if="!canBuyProduct">
        {{ cannotBuyReason }}
      </div>

      <!-- インクルードエリア0 960px未満 -->
      <div v-html="includeHtml0" v-if="$vuetify.breakpoint.smAndDown"></div>

      <!-- 購入時情報（価格、送料など） -->
      <div class="product-buy-info" v-if="canBuyProduct">
        <!-- 価格表示 -->
        <v-row>
          <v-col cols="4" class="ma-auto">
            {{ getProductPriceLabel }}
          </v-col>
          <v-col cols="8">
            <!-- 中古商品の価格表示 -->
            <div v-if="isUsed">
              <span class="sell-price-font d-inline-block"> {{ formatPrice(usedProduct.price) }}円 </span>
              <span class="d-inline-block">（税込）</span>
            </div>
            <!-- 新品商品の価格表示 -->
            <div v-else>
              <span class="sell-price-font d-inline-block"> {{ formatPrice(product.price) }}円 </span>
              <span class="d-inline-block">（税込）</span><br />
              <span v-if="product.templateId != '468' && usedProductsSummary.itemCount > 0">
                中古：
                <span class="d-inline-block red-font"> {{ formatPrice(usedProductsSummary.minPrice) }}円 </span>
                <span class="d-inline-block">(税込)～</span>
                <span class="d-inline-block secondary-link">
                  <a :href="'/ec/list?keyword3=' + product.janCode + '&type=u'">
                    <span class="secondary-link-text">({{ usedProductsSummary.itemCount }}点)</span>
                  </a>
                </span>
              </span>
            </div>
          </v-col>
        </v-row>

        <!-- なんでも下取り -->
        <v-row v-if="!isUsed && (includeFlag(PRODUCT_FLAG.TRADE_IN_ANYTHING_TARGET) || product.isTrade) && product.tradeInPrice">
          <v-col cols="8" offset="4" class="d-flex">
            <div>
              <div>なんでも下取りのご利用で</div>
              <div>
                さらに<span class="d-inline-block red-font"> {{ formatPrice(product.tradeInPrice) }}円</span>お値引！
              </div>
            </div>
            <a href="/sitemap/riyou_shitadori_index.html" class="question-link">
              <v-icon>far fa-question-circle</v-icon>
            </a>
          </v-col>
        </v-row>

        <!-- 同時購入 -->
        <v-row v-if="!isUsed && product.isBundle && product.bundleInfo.length > 0">
          <v-col cols="4"> まとめて<br />さらにお得 </v-col>
          <v-col cols="8">
            <span v-for="(bundle, index) in product.bundleInfo" :key="index">
              <span class="d-inline-block">{{ bundle.bundleNum }}点同時のご購入で</span>
              <span class="d-inline-block red-font">{{ formatPrice(bundle.bundlUnitPraice * bundle.bundleNum) }}円</span><br />
              (1点あたり<span class="red-font">{{ formatPrice(bundle.bundlUnitPraice) }}円</span>)
            </span>
          </v-col>
        </v-row>

        <!-- 送料 -->
        <v-row>
          <v-col cols="4"> 送料 </v-col>
          <v-col cols="8">
            <span :class="{ 'red-font': getPostage != '有料' }">
              {{ getPostage }}
            </span>
            <a href="/sitemap/riyou_souryou_index.html">
              <v-icon>far fa-question-circle</v-icon>
            </a>
          </v-col>
        </v-row>

        <!-- 受け取り方法 -->
        <v-row
          v-if="
            (!isUsed && includeFlag(PRODUCT_FLAG.DELIVERY_ONLY)) ||
              (!isUsed && includeFlag(PRODUCT_FLAG.STORE_DELIVERY_ONLY)) ||
              (isUsed && !usedProduct.isDirect)
          "
        >
          <v-col cols="4"> 受け取り方法 </v-col>
          <v-col cols="8">
            <span v-if="!isUsed && includeFlag(PRODUCT_FLAG.DELIVERY_ONLY)">宅配限定</span>
            <span v-if="(!isUsed && includeFlag(PRODUCT_FLAG.STORE_DELIVERY_ONLY)) || (isUsed && !usedProduct.isDirect)">店舗限定</span>
          </v-col>
        </v-row>

        <!-- 同型商品数 -->
        <v-row v-if="isUsed && sameTypeProductCount">
          <v-col cols="4"> 同型商品 </v-col>
          <v-col cols="8">
            <span class="secondary-link">
              <router-link :to="getSameTypeProductsLink">
                <span class="secondary-link-text">{{ sameTypeProductCount }}点</span>
              </router-link>
            </span>
          </v-col>
        </v-row>

        <!-- 中古商品の状態 -->
        <v-row v-if="isUsed">
          <v-col cols="4"> 商品の状態 </v-col>
          <v-col cols="8">
            <span>{{ usedProduct.grade }}</span>
            <!-- 中古商品の状態のダイアログ -->
            <v-dialog id="used-grade-dialog" class="dialog used-grade-dialog" v-model="usedGradeDialog" width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-icon class="ml-2" v-bind="attrs" v-on="on">far fa-question-circle</v-icon>
              </template>

              <v-card class="used-grade-dialog-area" tile>
                <div class="used-grade-dialog-title">商品の状態について</div>
                <div class="used-grade-dialog-description">
                  <div>
                    「状態」とは、その商品の傷み具合のレベルを指します<br />キタムラでは、独自の基準に従い、1点1点のカメラ・レンズを評価しております。<br />全てのカメラに「状態」を記載していますので、下記の表を参考にご判断ください。
                  </div>
                  <div class="used-grade-dialog-note">新品に近い状態ほど、ランクが上がります。</div>
                </div>
                <table summary="商品の状態" class="used-grade-dialog-table">
                  <thead>
                    <tr>
                      <th class="used-grade-dialog-table-head">状態</th>
                      <th class="used-grade-dialog-table-head">状態の目安</th>
                      <th class="used-grade-dialog-table-head">基準</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AA</td>
                      <td>新品同様</td>
                      <td>使用した形跡が無い。非常にきれいで、新品同様のもの。</td>
                    </tr>
                    <tr>
                      <td>A</td>
                      <td>美品</td>
                      <td>使用した形跡が少ない。きれいで、正常作動するもの。<br />本体内部に僅かなゴミがあるが撮影に影響がないもの。</td>
                    </tr>
                    <tr>
                      <td>AB</td>
                      <td>良品</td>
                      <td>外観に多少のキズや擦れなどがある。正常作動するもの。<br />本体内部に少量のゴミがあるが撮影に影響がないもの。</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>並品</td>
                      <td>
                        外観に比較的目立つキズや擦れがある。テカリなどがあるが、正常作動するもの。<br />本体内部に多少のゴミがあるが撮影に支障がないもの。
                      </td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>やや難あり</td>
                      <td>
                        外観に目立つキズや擦れが多い。テカリなどがあるが、作動するもの 。<br />本体内部にカビ、ゴミ、クモリ、バムサム切れなどがあるが、撮影の条件によっては支障が少ないもの。
                      </td>
                    </tr>
                    <tr>
                      <td>D</td>
                      <td>故障品<br />(ジャンク品)</td>
                      <td>作動に問題のあるもの。部品取り、コレクション用。破損品。</td>
                    </tr>
                  </tbody>
                </table>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>

        <!-- 在庫状況 -->
        <v-row
          v-if="
            !isUsed &&
              ((product.delivStockUrl && !includeFlag(PRODUCT_FLAG.STORE_DELIVERY_ONLY)) ||
                (!includeFlag(PRODUCT_FLAG.DELIVERY_ONLY) && !includeFlag(PRODUCT_FLAG.DIRECT_SHIPMENT)))
          "
        >
          <v-col cols="4">在庫状況</v-col>
          <v-col cols="8">
            <!-- 宅配在庫を確認のリンク -->
            <span class="secondary-link" v-if="product.delivStockUrl && !includeFlag(PRODUCT_FLAG.STORE_DELIVERY_ONLY)">
              <a class="mr-5" :href="product.delivStockUrl" target="_blank">
                <span class="secondary-link-text">宅配在庫を確認</span>
              </a>
            </span>

            <!-- 店舗在庫を確認のダイアログ -->
            <v-dialog class="dialog store-stock-dialog" v-model="stockDialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <span
                  class="store-stock-dialog-link d-inline-block"
                  v-if="!includeFlag(PRODUCT_FLAG.DELIVERY_ONLY) && !includeFlag(PRODUCT_FLAG.DIRECT_SHIPMENT)"
                  v-bind="attrs"
                  v-on="on"
                  >店舗在庫を確認</span
                >
              </template>

              <v-card class="store-stock-dialog-area" :class="{ sp: $vuetify.breakpoint.smAndDown }">
                <div class="store-stock-dialog-text">店舗在庫については、お受け取りを予定している店舗へのお電話をお願いいたします。</div>
                <v-btn class="store-stock-dialog-btn" block depressed tile @click="stockDialog = false" href="https://sss.kitamura.jp/" target="_blank">
                  店舗検索へ
                  <v-icon class="store-stock-dialog-btn-icon" small>fas fa-chevron-right</v-icon>
                </v-btn>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </div>

      <hr />

      <!-- 商品が購入できない場合の中古価格情報 -->
      <template v-if="!canBuyProduct && product.templateId != '468' && usedProductsSummary.itemCount > 0">
        <div class="product-buy-info">
          <!-- 価格表示 -->
          <v-row>
            <v-col cols="4" class="ma-auto">中古価格</v-col>
            <v-col cols="8">
              <span class="d-inline-block red-font"> {{ formatPrice(usedProductsSummary.minPrice) }}円 </span>
              <span class="d-inline-block">(税込)～</span>
              <span class="d-inline-block secondary-link">
                <a :href="'/ec/list?keyword3=' + (isUsed ? usedProduct.janCode : product.janCode) + '&type=u'">
                  <span class="secondary-link-text">({{ usedProductsSummary.itemCount }}点)</span>
                </a>
              </span>
            </v-col>
          </v-row>
        </div>

        <hr />
      </template>

      <!-- インクルードエリア0 960px以上 -->
      <div v-html="includeHtml0" v-if="$vuetify.breakpoint.mdAndUp"></div>

      <!-- バリエーション 960px以上 -->
      <div class="product-variation" v-if="variationName && $vuetify.breakpoint.mdAndUp">
        <div class="product-variation-name">バリエーション：{{ variationName }}</div>
        <div class="d-flex flex-wrap mt-2">
          <v-card
            class="product-variation-item"
            v-for="variation in product.variationItems"
            :key="variation.janCode"
            v-on:mouseover="mouseoverVariation(variation)"
            v-on:mouseleave="mouseleaveVariation()"
            tile
            :disabled="
              isUsed &&
                (!variationUsedProducts.filter((item) => item.janCode === variation.janCode).length ||
                  !variationUsedProducts.filter((item) => item.janCode === variation.janCode)[0].itemCount)
            "
          >
            <router-link :to="isUsed ? '/ec/list?keyword3=' + variation.janCode + '&type=u' : '/ec/pd/' + variation.janCode">
              <div v-if="isUsed" class="product-variation-item-count">
                {{
                  variationUsedProducts.filter((item) => item.janCode === variation.janCode).length
                    ? variationUsedProducts.filter((item) => item.janCode === variation.janCode)[0].itemCount
                    : ''
                }}
              </div>
              <img class="ma-auto" width="100%" :src="variation.imagePath" @error="noimage" :alt="variation.itemName" />
            </router-link>
          </v-card>
        </div>
      </div>
    </div>

    <!-- 商品操作エリア -->
    <div class="product-operation">
      <!-- 返品不可テキスト -->
      <div class="return-not-text">
        返品不可 ※例外あり
        <a class="ml-2" :href="isUsed ? '/special/sale-fair/page/used-navi/#a06' : '/sitemap/riyou_henpin_index.html'">
          <v-icon>far fa-question-circle</v-icon>
        </a>
      </div>

      <v-card class="product-operation-area" tile outlined>
        <!-- 数量 -->
        <div class="product-operation-count" v-if="canBuyProduct && cartOption.canBuyNum > 1">
          <div class="product-operation-count-text">数量</div>
          <div class="product-operation-count-input">
            <v-select v-model="purchaseNnum" :items="purchaseNnumList" outlined dense></v-select>
          </div>
        </div>

        <!-- 購入可能数 -->
        <div class="mb-3" v-if="!isUsed && quantityParUnit > 0">
          <span class="font-weight-bold red-font">おひとり様{{ quantityParUnit }}点限り</span>
        </div>

        <!-- Comming Soon / Sold Out -->
        <div class="not-sales" v-if="cartOption.text === CART_STATUS.NOTIFY_ARRIVAL || cartOption.text === CART_STATUS.SOLD_OUT">
          <tamplate v-if="cartOption.text === CART_STATUS.NOTIFY_ARRIVAL">
            <span class="not-sales-text" v-if="cartOption.text === CART_STATUS.NOTIFY_ARRIVAL">{{ USED_SALES_STATUS[1].text }}</span>
            <a class="not-sales-help" href="https://ecfaq.kitamura.jp/s/article/EC0020190524004" target="_blank" @click.stop>
              <v-icon class="not-sales-help-icon"> far fa-question-circle </v-icon>
            </a>
          </tamplate>
          <tamplate v-if="cartOption.text === CART_STATUS.SOLD_OUT">
            <span class="not-sales-text" v-if="cartOption.text === CART_STATUS.SOLD_OUT">{{ cartOption.text }}</span>
            <a class="not-sales-help" href="https://ecfaq.kitamura.jp/s/article/EC0020190524008" target="_blank" @click.stop>
              <v-icon class="not-sales-help-icon"> far fa-question-circle </v-icon>
            </a>
          </tamplate>
        </div>

        <!-- カートに入れるのダイアログ 960px以上 -->
        <v-dialog id="cart-dialog" class="dialog" v-model="cartDialog" width="1000px" v-if="cartOption.isShow && $vuetify.breakpoint.mdAndUp">
          <template v-slot:activator="{ attrs }">
            <v-btn
              class="cart-button"
              :class="{ disabled: cartOption.disabled }"
              v-if="cartOption.text !== CART_STATUS.SOLD_OUT"
              tile
              block
              color="rgba(255, 132, 0, 1)"
              height="60px"
              v-bind="attrs"
              @click="openCartOptionDialog(cartOption.isFavoriteOperation)"
              :disabled="cartOption.disabled"
            >
              <v-icon v-if="cartOption.text == CART_STATUS.ADD_CART || cartOption.text == CART_STATUS.RESERVATE" class="cart-button-icon" small
                >fas fa-shopping-cart</v-icon
              >
              <v-icon v-else-if="cartOption.text == CART_STATUS.NOTIFY_ARRIVAL" class="cart-button-icon" small>far fa-envelope</v-icon>
              {{ cartOption.text }}
            </v-btn>
          </template>

          <v-card class="cart-dialog">
            <div class="cart-dialog-basic d-flex">
              <div class="cart-dialog-price">
                <v-row>
                  <v-col cols="3" class="ma-auto">{{ getProductPriceLabel }}</v-col>
                  <v-col cols="9">
                    <span class="sell-price-font">{{ formatPrice(product.price) }}円</span><span class="red-font">（税込）</span><br />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3">送料</v-col>
                  <v-col cols="9">
                    <span :class="{ 'red-font': getPostage != '有料' }">
                      {{ getPostage }}
                    </span>
                  </v-col>
                </v-row>
              </div>
              <div class="cart-dialog-button">
                <v-btn color="rgba(255, 132, 0, 1)" class="cart-button" tile block height="60px" @click="addCart()">
                  <v-icon v-if="cartOption.text == CART_STATUS.ADD_CART || cartOption.text == CART_STATUS.RESERVATE" class="cart-button-icon" small
                    >fas fa-shopping-cart</v-icon
                  >
                  <v-icon v-else-if="cartOption.text == CART_STATUS.NOTIFY_ARRIVAL" class="cart-button-icon" small>far fa-envelope</v-icon>
                  {{ cartOption.text }}
                </v-btn>
              </div>
            </div>

            <!-- カートに入れるオプション -->
            <div id="cart-dialog-options" class="cart-options">
              <div class="cart-options-title">オプション選択</div>
              <div class="cart-options-area">
                <div class="cart-options-item" v-if="includeFlag(PRODUCT_FLAG.FIVE_YEAR_WARRANTY_COVERAGE)">
                  <v-checkbox v-model="selectedOption.addWarranty">
                    <template v-slot:label>
                      <div class="cart-options-item-text">
                        5年間保証に加入する
                        <span v-if="includeFlag(PRODUCT_FLAG.TRADE_IN_ANYTHING_TARGET) || product.isTrade">
                          <br />(保証料金 なんでも下取りあり：<span class="red-font mr-2">{{ formatPrice(product.extWarrantyChargeIncludeTrade) }}円</span>
                          なし：<span class="red-font">{{ formatPrice(product.extWarrantyCharge) }}円</span>)
                        </span>
                        <span v-else>
                          (保証料金：<span class="red-font">{{ formatPrice(product.extWarrantyCharge) }}円 </span>)</span
                        >
                        <a href="/sitemap/riyou_hoshou_index.html" @click.stop>
                          <v-icon class="ml-6"> far fa-question-circle </v-icon>
                        </a>
                      </div>
                    </template>
                  </v-checkbox>
                  <div class="cart-options-item-sub-text">
                    自然故障の際、メーカー保証1年に加え、カメラのキタムラの保証で最長4年間、合計5年間メーカー保証と同等の保証が受けられます
                  </div>
                </div>
                <div class="cart-options-item" v-if="includeFlag(PRODUCT_FLAG.GIFT_AVAILABLE)">
                  <v-checkbox v-model="selectedOption.addWrapping">
                    <template v-slot:label>
                      <div class="cart-options-item-text">
                        ラッピング(<span class="red-font">300円</span>)※宅配限定
                        <a href="/special/sale-fair/page/wrapping-gift/" @click.stop>
                          <v-icon class="ml-6"> far fa-question-circle </v-icon>
                        </a>
                      </div>
                    </template>
                  </v-checkbox>
                  <div class="cart-options-item-sub-text">
                    高級感ある不織布素材使ったラッピングギフトバッグでラッピングいたします<br />
                    ※商品によってはギフトバッグに入らない場合がございます。その際は、包装紙に包んでお届けいたします
                  </div>
                </div>
                <div class="cart-options-item" v-if="includeFlag(PRODUCT_FLAG.TRADE_IN_ANYTHING_TARGET) || product.isTrade">
                  <v-checkbox v-model="selectedOption.applyTradeIn">
                    <template v-slot:label>
                      <div class="cart-options-item-text">
                        下取り申込をする(<span class="red-font">{{ formatPrice(product.tradeInPrice) }}円</span>値引き)
                        <a href="/sitemap/riyou_shitadori_index.html" @click.stop>
                          <v-icon class="ml-6"> far fa-question-circle </v-icon>
                        </a>
                      </div>
                    </template>
                  </v-checkbox>
                  <div class="cart-options-item-sub-text">ご不要なカメラ・レンズ・ビデオカメラ等をご用意頂くと、販売価格からさらにお安くお求めいただけます</div>
                </div>
              </div>
            </div>
          </v-card>
        </v-dialog>

        <!-- カートに入れる 960px未満 -->
        <v-btn
          class="cart-button"
          :class="{ disabled: cartOption.disabled }"
          tile
          block
          color="rgba(255, 132, 0, 1)"
          height="60px"
          v-if="cartOption.isShow && $vuetify.breakpoint.smAndDown && cartOption.text !== CART_STATUS.SOLD_OUT"
          @click="openCartOptionDialog(cartOption.isFavoriteOperation)"
          :disabled="cartOption.disabled"
        >
          <v-icon v-if="cartOption.text == CART_STATUS.ADD_CART || cartOption.text == CART_STATUS.RESERVATE" class="cart-button-icon" small
            >fas fa-shopping-cart</v-icon
          >
          <v-icon v-else-if="cartOption.text == CART_STATUS.NOTIFY_ARRIVAL" class="cart-button-icon" small>far fa-envelope</v-icon>
          {{ cartOption.text }}
        </v-btn>

        <!-- カートに入れる:ドロワー 960px未満  -->
        <v-navigation-drawer
          class="drawer-layout cart-drawer"
          v-model="cartDrawer"
          fixed
          right
          temporary
          v-if="cartOption.isShow && $vuetify.breakpoint.smAndDown"
        >
          <div class="drawer-layout-area">
            <div class="drawer-layout-back" @click="cartDrawer = !cartDrawer">
              <v-icon class="drawer-layout-back-icon" small>fas fa-chevron-left</v-icon>
              <span class="drawer-layout-back-text">戻る</span>
            </div>
            <div class="drawer-layout-contents">
              <div class="cart-drawer-btn" @click="cartDrawer = !cartDrawer">
                <v-btn class="cart-button" tile block color="rgba(255, 132, 0, 1)" height="60px" @click="addCart()" :disabled="cartOption.disabled">
                  <v-icon v-if="cartOption.text == CART_STATUS.ADD_CART || cartOption.text == CART_STATUS.RESERVATE" class="cart-button-icon" small
                    >fas fa-shopping-cart</v-icon
                  >
                  <v-icon v-else-if="cartOption.text == CART_STATUS.NOTIFY_ARRIVAL" class="cart-button-icon" small>far fa-envelope</v-icon>
                  {{ cartOption.text }}
                </v-btn>
              </div>
              <!-- カートに入れるオプション -->
              <div id="cart-dialog-options" class="cart-options">
                <div class="cart-options-title">オプション選択</div>
                <div class="cart-options-area">
                  <div class="cart-options-item" v-if="includeFlag(PRODUCT_FLAG.FIVE_YEAR_WARRANTY_COVERAGE)">
                    <v-checkbox v-model="selectedOption.addWarranty">
                      <template v-slot:label>
                        <div class="cart-options-item-text">
                          5年間保証に加入する<br />
                          <span v-if="includeFlag(PRODUCT_FLAG.TRADE_IN_ANYTHING_TARGET) || product.isTrade"
                            >(保証料金<br />なんでも下取り<br />あり：<span class="red-font">{{ formatPrice(product.extWarrantyChargeIncludeTrade) }}円</span
                            ><br />なし：<span class="red-font">{{ formatPrice(product.extWarrantyCharge) }}円</span>)</span
                          >
                          <span v-else
                            >(保証料金：<span class="red-font">{{ formatPrice(product.extWarrantyCharge) }}円</span>)</span
                          >
                        </div>
                        <a href="/sitemap/riyou_hoshou_index.html" @click.stop>
                          <v-icon class="cart-options-item-icon"> far fa-question-circle </v-icon>
                        </a>
                      </template>
                    </v-checkbox>
                  </div>
                  <div class="cart-options-item" v-if="includeFlag(PRODUCT_FLAG.GIFT_AVAILABLE)">
                    <v-checkbox v-model="selectedOption.addWrapping">
                      <template v-slot:label>
                        <div class="cart-options-item-text">ラッピング(<span class="red-font">300円</span>)<br />※宅配限定</div>
                        <a href="/special/sale-fair/page/wrapping-gift/" @click.stop>
                          <v-icon class="cart-options-item-icon"> far fa-question-circle </v-icon>
                        </a>
                      </template>
                    </v-checkbox>
                  </div>
                  <div class="cart-options-item" v-if="includeFlag(PRODUCT_FLAG.TRADE_IN_ANYTHING_TARGET) || product.isTrade">
                    <v-checkbox v-model="selectedOption.applyTradeIn">
                      <template v-slot:label>
                        <div class="cart-options-item-text">
                          下取り申込をする<br />(<span class="red-font">{{ formatPrice(product.tradeInPrice) }}円</span>値引き)
                        </div>
                        <a href="/sitemap/riyou_shitadori_index.html" @click.stop>
                          <v-icon class="cart-options-item-icon"> far fa-question-circle </v-icon>
                        </a>
                      </template>
                    </v-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-navigation-drawer>

        <!-- お気に入り・持ってるボタン 960px以上 -->
        <div class="product-operation-fav-have" v-if="$vuetify.breakpoint.mdAndUp && product.janCode">
          <div class="product-operation-fav">
            <v-dialog max-width="550px" v-model="favoriteDialog" class="dialog">
              <template v-slot:activator="{ attrs }">
                <v-card class="product-operation-fav-have-btn" :class="{ active: memberProduct.isFavorite }" outlined v-bind="attrs" @click="registerFavorite">
                  <v-icon large class="ma-1">far fa-heart</v-icon>
                  <div>お気に入り登録</div>
                </v-card>
              </template>

              <product-favorite-dialog
                :isUsed="isUsed"
                :janCode="product.janCode"
                :isFavorite="memberProduct.isFavorite"
                @onRegisterd="onFavoriteRegisterd()"
                @onClosed="onFavoriteDialogClosed()"
              ></product-favorite-dialog>
            </v-dialog>
            <a class="product-operation-fav-have-link" href="/mypage/favorite_list.html">
              一覧を見る
              <v-icon x-small>fas fa-chevron-right</v-icon>
            </a>
          </div>
          <div class="product-operation-have">
            <v-card class="product-operation-fav-have-btn" :class="{ active: memberProduct.isHave }" @click="registerHaving" outlined>
              <v-icon large class="ma-1">far fa-hand-paper</v-icon>
              <div>持っている</div>
            </v-card>
            <a class="product-operation-fav-have-link" href="/mypage/owned_list.html">
              一覧を見る
              <v-icon x-small>fas fa-chevron-right</v-icon>
            </a>
          </div>
        </div>

        <!-- 中古カメラ6ヶ月保証 -->
        <div v-if="isUsed && usedProduct.isWarranty" class="float-clear">
          <hr />
          <span class="font-weight-bold">中古カメラ6ヶ月保証</span>
          <hr class="dashed-line" />
          <div class="my-2">
            自然故障の際に、お買い上げ金額を上限として、修理させていただきます
            <a :href="netChukoUrl + 'ec/service/used-6months-warranty.html'" target="_blank">
              <v-icon class="float-right mr-1">far fa-question-circle</v-icon>
            </a>
          </div>
        </div>

        <!-- 高価買取実施中 -->
        <div v-if="includeFlag(PRODUCT_FLAG.HIGH_PURCHASE_PRICE_TARGET) && usedProductsSummary.maxAssessPrice" class="float-clear">
          <hr />
          <span class="font-weight-bold">高価買取実施中</span>
          <hr class="dashed-line" />
          <div class="my-2">
            {{ product.itemName }}の<br />買取価格
            <span class="red-font font-weight-bold"> 最大{{ formatPrice(usedProductsSummary.maxAssessPrice) }}円 </span>
            <br />
            <a class="float-right my-2" :href="netChukoUrl + 'sell/item-list.do?goodsname=' + product.janCode + '&pattern=2'" target="_blank">
              詳しい買取価格を調べる
              <v-icon x-small>fas fa-chevron-right</v-icon>
            </a>
          </div>
        </div>

        <!-- おすすめ支払い方法 -->
        <div class="float-clear" v-if="shopCreditChargeNum && shopCreditSimNum && shopCreditSimAmount">
          <hr />
          <span class="font-weight-bold">おすすめ支払い方法</span>
          <hr class="dashed-line" />
          <div class="my-2">
            ショッピングクレジット最大{{ shopCreditChargeNum }}回払いまで金利・手数料を当店が負担します<br />
            {{ shopCreditSimNum }}回払いなら月々
            <span class="red-font font-weight-bold">約{{ formatPrice(shopCreditSimAmount) }}円</span>
            <a href="/sitemap/riyou_shiharai_index.html">
              <v-icon class="float-right mr-1">far fa-question-circle</v-icon>
            </a>
          </div>
        </div>
      </v-card>

      <!-- シェア -->
      <div class="share-area float-right">
        <div class="d-flex">
          <div class="mr-2 my-auto">シェアする</div>
          <a :href="'http://www.facebook.com/share.php?u=https://shop.kitamura.jp/ec/pd/' + product.janCode + '/'" class="mr-2" target="_blank">
            <img src="@/assets/sns/facebook.png" width="30px" contain />
          </a>

          <a
            :href="'http://twitter.com/share?text=' + product.itemName + '&url=https://shop.kitamura.jp/ec/pd/' + product.janCode + '/&via=camera_kitamura'"
            target="_blank"
            class="mr-2"
          >
            <img src="@/assets/sns/twitter.png" width="30px" contain />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import dayjs from 'dayjs';
import { computed, reactive, ref, toRefs } from '@vue/composition-api';
import ProductFlags from '@/components/product-detail/product-flags.vue';
import ProductInnerImageZoom from '@/components/product-detail/product-inner-image-zoom.vue';
import { getYouTubeThumbnailUrl, getYouTubeUrl, noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import { MemberProduct, ProductDetail, UsedProductDetail, UsedProductsSummary, variationProduct } from '@/types/product';
import IncludeFileService from '@/logic/include-file.service';
import productFavoriteDialog from '../common/product-favorite-dialog.vue';
import { ConditionItem } from '@/types/conditions';
import ProductListService from '@/logic/product-list.service';
import { CART_ERROR_LIST } from '@/constants/cart-error';
import { PRODUCT_FLAG } from '@/constants/product-flag';
import { CART_STATUS } from '@/constants/cart-status';
import { USED_SALES_STATUS } from '@/constants/used-sales-status';

/** 画像の種類 */
type ImageType = 'image' | 'movie';

export default Vue.extend({
  name: 'product-info',
  components: {
    'product-flags': ProductFlags,
    'product-favorite-dialog': productFavoriteDialog,
    'product-inner-image-zoom': ProductInnerImageZoom
  },
  props: {
    // 表示中のアイテムコード
    routeItemCode: {
      required: true,
      type: String
    },
    // 中古かどうか
    isUsed: {
      required: true,
      type: Boolean
    },
    // 商品情報
    product: {
      required: true,
      type: Object as PropType<ProductDetail>
    },
    // 中古商品情報
    usedProduct: {
      required: true,
      type: Object as PropType<UsedProductDetail>
    },
    // 新品用中古情報
    usedProductsSummary: {
      required: true,
      type: Object as PropType<UsedProductsSummary>
    },
    // 「カートに入れる」ボタン
    cartOption: {
      required: true,
      type: Object as PropType<{
        /** 商品購入可能数 */
        canBuyNum: number;
        /** ボタン表示文字 */
        text: string;
        /** ボタン無効化 */
        disabled: boolean;
        /** ボタン表示 */
        isShow: boolean;
        /** カートに投入ではなく、お気に入り登録を実行する */
        isFavoriteOperation: boolean;
      }>
    }
  },
  setup(props: any, context) {
    const { authorizer, errorStore } = context.root.$store;

    const state = reactive({
      netChukoUrl: process.env.VUE_APP_NET_CHUKO_URL,
      usedProductsDrawer: false,
      cartDialog: false,
      imageDialog: false,
      stockDialog: false,
      usedGradeDialog: false,
      favoriteDialog: false,
      // 購入可能商品であるかどうか
      canBuyProduct: true,
      cannotBuyReason: '',
      // 購入時のオプション
      selectedOption: {
        addWarranty: false,
        addWrapping: false,
        applyTradeIn: false
      },
      // 選択した画像
      selectedImage: '',
      selectedImageType: ref<ImageType>('image'),
      // FIXME: 以下、現在の選択Typeとバスの１セットがあれば良いはずなので、リファクタリング
      // 大画像
      mainImagePath: '',
      mainImageType: ref<ImageType>('image'),
      // ダイアログ内の選択した画像
      selectedImageInDialog: '',
      selectedImageTypeInDialog: ref<ImageType>('image'),
      // ダイアログ内の大画像
      mainImagePathInDialog: '',
      mainImageTypeInDialog: ref<ImageType>('image'),
      // 商品画像リスト(サンプル画像は含む)
      productImageList: [] as Array<{
        key: string;
        imagePath: string;
      }>,
      // 店舗情報（中古商品の時のみ）
      shop: {} as {
        address: string;
        tel: string;
      },
      // 商品アイコンフラグ
      productIconFlags: {
        /** NEW */
        NEW_ARRIVAL: false,
        /** なんでも下取り */
        TRADE_IN_ANYTHING_TARGET: false,
        /** 店舗受取限定 */
        STORE_DELIVERY_ONLY: false,
        /** メーカー直送 */
        DIRECT_SHIPMENT: false,
        /** 数量限定 */
        LIMITED_QUANTITY: false,
        /** トクトク交換対象 */
        TOKUTOKU_EXCHANGE_TARGET: false,
        /** トクトク据置 */
        TOKUTOKU_DEFERRED: false
      },
      // PC バリエーションの部分に出す名称
      variationName: '',
      // バリエーション中古件数用
      variationUsedProducts: [] as Array<UsedProductsSummary>,
      sameTypeProductCount: 0,
      memberProduct: {} as MemberProduct,
      // 商品購入数
      purchaseNnum: 1,
      // 購入可能数
      quantityParUnit: props.product.quantityParUnit || 0,
      // 購入できる商品数リスト
      purchaseNnumList: [] as Array<number>,
      // カート投入時のエラーコード
      cartErrorList: CART_ERROR_LIST,
      // インクルードファイル0
      includeHtml0: '',
      // SP drawer各種
      imageDrawer: false,
      variationDrawer: false,
      cartDrawer: false,
      // SP 画像カルーセルアイテム
      imageCarouselItem: 0,
      imageDrawerItem: 0,
      // ショッピングクレジット
      shopCreditChargeNum: ref<number | null>(null),
      shopCreditSimNum: ref<number | null>(null),
      shopCreditSimAmount: ref<number | null>(null)
    });

    // 新品・中古共通処理
    // バリエーション
    if (props.product.variationItems && props.product.variationItems.length > 0) {
      state.variationName = props.product.itemName;

      if (props.isUsed) {
        // バリエーションカウント取得
        const janCodes = [] as Array<string>;
        props.product.variationItems.forEach((item: variationProduct) => {
          janCodes.push(item.janCode);
        });

        ProductService.searchUsedProductsSummary(janCodes).then((result) => {
          state.variationUsedProducts = result.itemInfo;
        });
      }
    }

    if (props.isUsed) {
      /** -------------------------------
        中古の場合
      ------------------------------- */

      // 画像
      state.selectedImage = props.usedProduct.imageUrl1;
      state.mainImagePath = props.usedProduct.imageUrl1;

      if (props.usedProduct.imageUrl1) {
        state.productImageList.push({
          key: '1',
          imagePath: props.usedProduct.imageUrl1
        });

        if (props.usedProduct.imageUrl2) {
          state.productImageList.push({
            key: '2',
            imagePath: props.usedProduct.imageUrl2
          });

          if (props.usedProduct.imageUrl2) {
            state.productImageList.push({
              key: '3',
              imagePath: props.usedProduct.imageUrl3
            });
          }
        }
      }

      // 商品アイコンフラグ
      // 登録日から７日以内の場合「NEW」フラグON
      if (dayjs().diff(dayjs(props.usedProduct.chukoCreatedDate), 'day') <= 7) {
        state.productIconFlags.NEW_ARRIVAL = true;
      }
      // 直送販売フラグが0の場合「店舗受取限定」フラグON
      if (!props.usedProduct.isDirect) {
        state.productIconFlags.STORE_DELIVERY_ONLY = true;
      }

      // ショッピングクレジット
      state.shopCreditChargeNum = props.usedProduct.shopCreditChargeNum;
      state.shopCreditSimNum = props.usedProduct.shopCreditSimNum;
      state.shopCreditSimAmount = props.usedProduct.shopCreditSimAmount;
    } else {
      /** -------------------------------
        新品の場合
      ------------------------------- */

      /**
       * 商品アイコンフラグ
       */
      // 各種フラグ
      if (props.product.flags.length > 0) {
        props.product.flags.forEach((flag: number) => {
          switch (flag) {
            // 新着
            case PRODUCT_FLAG.NEW_ARRIVAL:
              state.productIconFlags.NEW_ARRIVAL = true;
              break;
            // なんでも下取り
            case PRODUCT_FLAG.TRADE_IN_ANYTHING_TARGET:
              state.productIconFlags.TRADE_IN_ANYTHING_TARGET = true;
              break;
            // 店舗受取限定
            case PRODUCT_FLAG.STORE_DELIVERY_ONLY:
              state.productIconFlags.STORE_DELIVERY_ONLY = true;
              break;
            // メーカー直送
            case PRODUCT_FLAG.DIRECT_SHIPMENT:
              state.productIconFlags.DIRECT_SHIPMENT = true;
              break;
            // トクトク交換対象
            case PRODUCT_FLAG.TOKUTOKU_EXCHANGE_TARGET:
              state.productIconFlags.TOKUTOKU_EXCHANGE_TARGET = true;
              break;
            // トクトク据置
            case PRODUCT_FLAG.TOKUTOKU_DEFERRED:
              state.productIconFlags.TOKUTOKU_DEFERRED = true;
              break;
            default:
              break;
          }
        });
      }

      // なんでも下取り対象のとき「なんでも下取り」フラグON
      if (props.product.isTrade) {
        state.productIconFlags.TRADE_IN_ANYTHING_TARGET = true;
      }

      // 販売可能数残の値が（undefined、または、null）ではなく、値が「9999」でもないとき「数量限定」フラグON
      if (props.product.realSalesLimitNum != null && props.product.realSalesLimitNum != 9999) {
        state.productIconFlags.LIMITED_QUANTITY = true;
      }

      // 商品購入可能数が1より上の時は数量表示
      if (props.cartOption.canBuyNum > 1) {
        state.purchaseNnumList = [...Array(props.cartOption.canBuyNum).keys()].map((i) => ++i);
      }

      // 初期表示画像設定
      state.selectedImage = props.product.images[0].imagePath;
      state.mainImagePath = props.product.images[0].imagePath;

      // 商品画像格納
      props.product.images.forEach((img: { rowNo: number; imagePath: string }) => {
        state.productImageList.push({
          key: 'img' + img.rowNo,
          imagePath: img.imagePath
        });
      });

      // ショッピングクレジット
      state.shopCreditChargeNum = props.product.shopCreditChargeNum;
      state.shopCreditSimNum = props.product.shopCreditSimNum;
      state.shopCreditSimAmount = props.product.shopCreditSimAmount;
    }

    // サンプル画像格納(新品・中古どちらも利用)
    if (props.product?.sampleImages?.length) {
      props.product.sampleImages.forEach((img: { rowNo: number; sampleImagePath: string }) => {
        state.productImageList.push({
          key: 'sample' + img.rowNo,
          imagePath: img.sampleImagePath
        });
      });
    }

    // フラグ
    function includeFlag(flagNum: number): boolean {
      return ProductService.includeFlag(props.product.flags, flagNum);
    }

    // 商品が購入できない理由
    if (props.isUsed) {
      switch (props.usedProduct.status) {
        case 0:
          state.canBuyProduct = false;
          state.cannotBuyReason = '準備中商品のため購入できません';
          break;
        case 6:
          state.canBuyProduct = false;
          state.cannotBuyReason = CART_STATUS.SOLD_OUT;
          break;
      }
    } else if (includeFlag(PRODUCT_FLAG.FINISHED_PRODUCT) || props.product.isSalesEnd) {
      state.canBuyProduct = false;
      state.cannotBuyReason = '完了商品のため購入できません';
    }

    // 送料
    const getPostage = computed((): string => {
      if (props.isUsed) {
        return '店舗受取りなら送料無料';
      } else if (includeFlag(PRODUCT_FLAG.FREE_SHIPPING)) {
        if (includeFlag(PRODUCT_FLAG.NEKOPOSU_TARGET)) {
          return 'ネコポスなら送料無料';
        } else {
          return '送料無料';
        }
      } else if (includeFlag(PRODUCT_FLAG.STORE_DELIVERY_AVAILABLE)) {
        return '店舗受取りなら送料無料';
      } else {
        return '有料';
      }
    });

    // 商品価格ラベル
    const getProductPriceLabel = computed((): string => {
      if (props.isUsed) {
        return '中古価格';
      } else if (props.product.templateId === 468) {
        return 'アウトレット価格';
      } else {
        switch (props.product.priceDiv) {
          case 2:
            return '会員価格';
          case 3:
            return '特別価格';
          case 4:
            return '限定価格';
          default:
            return '新品価格';
        }
      }
    });

    // 商品画像選択時の挙動
    function selectProductImage(imagePath: string, imageType?: ImageType) {
      if (typeof imageType === 'undefined') {
        imageType = 'image';
      }

      state.selectedImage = imagePath;
      state.selectedImageType = imageType;
      state.mainImagePath = state.selectedImage;
      state.mainImageType = state.selectedImageType;
      state.selectedImageInDialog = imagePath;
      state.selectedImageTypeInDialog = imageType;
      state.mainImagePathInDialog = state.selectedImageInDialog;
      state.mainImageTypeInDialog = state.selectedImageTypeInDialog;
    }

    // ダイアログ内の商品画像選択時の挙動
    function selectProductImageInDialog(imagePath: string, imageType?: ImageType) {
      if (typeof imageType === 'undefined') {
        imageType = 'image';
      }

      state.selectedImageInDialog = imagePath;
      state.selectedImageTypeInDialog = imageType;
      state.mainImagePathInDialog = state.selectedImageInDialog;
      state.mainImageTypeInDialog = state.selectedImageTypeInDialog;
    }

    // SP用 カルーセルの表示変更時の挙動
    function changeProductImageInDrawer() {
      if (state.imageDrawerItem === state.productImageList.length) {
        state.selectedImageTypeInDialog = 'movie';
      } else {
        state.selectedImageTypeInDialog = 'image';
      }
    }

    // バリデーションマウスオーバー時の挙動
    function mouseoverVariation(item: variationProduct) {
      state.mainImagePath = item.imagePath;
      state.variationName = item.itemName;
    }

    // バリデーションマウスリーブ時の挙動
    function mouseleaveVariation() {
      state.mainImagePath = state.selectedImage;
      state.variationName = props.product.itemName;
    }

    // ログインしている場合、会員商品を取得
    const isLoggedIn = authorizer.isLoggedIn;
    if (isLoggedIn) {
      const janCode = props.isUsed ? props.usedProduct.janCode : props.product.janCode;
      ProductService.fetchMemberProduct(janCode).then((memberProduct) => (state.memberProduct = memberProduct));
    }

    // お気に入り商品登録
    async function registerFavorite() {
      const isLoggedIn = authorizer.isLoggedIn;
      if (isLoggedIn) {
        state.favoriteDialog = true;
      } else {
        alert('お気に入り登録はログインが必要です。');
        authorizer.openLoginMenu();
      }
    }

    // お気に入り登録ダイアログを閉じる
    function onFavoriteDialogClosed() {
      state.favoriteDialog = false;
    }

    // お気に入り登録時
    async function onFavoriteRegisterd() {
      try {
        const janCode = props.product?.janCode;
        const memberProduct = await ProductService.fetchMemberProduct(janCode);
        state.memberProduct = memberProduct;
      } catch (error) {
        console.error(error);
      }

      state.favoriteDialog = false;
    }

    // 持っている商品
    async function registerHaving() {
      const isLoggedIn = authorizer.isLoggedIn;
      if (isLoggedIn) {
        try {
          const janCode = props.product?.janCode;
          await ProductService.registerHaving(janCode);
          const memberProduct = await ProductService.fetchMemberProduct(janCode);
          state.memberProduct = memberProduct;
        } catch (error) {
          errorStore.errorMessage =
            'ただいまシステムが混みあっている可能性があります。しばらくお待ちいただきますようお願い申し上げます。ご迷惑をおかけして申し訳ございません。';
        }
      } else {
        alert('持っている登録はログインが必要です。');
        authorizer.openLoginMenu();
      }
    }

    // カート投入
    function addCart() {
      const displayPrice = props.isUsed ? props.usedProduct.price : props.product.price;
      const options = props.isUsed ? null : state.selectedOption;
      ProductService.addCart(props.routeItemCode, props.isUsed, options, displayPrice, state.purchaseNnum).then(() => (location.href = '/cart.html'));
    }

    /** カートオプション表示 */
    const openCartOptionDialog = (isFavoriteOperation = false) => {
      if (isFavoriteOperation) {
        registerFavorite();
      } else if (props.isUsed) {
        addCart();
      } else if (
        includeFlag(PRODUCT_FLAG.FIVE_YEAR_WARRANTY_COVERAGE) ||
        includeFlag(PRODUCT_FLAG.GIFT_AVAILABLE) ||
        includeFlag(PRODUCT_FLAG.TRADE_IN_ANYTHING_TARGET) ||
        props.product.isTrade
      ) {
        // オプション（5年保証、ギフト、下取り）が出来る場合でオプションダイアログを表示する
        if (context.root.$vuetify.breakpoint.mdAndUp) {
          state.cartDialog = true;
        } else {
          state.cartDrawer = true;
        }
      } else {
        addCart();
      }
    };

    /** インクルードファイルを取得 */
    IncludeFileService.fetchIncludeFile(`product/${props.product.templateId}_0.html`).then((response) => (state.includeHtml0 = response));

    /**
     * 中古商品の際の同型商品の数を取得する
     */
    if (props.isUsed) {
      const itemName = props.usedProduct.itemName.replace('【中古】', '');
      const condition: Array<ConditionItem> = [
        {
          paramCode: 'category',
          paramText: 'カテゴリ',
          value: props.usedProduct.prdType,
          valueText: props.usedProduct.prdType
        },
        {
          paramCode: 'keyword',
          paramText: '商品名',
          value: itemName,
          valueText: itemName
        }
      ];
      ProductListService.searchUsedItemCount(condition).then((response) => (state.sameTypeProductCount = response.total));
    }

    const isZoomImg = (src: string): boolean => {
      if (context.root.$vuetify.breakpoint.mdAndUp) {
        const element = new Image();
        element.src = src;
        return element.naturalWidth >= 700 || element.naturalHeight >= 700;
      } else {
        return false;
      }
    };

    const isPortraitImg = (src: string): boolean => {
      const element = new Image();
      element.src = src;
      return element.naturalWidth < element.naturalHeight;
    };

    /**
     * 中古商品の際の同型商品へのリンクを取得する
     */
    const getSameTypeProductsLink = computed(function(): string {
      const itemName = props.usedProduct.itemName.replace('【中古】', '');
      return '/ec/list?type=u&category=' + props.usedProduct.prdType + '&keyword=' + itemName;
    });

    /**
     * メーカーでフィルタした商品一覧ページへのリンク
     */
    const makerProductListLink = computed(() => {
      const categoryQuery = props.product.breadcrumbs && props.product.breadcrumbs.length > 0 ? '&category=' + props.product.breadcrumbs[0].path : '';
      return '/ec/list?narrow18=0' + categoryQuery + '&s1=' + props.product.makerName;
    });

    return {
      ...toRefs(state),
      PRODUCT_FLAG,
      CART_STATUS,
      USED_SALES_STATUS,
      includeFlag,
      getPostage,
      registerFavorite,
      registerHaving,
      addCart,
      mouseoverVariation,
      mouseleaveVariation,
      selectProductImage,
      selectProductImageInDialog,
      changeProductImageInDrawer,
      getYouTubeThumbnailUrl,
      getYouTubeUrl,
      formatPrice,
      getProductPriceLabel,
      openCartOptionDialog,
      onFavoriteRegisterd,
      onFavoriteDialogClosed,
      noimage,
      isZoomImg,
      isPortraitImg,
      getSameTypeProductsLink,
      makerProductListLink
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
// secondary色のリンク
.secondary-link {
  a:hover .secondary-link-text {
    color: inherit;
  }

  a .secondary-link-text {
    color: $text-secondary;
  }
}

hr {
  margin: 5px 0px;
}

.red-font {
  color: $text-red;
}

.sell-price-font {
  font-size: 28px;
  color: $text-red;
  font-weight: bold;
}

.dialog {
  z-index: 600;
}

.question-link {
  margin: auto -1em auto 5px;
}

// 画像(アスペクト比固定、最大化)
// FIXME:commonに移行して全体対応して方が良いかも
%img-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
%img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

// 「カートに入れる」ボタン
.cart-button {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  color: $text-white;
  text-transform: none;

  &-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
}

// タブボタン（画像・動画）
.image-tab-button {
  width: 300px;
  margin-right: 20px;

  &.active {
    color: $text-white;
    background-color: $ec-red;
  }

  &-icon {
    position: absolute;
    left: 0;
  }
}

/** -------------------------------
  商品詳細メイン情報 960px以上
------------------------------- */
.basic-info-area {
  max-width: 100%;
  padding: 0px 50px;
  margin-bottom: 10px;
}

// 画像表示エリア
.product-image {
  &-area {
    margin-right: 20px;

    &.area-pc {
      width: 100%;
      max-width: 500px;
      min-width: 200px;
      flex-grow: 4;
    }
  }

  &-main {
    @extend %img-box;
    width: 100%;
    height: 500px;
    margin-bottom: 20px;

    &-all {
      width: 100%;
      height: 100%;
    }

    &-expansion-icon {
      font-size: 28px;
      position: absolute;
      right: 0;
      bottom: 0;
    }

    &-img {
      @extend %img;
    }
  }

  &-thumbnail-list {
    display: flex;
    flex-wrap: wrap;
  }

  $thumbnail-margin: 8px;
  &-thumbnail {
    @extend %img-box;
    width: calc((100% - (#{$thumbnail-margin} * 3)) / 4);
    height: auto;
    margin-right: $thumbnail-margin;
    margin-bottom: $thumbnail-margin;
    border: 2px solid $ec-grey;

    &:nth-child(4n) {
      margin-right: 0;
    }

    &:hover {
      border-color: $ec-red;
    }

    &-img {
      @extend %img;
    }
  }

  // Youtube(dialogと共通)
  &-youtube {
    position: relative;
    width: 100%;
    height: 0px;
    margin: auto;
    padding-top: 56.25%;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

// 商品画像のダイアログ
$dialog-thumbnail-size: 140px;
$dialog-thumbnail-margin: 20px;

.image-dialog {
  margin: 0 auto;
  padding: 30px;
  width: 80vw;
  height: 90vh;
  max-width: 1200px;
  max-height: 800px;
  position: relative;

  &-close {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  &-head {
    margin-bottom: 12px;
  }

  &-body {
    display: flex;
    justify-content: space-between;
    height: calc(100% - 48px);
  }

  &-main {
    @extend %img-box;
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 640px;
    max-height: 640px;
    margin: 0 auto;
    padding: 0 !important;
    overflow: hidden;
    flex-grow: 1;
    flex-shrink: 1;

    &-inner-img {
      overflow: unset;
    }

    &-img {
      @extend %img;
      &.portrait {
        object-fit: scale-down !important;
      }
    }
  }

  &-thumbnail-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 30%;
    height: 100%;
    max-width: 340px;
    margin-left: 20px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  &-thumbnail {
    @extend %img-box;
    width: calc((100% - #{$dialog-thumbnail-margin}) / 2);
    height: calc((100% - (#{$dialog-thumbnail-margin} * 3)) / 4);
    max-width: $dialog-thumbnail-size;
    max-height: $dialog-thumbnail-size;
    margin-right: $dialog-thumbnail-margin;
    border: 2px solid $ec-grey;

    &:not(:nth-child(4n)) {
      margin-bottom: $dialog-thumbnail-margin;
    }

    &:hover {
      border-color: $ec-red;
    }

    &-img {
      @extend %img;
    }
  }
}

// 製品情報エリア
.product-info-area {
  width: 100%;
  max-width: 520px;
  min-width: 300px;
  margin: 0px 10px;
  flex-grow: 2;
}

// 製品名
.product-name-area {
  margin: 10px 0px;
}

// 製品のキャッチコピー
.product-caption-area {
  margin: 10px 0px;
}

// 購入時情報（価格、送料など）
.product-buy-info {
  margin: 10px 0px;
  padding: 0px 40px;
}

// 完了商品のとき
.product-not-buy-text-area {
  margin: 10px 0px;
  padding: 0 15px;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  background-color: $bg-grey;
}

// バリエーション
.product-variation {
  margin: 10px 0px;

  &-name {
    @include ellipsis(3rem);
  }

  &-item {
    width: 80px;
    height: 80px;
    margin-left: 8px;
    margin-bottom: 8px;
    border: 2px solid $ec-grey;

    &:hover {
      border-color: $ec-red;
    }

    &-count {
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      line-height: 26px;
      border: solid 2px $ec-light-grey2;
      border-radius: 25px;
      background: $bg-white;
      text-align: center;
    }
  }
}

// 中古商品の状態ダイアログ
$used-grade-table-border: solid 1px $ec-light-grey2;
.used-grade-dialog {
  &-area {
    padding: 20px;
  }

  &-title {
    font-size: 23px;
    margin-bottom: 12px;
    padding: 12px 8px;
    border-top: solid 4px $ec-black;
    border-bottom: solid 1px $ec-light-grey2;
  }

  &-description {
    margin-bottom: 12px;
  }
  &-note {
    color: $text-grey;
    margin-top: 12px;
  }

  &-table {
    border-collapse: collapse;
    border: $used-grade-table-border;

    th {
      background: $bg-grey;
      font-weight: normal;

      &:last-child {
        width: 70%;
      }
    }

    th,
    td {
      padding: 8px;
      border: $used-grade-table-border;
    }
  }
}

// 店舗在庫ダイアログ
.store-stock-dialog {
  &-link {
    color: $text-secondary;

    &:hover {
      color: $text-red;
    }
  }

  &-area {
    padding: 32px;
  }

  &-text {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 32px;
  }

  &-btn {
    height: 60px !important;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid $ec-grey;
    background: $bg-white !important;

    &-icon {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 10px;
      color: $text-red !important;
    }
  }
}

// 商品操作エリア
.product-operation {
  width: 100%;
  max-width: 300px;
  min-width: 260px;
  flex-grow: 1;

  &-area {
    padding: 12px;
    margin-bottom: 10px;
    font-size: 15px;
  }

  // 数量
  &-count {
    display: flex;
    width: 100%;
    text-align: center;
    margin-bottom: 12px;

    &-text {
      height: 100%;
      margin: auto 10px auto 0px;
    }
    &-input {
      width: 100px;
      height: 50px;
      margin-right: 10px;
    }
  }

  // Comming Soon / Sold Out
  .not-sales {
    position: relative;
    margin-bottom: 16px;
    background: $bg-light-grey;
    line-height: 60px;
    text-align: center;

    &-text {
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0.0892857143em;
      color: $text-grey;
    }

    &-help {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 16px;
      margin: auto;

      &-icon {
        border-radius: 50%;
        background: $bg-white;
      }
    }
  }

  // カートに入れる
  .cart-button {
    margin-bottom: 16px;

    &.disabled {
      color: $text-grey !important;
    }
  }

  // お気に入り・持ってるボタン
  &-fav-have {
    display: flex;
    margin-bottom: 12px;
    text-align: right;

    &-btn {
      padding: 16px 4px;
      margin-bottom: 8px;
      text-align: center;

      &:hover .v-icon,
      &:active .v-icon,
      &.active .v-icon {
        color: $ec-red;
      }
    }

    &-link {
      color: $text-black;
      text-decoration: none;
    }
  }

  // お気に入りボタンエリア
  &-fav {
    width: 100%;
  }

  // 持っているボタンエリア
  &-have {
    width: 100%;
    margin-left: 0.5em;
  }
}

// 返品不可テキスト
.return-not-text {
  margin-bottom: 12px;
  text-align: right;
}

// カートに入れるダイアログ
.cart-dialog {
  &-basic {
    padding: 20px 40px;
  }

  &-price {
    width: 500px;
    margin-left: 150px;
  }

  &-button {
    width: 300px;
  }
}
.cart-options {
  &-title {
    padding: 0 20px;
    font-size: 28px;
    font-weight: bold;
    line-height: 60px;
    background-color: $bg-grey;
  }

  &-area {
    padding: 20px;
  }

  &-item {
    &-text {
      font-weight: bold;
      color: $text-black;
      font-size: 18px;
      margin-top: 3px;
    }

    &-sub-text {
      margin-top: -15px;
      margin-left: 30px;
      font-size: 16px;
    }
  }
}

.dashed-line {
  border-top: dashed 1px $ec-black;
}

.float-clear {
  overflow: hidden;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}

// シェア
.share-area {
  height: 30px;
  margin-top: 10px;
}

/** -------------------------------
  商品詳細メイン情報 960px未満
------------------------------- */
.sp {
  // 共通：ドロワー
  .drawer-layout {
    z-index: 510;
    width: 100% !important;

    &-area {
      height: 100%;
    }

    $drawer-back-height: 45px;
    $drawer-back-border-b: 1px;
    &-back {
      padding: 0 12px;
      height: $drawer-back-height;
      line-height: calc(#{$drawer-back-height} - #{$drawer-back-border-b});
      border-bottom: solid $drawer-back-border-b $ec-light-grey2;

      &-icon {
        color: $ec-grey;
        margin-right: 8px;
      }

      &-text {
        vertical-align: middle;
      }
    }

    &-contents {
      min-height: calc(100% - #{$drawer-back-height});
    }
  }

  // 商品詳細メイン情報
  .basic-info-area {
    flex-direction: column;
    padding: 0;
  }

  // 製品名
  .product-name-area {
    width: 100%;
    margin: 0 0 20px;
    padding: 0 8px;
  }

  // 画像表示エリア
  .product-image {
    $margin-x: 8px;
    &-area {
      position: relative;
      width: calc(100% - (#{$margin-x} * 2));
      min-width: 200px;
      margin: 0 $margin-x 12px;
    }

    &-icon-area {
      position: absolute;
      top: -20px;
      left: 0;
      z-index: 1;
    }

    &-icon {
      margin-left: 8px;
      border-color: $ec-grey;
      background: $bg-white;
      color: $text-black;

      &.active {
        color: $text-red;
      }
    }

    &-icon:nth-of-type(n + 2) {
      margin-left: 16px;
    }
  }

  // 画像カルーセル(ドロワーと共通)
  .product-image-carousel {
    &-item {
      @extend %img-box;
      width: 100%;
      height: 365px;

      &-img {
        @extend %img;
        color: $text-black;
      }

      &-youtube,
      &-player {
        width: 100%;
        height: 100%;
      }
    }
  }

  // 画像ドロワー
  .image-drawer {
    &-main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: space-between;
      padding: 8px;

      &-tab {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;

        .image-tab-button {
          flex: auto;
          width: auto;
          margin-right: 0;

          &:not(:last-child) {
            margin-right: 12px;
          }
        }
      }

      &-thumbnail-list {
        display: flex;
        align-content: space-between;
        margin-top: 12px;
      }

      $drawer-thumbnail-size: 45px;
      &-thumbnail {
        @extend %img-box;
        width: $drawer-thumbnail-size;
        height: $drawer-thumbnail-size;
        border: 2px solid $ec-grey;

        &:not(:last-child) {
          margin-right: 4px;
        }

        &-img {
          @extend %img;
        }
      }
    }
  }

  // 製品情報エリア
  .product-info-area {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }

  // 購入時情報（価格、送料など）
  .product-buy-info {
    margin: 0;
    padding: 0 8px;

    .row {
      margin: 0;
    }
  }

  // バリエーション
  .product-variation {
    margin: 0 12px 12px;

    &-title {
      padding: 0 8px;
      margin-bottom: 8px;
    }

    &-first-item {
      position: relative;
      display: flex;
      align-items: center;
      padding: 8px 32px 8px 8px;
      border: solid 1px $ec-grey;

      &-img-area {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 60px;
        width: 60px;
        margin-right: 8px;
      }

      &-img {
        max-width: 100%;
        max-height: 100%;
      }

      &-name {
        flex: 1 1 auto;
        font-weight: bold;
      }

      &-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 12px;
      }
    }
  }

  // バリエーションドロワー
  .variation-drawer {
    &-list {
      padding: 20px;
      background: $bg-grey;
    }

    &-area {
      border: solid 1px $ec-light-grey2;
    }

    &-item {
      position: relative;
      background: $bg-white;

      &:not(:last-child) {
        border-bottom: solid 1px $ec-light-grey2;
      }

      &.disabled::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: rgba(221, 221, 221, 0.7);
        z-index: 511;
      }

      &-link {
        display: flex;
        align-items: center;
        padding: 4px;
      }

      &-img-area {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 60px;
        width: 60px;
        margin-right: 12px;
        padding: 12px 0;
      }

      &-count {
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        line-height: 26px;
        border: solid 2px $ec-light-grey2;
        border-radius: 25px;
        background: $bg-white;
        text-align: center;
      }

      &-img {
        max-width: 100%;
        max-height: 100%;
      }

      &-name {
        flex: 1 1 auto;
      }
    }
  }

  // 完了商品のとき
  .product-not-buy-text-area {
    margin: 10px 20px;
    padding: 0 15px;
  }

  // 店舗在庫ダイアログ
  &.store-stock-dialog {
    &-area {
      padding: 20px;
    }
  }

  // 商品操作エリア
  .product-operation {
    max-width: 100%;
    width: 100%;
    padding: 0 8px;

    &-area {
      padding: 12px;
    }
  }

  // カートに入れるドロワー
  .cart-drawer {
    &-btn {
      padding: 12px;

      .cart-button {
        margin: 0;
      }
    }
  }
  .cart-options {
    &-title {
      padding: 0 12px;
      font-size: 18px;
      line-height: 48px;
    }

    &-area {
      padding: 0;
    }

    &-item {
      padding: 0 12px;
      border-bottom: solid 1px $ec-light-grey2;

      &-text {
        margin-top: 0;
        font-size: 16px;
        line-height: 1.2;
      }

      &-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
      }
    }
  }
}
</style>

<style lang="scss">
/** -------------------------------
  商品詳細メイン情報 960px未満
------------------------------- */
// 画像カルーセル ドット
.product-image-carousel .v-carousel__controls {
  background: none !important;
  position: static !important;
}
.product-image-carousel .v-carousel__controls .theme--dark.v-btn.v-btn--icon {
  color: #bbb;
}

.product-image-carousel .v-carousel__controls .theme--dark.v-btn.v-btn--icon.v-item--active {
  color: #999;
}
</style>
