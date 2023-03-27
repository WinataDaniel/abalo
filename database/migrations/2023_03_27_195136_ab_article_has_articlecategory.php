<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ab_article_has_articlecategory', function(Blueprint $table) {
            $table->id();
            $table->bigInteger('ab_articlecategory_id')->nullable(false);
            $table->foreign('ab_articlecategory_id')->on('ab_articlecategory')->references('id')->onUpdate('cascade');
            $table->bigInteger('ab_article_id')->nullable(false);
            $table->foreign('ab_article_id')->on('ab_article')->references('id')->onUpdate('cascade');
            $table->unique(['ab_articlecategory_id', 'ab_article_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ab_article_has_articlecategory');
    }
};
