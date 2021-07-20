<template>
  <v-app>
    <div>
      <div class="main-contents-wrap">
       <div class="category-nav mb-6">
         <v-row>
           <v-col cols="4" class="text-center">
    <label class="pa-8 py-2 font-weight-bold">
      <input type="radio" v-model="category" value=""> All
    </label>
    </v-col>
    <v-col cols="4" class="text-center">
    <label class="pa-8 py-2 font-weight-bold">
      <input type="radio" v-model="category" value="Dog"> Dog
    </label>
    </v-col>
    <v-col cols="4" class="text-center">
    <label class="pa-8 py-2 font-weight-bold">
      <input type="radio" v-model="category" value="Cat"> Cat
    </label>
    </v-col>
    </v-row>
  </div>

<div class="individual">
       <transition-group appear tag="ul" class="category-list">
    <li v-for="image in filterByCategory" :key="image.index" class="mb-8">
      <p class="font-small white--text text-right font-weight-bold ma-0 pa-0">
          <span style="background-color: red" class="darken-4">2021年9月下旬発売予定</span>
        </p>
        <a href="/special/sale-fair/camera/feature/canon/rf14-35mmf4lisusm/">
      <img :src="image.src" alt="">
      <span class="font-small product-name">キヤノン RF14-35mm F4 L IS USM</span>
      </a>
    </li>
  </transition-group>
  </div>
  </div>




    <!-- <v-card>
    <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        class="woo"
    >
    <v-avatar style="postion:absolute; left: 30%;" rounded width="50%" class="pa-1" height="200px">
        <img width="80" height="80" src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
    </v-avatar>
    </v-img>
</v-card>
<div class="campain main-contents-wrap">
<p>下記ボタンよりメーカーを絞り込む事ができます</p>
<v-container>
  <v-row>
    <v-col cols="2" class="text-center">
      <v-hover v-slot="{ hover }" close-delay="100">
      <v-btn color="red" class="white--text mx-auto" :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }" v-model="category" value="" @click="filterByCategory">All</v-btn>
      </v-hover>
    </v-col>
    <v-col cols="2" class="text-center">
      <v-hover v-slot="{ hover }" close-delay="100">
      <v-btn color="red" class="white--text mx-auto" :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }" v-model="category" value="Dog" @click="filterByCategory">Dog</v-btn>
      </v-hover>
    </v-col>
    <v-col cols="2" class="text-center">
      <v-hover v-slot="{ hover }" close-delay="100">
      <v-btn color="red" class="white--text mx-auto" :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }" v-model="category" value="Cat" @click="filterByCategory">Cat</v-btn>
      </v-hover>
    </v-col>
  </v-row>
</v-container>

<v-container>
 <v-row class="category-list">
    <v-col v-for="image in filterByCategory" :key="image.index" cols="4" class="individual">
      <v-hover v-slot="{ hover }"
        close-delay="200">
      <v-card :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto">
        <p class="font-small white--text text-right font-weight-bold ma-0 pa-0">
          <span style="background-color: red" class="darken-4">2021年9月下旬発売予定</span>
        </p>
        <v-divider></v-divider>
       <a href="/special/sale-fair/camera/feature/canon/rf14-35mmf4lisusm/">
       <img :src="image.src" alt="" width="100%">
       <span class="font-small product-name">キヤノン RF14-35mm F4 L IS USM</span>

       </a>
      </v-card>
      </v-hover>
    </v-col>
 </v-row>
  </v-container>

</div> -->
    </div>
  </v-app>
</template>

<script>
export default {
  name: "backnumber",
  data() {
    return {
      category: '', // ←------- 追加
      images: [
        { index: 1,
          src: "https://picsum.photos/id/237/200/300",
          category: "Dog"
        },
        { index: 2,
          src: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
          category: "Cat"
        },
        { index: 3,
          src: "https://picsum.photos/id/237/200/300",
          category: "Dog"
        },
        { index: 4,
          src: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
          category: "Cat"
        },
        { index: 5,
          src: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
          category: "Cat"
        },
        { index: 6,
          src: "https://picsum.photos/id/237/200/300",
          category: "Dog"
        },
      ]
    }
  },
  // ↓ 追加 ↓
  computed: {
    filterByCategory: function () {
      return this.images.filter(
        (image) => !image.category.indexOf(this.category)
      );
    }
  }
// ↑ 追加 ↑
}
</script>

<style scoped>
.campain {
  background: #efefef;
}
.product-name {
    display: block;
    height: 5em;
    margin-top: 5px;
    padding: 0 3%;
}


.category-list {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style: none;
}
.category-list img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-nav {
  text-align: center;
  padding: 30px;
}
.category-nav label {
  background: #0bd;
  color: #fff;
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
}
.category-nav input[type="radio"] {
  /* Hide radio buttonns */
  opacity:0;
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
}

.v-enter-active,
.v-enter-active,
.v-leave-active,
.v-move {
  transition-property: transform, opacity;
  transition-duration: .3s;
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