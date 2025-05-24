<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        $validatedData = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phoneNumber' => 'nullable|string|max:20',
            'message' => 'required|string',
        ]);

        try {
            // Send email
            Mail::to(env('MAIL_CONTACT_ADDRESS', 'george.vanden283@gmail.com'))
                ->send(new ContactFormMail($validatedData));

            // Log success
            Log::info('Contact form email sent', ['to' => env('MAIL_CONTACT_ADDRESS', 'maybol283@gmail.com')]);

            return redirect()->back()->with('success', 'Message sent successfully!');
        } catch (\Exception $e) {
            // Log the error
            Log::error('Contact form email failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return redirect()->back()
                ->withInput()
                ->with('error', 'Failed to send message. Please try again later.');
        }
    }
}
