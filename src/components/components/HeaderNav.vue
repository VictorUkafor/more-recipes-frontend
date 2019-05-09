<template>
<nav id="nav">
    <button class="nav-close">&times;</button>
    <ul class="nav-top">
        <li v-for="(link, i) in links" :key="i"
        v-if="$store.getters.auth"
        :class="$store.getters.page === link.title? 'active':''">
        <a :href="link.link">{{link.title}}</a>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      links: [
        {
          title: 'Home',
          link: '/',
        },
        {
          title: 'Favourites',
          link: '/favourites',
        },
        {
          title: 'Manage',
          link: '/manage',
        },
        {
          title: 'Profile',
          link: '/profile',
        },
      ],
    };
  },
};
</script>

