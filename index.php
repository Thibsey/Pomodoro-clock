<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Pomodoro</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.google.com/specimen/Hi+Melody?selection.family=Hi+Melody" rel="stylesheet" type="text/css">
    <audio id="buzzer" src="http://www.codingtutorials360.com/14244764.mp3" type="audio/mpeg" ></audio>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" src="style.css" />
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <script src="main.js"></script>
</head>
<body>
    <div class="text-center"> 
        <h1>Pomodoro Clock</h1>
        <div class="timeDiv"> 
            <h1 id="title1"> Session Time </h1>  
            <h2 id="timeType"></h2>
            <h2 id="num"> 25 </h2><br>
            <a href="#" class="btn btn-dark" id="minus1Clock">- 1</a>
            <a href="#" class="btn btn-dark" id="minus5Clock">- 5</a> &nbsp; &nbsp; &nbsp; 
            <a href="#" class="btn btn-dark" id="add5Clock">+ 5</a>
            <a href="#" class="btn btn-dark" id="add1Clock">+ 1</a>
        </div>
        <div id="breakDiv"> 
            <h1 id="title1"> Break Time </h1>  
            <h2 id="timeType2"></h2>
            <h2 id="breakNum"> 25 </h2><br>
            <a href="#" class="btn btn-dark" id="minus1Break">- 1</a>
            <a href="#" class="btn btn-dark" id="minus5Break">- 5</a> &nbsp; &nbsp; &nbsp; 
            <a href="#" class="btn btn-dark" id="add5Break">+ 5 </a>
            <a href="#" class="btn btn-dark" id="add1Break">+ 1 </a>
        </div>
        <a href="#" class="btn btn-dark" id="start">Start</a>
        <a href="#" class="btn btn-dark" id="reset">Reset</a>
    </div>
</body>
</html>