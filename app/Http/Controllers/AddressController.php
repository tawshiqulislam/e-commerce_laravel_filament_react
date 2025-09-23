<?php

namespace App\Http\Controllers;

use App\Models\Addresses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AddressController extends Controller
{
    public function index()
    {
        $this->authorize('viewAny', Addresses::class);
        return Inertia::render('Profile/Address', [
            'addresses' => Auth::user()->addresses
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'phone' => 'required|string|max:20',
            'city' => 'required|string|max:255',
            'address' => 'required|string|max:500',
        ]);

        Auth::user()->addresses()->create($validated);

        return redirect()->back()->with('success', 'Address added successfully');
    }

    public function update(Request $request, Addresses $address)
    {
        $this->authorize('update', $address);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'phone' => 'required|string|max:20',
            'city' => 'required|string|max:255',
            'address' => 'required|string|max:500',
        ]);

        $address->update($validated);

        return redirect()->back()->with('success', 'Address updated successfully');
    }

    public function destroy(Addresses $address)
    {
        $this->authorize('delete', $address);
        
        $address->delete();
        return redirect()->back()->with('success', 'Address deleted successfully');
    }
}