<?php

namespace App\Modules\Page\Controllers;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class PageController extends Controller
{
    public function trangchu(){
        return view('Page::trangchu');
    }
    public function danhsach(){
        return view('Page::danhsach');
    }
    public function tintuc(){
        return view('Page::tintuc');
    }
    
}
