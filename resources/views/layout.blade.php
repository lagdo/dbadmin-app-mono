<!DOCTYPE html>
<html lang="en">

  <head>
    @include('html.header')

    @yield('css')
  </head>

  <body>
    <div id="layoutSidenav">
      <div id="layoutSidenav_content">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-primary">
          @include('page.header')
        </nav>

        <main>
          @yield('content')
        </main>
      </div>
    </div>

    <div id="layout_footer">
      <div class="sb-sidenav-footer py-3">
        <div class="container-fluid px-4">
          <span class="small">Logged in as:</span> {{ auth()->user()?->name ?? '' }}
        </div>
      </div>

      <footer class="bg-light py-3 mt-auto">
        <div class="container-fluid px-4">
          @include('page.footer')
        </div>
      </footer>
    </div>

    @yield('js')

    @include('html.footer')
  </body>

</html>
