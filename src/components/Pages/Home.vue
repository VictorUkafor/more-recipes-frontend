<template>
  <div>
    <Header
    :headerContent=headerContent
    :headerAction=headerAction
    :page=page
    :headerImage=headerImage
    />
    <Body
    :listingTitle=listingTitle
    :recipes=recipes
    :pagination=meta
    />
    <Footer :page=page />
  </div>
</template>

<script>
import Header from '../layouts/Header';
import Body from '../layouts/Body';
import Footer from '../layouts/Footer';
// import axios from 'axios';

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
          link: '/home',
        },
        {
          name: 'Sign Up Today',
          link: '/sign-up',
        },
      ],
      page: 'Home',
      headerImage: 'assets/img/topbg.jpg',
      listingTitle: 'Our Latest Recipes',
      recipes: [
        {
          id: 1,
          user_id: 1,
          recipe_name: 'Fried Rice and Stew',
          ingredients: 'rice, beans',
          method_of_preparation: 'hiuhw hiuhw ewfuw g df bdu gcgh ugggy',
          cloudinary_image_public_id: 'FriedRiceandStew',
          upvotes: 0,
          downvotes: 0,
          created_at: '2019-05-07 10:06:16',
        },
        {
          id: 2,
          user_id: 1,
          recipe_name: 'Fried Rice and Stew',
          ingredients: 'rice, beans',
          method_of_preparation: 'hiuhw hiuhw ewfuw g df bdub gcgh ugggy',
          cloudinary_image_public_id: 'FriedRiceandStew',
          upvotes: 0,
          downvotes: 0,
          created_at: '2019-05-07 10:06:16',
        },
      ],
      meta: {
        current_page: 1,
        from: 1,
        last_page: 2,
        path: 'http://localhost:8000/api/v1/recipes',
        per_page: 8,
        to: 2,
        total: 2,
      },
    };
  },
  // created() {
  //   axios.get('localhost:8000/api/v1/recipes')
  //   .then(res => this.recipes = res.data)
  //   .catch(err => console.log(err));
  // },
};
</script>

