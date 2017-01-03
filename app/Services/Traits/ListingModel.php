<?php

namespace App\Services\Traits;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use URL;

trait ListingModel
{
	/**
	 * The custom attributes to Model
	 *
	 * @var array
	 */	
	protected $customAppends = [
		'editUrl',
		'destroyUrl'
	];	

	/**
	 * Get the URL of an entry
	 *
	 * @return string
	 */	
	public function getEditUrlAttribute() 
	{	

		return URL::action($this->controllerClass . '@edit', $this->id);
	}

	/**
	 * Get the delete URL of an entry
	 *
	 * @return string
	 */	
	public function getDestroyUrlAttribute() 	
	{	
		return URL::action($this->controllerClass . '@destroy', $this->id);
	}	

	/**
	 * Get the view URL of an entry
	 *
	 * @return string
	 */	
	public function getViewUrlAttribute() 	
	{	
		return URL::action($this->controllerClass . '@view', $this->id);
	}	

	protected function getArrayableAppends()
	{
	    $this->appends = array_unique(array_merge($this->appends, $this->customAppends));

	    return parent::getArrayableAppends();
	}	
}
