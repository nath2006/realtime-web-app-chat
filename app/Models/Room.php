<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    //
    public function memebers(){
        return $this->belongToMany(User::class, 'room_user');
    }
}
