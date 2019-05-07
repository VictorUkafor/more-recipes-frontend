<template>
<footer class="footer">
  <div class="container">
    <nav>
      <ul class="nav-footer">
        <li v-for="(link, i) in links"
        :key="i"
        :class="page === link.title? 'active':''">
        <a :href="link.link">{{link.title}}</a>
        </li>
      </ul>
     </nav>
     <div class="copyright">more-recipes app &copy; 2017 Copyright</div>
    </div>
</footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    page: String,
  },
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

