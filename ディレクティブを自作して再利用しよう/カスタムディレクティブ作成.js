const app = Vue.createApp({});
app.directive("memo", {
  // el: 紐付けられた要素
  // binding: ディレクティブ引数や値
  // vnode: Vue.jsの仮想ノード
  bind(el, binding, vnode) {
    console.log("memo directive was bound!");
    el.style.color = binding.value;
  },
});
