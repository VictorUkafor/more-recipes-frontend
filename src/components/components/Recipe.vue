<template>
<article class="recipes-item">
  <div class="recipes-item-img">
    <a :href="`/recipe/${recipe.id}`">
      <img
      :src="recipe.id"
      :alt="recipe.recipe_name"
      />
    </a>
  </div>
  <div class="recipes-item-description">
    <h3 class="title">
      <a :href="`/recipe/${recipe.id}`">
      {{recipe.recipe_name}}
      </a>
    </h3>
    <div class="recipes-item-text">
      <p>{{recipe.method_of_preparation}}</p>
      </div>
      <div class="recipes-item-footer clearfix">
        <div class="recipes-item-icon1">{{recipe.upvotes}}
          <span class="recipes-item-views">
            <i class="fa fa-thumbs-up fa-active" aria-hidden="true"></i>
          </span>
        </div>
        <div class="recipes-item-icon2">

          <a v-for="(action, i) in actions" :key="i"
          v-if="action.title === 'view more' || user.id === recipe.user_id"
          :href="`${action.link}${recipe.id}`" :title="action.title">
          <span class="recipes-item-views">
            <i :class="action.style" aria-hidden="true"></i>
            </span>
          </a>

        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Recipe',
  props: {
    recipe: Object,
  },
  data() {
    return {
      actions: [
        {
          title: 'view more',
          style: 'fa fa-info fa-active',
          link: '/recipe/',
        },
        {
          title: 'edit recipe',
          style: 'fa fa-edit fa-active',
          link: '/recipe/edit/',
        },
        {
          title: 'delete recipe',
          style: 'fa fa-close fa-active',
          link: '/recipe/delete/',
        },
      ],
      auth: false,
      user: { id: 2 },
    };
  },
};
</script>

