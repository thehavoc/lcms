<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use App\Services\Slug;

class SavePageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        $rules = [
            'title' => 'required',
            'slug' => [
                'regex:/^[a-z1-9_-]+$/',                
                'unique' => 'unique:pages'
            ]
        ];

        if ($this->method() == 'PUT' || $this->method() == 'PATCH') {
            $page = $this->route('page');
            $rules['slug']['unique'] = 'unique:pages,slug,' . $page->id;
        } 

        return $rules;        

    }

    /**
     * Set a unique name of a page
     *
     * @param  \App\Page $page
     * @return $this
     */
    public function prepareSlug(Page $page)
    {       
        if(!empty($this->title) && empty($this->slug)) {
            $this->merge(array('slug' => Slug::create()->setModel($page)->setColumName('slug')->getSlug($this->title)));
        }
        return $this;
    }    
}
