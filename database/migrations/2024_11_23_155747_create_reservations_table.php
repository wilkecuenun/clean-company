<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->string('user_name');
            $table->string('user_surname');
            $table->string('user_email');
            $table->string('user_phone');
            $table->string('user_date');
            $table->string('user_location');
            $table->string('user_time');
            $table->json('user_services');
            $table->json('user_square')->nullable();
            $table->decimal('totalOrderValue', 10, 2);
            $table->enum('user_Frequency', ['One-time', 'Weekly', 'Bi-weekly', 'Monthly']);
            $table->enum('user_PaymentType', ['cash', 'online']);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
        });
    }

    public function down()
    {
        Schema::dropIfExists('reservations');
    }
};