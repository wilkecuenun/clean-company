<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Carbon\Carbon;

class AdminController extends Controller
{
    public function showLogin()
    {
        return view('admin.login');
    }

    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        if ($email === 'admin@gmail.com' && $password === 'admin123') {
            session(['admin_logged_in' => true]);
            return redirect()->route('admin.dashboard');
        }

        return back()->withErrors(['Invalid credentials']);
    }

    public function dashboard()
    {
        return view('admin.dashboard');
    }

    public function showCalendar()
    {
        return view('admin.calendar');
    }

    public function getCalendar(Request $request)
    {
        // Get the requested date or use the current date
        $date = $request->input('date') ? Carbon::createFromFormat('Y-m-d', $request->input('date')) : Carbon::now();

        // Get the first and last day of the month
        $startOfMonth = $date->copy()->startOfMonth();
        $endOfMonth = $date->copy()->endOfMonth();

        // Get reservations for the month
        $reservations = Reservation::whereBetween('user_date', [
            $startOfMonth->format('d/m/Y'), // Ensure the format matches the database
            $endOfMonth->format('d/m/Y'),
        ])->get();

        // Group reservations by date
        $reservationsByDate = $reservations->groupBy(function ($reservation) {
            return Carbon::createFromFormat('d/m/Y', $reservation->user_date)->format('Y-m-d');
        });

        // Render the calendar view for the given month
        return view('admin.calendargrid', compact('date', 'reservationsByDate', 'reservations'))->render();
    }

    public function logout(Request $request)
    {
        // Clear the admin session
        $request->session()->forget('admin_logged_in');

        // Redirect to the admin login page
        return redirect()->route('main');
    }
}
