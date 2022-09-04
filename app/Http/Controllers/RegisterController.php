<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    public function index()
    {
        return view('register',[
            'title' => 'Register - English Quiz'
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email:dns',
            'password1' => 'required',
            'password2' => 'required|same:password1',
        ]);

        $users = [
            'email' => $validatedData['email'],
            'password' => $validatedData['password1']
        ];

        // dd($users);

        User::create($users);

        return redirect()->intended(route('login.index'))->with('success','Register success! You may login now!');
    }
}
