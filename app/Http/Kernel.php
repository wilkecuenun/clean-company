<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    protected $middlewareGroup = [
        'web' => [
            \App\Http\Middleware\Custom404::class
        ]
        // Other middleware...
        // 'auth.admin' => \App\Http\Middleware\AdminAuth::class,
    ];
}