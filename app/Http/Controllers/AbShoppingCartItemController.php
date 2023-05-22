<?php

namespace App\Http\Controllers;

use App\Models\Ab_ShoppingCart;
use App\Models\Ab_ShoppingCart_Item;
use App\Models\Ab_User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AbShoppingCartItemController extends Controller
{
    public function addShoppingCartItem_api(Request $request) {
        // TODO: USERID KONFIGURIEREN
        $userId = 1;

        // Shoppin cart exists
        if (! Ab_ShoppingCart::query()->where('ab_creator_id', $userId)->exists()) {
            Ab_ShoppingCart::create([
                'ab_creator_id' => $userId,
                'ab_createdate' => Carbon::now()->toDateTimeString()
            ]);
        }

        $myShoppingCart = Ab_ShoppingCart::query()->where('ab_creator_id', $userId)->get();
        $this->addShoppingCartItem($request, $myShoppingCart[0]->id, $request->post("articleId"));
        return $myShoppingCart[0]->id;
    }

    public function addShoppingCartItem(Request $request, string $shoppingCartId, string $articleId) {
        Ab_ShoppingCart_Item::create([
            'ab_shoppingcart_id' => $shoppingCartId,
            'ab_article_id' => $articleId,
            'ab_createdate' => Carbon::now()->toDateTimeString()
        ]);
    }

    public function delShoppingCartItem_api(Request $request, string $shoppingCartId, string $articleId) {
        Ab_ShoppingCart_Item::query()->where([
            'ab_shoppingcart_id' => $shoppingCartId,
            'ab_article_id' => $articleId
            ])->delete();
    }
}
