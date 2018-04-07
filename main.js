$(document).ready(function () {
    var buzzer = $("#buzzer")[0];
    var count = parseInt($("#num").html());
    var breakTime = parseInt($("#breakNum").html());
    $("#reset").hide();

    $("#start").click(function () {
        var counter = setInterval(timer, 1000);
        count *= 60;
        breakTime *= 60;

        function timer() {
            $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #minus1Clock, #add1Clock, #minus1Break, #add1Break, #breakNum, #title1, #title2").hide();
            $("#timeType").html("Session Time: ");
            count -= 1;
            if (count === 0) {
                buzzer.play();
                clearInterval(counter);
                var startBreak = setInterval(breakTimer, 1000);
                $("#num, #timeType").hide();
            }
            if (count % 60 >= 10) {
                $("#num").html(Math.floor(count / 60) + ":" + count % 60);
            } else {
                $("#num").html(Math.floor(count / 60) + ":" + "0" + count % 60);
            }

            function breakTimer() {
                $("#timeType2").html("Break Time: ");
                $("#breakNum").show();
                breakTime -= 1;
                if (breakTime === 0) {
                    buzzer.play();
                    clearInterval(startBreak);
                    $("#reset").show();
                    $("#breakNum, timeType, timeType2").hide();
                    $("#timeType2").html(" ");
                }
                if (breakTime % 60 >= 10) {
                    $("#breakNum").html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
                } else {
                    $("#breakNum").html(Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60);
                }
            }
        }

    });

    $("#reset").click(function () {
        count = 25;
        breakTime = 25;
        $("#num").html(count);
        $("#breakNum").html(breakTime);
        $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #minus1Clock, #add1Clock, #minus1Break, #add1Break,#num, #breakNum, #title1, #title2").show();
        $("#reset").hide();
    });

    $("#minus5Clock").click(function () {
        if (count > 5) {
            count -= 5;
            $("#num").html(count);
        }
    });
    $("#add5Clock").click(function () {
        count += 5;
        $("#num").html(count);
    });
    $("#minus5Break").click(function () {
        if (breakTime > 5) {
            breakTime -= 5;
            $("#breakNum").html(breakTime);
        }
    });
    $("#add5Break").click(function () {
        breakTime += 5;
        $("#breakNum").html(breakTime);
    });
    $("#minus1Clock").click(function () {
        if (count > 1) {
            count -= 1;
            $("#num").html(count);
        }
    });
    $("#add1Clock").click(function () {
        count += 1;
        $("#num").html(count);
    });
    $("#minus1Break").click(function () {
        if (breakTime > 1) {
            breakTime -= 1;
            $("#breakNum").html(breakTime);
        }
    });
    $("#add1Break").click(function () {
        breakTime += 1;
        $("#breakNum").html(breakTime);
    });
});
