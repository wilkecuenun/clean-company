<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin Panel')</title>
    <!-- Bootstrap 5 -->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
    <!-- Font Awesome (for icons) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <!-- Custom Styles -->
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

    @yield('styles')
</head>

<body class="bg-light">
    <header class="bg-dark text-white py-3 shadow-sm">
        <div class="container d-flex justify-content-between align-items-center">
            <h1 class="h4 mb-0">Admin Panel</h1>
            <nav>
                <ul class="nav">
                    <li class="nav-item"><a class="nav-link text-white" href="/admin/dashboard"><i
                                class="fa fa-home"></i> Dashboard</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="/admin/reservations"><i
                                class="fa fa-calendar-alt"></i> Reservations</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="/admin/services"><i
                                class="fa fa-tools"></i> Services</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="/logout"><i
                                class="fa fa-sign-out-alt"></i> Logout</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="container my-4">
        <div class="card shadow-sm p-4 bg-white">
            @yield('content')
        </div>
    </main>

    <footer class="bg-dark text-white py-3 mt-4">
        <div class="container text-center">
            &copy; 2024 Cleaning Services - Admin Panel
        </div>
    </footer>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    @yield('scripts')
</body>

</html>
