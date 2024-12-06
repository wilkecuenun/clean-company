<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_name',
        'user_surname',
        'user_tel',
        'user_email',
        'user_location',
        'user_date',
        'user_time',
        'user_payment_type',
        'user_building_type',
        'user_take_key_address',
        'user_give_key_address',
        'user_services',
        'user_square',
        'totalOrderValue',
        'userFrequency',
        'userPaymentType'
    ];

    protected $casts = [
        'user_services' => 'array',
        'user_square' => 'array',
    ];
}
