export default {
  fullName(state) {
    return `${state.users.first_name} ${state.users.last_name}`;
  },
};
