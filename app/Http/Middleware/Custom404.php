<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Custom404
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Pass the request to the next middleware/handler
        $response = $next($request);

        // Check if the response status is 404
        if ($response->isNotFound()) {
            // Return the custom 404 view
            return response()->view('errors.404', [], 404);
        }

        return $response;
    }
}
