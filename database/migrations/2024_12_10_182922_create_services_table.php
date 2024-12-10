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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // For the product name
            $table->string('slug')->unique(); // For the slug, usually unique
            $table->decimal('price', 10, 2); // For the price, with 2 decimal points
            $table->integer('quantity'); // For the quantity
            $table->string('image')->nullable(); // For the image, nullable if not required
            $table->timestamps(); // To keep track of created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
