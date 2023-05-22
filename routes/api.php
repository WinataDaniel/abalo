<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/articles', [\App\Http\Controllers\ArticlesController::class, 'searchArticle_api']);
Route::post('/articles', [\App\Http\Controllers\ArticlesController::class, 'addNewArticle_api']);

Route::post('/shoppingcart', [\App\Http\Controllers\AbShoppingCartItemController::class, 'addShoppingCartItem_api']);
Route::delete('/shoppingcart/{shoppingcartid}/articles/{articleId}', [\App\Http\Controllers\AbShoppingCartItemController::class, 'delShoppingCartItem_api']);
