<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use App\Models\Service;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{
    public function index()
    {
        // Display the list of services with a form to add a new one
        $services = Service::all();
        return response()->json($services); // Return as JSON
    }

    public function show()
    {
        // Display the list of services with a form to add a new one
        $services = Service::all();
        return view('admin.services', compact('services'));
    }


    public function store(Request $request): RedirectResponse
    {
        // Validate the incoming data
        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|unique:services,slug|max:255',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:0',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $input = $request->all();

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = time() . '.' . $file->getClientOriginalExtension();

            // Save the file directly to the "public/uploads" directory
            $destinationPath = public_path('uploads');
            $file->move($destinationPath, $fileName);

            // Store the relative path in the database for the frontend
            $input['image'] = 'uploads/' . $fileName;
        }

        Service::create($input);

        // Redirect with success message
        return redirect()->route('admin.services')->with('success', 'Service added successfully!');
    }

    public function update(Request $request, $id)
    {
        // Validate the incoming data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'price' => 'required|numeric',
            'quantity' => 'required|integer',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Find the service being updated
        $service = Service::findOrFail($id);

        // Create an input array from validated data
        $input = $validatedData;

        // Handle the image upload if an image has been provided
        if ($image = $request->file('image')) {
            $destinationPath = 'images/';
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $input['image'] = $profileImage; // Set the new image path
        } else {
            unset($input['image']); // This will remove the image key if no image is uploaded
        }

        // Update the service with the modified input array
        $service->update($input);

        // Redirect with a success message
        return redirect()->route('admin.services')->with('success', 'Service updated successfully!');
    }

    public function destroy($id)
    {
        $service = Service::findOrFail($id);

        try {
            $service->delete();

            // Add a success message to the session
            Session::flash('success', 'Service deleted successfully.');
        } catch (\Exception $e) {
            // Handle errors if deletion fails
            Session::flash('error', 'Failed to delete service. Please try again.');
        }

        return redirect()->route('admin.services');
    }
}
