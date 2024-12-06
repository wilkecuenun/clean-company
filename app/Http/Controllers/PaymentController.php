<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PaymentController extends Controller
{
    public function processPayment(Request $request)
    {
        Log::info('Payment Request:', $request->all());

        // Validate the input data
        $data = $request->validate([
            'cardNumber' => 'required|string',
            'expiryDate' => 'required|string',
            'cvc' => 'required|string',
            'amount' => 'required|numeric|min:1', // Base amount before tax
        ]);

        // Define tax rate and bank fee rate
        $taxRate = 0.10;  // Example: 10% sales tax
        $bankFeeRate = 0.02;  // Example: 2% bank fee

        // Calculate the tax
        $taxAmount = $data['amount'] * $taxRate;

        // Calculate the total amount including tax
        $totalAmountWithTax = $data['amount'] + $taxAmount;

        // Calculate the bank fee based on the card payment
        $bankFee = $totalAmountWithTax * $bankFeeRate;

        // Total payment amount after including bank fee
        $totalAmountAfterFee = $totalAmountWithTax + $bankFee;

        // Log the calculated values for debugging
        Log::info("Tax Amount: $taxAmount, Total Amount with Tax: $totalAmountWithTax, Bank Fee: $bankFee, Total Amount After Fee: $totalAmountAfterFee");

        try {
            // Integrate with Stripe or any other payment gateway
            \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

            // Create the charge request
            $charge = \Stripe\Charge::create([
                'amount' => $totalAmountWithTax * 100, // Convert to cents
                'currency' => 'usd',
                'source' => $request->cardNumber,
                'description' => 'Payment for order including taxes',
            ]);

            // Return the response with all the required details
            return response()->json([
                'success' => true,
                'charge' => $charge,
                'totalAmountWithTax' => $totalAmountWithTax,
                'taxAmount' => $taxAmount,
                'bankFee' => $bankFee,
                'totalAmountAfterFee' => $totalAmountAfterFee,
            ]);
        } catch (\Exception $e) {
            // Handle any errors that occur during payment processing
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }
}
