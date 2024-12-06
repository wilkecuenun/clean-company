<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class PassController extends Controller
{
    public function index()
    {
        $services = Service::all();
        return view('landing', compact('services'));
    }
}
