<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Articles</title>

    <!-- Fonts -->
{{--    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">--}}
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <style>
        .dropdown-content {
            display: none;
            position: absolute;
        }
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        .dropdown:hover .dropdown-content {
            display: block;
        }
    </style>

    <!-- Scripts -->
    @vite(['resources/js/app.js'])
    <script src="{{asset('/js/shoppingcart.js')}}" async></script>

</head>
<body>
<script src="{{asset('/js/cookiecheck.js')}}"></script>
<script src="{{asset('/js/navMenu2.js')}}"></script>

    <section class="container article-section">
        <h2 class="section-header"> List of Articles </h2>
        <div>
            <table class="table-container">
                <tr class="table-title-container">
                    <th class="table-title-id">id</th>
                    <th class="table-title-name">name</th>
                    <th class="table-title-price">price</th>
                    <th class="table-title-description">description</th>
                    <th class="table-title-picture">picture</th>
                </tr>
                @foreach($articlesObj as $article)
                    <tr class="table-data-container">
                        <td class="table-data-id">{{$article->id}}</td>
                        <td class="table-data-name">{{$article['ab_name']}}</td>
                        <td class="table-data-price">{{$article->ab_price}}</td>
                        <td class="table-data-description">{{$article->ab_description}}</td>
                        <td class="table-data-image">
                            @if((file_exists("articleimages/$article->id.jpg")))
                                <img src="articleimages/{{$article->id}}.jpg" alt="a picture" width="150" height="150">
                            @else
                                <img src="articleimages/{{$article->id}}.png" alt="a picture" width="150" height="150">
                            @endif
                        </td>
                        <td class="table-data-button"><button class="add-article-button">+</button></td>
                    </tr>
                @endforeach
            </table>
        </div>
    </section>
    <section class="container shopping-cart-section">
        <h2 class="section-header"> SHOPPING CART </h2>
        <div class="shopping-cart-titel">
            <span> Picture </span>
            <span> Name </span>
            <span> Price </span>
            <span> Description </span>
        </div>
        <div class="shopping-cart-items">
        </div>
    </section>
</body>
</html>
