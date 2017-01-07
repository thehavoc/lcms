<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    
    /**
     * Display the front page of the admin area
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    	$data = [
    		'title' => 'Dashboard'
    	];

        return view('admin/dashboard/index', $data);
    }
}
