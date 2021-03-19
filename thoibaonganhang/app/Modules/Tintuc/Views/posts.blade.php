@extends('layouts.master')
@section('title','Tạo tin tức')

@section('content')
<div class="wrapper wrapper-content">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox ">
                <div class="ibox-title">
                    <h5>Tạo tin tức </h5>
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
                    <form action="" method="post" enctype="multipart/form-data">
                        <h4>Chuyên mục chính</h4>
                        <input id="dropdowntree" style="width: 100%;" />
                        <h4>Chuyên mục liên quan</h4>
                        <input id="dropdowntree1" style="width: 100%;" />
                        <h4>Ảnh đại diện</h4>
                        <input name="files" id="files" type="file"/>   
                        <h4>Tiêu đề bài viết</h4>
                        <input id="simple-input" type="text" class="k-textbox" placeholder="Nhập tiêu đề bài viết" style="width: 100%;" />   
                        <h4>Tóm tắt</h4>    
                        <textarea id="description" style="width: 100%;" placeholder="Nhập tóm tắt"></textarea>
                        <h4>Nội dung bài viết :</h4>
                        <textarea id="editor" name="" rows="10" cols="30" style="width:100%; height:440px" aria-label="editor"></textarea>
                        <h4>Tác giả</h4>
                        <input id="simple-input" type="text" class="k-textbox" placeholder="Nhập tác giả" style="width: 100%;" /> 
                        <h4>Nguồn tin</h4>
                        <input id="simple-input" type="text" class="k-textbox" placeholder="Nhập nguồn tin" style="width: 100%;" /> 
                        <h4>Ngày tạo bài viết :</h4>
                        <input id="datepicker" value="10/10/2011" title="datepicker" style="width: 100%" />
                        <h4>Loại tin bài</h4> 
                        <!-- Tin copy, dịch -->
                        <input id="products" style="width: 100%;" />
                        <h4>Loại tin</h4>
                        <!-- Tin nổi bật, thường -->
                        <input id="products1" style="width: 100%;" />
                        <div style="margin-top: 20px;"> 
                            <button type="submit" class="btn btn-primary">Đồng ý</button> 
                            <button type="button" class="btn btn-default" data-dismiss="modal">Hủy</button> 
                        </div>  
                    </form>
                </div> 
            </div>
        </div>
    </div>
</div>  
<script>
    var editor = $("#editor").kendoEditor({
        stylesheets: [
            "../content/shared/styles/editor.css",
        ],
        tools: [
            "bold",
            "italic",
            "underline",
            "justifyLeft",
            "justifyCenter",
            "justifyRight",
            "insertUnorderedList",
            "createLink",
            "unlink",
            "insertImage",
            "tableWizard",
            "createTable",
            "addRowAbove",
            "addRowBelow",
            "addColumnLeft",
            "addColumnRight",
            "deleteRow",
            "deleteColumn",
            "mergeCellsHorizontally",
            "mergeCellsVertically",
            "splitCellHorizontally",
            "splitCellVertically",
            "tableAlignLeft",
            "tableAlignCenter",
            "tableAlignRight",
            "formatting",
            {
                name: "fontName",
                items: [
                    { text: "Andale Mono", value: "Andale Mono" },
                    { text: "Arial", value: "Arial" },
                    { text: "Arial Black", value: "Arial Black" },
                    { text: "Book Antiqua", value: "Book Antiqua" },
                    { text: "Comic Sans MS", value: "Comic Sans MS" },
                    { text: "Courier New", value: "Courier New" },
                    { text: "Georgia", value: "Georgia" },
                    { text: "Helvetica", value: "Helvetica" },
                    { text: "Impact", value: "Impact" },
                    { text: "Symbol", value: "Symbol" },
                    { text: "Tahoma", value: "Tahoma" },
                    { text: "Terminal", value: "Terminal" },
                    { text: "Times New Roman", value: "Times New Roman" },
                    { text: "Trebuchet MS", value: "Trebuchet MS" },
                    { text: "Verdana", value: "Verdana" },
                ]
            },
            "fontSize",
            "foreColor",
            "backColor",
        ]
    });
    $(document).ready(function() {
        $("#datepicker").kendoDatePicker();
    });
    $(document).ready(function() {
        $("#dropdowntree").kendoDropDownTree({
            placeholder: "Select ...",
            filter: "startswith",
            dataSource: [
                {
                    text: "Furniture", expanded: true, items: [
                        { text: "Tables & Chairs" },
                        { text: "Sofas" },
                        { text: "Occasional Furniture" }
                    ]
                },
                {
                    text: "Decor", items: [
                        { text: "Bed Linen" },
                        { text: "Curtains & Blinds" },
                        { text: "Carpets" }
                    ]
                }
            ]
        });
    });
    $(document).ready(function() {
        $("#dropdowntree1").kendoDropDownTree({
            placeholder: "Select ...",
            filter: "startswith",
            dataSource: [
                {
                    text: "Furniture", expanded: true, items: [
                        { text: "Tables & Chairs" },
                        { text: "Sofas" },
                        { text: "Occasional Furniture" }
                    ]
                },
                {
                    text: "Decor", items: [
                        { text: "Bed Linen" },
                        { text: "Curtains & Blinds" },
                        { text: "Carpets" }
                    ]
                }
            ]
        });
    });
    $(document).ready(function() {
        $("#files").kendoUpload();
    });
    $(document).ready(function() {
        function onChange() {
            kendoConsole.log("Change :: " + this.value());
        };

        $("#description").kendoTextArea({
            change: onChange,
            rows:5
        });
    });
    $(document).ready(function() {
        $("#products").kendoDropDownList({
            filter: "startswith",
            dataTextField: "ProductName",
            dataValueField: "ProductID",
            dataSource: {
                type: "odata",
                serverFiltering: true,
                transport: {
                    read: {
                        url: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                    }
                }
            }
        });
    });
    $(document).ready(function() {
        $("#products1").kendoDropDownList({
            filter: "startswith",
            dataTextField: "ProductName",
            dataValueField: "ProductID",
            dataSource: {
                type: "odata",
                serverFiltering: true,
                transport: {
                    read: {
                        url: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                    }
                }
            }
        });
    });
</script>         
@endsection

