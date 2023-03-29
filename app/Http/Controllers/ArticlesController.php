<?php

namespace App\Http\Controllers;

use App\Models\Ab_Article;
use Illuminate\Http\Request;
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
}
