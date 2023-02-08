export default {
  List() {
    return this.$axios.$get("categories");
  },

  Delete(context, id) {
    return this.$axios.$delete(`categories/${id}`);
  },

  Update(context, { id, data }) {
    return this.$axios.$patch(`categories/${id}`, data);
  },

  Add(context, data) {
    return this.$axios.$post(`categories`, data);
  },
};
