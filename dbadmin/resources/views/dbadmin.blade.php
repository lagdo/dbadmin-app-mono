@extends('layout')

@section('page-title', 'Database administration')

@section('css')
  @jxnCss
@endsection

@section('js')
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  @jxnJs

  @jxnScript

  <script type='text/javascript'>
    @jxnPackage(Lagdo\DbAdmin\Db\DbAdminPackage::class, 'ready');
  </script>
@endsection

@section('content')
          <div class="container-fluid px-3 py-3">
            {!! jaxon()->package(Lagdo\DbAdmin\Db\DbAdminPackage::class)->layout() !!}
          </div>
@endsection
