// bootstrap.jsではAjax通信で用いるAxiosライブラリの設定を記述している
// Ajaxのリクエストであることを示すX-requested-Withヘッダーを付与し、トークンをX-XSRF-TOKENヘッダーに含めることで、Laraveはフォームでは無くヘッダーを見てCSRFトークンチェックを行ってくれる

import { getCookieValue } from './util'

window.axios = require('axios')

// Ajaxリクエストであることを示すヘッダーを付与する
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

window.axios.interceptors.request.use(config => {
    // クッキーからトークンを取り出して、ヘッダーに添付する
    config.headers['X-XSRF-TOKEN'] = getCookieValue('XSRF-TOKEN')
    return config
})