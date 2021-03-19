@extends('layouts.master')
@section('title','Danh sách tài khoản')

@section('content')
<div class="row wrapper border-bottom white-bg page-heading">
    <div class="col-lg-10">
        <h2>Danh sách tài khoản</h2>        
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
                <a>Quản lý tài khoản</a>
            </li>
            <li class="breadcrumb-item active">
                <strong> Danh sách tài khoản</strong>
            </li>
        </ol>
    </div>
</div>
<div class="wrapper wrapper-content">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox ">
                <div class="ibox-title">
                    <h5>Danh sách tài khoản </h5>
                    <div class="ibox-tools">
                        <a class="collapse-link">
                            <i class="fa fa-chevron-up"></i>
                        </a>
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="fa fa-wrench"></i>
                        </a>
                        <a class="close-link">
                            <i class="fa fa-times"></i>
                        </a>
                    </div>
                </div>   
                <div class="ibox-content">                                   
                    <table id="grid">
                    <thead>
                            <tr>
                                <th>Tài khoản</th>
                                <th>Họ tên</th>
                                <th>Gmail</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>admin</td>
                                <td>Admin</td>
                                <td>admin@gmail.com</td>
                                <td>
                                    <button type="button" data-role="button" data-icon="edit">Sửa</button>
                                    <button type="button" data-role="button" data-icon="edit">Phân quyền</button>
                                    <button type="button" data-role="button" data-icon="close">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <script>
                    $(document).ready(function() {
                        $("#grid").kendoGrid({
                            toolbar: ["search"],
                            sortable: true,
                            pageable: {
                                refresh: true,
                                pageSizes: true,
                                buttonCount: 5
                            },                           
                        });
                        $(".editButton").kendoButton({
                        icon: "edit"
                        });

                        $(".closeButton").kendoButton({
                            icon: "close"
                        });
                        kendo.init("#grid");
                        });
                </script>
                </div> 
            </div>
        </div>
    </div>
</div>           
@endsection

