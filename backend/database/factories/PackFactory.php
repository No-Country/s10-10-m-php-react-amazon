<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pack>
 */
class PackFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word,
            'price' => $this->faker->randomFloat(2, 10, 1000),
            'description' => $this->faker->paragraph,
            'time_limit' => $this->faker->numberBetween(1, 30),
            'user_id' => function () {
                return User::factory()->create()->id; // Asociar el paquete a un usuario existente
            },
            'photo_url' => $this->faker->imageUrl(),
        ];
    }
}
