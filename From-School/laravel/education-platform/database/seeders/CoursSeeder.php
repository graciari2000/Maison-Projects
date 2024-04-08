<?php

// database/seeders/CoursSeeder.php

// database/seeders/CoursSeeder.php

namespace Database\Seeders;

use App\Models\Cours;
use Illuminate\Database\Seeder;

class CoursSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $courses = [
            [
                'title' => 'Course Title 1',
                'instructor' => 'Instructor Name 1',
                'description' => 'Course Description 1',
                'duration' => '1 hour',
                'difficulty' => 'Beginner',
                'lessons' => 10,
                'quizzes' => 5,
                'price' => 49.99,
                'students_accepted' => 50,
            ],
            [
                'title' => 'Course Title 2',
                'instructor' => 'Instructor Name 2',
                'description' => 'Course Description 2',
                'duration' => '2 hours',
                'difficulty' => 'Intermediate',
                'lessons' => 15,
                'quizzes' => 8,
                'price' => 79.99,
                'students_accepted' => 30,
            ],
            // Add more courses as needed
        ];

        foreach ($courses as $course) {
            Cours::create($course);
        }
    }
}


