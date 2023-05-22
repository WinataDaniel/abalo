<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
   <!-- <meta name="csrf-token" content="{{ csrf_token() }}"> -->
    <title> New Article </title>

</head>
<body>
<script id="csrf-token" data-token="{{ csrf_token() }}" src="{{asset('/js/newarticle.js')}}"></script>
@error('articleName')
    <div style="color: red">
        {{$message}}
    </div>
@enderror
@error('articlePrice')
    <div style="color: red">
        {{$message}}
    </div>
@enderror
</body>
</html>
