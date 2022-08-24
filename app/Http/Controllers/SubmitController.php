<?php

namespace App\Http\Controllers;

use App\Models\Quizz;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubmitController extends Controller
{
    public function index(){
        return view('submit', [
            'title' => 'Submit - English Quiz'
        ]);
    }

    public function store(Request $request){
        $validatedData = $request->validate([
            'email' => 'required|email:dns',
            'namalengkap'   => 'required',
            'correctquestion' => 'required',
            'screenshot' => 'required'
        ]);

        $quizz = [
            'email' => $validatedData['email'],
            'namalengkap' => $validatedData['namalengkap'],
            'correctquestion' => $validatedData['correctquestion'],
            'timeline' => Carbon::now(),
        ];



        if($request->screenshot){
            $screenshot = $request->file('screenshot');
            $screenshot_name = $screenshot->getClientOriginalName();
            $screenshot->move(public_path('/penyimpanan/screenshot'), $screenshot_name);
            $screenshot_path = "/penyimpanan/screenshot/" . $screenshot_name;
            $validatedData['screenshot'] = $screenshot_path;
            $quizz['screenshot'] = $validatedData['screenshot'];
        };

        // dd($quizz);

        Quizz::create($quizz);

        return redirect()->intended(route('submit.index'));
    }
}
