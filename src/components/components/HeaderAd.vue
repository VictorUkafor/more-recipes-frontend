<template>
<div class="container">
    <div class="header-info">
        <h1 class="title">{{$store.getters.headerContent}}</h1>
        <a v-for="(each, i) in $store.getters.headerAction"
        :key=i :href="each.link">{{each.name}}</a>
    </div>
</div>
</template>

<script>
export default {
  name: 'HeaderAd',
};
</script>

