<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Articles</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">
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
    <script src="{{asset('/js/cookiecheck.js')}}"></script>
</head>
<body>
<nav id="navId"></nav>
<article id="articleId"></article>
<section class="container article-section">
    <h2 class="section-header"> List of Articles </h2>
    <div class="table-responsive">
        <table class="table table-hover table-container">
            <tr class="table-title-container">
                <th class="table-title-id">id</th>
                <th class="table-title-name">name</th>
                <th class="table-title-price">price</th>
                <th class="table-title-description">description</th>
                <th class="table-title-picture">picture</th>
            </tr>
            @foreach($articlesObj as $value => $item)
                <tr>
                    <td class="table-data-id">{{$item->id}}</td>
                    <td class="table-data-name">{{$item->ab_name}}</td>
                    <td class="table-data-price">{{$item->ab_price}}</td>
                    <td class="table-data-description">{{$item->ab_description}}</td>
                    <td class="table-data-image">
                        @if((file_exists("articleImages/$item->id.jpg")))
                            <img src="articleImages/{{$item->id}}.jpg" alt="a picture" width="100"
                                 height="100">
                        @else
                            <img src="articleImages/{{$item->id}}.png" alt="a picture" width="100"
                                 height="100">
                        @endif
                    </td>
                    <td class="table-data-button">
                        <button class="add-article-button">+</button>
                    </td>
                </tr>
            @endforeach
        </table>
    </div>
</section>
<section class="container shopping-cart-section">
    <h2 class="section-header"> SHOPPING CART </h2>
    <div class="shopping-cart-titel">
        <span> Id </span>
        <span> Picture </span>
        <span> Name </span>
        <span> Price </span>
        <span> Description </span>
    </div>
    <div class="shopping-cart-items">
    </div>
</section>
<script src="{{asset('/js/navMenu2.js')}}"></script>
</body>
</html>
