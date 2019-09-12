// CSRFトークンチェックファイルの読み込みファイル
import './bootstrap'

import Vue from 'vue'

// ルーティングの定義をインポートする
import router from './router'

// storeをインポートしてVueインスタンス作成時に読み込む
import store from './store'

// ルートコンポーネントをインポートする
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App />'
})