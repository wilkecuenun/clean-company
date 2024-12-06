<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;
use App\Models\Service;
use Illuminate\Support\Facades\DB;

class ReservationController extends Controller
{
    // List all reservations
    public function index()
    {
        $reservations = Reservation::all();

        // Pass reservations to the admin view
        return view('admin.reservations', compact('reservations'));
    }

    // Store a new reservation
    public function store(Request $request)
    {
        try {
            $reservation = new Reservation();
            $reservation->user_name = $request->userName;
            $reservation->user_surname = $request->userSurname;
            $reservation->user_email = $request->userEmail;
            $reservation->user_phone = $request->userTel;
            $reservation->user_location = $request->userLocation;
            $reservation->user_date = $request->userDate;
            $reservation->user_time = $request->userTime;
            $reservation->user_services = json_encode($request->userServices);
            $reservation->user_square = json_encode($request->userSquare);
            $reservation->user_Frequency = $request->userFrequency;
            $reservation->user_PaymentType = $request->userPaymentType;
            $reservation->totalOrderValue = $request->totalOrderValue;
            $reservation->save();

            return response()->json([
                'success' => true,
                'message' => 'Reservation stored successfully!',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function dashboard()
    {
        $reservations = DB::table('reservations')
            ->select('user_date', 'user_name', 'user_time') // Fetch only relevant fields
            ->get(); // Retrieve all reservations

        return view('admin.dashboard', [
            'reservations' => $reservations, // Pass reservations to view
        ]);
    }

    public function calendar()
    {
        $reservations = DB::table('reservations')->get();

        return view('admin.calendar', [
            'reservations' => $reservations, // All reservations
        ]);
    }

    // Delete a reservation
    public function destroy($id)
    {
        $reservation = Reservation::findOrFail($id);

        try {
            $reservation->delete();

            // Redirect to the dashboard page with a success message
            return redirect()->route('admin.dashboard')->with('success', 'Reservation deleted successfully.');
        } catch (\Exception $e) {
            // Redirect to the dashboard page with an error message
            return redirect()->route('admin.dashboard')->with('error', 'Failed to delete reservation.');
        }
    }

    public function pass()
    {
        $services = Service::all();
        return view('pass', compact('services'));
    }
}
