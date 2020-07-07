export default {
  token: state => state.user.token,
  menu: state => state.app.menu,
  columns: (state, key) => state.columns.columns[key]
};
