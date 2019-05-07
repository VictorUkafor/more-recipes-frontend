<template>
<div class="articles-pagination">
  <nav>
    <ul class="pagination">
      <li v-if="pagination.current_page != 1"
      :href="`/recipes?page=${pagination.current_page - 1}`">
        <a aria-label="Previous">
      <i class="fa fa-chevron-left fa-fw" aria-hidden="true"></i>
        </a>
      </li>

      <li v-for="(page, i) in pagination.last_page" :key="i"
      :href="`/recipes?page=${page}`"
      :class="page == pagination.current_page? 'active':''">
      <a>{{page}}</a>
      </li>

      <li v-if="pagination.current_page != pagination.last_page"
      :href="`/recipes?page=${pagination.current_page + 1}`">
      <a aria-label="Previous">
      <i class="fa fa-chevron-right fa-fw" aria-hidden="true"></i>
        </a>
      </li>

    </ul>
  </nav>
</div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pagination: Object,
  },
};
</script>

