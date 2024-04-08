<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Todo list</title>
</head>
<body>
    <h1>Todo list with laravel Digital School 2024</h1>


    <form action="" method="POST">
        @csrf
        <input name="title" type="text" placeholder="Ajouter une todo">
        <input type="submit" value="Ajouter todo">
    </form>
    <br>
    <br>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @if($todos)
            @foreach($todos as $todo)
            <tr>
                <td>{{ $todo->id }}</td>
                <td>{{ $todo->title }}</td>
                <td>
                    @if($todo->is_completed == false)
                    <span>Pending</span>
                    @else
                    <span>Completed</span>
                    @endif
                </td>
                <td>
                    <a href="">Edit</a>
                    <a href="">Delete</a>
                </td>
            </tr>
            @endforeach
            @endif
        </tbody>
    </table>
</body>
</html>
