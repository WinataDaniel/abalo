<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Ab_Article extends Model
{
    use HasFactory;

    protected $table = 'ab_article';
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'ab_name',
        'ab_price',
        'ab_description',
        'ab_creator_id',
        'ab_createdate'
    ];

    /**
     * Get the user that owns this article.
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(Ab_User::class);
    }

    /**
     * Get the categories of this article.
     * @return BelongsToMany
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Ab_ArticleCategory::class);
    }
}
