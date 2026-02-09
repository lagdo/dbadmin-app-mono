<!DOCTYPE html>
<html lang="en">

<head>
  @include('auth.html.header')
</head>

<body class="bg-primary">
  <div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
      <main>
        <div class="container">
          <div class="row justify-content-center">
            <div class="@yield('wrapper-class') mt-5" style="color: rgba(255, 255, 255, 0.6);">
              <h3 class="text-center font-weight-light my-4">Jaxon DbAdmin</h3>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="@yield('wrapper-class')">
              <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header">
                  <h5 class="text-center font-weight-light my-4">@yield('page-title')</h5>
                </div>

                <div class="card-body">

@yield('content')

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div id="layoutAuthentication_footer">
      <footer class="bg-light mt-auto py-3">
        <div class="container-fluid px-4">
          @include('page.footer')
        </div>
      </footer>
    </div>
  </div>

  @include('auth.html.footer')
</body>

</html>
