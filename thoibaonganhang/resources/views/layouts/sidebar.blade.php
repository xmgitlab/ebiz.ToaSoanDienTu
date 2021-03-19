<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element" style="text-align: center;">
                    <a  href=""><img alt="image" class="rounded-circle" src="{{asset ('/Assets/img/a7.jpg')}}" style="width:70px;height:70px"/></a> 
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <span class="block m-t-xs font-bold">Admin</span>                    
                    </a>
                </div>
                <div class="logo-element">
                    <h4>TELERIK</h4> 
                </div>
            </li>
            <li>
                <a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> 
                    <span class="nav-label">Quản lý tin tức</span> <span class="fa arrow"></span>
                </a>
                <ul class="nav nav-second-level collapse">
                    <li><a href="{{route('tintuc.posts')}}">Tạo bài viết</a></li>  
                    <li><a href="{{route('user.list')}}">Viết tạp chí</a></li>      
                </ul>
            </li>
            <li>
                <a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> 
                    <span class="nav-label">Quản lý tài khoản</span> <span class="fa arrow"></span>
                </a>
                <ul class="nav nav-second-level collapse">
                    <li><a href="{{route('role.list')}}">Danh sách nhóm quyền </a></li>  
                    <li><a href="{{route('user.list')}}">Danh sách tài khoản </a></li>      
                </ul>
            </li>
            
        </ul>
    </div>
</nav>
