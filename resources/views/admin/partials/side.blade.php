<!-- Navigation -->
<nav class="navbar navbar-default navbar-static-top" style="margin-bottom: 0; z-index: 3">
    <div class="navbar-header">
        
        <a class="navbar-brand" href="{{ url('admin') }}">LCMS Admin</a>
    </div>
    <!-- /.navbar-header -->


    <div class="navbar-default sidebar" role="navigation" >
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav in" id="side-menu">
                <li>
                    <a href="{{ url('admin') }}"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                    <a href="{{ url('admin/pages') }}"><i class="fa fa-dashboard fa-fw"></i> Pages</a>
                </li>
   
            </ul>
        </div>
        <!-- /.sidebar-collapse -->
    </div>
    <!-- /.navbar-static-side -->
</nav>