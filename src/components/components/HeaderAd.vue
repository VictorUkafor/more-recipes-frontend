<template>
<div class="container">
    <div class="header-info">
        <h1 class="title">{{headerContent}}</h1>
        <a v-for="(each, i) in headerAction"
        :key=i :href="each.link">{{each.name}}</a>
    </div>
</div>
</template>

<script>
export default {
  name: 'HeaderAd',
  props: {
    headerContent: String,
    headerAction: Array,
  },
};
</script>

