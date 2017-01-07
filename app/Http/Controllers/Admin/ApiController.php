<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Page;

class ApiController extends Controller
{

    /**
     * Number of articles per page
     *
     * @var array
     */
    protected $articlesPerPage = 4;

    /**
     * Default offset
     *
     * @var array
     */
    protected $offset = 0;

    /**
     * Get all pages
     *
     * @param App\Page $page
     * @return 
     */	
    public function getPages(Request $request) 
    {	

        if(!empty(intval($request->offset))) {
            $this->offset = $request->offset;
        }

        $page = new Page();         

        $data['articles'] = $page->offset($this->offset * $this->articlesPerPage)->limit($this->articlesPerPage)->get();
        $data['pages'] = ceil($page->all()->count() / $this->articlesPerPage);

        return $data;
    }	

}
