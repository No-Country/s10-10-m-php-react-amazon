<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class Roles extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usuario = User::create(
        [
            'fullname' => 'Admin',
            'email' => 'admin@mail.com',
            'password' => bcrypt('12345678'),
        ]);

        $roles = Role::create(
            [
                'name' => 'admin',
            ],
        );
        Role::create(['name' => 'user']);
        Role::create(['name' => 'business']);
        $permisos = Permission::pluck('id', 'id')->all();
        $roles->syncPermissions($permisos);
        $usuario->assignRole([$roles->id]);
    }
}
