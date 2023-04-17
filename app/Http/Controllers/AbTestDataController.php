<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use App\Models\AbTestData;

class AbTestDataController extends Controller
{
    public function getAbTestData(){
        $result = AbTestData::all();
        return view('ab_testData', [
            'testData' => $result,
        ]);
    }
}
