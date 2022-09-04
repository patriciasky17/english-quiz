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
        $credentials = $request->validate([
            'email' => 'required|email:dns',
            'password' => 'required'
        ]);

        // dd(Auth::login($credentials));

        // if (Auth::login($credentials)) {
        //     dd('success');
        //     $request->session()->regenerate();
        //     return redirect()->intended(route('login.quiz'));
        // }

        return redirect()->intended(route('login.quiz'));
        // return back()->with('loginError','Login failed!');
    }

    public function quiz(){
        return view('index',[
            'title' => 'Quiz - English Quiz'
        ]);
    }
}
