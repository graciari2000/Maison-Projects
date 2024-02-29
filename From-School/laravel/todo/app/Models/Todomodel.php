<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todomodel extends Model
{
    use HasFactory;
    protected $fillable = ['title'];
}
