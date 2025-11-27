<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Room extends Model
{
    public function members(){
        return $this->belongsToMany(User::class, 'room_user')
                    ->withTimestamps()
                    ->withPivot('joined_at');
    }
}
