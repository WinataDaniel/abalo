<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Ab_User extends Model
{
    use HasFactory;

    protected $table = 'ab_user';
    public $timestamps = false;

    protected $fillable = [
        'id', 'ab_name', 'ab_password', 'ab_mail'
    ];

    /**
     * @return HasMany - Return all articles from this user.
     */
    public function articles(): HasMany
    {
        return $this->hasMany(Ab_Article::class);
    }
}
