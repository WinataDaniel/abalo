<?php

namespace App\Http\Controllers;

use App\Models\Ab_Article;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use function PHPUnit\Framework\isEmpty;

class ArticlesController extends Controller
{
    public function index(Request $request) {
        if ($request->query('search') == null) {
            $articles = Ab_Article::all();
            return view('articles', [
                'articlesObj' => $articles,
            ]);
        } else {
            $searchedName = $request->query('search');
            $articles = Ab_Article::query()->where('ab_name', 'ilike', '%'.$searchedName.'%')->get();
            return view('articles', [
                'articlesObj' => $articles,
            ]);
        }
    }

    public function promptNewArticle(Request $request) {
        return view('newArticle');
    }

    public function addNewArticle(Request $request) {
        $this->validate($request, [
            'articleName' => 'required|max:80',
            'articlePrice' => 'required|numeric|gt:0',
            'articleDescription' => 'max:1000',
        ]);

        $lastArticle = Ab_Article::all()->last();

        Ab_Article::create([
            'id' => $lastArticle->id + 1,
            'ab_name' => $request->articleName,
            'ab_price' => $request->articlePrice,
            'ab_description' => $request->articleDescription,
            'ab_creator_id' => 1,
            'ab_createdate' => Carbon::now()->toDateTimeString()
        ]);

        return redirect()->route('articles');
    }
}
