<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 *
 * A class that prepares a slug of an article
 */
class Slug
{

	/**
	 * Slug column name
	 *
	 * @var string
	 */
	protected $column = 'name';

	/**
	 * The table that will be queried
	 *
	 * @var object
	 */
	protected $model;

	/**
	 * Prepare an instance
	 *
	 * @return instance
	 */	
    public static function create()
    {
        return new static();
    }

	/**
	 * Get the prepared slug
	 *
	 * @return string
	 */	
	public function getSlug($string) 
	{

		$this->slug = Str::slug($string);

		return $this->createUniqueSlug();
	} 	

	/**
	 * Check if a slug is already used by a page
	 *
	 * @param string $slug
	 * @return bool
	 */	
	private function checkForExistingSlug($slug) 
	{	

		// If a previous slug doesn't exist

		if(empty($this->model->getAttribute($this->column))) {
	       return $this->model->where($this->column, '=' , $slug)->first();			
		}

		// If a slug already exists

       return $this->model->where($this->column, '=' , $slug)
			->whereNotIn($this->column, [ $this->model->getAttribute($this->column) ])
			->first();
	}	

	/**
	 * Create the slug unique
	 *
	 * @return string
	 */	
    protected function createUniqueSlug()
    {

        $originalSlug = $this->slug;

        $i = 1;

        while ($this->checkForExistingSlug($this->slug) || $this->slug === '') {
            $this->slug = $originalSlug.'-'.$i++;
        }
        return $this->slug;
    }

	/**
	 * Set name of the column that will be used of the 
	 *
	 * @return $this
	 */	

	public function setColumName($column) 
	{

		$this->column = $column;

		return $this;
	}

	/**
	 * Set the model that will be reviewed for existing slug names
	 *
	 * @return $this;
	 */	
	public function setModel(Model $model) 
	{

		$this->model = $model;

		return $this;
	} 

}