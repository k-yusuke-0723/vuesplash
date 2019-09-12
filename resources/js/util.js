/**
 * クッキーの値を取得する
 * @param {String} searchkey 検索するキー
 * @returns {String} キーに対応する値
 */

export function getCookieValue (searchKey) {
  if (typeof searchKey === 'undefined') {
    return ''
  }

  let val = ''
  // document.cookie によって下記の様なデータの取得ができる
  // name=12345;token=67890;key=abcde
  // まず ';' でsplitをする
  document.cookie.split(';').forEach(cookie => {
    // 次に'='でsplitをして引数の"searchKey"と一致するものを探しreturnしている
    const [key, value] = cookie.split('=')
    if (key === searchKey) {
      return val = value
    }
  })

  return val
}

 