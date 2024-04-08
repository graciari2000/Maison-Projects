<?php

// database/factories/CoursFactory.php

namespace Database\Factories;

use App\Models\Cours;
use Illuminate\Database\Eloquent\Factories\Factory;

class CoursFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Cours::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(3),
            'instructor' => $this->faker->name,
            'description' => $this->faker->paragraph(3),
            'duration' => $this->faker->randomElement(['1 hour', '2 hours', '3 hours']),
            'difficulty' => $this->faker->randomElement(['Beginner', 'Intermediate', 'Advanced']),
            'lessons' => $this->faker->numberBetween(5, 20),
            'quizzes' => $this->faker->numberBetween(2, 10),
            'price' => $this->faker->randomFloat(2, 10, 100),
            'students_accepted' => $this->faker->numberBetween(20, 100),
        ];
    }
}
