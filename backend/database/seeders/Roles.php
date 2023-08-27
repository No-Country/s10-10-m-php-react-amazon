<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class Roles extends Seeder
{
        public function run(): void
        {
            $admin = User::create([
                'fullname' => 'Admin',
                'email' => 'admin@mail.com',
                'password' => bcrypt('12345678'),
            ]);

            $adminRole = Role::create(['name' => 'admin']);
            Role::create(['name' => 'user']);
            Role::create(['name' => 'business']);
    
            $permissions = Permission::pluck('id', 'id')->all();
            $adminRole->syncPermissions($permissions);
    
            $admin->assignRole([$adminRole->id]);
        }
}
