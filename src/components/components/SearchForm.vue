<template>
<div class="row">

  <div class="form-group col-sm-7">
    <form action="#" class="form">
      <div class="input-group">
        <select class="form-control search">
          <option value="upvotes">upvotes</option>
          <option value="date">date</option>
        </select>

        <select class="form-control">
          <option value="descending">descending</option>
          <option value="ascending">ascending</option>
        </select>

        <span class="input-group-btn">
          <button class="submit" type="submit">Sort</button>
        </span>
      </div>
    </form>
  </div>

  <div class="form-group col-sm-5">
    <form action="#" class="form">
      <div class="input-group">
        <input type="text" class="form-control">
        <span class="input-group-btn">
          <button class="submit" type="submit">Search</button>
        </span>
      </div>
    </form>
  </div>

</div>
</template>

<script>
export default {
  name: 'Pagination',
};
</script>

