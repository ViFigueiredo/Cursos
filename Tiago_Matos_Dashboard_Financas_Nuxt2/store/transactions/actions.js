export default {
  List() {
    return this.$axios.$get("transactions?_expand=category");
  },

  Delete(context, id) {
    return this.$axios.$delete(`transactions/${id}`);
  },

  Update(context, { id, data }) {
    return this.$axios.$patch(`transactions/${id}`, data);
  },

  Add(context, data) {
    return this.$axios.$post(`transactions`, data);
  },
};
