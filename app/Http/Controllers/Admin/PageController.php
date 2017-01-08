<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests\SavePageRequest;
use App\Page;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Page $page)
    {

        $data = [            
            'apiMethod' => 'getPages',
            'title' => 'Pages'

        ];

        return view('admin/page/index', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Page $page)
    {

        $page->id = 0;
        
        $data = [
            'page' => $page,
            'button' => 'Add',
            'title' => 'Add page'
        ];
        return view('admin/page/save', $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SavePageRequest $request, Page $page)
    {
        $request = $request->prepareSlug($page);

        $page = $page->create($request->all());
        return $page->id;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Page $page)
    {
        dd('Preview mode');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Page $page)
    {
        $data = [
            'page' => $page,
            'button' => 'Update',
            'title' => 'Edit page',
        ];
        return view('admin/page/save', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SavePageRequest $request, Page $page)
    {
        $request = $request->prepareSlug($page);

        $page->update($request->all());
        return $page->id;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Page $page)
    {
        return $page->destroy($page->id);
    }
}
