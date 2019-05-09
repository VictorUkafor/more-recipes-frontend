<template>
        <div class="main clearfix" id="viewall">
            <div class="container">
                <div class="recipes">

                    <div class="recipes-header clearfix" id="all-recipes">
                      <h2 class="title">{{$store.getters.listingTitle}}</h2>
                    </div>

                    <SearchForm/>

                    <div class="recipes-items clearfix">
                      <Recipe
                      v-for="(recipe, i) in $store.getters.recipes"
                      :key="i" :recipe=recipe
                      />
                    </div>
                </div>
                <Pagination />
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
};
</script>

