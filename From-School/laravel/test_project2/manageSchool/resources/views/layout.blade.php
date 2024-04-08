<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <!-- Ajoutez ici d'autres fichiers CSS si nécessaire -->
</head>
<body>
    <div class="container">
        @yield('content')
    </div>

    <script src="{{ asset('js/bootstrap.bundle.min.js') }}"></script>
    <!-- Ajoutez ici d'autres fichiers JS si nécessaire -->
</body>
</html>
