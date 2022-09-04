<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title }}</title>
    <link rel="stylesheet" href="./assets/css/style.css">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    
</head>

<body>

<div class="nav">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
    <div class="nav-title">
      Access English Course
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      
    </label>
  </div>
  
  <div class="nav-links">
  <a href="{{route('login.quiz')}}">Quiz</a>
    <a href="{{route('submit.index')}}">Submit</a>
  </div>
</div>
    
 
    <div class="quiz-container">
        <div id="quiz"></div>
    </div>
    <button id="previous" class="previous">Previous </button>
    <button id="next" class="">Next </button>
    <button id="submit">Submit Quiz</button>
    <div id="results"></div>
</body>
<script src="./assets/js/index.js"></script>

</html>
