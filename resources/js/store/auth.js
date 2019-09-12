// ログイン済みのユーザーを保持するuserを追加する
const state = {
  user: null
}

const getters = {
  // ログインチェック用
  check: state => !! state.user,
  // 仮にログインユーザーがnullの時に呼ばれたとしても、エラーを出さないようにnullを返している
  username: state => state.user ? state.user.name : ''
}

// ミューテーションにはuserステートの値を更新するsetUserを追加する
// 第一引数は必ずstateにしないといけない
const mutations = {
  setUser (state, user) {
    state.user = user
  }
}
// actionの第一引数も決まっていて、コンテキストオブジェクトが渡される
// コンテキストオブジェクトにはミューテーションを呼び出すためのcommitメソッドなどが入っている
const actions = {
  async register (context, data) {
    const response = await axios.post('/api/register', data)
    context.commit('setUser', response.data)
  },
  async login (context, data) {
    const response = await axios.post('/api/login', data)
    context.commit('setUser', response.data)
  },
  async logout (context) {
    const response = await axios.post('/api/logout')
    // 処理が完了した後にuserステートをnullで更新する
    context.commit('setUser', null)
  }
}

// 上記ではまず会員登録APIを呼び出して、返却されたデータを私てsetUserミューテーションを呼び出すことで、（ここでcommitメソッドを使っている）userステートを更新する

// 「アクション→コミットでミュテーション呼び出し→ステート更新」というパターンはよく使うので慣れれば大丈夫

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}