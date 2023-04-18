<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Articles</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/js/app.js'])
</head>
<body>
<div id="app">

    <main class="py-4">
        <table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>price</th>
                <th>description</th>
                <th>picture</th>
            </tr>
            @foreach($articlesObj as $article)
                <tr>
                    <td>{{$article->id}}</td>
                    <td>{{$article['ab_name']}}</td>
                    <td>{{$article->ab_price}}</td>
                    <td>{{$article->ab_description}}</td>
                    <td>
                        @if((file_exists("articleimages/$article->id.jpg")))
                            <img src="articleimages/{{$article->id}}.jpg" alt="a picture" width="150" height="150">
                            <div>test2</div>
                        @else
                            <img src="articleimages/{{$article->id}}.png" alt="a picture" width="150" height="150">
                            <div>test</div>
                        @endif
                    </td>
                </tr>
            @endforeach
        </table>
    </main>
</div>
</body>
</html>
