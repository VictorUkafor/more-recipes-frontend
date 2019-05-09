export default {
  authenticate(state, auth) {
    state.auth = auth;
  },
  setUser(state, user) {
    state.user = user;
  },
  fetchRecipes(state, recipes) {
    state.recipes = recipes;
  },
  fetchMeta(state, meta) {
    state.meta = meta;
  },
  setHeaderContent(state, headerContent) {
    state.headerContent = headerContent;
  },
  setHeaderAction(state, headerAction) {
    state.headerAction = headerAction;
  },
  setPage(state, page) {
    state.page = page;
  },
  setHeaderImage(state, headerImage) {
    state.headerImage = headerImage;
  },
  setListingTitle(state, listingTitle) {
    state.listingTitle = listingTitle;
  },
};
