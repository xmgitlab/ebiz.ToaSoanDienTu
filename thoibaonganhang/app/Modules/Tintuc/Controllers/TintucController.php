<?php

namespace App\Modules\Tintuc\Controllers;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class TintucController extends Controller
{
    public function posts(){
        return view('Tintuc::posts');
    }
    public function role(){
        return view('Tintuc::role');
    }
}
