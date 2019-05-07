<template>
        <div class="main clearfix" id="viewall">
            <div class="container">
                <div class="recipes">

                    <div class="recipes-header clearfix">
                      <h2 class="title">{{listingTitle}}</h2>
                    </div>

                    <SearchForm/>

                    <div class="recipes-items clearfix">
                      <Recipe
                      v-for="(recipe, i) in recipes"
                      :key="i" :recipe="recipe"
                      />
                    </div>
                </div>
                <Pagination :pagination=pagination />
            </div>
        </div>
</template>

<script>
import Pagination from '../components/Pagination';
import SearchForm from '../components/SearchForm';
import Recipe from '../components/Recipe';

export default {
  name: 'Body',
  components: {
    Pagination,
    SearchForm,
    Recipe,
  },
  props: {
    listingTitle: String,
    recipes: Array,
    pagination: Object,
  },
};
</script>

