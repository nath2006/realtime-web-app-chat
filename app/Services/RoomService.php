<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;
use App\Models\Room;
use App\Models\User;


class RoomService
{
    public function getRooms(string $search = null)
    {
        $user = Auth::user();

        return $user->rooms()
            ->with(['members' => function ($query) use ($user) {
                //only get another user (for private room)
                $query->where('user_id', '!=', $user->id);
            }]);
        if ($search) {
            $query->where(function ($q) use ($user, $search) {
                $q->where('type', 'private', '%')
                    ->orWhereHas('members', function ($memberQuery) use ($user, $search) {
                        $memberQuery('name', 'like', '%' . $search . '%');
                    });
            });
        }
        return $query->get();
    }

}
