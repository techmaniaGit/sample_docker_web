<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class TopController extends Controller {
    public function index( Request $request ) {
        $temp = "";
        return view("top/index" , compact( "temp" ));
    }
}