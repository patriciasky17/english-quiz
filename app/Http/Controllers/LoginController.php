<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return view('login',[
            'title' => 'Login - English Quiz'
        ]);
    }
    public function authenticate(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email:dns',
            'password' => 'required'
        ]);

        $users = [
            'email' => $validatedData['email'],
            'password' => $validatedData['password']
        ];

        User::create($users);

        return view('index',[
            'title' => 'English Quiz'
        ]);
    }

    public function quiz(){
        return view('index',[
            'title' => 'Quiz - English Quiz'
        ]);
    }
}
