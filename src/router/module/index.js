import Layout from '@/Layouts';
import store from '@/store';
const manageFiles = require.context('.', true, /\.js$/);

let menuRouters = []; // 菜单路由

manageFiles.keys().forEach(key => {
  if (key === './index.js') return;
  menuRouters = menuRouters.concat(manageFiles(key).default);
});

menuRouters.forEach(item => {
  item.component = Layout;
});
// 把菜单存到vuex中
store.commit('SET_MENU', menuRouters);
console.log(store);
export default menuRouters;
