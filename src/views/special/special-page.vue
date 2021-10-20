<template>
  <div>
    <component :is="currentComponent" v-if="!errorMsg" @validation-period="verifyDate" />

    <!-- 表示期間外の場合 -->
    <not-found :errorMessage="errorMsg" v-else-if="errorMsg" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import { isDebugMode, validationPeriod } from '@/logic/utils';
import dayjs from 'dayjs';
import SpecialProductService from '@/logic/special-product.service';
import NotFound from '@/components/common/not-found.vue';
import '@/assets/special/style/common.scss';

// 特集ページの内容を実装したコンポーネントを読み込みます。
// ---- ↓ サンプル ------
import SampleComponent1 from '@/components/special/sample-component1.vue';
import SampleComponent2 from '@/components/special/sample-component2.vue';
import SampleComponent3 from '@/components/special/sample-component3.vue';
import SampleComponent4 from '@/components/special/sample-component4.vue';
import Component20210401 from '@/components/special/2021/date-0401.vue';
import Component20210402 from '@/components/special/2021/date-0402-test.vue';
// ---- ↑ サンプル ------

import Componentwireless from '@/components/special/general/wireless-image-share.vue';
// camera
import Componentdslr from '@/components/special/camera/dslr.vue';
import Storage from '@/components/special/camera/storage.vue';
import Lensfilter from '@/components/special/camera/lensfilter.vue';
import Girlscamera from '@/components/special/camera/girlscamera.vue';
import Operaglass from '@/components/special/camera/operaglass.vue';
import Frame from '@/components/special/camera/frame.vue';
import Photomount from '@/components/special/camera/photomount.vue';
import Hosizora from '@/components/special/camera/hosizora.vue';
import Travel from '@/components/special/camera/travel.vue';
import OkamotoYutaka from '@/components/special/camera/okamoto-yutaka.vue';
// lensfilter
import Lensfilter1869 from '@/components/special/camera/lensfilter/1869.vue';
import Lensfilter2638 from '@/components/special/camera/lensfilter/2638.vue';
import Lensfilter1104 from '@/components/special/camera/lensfilter/1104.vue';
import LensfilterNd500 from '@/components/special/camera/lensfilter/nd500.vue';

// original
import Originalkitamuracamera from '@/components/special/camera/original/kitamuracamera.vue';

// compact
import Componentcompact from '@/components/special/camera/compact/compact.vue';
import Componentcompactitem01 from '@/components/special/camera/compact/item01.vue';
import Componentcompactitem02 from '@/components/special/camera/compact/item02.vue';
// lens
import Componentlens from '@/components/special/camera/lens/lens.vue';
import Componentilenscanon from '@/components/special/camera/lens/item-canon.vue';
import Componentilensnikon from '@/components/special/camera/lens/item-nikon.vue';
import Componentilenspentax from '@/components/special/camera/lens/item-pentax.vue';
import Componentilenssony from '@/components/special/camera/lens/item-sony.vue';
import Componentilensmicroft from '@/components/special/camera/lens/item-microft.vue';
import Componentilensfuji from '@/components/special/camera/lens/item-fuji.vue';
import Componentilensbouen from '@/components/special/camera/lens/item-bouen.vue';
import Componentilenstansyouten from '@/components/special/camera/lens/item-tansyouten.vue';
import Componentilensmacro from '@/components/special/camera/lens/item-macro.vue';
import Componentilenskoukaku from '@/components/special/camera/lens/item-koukaku.vue';
import Componentutsurundesu from '@/components/special/camera/filmcamera/utsurundesu.vue';
import LensBatis from '@/components/special/camera/lens/batis.vue';
import Fujinon from '@/components/special/camera/lens/fujinon.vue';
import LensSony5074 from '@/components/special/camera/lens/sony/5074.vue';
import LensMzuiko from '@/components/special/camera/lens/mzuiko.vue';
import Lumixg from '@/components/special/camera/lens/lumixg.vue';
import Lens809 from '@/components/special/camera/lens/809.vue';
import LensFujifilmXf100400 from '@/components/special/camera/lens/fujifilm/xf100-400.vue';

//新製品扉
import Componentfeature from '@/components/special/camera/feature/feature.vue';
import Componentfeaturedslr from '@/components/special/camera/feature/dslr.vue';
import Componentfeaturelens from '@/components/special/camera/feature/lens.vue';
import Componentfeaturecompact from '@/components/special/camera/feature/compact.vue';
import Componentfeaturevideo from '@/components/special/camera/feature/video.vue';
import Leica from '@/components/special/camera/feature/leica.vue';
// canon
import CanonEosr5r6 from '@/components/special/camera/feature/canon/eosr5-r6.vue';
import CanonRf1435mmf4lisusm from '@/components/special/camera/feature/canon/rf14-35mmf4lisusm.vue';
import CanonTripod from '@/components/special/camera/tripod.vue';
import CanonRf100f28l from '@/components/special/camera/feature/canon/rf100-f28l.vue';
import CanonRf400f28l from '@/components/special/camera/feature/canon/rf400-f28l.vue';
import CanonEos90d from '@/components/special/camera/feature/canon/eos90d.vue';
import CanonEoskissm2 from '@/components/special/camera/feature/canon/eoskiss_m2.vue';
import CanonRf50f18 from '@/components/special/camera/feature/canon/rf50-f18.vue';
import CanonEosrp from '@/components/special/camera/feature/canon/eosrp.vue';
import CanonEoskissx10i from '@/components/special/camera/feature/canon/eoskissx10i.vue';
import Canon6dmk2 from '@/components/special/camera/feature/canon/6dmk2.vue';
import Canon7dmk2 from '@/components/special/camera/feature/canon/7dmk2.vue';
import CanonrF100500mmf4571lisusm from '@/components/special/camera/feature/canon/rf100-500mm-f4.5-7.1l-is-usm.vue';
import CanonrEosr3 from '@/components/special/camera/feature/canon/eosr3.vue';
import Canonr1dxmk3 from '@/components/special/camera/feature/canon/1dxmk3.vue';
import CanonrRf600mmRf800mmF11IsStm from '@/components/special/camera/feature/canon/rf600mm-rf800mm-f11-is-stm.vue';
import Canonrf70200 from '@/components/special/camera/feature/canon/rf70-200-f4l.vue';
import CanonEos80d from '@/components/special/camera/feature/canon/eos80d.vue';
import Canon5dmk4 from '@/components/special/camera/feature/canon/5dmk4.vue';
import CanonEosr from '@/components/special/camera/feature/canon/eosr.vue';
import Canon5ds from '@/components/special/camera/feature/canon/5ds.vue';
import CanonEoskiss10I4496 from '@/components/special/camera/feature/canon/eoskiss10I/4496.vue';
// sony
import Sony7rm4a7rm3a from '@/components/special/camera/feature/sony/7rm4a-7rm3a.vue';
import Sonyfe14f18gm from '@/components/special/camera/feature/sony/fe14f18gm.vue';
import SonySel24f28g from '@/components/special/camera/feature/sony/sel24f28g.vue';
import SonySel50f12gm from '@/components/special/camera/feature/sony/sel50f12gm.vue';
import SonyCinemalineFx3 from '@/components/special/camera/feature/sony/cinemaline-fx3.vue';
import SonyA1 from '@/components/special/camera/feature/sony/a1.vue';
import SonySel35f14gm from '@/components/special/camera/feature/sony/sel35f14gm.vue';
import SonyActioncam from '@/components/special/camera/feature/sony/actioncam.vue';
import SonyVlogcamZv1Zv1g from '@/components/special/camera/feature/sony/vlogcam_zv1_zv1g.vue';
import Sony7sm3 from '@/components/special/camera/feature/sony/7sm3.vue';
import Sony7c from '@/components/special/camera/feature/sony/7c.vue';
import Sony7m3 from '@/components/special/camera/feature/sony/7m3.vue';
import Sony6600 from '@/components/special/camera/feature/sony/6600.vue';
import Sony7r4 from '@/components/special/camera/feature/sony/7r4.vue';
import SonyRx100m7 from '@/components/special/camera/feature/sony/rx100-m7.vue';
import SonyA5100 from '@/components/special/camera/feature/sony/a5100.vue';
import SonyWfc500 from '@/components/special/camera/feature/sony/wf-c500.vue';
import Sony9II from '@/components/special/camera/feature/sony/9II.vue';
import SonySel70200gm2 from '@/components/special/camera/feature/sony/sel70200gm2.vue';
import SonyRx100m3 from '@/components/special/camera/feature/sony/rx100m3.vue';
import SonyVlogcamzv1zv1g4709 from '@/components/special/camera/feature/sony/vlogcam_zv1_zv1g/4709.vue';
import SonyA9 from '@/components/special/camera/feature/sony/a9.vue';
import SonyA7r3 from '@/components/special/camera/feature/sony/a7r3.vue';

// fujifilm
import FujifilmGfx100s from '@/components/special/camera/feature/fujifilm/gfx100s.vue';
import FujifilmXf70300mmf456rlmoiswr from '@/components/special/camera/feature/fujifilm/xf70-300mmf4-56rlm-ois-wr.vue';
import FujifilmXe4 from '@/components/special/camera/feature/fujifilm/x-e4.vue';
import FujifilmXs10 from '@/components/special/camera/feature/fujifilm/x-s10.vue';
import FujifilmXf18mmf14rlmwr from '@/components/special/camera/feature/fujifilm/xf18mmf14-r-lm-wr.vue';
import FujifilmXt4 from '@/components/special/camera/feature/fujifilm/xt4.vue';
import Fujifilmxf33f14 from '@/components/special/camera/feature/fujifilm/xf33f14.vue';
import Fujifilnewgoods from '@/components/special/camera/feature/fujifilm/newgoods.vue';
import FujifilmX100v from '@/components/special/camera/feature/fujifilm/x100v.vue';
import FujifilmXt200 from '@/components/special/camera/feature/fujifilm/x-t200.vue';
import FujifilmXpro3 from '@/components/special/camera/feature/fujifilm/xpro3.vue';
import Fujifilmxf50mmf1rwr from '@/components/special/camera/feature/fujifilm/xf50mm-f1rwr.vue';
import FujifilmXt44531 from '@/components/special/camera/feature/fujifilm/xt4/4531.vue';
import FujifilmInstaxMini11 from '@/components/special/camera/feature/fujifilm/instax/mini11.vue';
import Fujifilgfx50sII from '@/components/special/camera/feature/fujifilm/gfx50sII.vue';
import FujifilmXt3 from '@/components/special/camera/feature/fujifilm/xt3.vue';
import FujifilmXt2 from '@/components/special/camera/feature/fujifilm/xt2.vue';
// nikon
import NikonZfc from '@/components/special/camera/feature/nikon/zfc.vue';
import NikonZ5 from '@/components/special/camera/feature/nikon/z_5.vue';
import NikonD780 from '@/components/special/camera/feature/nikon/D780.vue';
import NikonZ50 from '@/components/special/camera/feature/nikon/z_50.vue';
import NikonZ6IIZ7II from '@/components/special/camera/feature/nikon/z6II_z7II.vue';
import NikonD750 from '@/components/special/camera/feature/nikon/D750.vue';
import NikonD500 from '@/components/special/camera/feature/nikon/D500.vue';
import NikonD6 from '@/components/special/camera/feature/nikon/d6.vue';
//import NikonZ40mm from '@/components/special/camera/feature/nikon/z_40mm_f2.vue';
import NikonZ7z6 from '@/components/special/camera/feature/nikon/z7z6.vue';
import NikonD7500 from '@/components/special/camera/feature/nikon/d7500.vue';
import Nikonz50mmz14mm from '@/components/special/camera/feature/nikon/z50mm_z14mm.vue';
import NikonP950 from '@/components/special/camera/feature/nikon/p950.vue';
import NikonD850 from '@/components/special/camera/feature/nikon/d850.vue';
import NikonD5 from '@/components/special/camera/feature/nikon/d5.vue';
import NikonNikkorz70200mmf28vrs from '@/components/special/camera/feature/nikon/nikkorz_70-200mm_f2.8_vr_s.vue';
import NikonNikon1 from '@/components/special/camera/feature/nikon/nikon1.vue';
import NikonD810 from '@/components/special/camera/feature/nikon/d810.vue';
// olympus
import OlympusPenEP7 from '@/components/special/camera/feature/olympus/pen-e-p7.vue';
import OlympusEm1m2 from '@/components/special/camera/feature/olympus/em1m2.vue';
import OlympusEm1m3 from '@/components/special/camera/feature/olympus/em1m3.vue';
// panasonic
import PanasonicGh5m2 from '@/components/special/camera/feature/panasonic/gh5m2.vue';
import Panasonicg100 from '@/components/special/camera/feature/panasonic/g100.vue';
import Panasonicg9 from '@/components/special/camera/feature/panasonic/g9.vue';
import Panasonictechnics from '@/components/special/camera/feature/panasonic/technics.vue';
// sigma
import SigmaFpl from '@/components/special/camera/feature/sigma/fp_l.vue';
// tamron
import Tamron150500mmf567 from '@/components/special/camera/feature/tamron/150-500mm-f5-6-7.vue';
// pentax
import Pentaxk3mk3 from '@/components/special/camera/feature/pentax/k-3mk3.vue';
// ricoh
import Ricohgr3x from '@/components/special/camera/feature/ricoh/gr3x.vue';

// general
import Tokutokukoukan from '@/components/special/general/tokutokukoukan.vue';
import Campaign from '@/components/special/general/campaign.vue';
import PrintServicesquare from '@/components/special/general/print-service/square.vue';
import Tuyutaisaku from '@/components/special/general/tuyutaisaku.vue';
import Prepare from '@/components/special/general/prepare.vue';
import graduationEntrance from '@/components/special/general/graduation-entrance.vue';
import keirou from '@/components/special/general/keirou.vue';
import Pet from '@/components/special/general/pet.vue';
import Tokutokusueoki from '@/components/special/general/tokutokusueoki.vue';

// general/highly_recommended
import highlyRecommended20151120 from '@/components/special/general/highly_recommended/2015/1120.vue';
import highlyRecommended20150605 from '@/components/special/general/highly_recommended/2015/0605.vue';
import highlyRecommended from '@/components/special/general/highly_recommended.vue';
import highlyRecommended20194121 from '@/components/special/general/highly_recommended/2019/4121.vue';
import highlyRecommended20194357 from '@/components/special/general/highly_recommended/2019/4357.vue';
import highlyRecommended20204909 from '@/components/special/general/highly_recommended/2020/4909.vue';
import highlyRecommended20204725 from '@/components/special/general/highly_recommended/2020/4725.vue';
import highlyRecommended20204872 from '@/components/special/general/highly_recommended/2020/4872.vue';
import highlyRecommended20204722 from '@/components/special/general/highly_recommended/2020/4722.vue';
import highlyRecommended20150410 from '@/components/special/general/highly_recommended/2015/0410.vue';
import highlyRecommended20151224 from '@/components/special/general/highly_recommended/2015/1224.vue';
import highlyRecommended20150501 from '@/components/special/general/highly_recommended/2015/0501.vue';
// general/sportsday
import Sportsday from '@/components/special/general/sportsday.vue';
import Sportsday485 from '@/components/special/general/sportsday/485.vue';
import Sportsday531 from '@/components/special/general/sportsday/531.vue';
import Sportsday1196 from '@/components/special/general/sportsday/1196.vue';
import SportsdayPhotoKnowhow1 from '@/components/special/general/sportsday/photo-knowhow-1.vue';
// general/photo-mono
import PhotomonoMacrolens from '@/components/special/general/photo-mono/macro-lens.vue';
import PhotomonoG9pro from '@/components/special/general/photo-mono/g9pro.vue';
import Photomono50mmlens from '@/components/special/general/photo-mono/50mmlens.vue';
// general/summerhomework
import SummerhomeworkMoon from '@/components/special/general/summerhomework/moon.vue';
// general/stationery/mannenhitsu
import MannenhitsuNenga from '@/components/special/general/stationery/mannenhitsu/nenga.vue';

// page
import Deliver from '@/components/special/page/deliver.vue';
import Paypay from '@/components/special/page/paypay.vue';
import TabletCalculateGuarantee from '@/components/special/page/tablet/calculate/guarantee.vue';
// album
import AlbumFeature from '@/components/special/camera/album/feature.vue';
import AlbumFeature1985 from '@/components/special/camera/album/feature/1985.vue';
import AlbumFeature1986 from '@/components/special/camera/album/feature/1986.vue';
import AlbumFeature1996 from '@/components/special/camera/album/feature/1996.vue';
import AlbumFeature1997 from '@/components/special/camera/album/feature/1997.vue';
import AlbumOriginal1119 from '@/components/special/camera/album/original/1119.vue';
import Album from '@/components/special/camera/album.vue';
import Album1439 from '@/components/special/camera/album/1439.vue';
import Album1440 from '@/components/special/camera/album/1440.vue';
import AlbumOriginal2052 from '@/components/special/camera/album/original/2052.vue';
import Album3765 from '@/components/special/camera/album/3765.vue';
import Album3766 from '@/components/special/camera/album/3766.vue';

// other
import Backnumber from '@/components/special/camera/feature/backnumber.vue';
import Salefair from '@/components/special/sale-fair.vue';
import filmcamera from '@/components/special/camera/filmcamera/filmcamera.vue';
import filmcamera889 from '@/components/special/camera/filmcamera/889.vue';
import filmcamera890 from '@/components/special/camera/filmcamera/890.vue';
import filmcamera891 from '@/components/special/camera/filmcamera/891.vue';
import filmcamera892 from '@/components/special/camera/filmcamera/892.vue';

// polarie
import Polarie from '@/components/special/camera/polarie.vue';
import PolarieAcc from '@/components/special/camera/polarie/acc.vue';
import PolarieStartrail from '@/components/special/camera/polarie/startrail.vue';

// astronomical
import astronomical from '@/components/special/camera/astronomical/astronomical.vue';
import Moonlook from '@/components/special/camera/astronomical/moonlook.vue';
import Telescope from '@/components/special/camera/astronomical/telescope.vue';

// printer
import Printer759 from '@/components/special/camera/printer/759.vue';
import Printer3133 from '@/components/special/camera/printer/3133.vue';

// kaden
import Iphone from '@/components/special/kaden/smart_phone/iphone.vue';
import XsXsMaxXr from '@/components/special/kaden/smart_phone/iphone/xs_xsmax_xr.vue';
import Componentaircleanercompare from '@/components/special/kaden/air-purifier/aircleanercompare.vue';
import KadenRiceCookerBestbuy from '@/components/special/kaden/rice-cooker-bestbuy.vue';
import KadenSmartPhoneIphone7 from '@/components/special/kaden/smart_phone/iphone7.vue';
import KadenToasterOven from '@/components/special/kaden/toaster-oven.vue';
import KadenRicemillInterview from '@/components/special/kaden/ricemill/interview.vue';
import KadenAirPurifierDaikin from '@/components/special/kaden/air-purifier/daikin.vue';
import KadenHeyabosi from '@/components/special/kaden/heyabosi.vue';
import KadenSmartphoneIphone7Iphone7camera from '@/components/special/kaden/smart_phone/iphone7/iphone7-camera.vue';

// bag/feature
import Trekking from '@/components/special/camera/bag/feature/trekking.vue';
import Trial from '@/components/special/camera/bag/trial/trial.vue';
// photomount
import Photomount244 from '@/components/special/camera/photomount/244.vue';
import Photomount253 from '@/components/special/camera/photomount/253.vue';
import Photomount252 from '@/components/special/camera/photomount/252.vue';
import Photomount254 from '@/components/special/camera/photomount/254.vue';
import Photomount262 from '@/components/special/camera/photomount/262.vue';
import Photomount266 from '@/components/special/camera/photomount/266.vue';
import Photomount269 from '@/components/special/camera/photomount/269.vue';
import Photomount316 from '@/components/special/camera/photomount/316.vue';
import Photomount318 from '@/components/special/camera/photomount/318.vue';
import Photomount914 from '@/components/special/camera/photomount/914.vue';
import Photomount1362 from '@/components/special/camera/photomount/1362.vue';
import Photomount2433 from '@/components/special/camera/photomount/2433.vue';
import PhotomountFeature from '@/components/special/camera/photomount/feature.vue';
import PhotomountFeature317 from '@/components/special/camera/photomount/feature/317.vue';
import Photomount246 from '@/components/special/camera/photomount/246.vue';
import Photomount245 from '@/components/special/camera/photomount/245.vue';
// okamoto-yutaka
import OkamotoYutakaLeofoto from '@/components/special/camera/okamoto-yutaka/leofoto.vue';
import OkamotoYutakaSet from '@/components/special/camera/okamoto-yutaka/set.vue';
//tripod
import TripodType01 from '@/components/special/camera/tripod/type01.vue';
import TripodType02 from '@/components/special/camera/tripod/type02.vue';
import TripodType03 from '@/components/special/camera/tripod/type03.vue';
import TripodType04 from '@/components/special/camera/tripod/type04.vue';
import TripodType05 from '@/components/special/camera/tripod/type05.vue';
import TripodType06 from '@/components/special/camera/tripod/type06.vue';
import TripodParts01 from '@/components/special/camera/tripod/parts01.vue';
import TripodParts02 from '@/components/special/camera/tripod/parts02.vue';
import TripodParts03 from '@/components/special/camera/tripod/parts03.vue';
// dslr
import Dslr3228 from '@/components/special/camera/dslr/3228.vue';
import Dslr3229 from '@/components/special/camera/dslr/3229.vue';
// frame
import Frameordermade from '@/components/special/camera/frame/ordermade.vue';
import FrameShacolla from '@/components/special/camera/frame/shacolla.vue';
import Frame4086 from '@/components/special/camera/frame/4086.vue';
import Frame2037 from '@/components/special/camera/frame/2037.vue';
import Frame833 from '@/components/special/camera/frame/833.vue';
import Frame443 from '@/components/special/camera/frame/443.vue';
import Frame2441 from '@/components/special/camera/frame/2441.vue';
import Frame470 from '@/components/special/camera/frame/470.vue';
import Frame2446 from '@/components/special/camera/frame/2446.vue';
import Frame2889 from '@/components/special/camera/frame/2889.vue';
import Frame2442 from '@/components/special/camera/frame/2442.vue';
import Frame459 from '@/components/special/camera/frame/459.vue';
import Frame2440 from '@/components/special/camera/frame/2440.vue';
import Frame456 from '@/components/special/camera/frame/456.vue';
import Frame471 from '@/components/special/camera/frame/471.vue';
// storage
import Storage363 from '@/components/special/camera/storage/363.vue';
import Storage366 from '@/components/special/camera/storage/366.vue';
import Storage368 from '@/components/special/camera/storage/368.vue';
import Storage371 from '@/components/special/camera/storage/371.vue';
// sale
import Sale534 from '@/components/special/sale/feature01/534.vue';
import Sale535 from '@/components/special/sale/feature01/535.vue';
import Sale536 from '@/components/special/sale/feature01/536.vue';
import Sale537 from '@/components/special/sale/feature01/537.vue';
/**
 * 読み込んだコンポーネントを適用させるための設定です。
 * 適用させたいコンポーネントを追加してください。
 *
 * 任意の'コンポーネント名（区切る場合は、ハイフンを使用してください）': 上記でimportしたコンポーネント名
 */
const COMPONENT_LIST = {
  // 表示期間外の表示用のため、削除しないでください。
  'not-found': NotFound,
  // ---- ↓ サンプル ------
  sample1: SampleComponent1,
  sample2: SampleComponent2,
  sample3: SampleComponent3,
  sample4: SampleComponent4,
  component20210401: Component20210401,
  'component-20210402': Component20210402,
  // ---- ↑ サンプル ------

  //original
  'camera/original/kitamuracamera': Originalkitamuracamera,
  // compact
  'camera/compact': Componentcompact,
  'camera/compact/item01': Componentcompactitem01,
  'camera/compact/item02': Componentcompactitem02,
  // lens
  'camera/lens': Componentlens,
  'camera/lens/itemcanon': Componentilenscanon,
  'camera/lens/itemnikon': Componentilensnikon,
  'camera/lens/itempentax': Componentilenspentax,
  'camera/lens/itemsony': Componentilenssony,
  'camera/lens/itemmicroft': Componentilensmicroft,
  'camera/lens/itemfuji': Componentilensfuji,
  'camera/lens/itembouen': Componentilensbouen,
  'camera/lens/itemtansyouten': Componentilenstansyouten,
  'camera/lens/itemmacro': Componentilensmacro,
  'camera/lens/itemkoukaku': Componentilenskoukaku,
  'camera/lens/batis': LensBatis,
  'camera/lens/fujinon': Fujinon,
  'camera/lens/sony/5074': LensSony5074,
  'camera/lens/mzuiko': LensMzuiko,
  'camera/lens/lumixg': Lumixg,
  'camera/lens/809': Lens809,
  'camera/lens/fujifilm/xf100-400': LensFujifilmXf100400,

  // page
  'page/deliver': Deliver,
  'page/paypay': Paypay,
  'page/tablet/calculate/guarantee': TabletCalculateGuarantee,
  // album
  'camera/album/feature': AlbumFeature,
  'camera/album/feature/1985': AlbumFeature1985,
  'camera/album/feature/1986': AlbumFeature1986,
  'camera/album/feature/1996': AlbumFeature1996,
  'camera/album/feature/1997': AlbumFeature1997,
  'camera/album/original/1119': AlbumOriginal1119,
  'camera/album': Album,
  'camera/album/1439': Album1439,
  'camera/album/1440': Album1440,
  'camera/album/original/2052': AlbumOriginal2052,
  'camera/album/3765': Album3765,
  'camera/album/3766': Album3766,

  // general
  'general/tokutokukoukan': Tokutokukoukan,
  'general/campaign': Campaign,
  'general/tuyutaisaku': Tuyutaisaku,
  'general/graduationentrance': graduationEntrance,
  'general/prepare': Prepare,
  'general/wirelessimageshare': Componentwireless,
  'general/keirou': keirou,
  'general/pet': Pet,
  'general/tokutokusueoki': Tokutokusueoki,
  // general/sportsday
  'general/sportsday': Sportsday,
  'general/sportsday/485': Sportsday485,
  'general/sportsday/531': Sportsday531,
  'general/sportsday/1196': Sportsday1196,
  'general/sportsday/photo-knowhow-1': SportsdayPhotoKnowhow1,
  // general/highly_recommended
  'general/highly_recommended/2015/1120': highlyRecommended20151120,
  'general/highly_recommended/2015/0605': highlyRecommended20150605,
  'general/highly_recommended': highlyRecommended,
  'general/highly_recommended/2019/4121': highlyRecommended20194121,
  'general/highly_recommended/2019/4357': highlyRecommended20194357,
  'general/highly_recommended/2020/4909': highlyRecommended20204909,
  'general/highly_recommended/2020/4725': highlyRecommended20204725,
  'general/highly_recommended/2020/4872': highlyRecommended20204872,
  'general/highly_recommended/2020/4722': highlyRecommended20204722,
  'general/highly_recommended/2015/0410': highlyRecommended20150410,
  'general/highly_recommended/2015/1224': highlyRecommended20151224,
  'general/highly_recommended/2015/0501': highlyRecommended20150501,
  // general/print-service
  'general/print-service/square': PrintServicesquare,
  // general/photo_mono
  'general/photo_mono/macro-lens': PhotomonoMacrolens,
  'general/photo_mono/g9pro': PhotomonoG9pro,
  'general/photo_mono/50mmlens': Photomono50mmlens,

  // generak/summerhomework
  'general/summerhomework/moon': SummerhomeworkMoon,
  // general/stationery/mannenhitsu
  'general/stationery/mannenhitsu/nenga': MannenhitsuNenga,

  // camera
  'camera/dslr': Componentdslr,
  'camera/storage': Storage,
  'camera/lensfilter': Lensfilter,
  'camera/girlscamera': Girlscamera,
  'camera/operaglass': Operaglass,
  'camera/frame': Frame,
  'camera/tripod': CanonTripod,
  'camera/photomount': Photomount,
  'camera/hosizora': Hosizora,
  'camera/travel': Travel,
  'camera/okamoto-yutaka': OkamotoYutaka,

  // lensfilter
  'camera/lensfilter/1869': Lensfilter1869,
  'camera/lensfilter/2638': Lensfilter2638,
  'camera/lensfilter/1104': Lensfilter1104,
  'camera/lensfilter/nd500': LensfilterNd500,
  // polarie
  'camera/polarie': Polarie,
  'camera/polarie/acc': PolarieAcc,
  'camera/polarie/startrail': PolarieStartrail,

  // leica
  'camera/feature/leica': Leica,
  // astronomical
  'camera/astronomical': astronomical,
  'camera/astronomical/telescope': Telescope,
  'camera/astronomical/moonlook': Moonlook,
  //Printer
  'camera/printer/759': Printer759,
  'camera/printer/3133': Printer3133,
  // feature
  'camera/feature': Componentfeature,
  'camera/feature/dslr': Componentfeaturedslr,
  'camera/feature/lens': Componentfeaturelens,
  'camera/feature/compact': Componentfeaturecompact,
  'camera/feature/video': Componentfeaturevideo,
  // canon
  'camera/feature/canon/eosr5r6': CanonEosr5r6,
  'camera/feature/canon/rf1435mmf4lisusm': CanonRf1435mmf4lisusm,
  'camera/feature/canon/rf100f28l': CanonRf100f28l,
  'camera/feature/canon/rf400f28l': CanonRf400f28l,
  'camera/feature/canon/eos90d': CanonEos90d,
  'camera/feature/canon/eoskissm2': CanonEoskissm2,
  'camera/feature/canon/rf50f18': CanonRf50f18,
  'camera/feature/canon/eosrp': CanonEosrp,
  'camera/feature/canon/eoskissx10i': CanonEoskissx10i,
  'camera/feature/canon/6dmk2': Canon6dmk2,
  'camera/feature/canon/7dmk2': Canon7dmk2,
  'camera/feature/canon/rf100500mmf4571lisusm': CanonrF100500mmf4571lisusm,
  'camera/feature/canon/eosr3': CanonrEosr3,
  'camera/feature/canon/1dxmk3': Canonr1dxmk3,
  'camera/feature/canon/rf600mm-rf800mm_f11_is_stm': CanonrRf600mmRf800mmF11IsStm,
  'camera/feature/canon/rf70-200-f4l': Canonrf70200,
  'camera/feature/canon/eos80d': CanonEos80d,
  'camera/feature/canon/5dmk4': Canon5dmk4,
  'camera/feature/canon/eosr': CanonEosr,
  'camera/feature/canon/5ds': Canon5ds,
  'camera/feature/canon/eoskiss10I/4496': CanonEoskiss10I4496,

  // nikon
  'camera/feature/nikon/zfc': NikonZfc,
  'camera/feature/nikon/z5': NikonZ5,
  'camera/feature/nikon/D780': NikonD780,
  'camera/feature/nikon/z50': NikonZ50,
  'camera/feature/nikon/z6IIz7II': NikonZ6IIZ7II,
  'camera/feature/nikon/D750': NikonD750,
  'camera/feature/nikon/D500': NikonD500,
  'camera/feature/nikon/d6': NikonD6,
  'camera/feature/nikon/p950': NikonP950,
  'camera/feature/nikon/d850': NikonD850,
  'camera/feature/nikon/d5': NikonD5,
  // 'camera/feature/nikon/z_40mm_f2': NikonZ40mm,
  'camera/feature/nikon/z7z6': NikonZ7z6,
  'camera/feature/nikon/d7500': NikonD7500,
  'camera/feature/nikon/z50mm_z14-24mm': Nikonz50mmz14mm,
  'camera/feature/nikon/nikkorz_70-200mm_f2.8_vr_s': NikonNikkorz70200mmf28vrs,
  'camera/feature/nikon/nikon1': NikonNikon1,
  'camera/feature/nikon/d810': NikonD810,
  // olympus
  'camera/feature/olympus/penEP7': OlympusPenEP7,
  'camera/feature/olympus/em1m2': OlympusEm1m2,
  'camera/feature/olympus/em1m3': OlympusEm1m3,
  // panasonic
  'camera/feature/panasonic/gh5m2': PanasonicGh5m2,
  'camera/feature/panasonic/g100': Panasonicg100,
  'camera/feature/panasonic/g9': Panasonicg9,
  'camera/feature/panasonic/technics': Panasonictechnics,
  // sony
  'camera/feature/sony/7rm4a7rm3a': Sony7rm4a7rm3a,
  'camera/feature/sony/fe14f18gm': Sonyfe14f18gm,
  'camera/feature/sony/sel24f28g': SonySel24f28g,
  'camera/feature/sony/sel50f12gm': SonySel50f12gm,
  'camera/feature/sony/cinemalinefx3': SonyCinemalineFx3,
  'camera/feature/sony/a1': SonyA1,
  'camera/feature/sony/sel35f14gm': SonySel35f14gm,
  'camera/feature/sony/actioncam': SonyActioncam,
  'camera/feature/sony/vlogcamzv1zv1g': SonyVlogcamZv1Zv1g,
  'camera/feature/sony/7sm3': Sony7sm3,
  'camera/feature/sony/7c': Sony7c,
  'camera/feature/sony/7m3': Sony7m3,
  'camera/feature/sony/6600': Sony6600,
  'camera/feature/sony/7r4': Sony7r4,
  'camera/feature/sony/RX100M7': SonyRx100m7,
  'camera/feature/sony/a5100': SonyA5100,
  'camera/feature/sony/wf-c500': SonyWfc500,
  'camera/feature/sony/9II': Sony9II,
  'camera/feature/sony/sel70200gm2': SonySel70200gm2,
  'camera/feature/sony/rx100m3': SonyRx100m3,
  'camera/feature/sony/vlogcam_zv1_zv1g/4709': SonyVlogcamzv1zv1g4709,
  'camera/feature/sony/a9': SonyA9,
  'camera/feature/sony/a7r3': SonyA7r3,

  // tamron
  'camera/feature/tamron/150500mmf567': Tamron150500mmf567,
  // fujifilm
  'camera/feature/fujifilm/xf18mmf14rlmwr': FujifilmXf18mmf14rlmwr,
  'camera/feature/fujifilm/xs10': FujifilmXs10,
  'camera/feature/fujifilm/gfx100s': FujifilmGfx100s,
  'camera/feature/fujifilm/xf70300mmf456rlmoiswr': FujifilmXf70300mmf456rlmoiswr,
  'camera/feature/fujifilm/xe4': FujifilmXe4,
  'camera/feature/fujifilm/xt4': FujifilmXt4,
  'camera/feature/fujifilm/xf33f14': Fujifilmxf33f14,
  'camera/feature/fujifilm/newgoods': Fujifilnewgoods,
  'camera/feature/fujifilm/x100v': FujifilmX100v,
  'camera/feature/fujifilm/x-t200': FujifilmXt200,
  'camera/feature/fujifilm/xpro3': FujifilmXpro3,
  'camera/feature/fujifilm/xf50mm-f1rwr': Fujifilmxf50mmf1rwr,
  'camera/feature/fujifilm/xt4/4531': FujifilmXt44531,
  'camera/feature/fujifilm/instax/mini11': FujifilmInstaxMini11,
  'camera/feature/fujifilm/gfx50sII': Fujifilgfx50sII,
  'camera/feature/fujifilm/xt3': FujifilmXt3,
  'camera/feature/fujifilm/xt2': FujifilmXt2,

  // pentax
  'camera/feature/pentax/k3mk3': Pentaxk3mk3,
  // sigma
  'camera/feature/sigma/fpl': SigmaFpl,
  // ricoh
  'camera/feature/ricoh/gr3x': Ricohgr3x,

  // その他
  'camera/filmcamera/utsurundesu': Componentutsurundesu,
  'camera/feature/backnumber': Backnumber,
  'sale-fair': Salefair,
  'camera/filmcamera': filmcamera,
  'camera/filmcamera/889': filmcamera889,
  'camera/filmcamera/890': filmcamera890,
  'camera/filmcamera/891': filmcamera891,
  'camera/filmcamera/892': filmcamera892,

  // kaden
  'kaden/airpurifier/aircleanercompare': Componentaircleanercompare,
  'kaden/smartphone/iphone': Iphone,
  'kaden/smartphone/iphone/xsxsmaxxr': XsXsMaxXr,
  'kaden/rice-cooker_bestbuy': KadenRiceCookerBestbuy,
  'kaden/smart_phone/iphone7': KadenSmartPhoneIphone7,
  'kaden/toaster-oven': KadenToasterOven,
  'kaden/ricemill/interview': KadenRicemillInterview,
  'kaden/air-purifier_fair/daikin': KadenAirPurifierDaikin,
  'kaden/heyabosi': KadenHeyabosi,
  'kaden/smart_phone/iphone7/iphone7-camera': KadenSmartphoneIphone7Iphone7camera,

  // bag/feature
  'camera/bag/feature/trekking': Trekking,
  'camera/bag/trial': Trial,
  // photomount
  'camera/photomount/244': Photomount244,
  'camera/photomount/253': Photomount253,
  'camera/photomount/252': Photomount252,
  'camera/photomount/254': Photomount254,
  'camera/photomount/262': Photomount262,
  'camera/photomount/266': Photomount266,
  'camera/photomount/269': Photomount269,
  'camera/photomount/316': Photomount316,
  'camera/photomount/318': Photomount318,
  'camera/photomount/914': Photomount914,
  'camera/photomount/1362': Photomount1362,
  'camera/photomount/2433': Photomount2433,
  'camera/photomount/feature': PhotomountFeature,
  'camera/photomount/feature/317': PhotomountFeature317,
  'camera/photomount/246': Photomount246,
  'camera/photomount/245': Photomount245,
  // okamoto-yutaka
  'camera/okamotoyutaka/leofoto': OkamotoYutakaLeofoto,
  'camera/okamoto-yutaka/set': OkamotoYutakaSet,

  // tripod
  'camera/tripod/type01': TripodType01,
  'camera/tripod/type02': TripodType02,
  'camera/tripod/type03': TripodType03,
  'camera/tripod/type04': TripodType04,
  'camera/tripod/type05': TripodType05,
  'camera/tripod/type06': TripodType06,
  'camera/tripod/parts01': TripodParts01,
  'camera/tripod/parts02': TripodParts02,
  'camera/tripod/parts03': TripodParts03,
  // dslr
  'camera/dslr/3228': Dslr3228,
  'camera/dslr/3229': Dslr3229,
  // frame
  'camera/frame/ordermade': Frameordermade,
  'camera/frame/shacolla': FrameShacolla,
  'camera/frame/4086': Frame4086,
  'camera/frame/2037': Frame2037,
  'camera/frame/833': Frame833,
  'camera/frame/443': Frame443,
  'camera/frame/2441': Frame2441,
  'camera/frame/470': Frame470,
  'camera/frame/2446': Frame2446,
  'camera/frame/2889': Frame2889,
  'camera/frame/2442': Frame2442,
  'camera/frame/459': Frame459,
  'camera/frame/2440': Frame2440,
  'camera/frame/456': Frame456,
  'camera/frame/471': Frame471,
  // storage
  'camera/storage/363': Storage363,
  'camera/storage/366': Storage366,
  'camera/storage/368': Storage368,
  'camera/storage/371': Storage371,
  // sale
  'sale/feature01': Sale534,
  'sale/feature01/535': Sale535,
  'sale/feature01/536': Sale536,
  'sale/feature01/537': Sale537
};

/**
 * URLとコンポーネント名のマッピング設定用です。
 * 以下に基づいて、適用するページURLを追加してください。
 *
 * 'ページURL': 上記で任意に設定した'コンポーネント名'
 */
const URL_MAPPING_LIST = {
  // ---- ↓ サンプル ------
  sample1: 'sample1',
  sample2: 'sample2',
  sample3: 'sample3',
  sample4: 'sample4',
  '2021/0401': 'component20210401',
  '2021/0402-test': 'component-20210402',
  // ---- ↑ サンプル ------

  //original
  'camera/original/kitamuracamera': 'camera/original/kitamuracamera',

  // compact
  'camera/compact': 'camera/compact',
  'camera/compact/item01': 'camera/compact-item01',
  'camera/compact/item02': 'camera/compact-item02',
  // lens
  'camera/lens': 'camera/lens',
  'camera/lens/itemcanon': 'camera/lens/itemcanon',
  'camera/lens/itemnikon': 'camera/lens/itemnikon',
  'camera/lens/itempentax': 'camera/lens/itempentax',
  'camera/lens/itemsony': 'camera/lens/itemsony',
  'camera/lens/itemmicroft': 'camera/lens/itemmicroft',
  'camera/lens/itemfuji': 'camera/lens/itemfuji',
  'camera/lens/itembouen': 'camera/lens/itembouen',
  'camera/lens/itemtansyouten': 'camera/lens/itemtansyouten',
  'camera/lens/itemmacro': 'camera/lens/itemmacro',
  'camera/lens/itemkoukaku': 'camera/lens/itemkoukaku',
  'camera/lens/batis': 'camera/lens/batis',
  'camera/lens/fujinon': 'camera/lens/fujinon',
  'camera/lens/sony/5074': 'camera/lens/sony/5074',
  'camera/lens/mzuiko': 'camera/lens/mzuiko',
  'camera/lens/lumixg': 'camera/lens/lumixg',
  'camera/lens/809': 'camera/lens/809',
  'camera/lens/fujifilm/xf100-400': 'camera/lens/fujifilm/xf100-400',
  // page
  'page/deliver': 'page/deliver',
  'page/paypay': 'page/paypay',
  'page/tablet/calculate/guarantee': 'page/tablet/calculate/guarantee',

  // album
  'camera/album/feature': 'camera/album/feature',
  'camera/album/feature/1985': 'camera/album/feature/1985',
  'camera/album/feature/1986': 'camera/album/feature/1986',
  'camera/album/feature/1996': 'camera/album/feature/1996',
  'camera/album/feature/1997': 'camera/album/feature/1997',
  'camera/album/original/1119': 'camera/album/original/1119',
  'camera/album': 'camera/album',
  'camera/album/1439': 'camera/album/1439',
  'camera/album/1440': 'camera/album/1440',
  'camera/album/original/2052': 'camera/album/original/2052',
  'camera/album/3765': 'camera/album/3765',
  'camera/album/3766': 'camera/album/3766',
  // general
  'general/wirelessimageshare': 'general/wirelessimageshare',
  'general/prepare': 'general/prepare',
  'general/tokutokukoukan': 'general/tokutokukoukan',
  'general/campaign': 'general/campaign',
  'general/tuyutaisaku': 'general/tuyutaisaku',
  'general/graduation_entrance': 'general/graduationentrance',
  'general/keirou': 'general/keirou',
  'general/pet': 'general/pet',
  'general/tokutokusueoki': 'general/tokutokusueoki',
  // general/highly_recommended
  'general/highly_recommended/2015/1120': 'general/highly_recommended/2015/1120',
  'general/highly_recommended/2015/0605': 'general/highly_recommended/2015/0605',
  'general/highly_recommended': 'general/highly_recommended',
  'general/highly_recommended/2019/4121': 'general/highly_recommended/2019/4121',
  'general/highly_recommended/2019/4357': 'general/highly_recommended/2019/4357',
  'general/highly_recommended/2020/4909': 'general/highly_recommended/2020/4909',
  'general/highly_recommended/2020/4725': 'general/highly_recommended/2020/4725',
  'general/highly_recommended/2020/4872': 'general/highly_recommended/2020/4872',
  'general/highly_recommended/2020/4722': 'general/highly_recommended/2020/4722',
  'general/highly_recommended/2015/0410': 'general/highly_recommended/2015/0410',
  'general/highly_recommended/2015/1224': 'general/highly_recommended/2015/1224',
  'general/highly_recommended/2015/0501': 'general/highly_recommended/2015/0501',
  // general/print-service
  'general/print-service/square': 'general/print-service/square',
  // general/photo_mono
  'general/photo_mono/macro-lens': 'general/photo_mono/macro-lens',
  'general/photo_mono/g9pro': 'general/photo_mono/g9pro',
  'general/photo_mono/50mmlens': 'general/photo_mono/50mmlens',

  // general/sportsday
  'general/sportsday': 'general/sportsday',
  'general/sportsday/485': 'general/sportsday/485',
  'general/sportsday/531': 'general/sportsday/531',
  'general/sportsday/1196': 'general/sportsday/1196',
  'general/sportsday/photo-knowhow-1': 'general/sportsday/photo-knowhow-1',
  'general/summerhomework/moon': 'general/summerhomework/moon',
  // general/stationery/mannenhitsu
  'general/stationery/mannenhitsu/nenga': 'general/stationery/mannenhitsu/nenga',

  // camera
  'camera/dslr': 'camera/dslr',
  'camera/storage': 'camera/storage',
  'camera/lensfilter': 'camera/lensfilter',
  'camera/girlscamera': 'camera/girlscamera',
  'camera/operaglass': 'camera/operaglass',
  'camera/frame': 'camera/frame',
  'camera/tripod': 'camera/tripod',
  'camera/photomount': 'camera/photomount',
  'camera/hosizora': 'camera/hosizora',
  'camera/travel': 'camera/travel',
  'camera/okamoto-yutaka': 'camera/okamoto-yutaka',

  // lensfilter
  'camera/lensfilter/1869': 'camera/lensfilter/1869',
  'camera/lensfilter/2638': 'camera/lensfilter/2638',
  'camera/lensfilter/1104': 'camera/lensfilter/1104',
  'camera/lensfilter/nd500': 'camera/lensfilter/nd500',
  // polarie
  'camera/polarie': 'camera/polarie',
  'camera/polarie/acc': 'camera/polarie/acc',
  'camera/polarie/startrail': 'camera/polarie/startrail',
  // leica
  'camera/feature/leica': 'camera/feature/leica',
  // astronomical
  'camera/astronomical': 'camera/astronomical',
  'camera/astronomical/telescope': 'camera/astronomical/telescope',
  'camera/astronomical/moonlook': 'camera/astronomical/moonlook',
  // printer
  'camera/printer/759': 'camera/printer/759',
  'camera/printer/3133': 'camera/printer/3133',
  // feature
  'camera/feature': 'camera/feature',
  'camera/feature/dslr': 'camera/feature/dslr',
  'camera/feature/lens': 'camera/feature/lens',
  'camera/feature/compact': 'camera/feature/compact',
  'camera/feature/video': 'camera/feature/video',
  // canon
  'camera/feature/canon/eosr5r6': 'camera/feature/canon/eosr5r6',
  'camera/feature/canon/rf1435mmf4lisusm': 'camera/feature/canon/rf1435mmf4lisusm',
  'camera/feature/canon/rf100f28l': 'camera/feature/canon/rf100f28l',
  'camera/feature/canon/rf400f28l': 'camera/feature/canon/rf400f28l',
  'camera/feature/canon/eos90d': 'camera/feature/canon/eos90d',
  'camera/feature/canon/eoskissm2': 'camera/feature/canon/eoskissm2',
  'camera/feature/canon/rf50f18': 'camera/feature/canon/rf50f18',
  'camera/feature/canon/eosrp': 'camera/feature/canon/eosrp',
  'camera/feature/canon/eoskissx10i': 'camera/feature/canon/eoskissx10i',
  'camera/feature/canon/6dmk2': 'camera/feature/canon/6dmk2',
  'camera/feature/canon/7dmk2': 'camera/feature/canon/7dmk2',
  'camera/feature/canon/rf100-500mm_f45_71l_is_usm': 'camera/feature/canon/rf100500mmf4571lisusm',
  'camera/feature/canon/eosr3': 'camera/feature/canon/eosr3',
  'camera/feature/canon/1dxmk3': 'camera/feature/canon/1dxmk3',
  'camera/feature/canon/rf600mm-rf800mm_f11_is_stm': 'camera/feature/canon/rf600mm-rf800mm_f11_is_stm',
  'camera/feature/canon/rf70-200-f4l': 'camera/feature/canon/rf70-200-f4l',
  'camera/feature/canon/eos80d': 'camera/feature/canon/eos80d',
  'camera/feature/canon/5dmk4': 'camera/feature/canon/5dmk4',
  'camera/feature/canon/eosr': 'camera/feature/canon/eosr',
  'camera/feature/canon/5ds': 'camera/feature/canon/5ds',
  'camera/feature/canon/eoskiss10I/4496': 'camera/feature/canon/eoskiss10I/4496',
  // nikon
  'camera/feature/nikon/zfc': 'camera/feature/nikon/zfc',
  'camera/feature/nikon/z5': 'camera/feature/nikon/z5',
  'camera/feature/nikon/D780': 'camera/feature/nikon/D780',
  'camera/feature/nikon/z50': 'camera/feature/nikon/z50',
  'camera/feature/nikon/z6IIz7II': 'camera/feature/nikon/z6IIz7II',
  'camera/feature/nikon/D750': 'camera/feature/nikon/D750',
  'camera/feature/nikon/D500': 'camera/feature/nikon/D500',
  'camera/feature/nikon/d6': 'camera/feature/nikon/d6',
  //'camera/feature/nikon/z_40mm_f2': 'camera/feature/nikon/z_40mm_f2',
  'camera/feature/nikon/z7z6': 'camera/feature/nikon/z7z6',
  'camera/feature/nikon/d7500': 'camera/feature/nikon/d7500',
  'camera/feature/nikon/z50mm_z14-24mm': 'camera/feature/nikon/z50mm_z14-24mm',
  'camera/feature/nikon/p950': 'camera/feature/nikon/p950',
  'camera/feature/nikon/d850': 'camera/feature/nikon/d850',
  'camera/feature/nikon/d5': 'camera/feature/nikon/d5',
  'camera/feature/nikon/nikkorz_70-200mm_f2.8_vr_s': 'camera/feature/nikon/nikkorz_70-200mm_f2.8_vr_s',
  'camera/feature/nikon/nikon1': 'camera/feature/nikon/nikon1',
  'camera/feature/nikon/d810': 'camera/feature/nikon/d810',
  // olympus
  'camera/feature/olympus/penEP7': 'camera/feature/olympus/penEP7',
  'camera/feature/olympus/em1m2': 'camera/feature/olympus/em1m2',
  'camera/feature/olympus/em1m3': 'camera/feature/olympus/em1m3',
  // panasonic
  'camera/feature/panasonic/gh5m2': 'camera/feature/panasonic/gh5m2',
  'camera/feature/panasonic/g100': 'camera/feature/panasonic/g100',
  'camera/feature/panasonic/g9': 'camera/feature/panasonic/g9',
  'camera/feature/panasonic/technics': 'camera/feature/panasonic/technics',

  // sony
  'camera/feature/sony/7rm4a7rm3a': 'camera/feature/sony/7rm4a7rm3a',
  'camera/feature/sony/fe14f18gm': 'camera/feature/sony/fe14f18gm',
  'camera/feature/sony/sel24f28g': 'camera/feature/sony/sel24f28g',
  'camera/feature/sony/sel50f12gm': 'camera/feature/sony/sel50f12gm',
  'camera/feature/sony/cinemalinefx3': 'camera/feature/sony/cinemalinefx3',
  'camera/feature/sony/a1': 'camera/feature/sony/a1',
  'camera/feature/sony/sel35f14gm': 'camera/feature/sony/sel35f14gm',
  'camera/feature/sony/actioncam': 'camera/feature/sony/actioncam',
  'camera/feature/sony/vlogcamzv1zv1g': 'camera/feature/sony/vlogcamzv1zv1g',
  'camera/feature/sony/7sm3': 'camera/feature/sony/7sm3',
  'camera/feature/sony/7c': 'camera/feature/sony/7c',
  'camera/feature/sony/7m3': 'camera/feature/sony/7m3',
  'camera/feature/sony/6600': 'camera/feature/sony/6600',
  'camera/feature/sony/7r4': 'camera/feature/sony/7r4',
  'camera/feature/sony/RX100M7': 'camera/feature/sony/RX100M7',
  'camera/feature/sony/a5100': 'camera/feature/sony/a5100',
  'camera/feature/sony/wf-c500': 'camera/feature/sony/wf-c500',
  'camera/feature/sony/9II': 'camera/feature/sony/9II',
  'camera/feature/sony/sel70200gm2': 'camera/feature/sony/sel70200gm2',
  'camera/feature/sony/rx100m3': 'camera/feature/sony/rx100m3',
  'camera/feature/sony/vlogcam_zv1_zv1g/4709': 'camera/feature/sony/vlogcam_zv1_zv1g/4709',
  'camera/feature/sony/a9': 'camera/feature/sony/a9',
  'camera/feature/sony/a7r3': 'camera/feature/sony/a7r3',

  // tamron
  'camera/feature/tamron/150500mmf567': 'camera/feature/tamron/150500mmf567',
  // fujifilm
  'camera/feature/fujifilm/xf18mmf14rlmwr': 'camera/feature/fujifilm/xf18mmf14rlmwr',
  'camera/feature/fujifilm/xs10': 'camera/feature/fujifilm/xs10',
  'camera/feature/fujifilm/gfx100s': 'camera/feature/fujifilm/gfx100s',
  'camera/feature/fujifilm/xf70300mmf456rlmoiswr': 'camera/feature/fujifilm/xf70300mmf456rlmoiswr',
  'camera/feature/fujifilm/xe4': 'camera/feature/fujifilm/xe4',
  'camera/feature/fujifilm/xt4': 'camera/feature/fujifilm/xt4',
  'camera/feature/fujifilm/xf33f14': 'camera/feature/fujifilm/xf33f14',
  'camera/feature/fujifilm/newgoods': 'camera/feature/fujifilm/newgoods',
  'camera/feature/fujifilm/x100v': 'camera/feature/fujifilm/x100v',
  'camera/feature/fujifilm/x-t200': 'camera/feature/fujifilm/x-t200',
  'camera/feature/fujifilm/xpro3': 'camera/feature/fujifilm/xpro3',
  'camera/feature/fujifilm/xf50mm-f1rwr': 'camera/feature/fujifilm/xf50mm-f1rwr',
  'camera/feature/fujifilm/xt4/4531': 'camera/feature/fujifilm/xt4/4531',
  'camera/feature/fujifilm/instax/mini11': 'camera/feature/fujifilm/instax/mini11',
  'camera/feature/fujifilm/gfx50sII': 'camera/feature/fujifilm/gfx50sII',
  'camera/feature/fujifilm/xt3': 'camera/feature/fujifilm/xt3',
  'camera/feature/fujifilm/xt2': 'camera/feature/fujifilm/xt2',

  // pentax
  'camera/feature/pentax/k3mk3': 'camera/feature/pentax/k3mk3',
  // sigma
  'camera/feature/sigma/fpl': 'camera/feature/sigma/fpl',

  // ricoh
  'camera/feature/ricoh/gr3x': 'camera/feature/ricoh/gr3x',

  // その他
  'camera/filmcamera/utsurundesu': 'camera/filmcamera/utsurundesu',
  'camera/feature/backnumber': 'camera/feature/backnumber',
  'sale-fair': 'sale-fair',
  'camera/filmcamera': 'camera/filmcamera',
  'camera/filmcamera/889': 'camera/filmcamera/889',
  'camera/filmcamera/890': 'camera/filmcamera/890',
  'camera/filmcamera/891': 'camera/filmcamera/891',
  'camera/filmcamera/892': 'camera/filmcamera/892',

  // kaden
  'kaden/airpurifier/aircleanercompare': 'kaden/airpurifier/aircleanercompare',
  'kaden/smartphone/iphone': 'kaden/smartphone/iphone',
  'kaden/smartphone/iphone/xsxsmaxxr': 'kaden/smartphone/iphone/xsxsmaxxr',
  'kaden/rice-cooker_bestbuy': 'kaden/rice-cooker_bestbuy',
  'kaden/smart_phone/iphone7': 'kaden/smart_phone/iphone7',
  'kaden/toaster-oven': 'kaden/toaster-oven',
  'kaden/ricemill/interview': 'kaden/ricemill/interview',
  'kaden/air-purifier_fair/daikin': 'kaden/air-purifier_fair/daikin',
  'kaden/heyabosi': 'kaden/heyabosi',
  'kaden/smart_phone/iphone7/iphone7-camera': 'kaden/smart_phone/iphone7/iphone7-camera',

  // bag/feature
  'camera/bag/feature/trekking': 'camera/bag/feature/trekking',
  'camera/bag/trial': 'camera/bag/trial',
  // okamoto-yutaka
  'camera/okamoto-yutaka/leofoto': 'camera/okamotoyutaka/leofoto',
  'camera/okamoto-yutaka/set': 'camera/okamoto-yutaka/set',
  // photomount
  'camera/photomount/244': 'camera/photomount/244',
  'camera/photomount/253': 'camera/photomount/253',
  'camera/photomount/252': 'camera/photomount/252',
  'camera/photomount/254': 'camera/photomount/254',
  'camera/photomount/262': 'camera/photomount/262',
  'camera/photomount/266': 'camera/photomount/266',
  'camera/photomount/269': 'camera/photomount/269',
  'camera/photomount/316': 'camera/photomount/316',
  'camera/photomount/318': 'camera/photomount/318',
  'camera/photomount/914': 'camera/photomount/914',
  'camera/photomount/1362': 'camera/photomount/1362',
  'camera/photomount/2433': 'camera/photomount/2433',
  'camera/photomount/feature': 'camera/photomount/feature',
  'camera/photomount/feature/317': 'camera/photomount/feature/317',
  'camera/photomount/246': 'camera/photomount/246',
  'camera/photomount/245': 'camera/photomount/245',

  // tripod
  'camera/tripod/type01': 'camera/tripod/type01',
  'camera/tripod/type02': 'camera/tripod/type02',
  'camera/tripod/type03': 'camera/tripod/type03',
  'camera/tripod/type04': 'camera/tripod/type04',
  'camera/tripod/type05': 'camera/tripod/type05',
  'camera/tripod/type06': 'camera/tripod/type06',
  'camera/tripod/parts01': 'camera/tripod/parts01',
  'camera/tripod/parts02': 'camera/tripod/parts02',
  'camera/tripod/parts03': 'camera/tripod/parts03',
  // dslr
  'camera/dslr/3228': 'camera/dslr/3228',
  'camera/dslr/3229': 'camera/dslr/3229',
  // frame
  'camera/frame/ordermade': 'camera/frame/ordermade',
  'camera/frame/shacolla': 'camera/frame/shacolla',
  'camera/frame/4086': 'camera/frame/4086',
  'camera/frame/2037': 'camera/frame/2037',
  'camera/frame/833': 'camera/frame/833',
  'camera/frame/443': 'camera/frame/443',
  'camera/frame/2441': 'camera/frame/2441',
  'camera/frame/470': 'camera/frame/470',
  'camera/frame/2446': 'camera/frame/2446',
  'camera/frame/2889': 'camera/frame/2889',
  'camera/frame/2442': 'camera/frame/2442',
  'camera/frame/459': 'camera/frame/459',
  'camera/frame/2440': 'camera/frame/2440',
  'camera/frame/456': 'camera/frame/456',
  'camera/frame/471': 'camera/frame/471',
  // storage
  'camera/storage/363': 'camera/storage/363',
  'camera/storage/366': 'camera/storage/366',
  'camera/storage/368': 'camera/storage/368',
  'camera/storage/371': 'camera/storage/371',
  // sale
  'sale/feature01': 'sale/feature01',
  'sale/feature01/535': 'sale/feature01/535',
  'sale/feature01/536': 'sale/feature01/536',
  'sale/feature01/537': 'sale/feature01/537'
} as { [key: string]: string };

export default Vue.extend({
  name: 'special-page',
  components: COMPONENT_LIST,
  setup(props, context) {
    const query = context.root.$route.query;
    const state = reactive({
      currentComponent: '',
      // 表示期間外メッセージ
      errorMsg: ''
    });

    onMounted(() => {
      const splitUrl = context.root.$route.path.split('/ec/special/');
      const targetPage = splitUrl[splitUrl.length - 1];
      // URL_MAPPING_LISTに設定されていないページや存在しないURLは、NotFoundPageに遷移させる
      if (Object.keys(URL_MAPPING_LIST).includes(targetPage)) {
        state.currentComponent = URL_MAPPING_LIST[targetPage];
      } else {
        context.root.$router.push({ name: 'not-found-page' });
      }
    });

    /**
     * 表示期間制御
     * @param from from日付
     * @param to to日付
     */
    const verifyDate = async (from: string, to: string) => {
      let today = '';
      try {
        const response = await SpecialProductService.getHealthCheck();
        today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
      } catch (error) {
        console.error(error);
        today = dayjs().toString();
      }
      if (!validationPeriod(today, from, to)) {
        state.errorMsg = '該当ページは掲載期間が終了いたしました。';
      }
    };
    return {
      ...toRefs(state),
      verifyDate
    };
  }
});
</script>

<style lang="scss" scoped>
/* template内のDomへの適用 */
</style>

<style>
/* Vuetifyで生成されるDomへの適用 */
</style>
