<template>
<footer class="footer">
  <div class="container">
    <nav>
      <ul class="nav-footer">
        <li v-for="(link, i) in links"
        :key="i"
        :class="$store.getters.page === link.title? 'active':''">
        <a :href="link.link">{{link.title}}</a>
        </li>
      </ul>
     </nav>
     <div class="copyright">More Recipes app &copy; 2019 Copyright</div>
    </div>
</footer>
</template>

<script>
export default {
  name: 'Footer',
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

