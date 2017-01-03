<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Services\Traits\ListingModel;


class Page extends Model
{
    use ListingModel;

    /**
     * The main controller that is used by the model
     *
     * @var string
     */
    protected $controllerClass = 'Admin\PageController';    	

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'description', 'content', 'slug',
    ];



}
