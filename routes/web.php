<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// APIのURL以外のリクエストに対しては全てでindexテンプレートを返す
// 画面遷移はフロントエンドのVuerouterが制御する
Route::get('/{any?}', function () {
    return view('index');
})->where('any', '.+');

// {any?}でパスパラメーターanyを受け入れて、次にwhereメソッドで正規表現を用いて、
// 文字列形式を定義しているが、「.+」で「任意の文字が1文字以上」＝「なんでもいい」という指定をしている
// パラメーターはあっても無くてもいいし、あってもどんな文字列でもいい、ということになる