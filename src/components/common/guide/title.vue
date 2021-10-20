<template>
  <div>
    <h1 class="heading-1 mt-4 mb-2 pl-6">
      {{ txt }}
    </h1>
  </div>
</template>
<script>
export default {
  name: 'title',
  props: {
    txt: {
      type: String,
      required: true
    },
  }
};
</script>