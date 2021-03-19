<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>@yield('title')</title>
    <base href="https://demos.telerik.com/php-ui/grid/basic-usage">
    <link href="{{ asset ('Assets/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{ asset ('Assets/font-awesome/css/font-awesome.css')}}" rel="stylesheet">
    <!-- Toastr style -->
    <link href="{{ asset ('Assets/css/plugins/toastr/toastr.min.css')}}" rel="stylesheet">
    <!-- Gritter -->
    <link href="{{ asset ('Assets/js/plugins/gritter/jquery.gritter.css')}}" rel="stylesheet">
    <link href="{{ asset ('Assets/css/animate.css')}}" rel="stylesheet">
    <link href="{{ asset ('Assets/css/style.css')}}" rel="stylesheet">
<!-- Kendo -->
    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2020.3.1118/styles/kendo.bootstrap-v4.min.css" />
    <script src="https://kendo.cdn.telerik.com/2020.3.1118/js/jquery.min.js"></script>
    <script src="https://kendo.cdn.telerik.com/2020.3.1118/js/kendo.all.min.js"></script>
<style>
    .container-3{
  width: 500px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
}
 
.container-3 input#search{
  width: 500px;
  height: 40px;
  background: #92b1b3;
  border: none;
  font-size: 10pt;
  float: left;
  color: #262626;
  padding-left: 45px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  color: #fff;
}
.container-3 input#search::-webkit-input-placeholder {
  color: #a53521;
}

.container-3 input#search:-moz-placeholder { /* Firefox 18- */
  color: #a53521;  
}

.container-3 input#search::-moz-placeholder {  /* Firefox 19+ */
  color: #a53521;  
}

.container-3 input#search:-ms-input-placeholder {  
  color: #a53521;  
}
.container-3 .icon{
  position: absolute;
  top: 50%;
  margin-left: 17px;
  margin-top: 11px;
  z-index: 1;
  color: black;
 
   -webkit-transition: all .55s ease;
  -moz-transition: all .55s ease;
  -ms-transition: all .55s ease;
  -o-transition: all .55s ease;
  transition: all .55s ease;
}
.container-3 input#search:focus, .container-3 input#search:active{
  outline:none; 
}

.container-3:hover .icon{
margin-top: 16px;
color: #4ec22b;

-webkit-transform:scale(1.5); /* Safari and Chrome */
-moz-transform:scale(1.5); /* Firefox */
-ms-transform:scale(1.5); /* IE 9 */
-o-transform:scale(1.5); /* Opera */
 transform:scale(1.5);
}

 .container {
    width: 500px;
    margin: auto;
    text-align: center;
    }
.pagination {
    width: 400px;
    margin-left: 50px;
}
.pagination a {
    display: block;
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
}
    
.pagination a.active {
        background-color: #4CAF50;
        color: white;
}
    
.pagination a:hover:not(.active) {
    background-color: #ddd;
} 
</style>
<body>
<div id="wrapper">
        @include('layouts.sidebar')
<div id="page-wrapper" class="gray-bg">
    <div class="row border-bottom">
        @include('layouts.navbar')
    </div>
    @yield('content')
    <div class="footer">
        <div class="float-right">
            Framework <strong>Laravel</strong>.
        </div>
        <div>
            <strong>Copyright</strong> Example Company &copy; 2020
        </div>
    </div>
</div>
    <!-- Mainly scripts -->
    <script src="{{ asset('/Assets/js/popper.min.js')}}"></script>
    <script src="{{ asset('/Assets/js/bootstrap.js')}}"></script>
    <script src="{{ asset('/Assets/js/plugins/metisMenu/jquery.metisMenu.js')}}"></script>
    <script src="{{ asset('/Assets/js/plugins/slimscroll/jquery.slimscroll.min.js')}}"></script>

    <script src="{{ asset('/Assets/js/plugins/dataTables/datatables.min.js')}}"></script>
    <script src="{{ asset('/Assets/js/plugins/dataTables/dataTables.bootstrap4.min.js')}}"></script>

    <!-- Custom and plugin javascript -->
    <script src="{{ asset('/Assets/js/inspinia.js')}}"></script>
    <script src="{{ asset('/Assets/js/plugins/pace/pace.min.js')}}"></script>
</body>
</html>