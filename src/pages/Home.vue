<template>
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../components/layouts/Header';
import Body from '../components/layouts/Body';
import Footer from '../components/layouts/Footer';

const url = 'http://localhost:8000/api/v1';

export default {
  name: 'Home',
  components: {
    Header,
    Body,
    Footer,
  },
  data() {
    return {
      headerContent: `share awesome and exciting 
      recipe ideas you've invented or learnt.`,
      headerAction: [
        {
          name: 'See Our Recipe Listing',
          link: '/home#all-recipes',
        },
        {
          name: 'Sign Up Today',
          link: '/sign-up',
        },
      ],
      page: 'Home',
      headerImage: 'assets/img/topbg.jpg',
      listingTitle: 'Our Latest Recipes',
    };
  },
  async created() {
    this.$store.commit('setHeaderContent', this.headerContent);
    this.$store.commit('setHeaderAction', this.headerAction);
    this.$store.commit('setPage', this.page);
    this.$store.commit('setHeaderImage', this.headerImage);
    this.$store.commit('setListingTitle', this.listingTitle);

    document.title = 'More Recipes - Welcome to More Recipes App';
    try {
      const recipes = await axios.get(`${url}/recipes`);

      this.$store.commit('fetchRecipes', recipes.data.data);
      this.$store.commit('fetchMeta', recipes.data.meta);
    } catch (err) {
      this.errors = err.data;
    }
  },
};
</script>

