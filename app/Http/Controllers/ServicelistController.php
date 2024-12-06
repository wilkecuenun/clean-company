<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ServicelistController extends Controller
{
    public function index()
    {
        return view('servicelist');
    }
}
