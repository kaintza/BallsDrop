var count = 1;
var score = 0;

function draw(color) {

    var ul = document.getElementById("ball_container");

    var listItem = document.createElement("li");
    var canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 100;
    listItem.appendChild(canvas);

    console.log(listItem.getContext);
    if (canvas.getContext) {
        console.log("listItem.getContext");

        var ctx = canvas.getContext('2d');
        var X = canvas.width / 2;
        var Y = canvas.height / 2;
        var R = 20;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        //ctx.lineWidth = 3;
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }
    ul.appendChild(listItem);

    listItem.scrollIntoView();
}

function fill_sum () {
    var sum_p = document.getElementById("sum");
    sum_p.textContent = "Sum:" + count;
}

function fill_score (color) {
    console.log(color);
    var score_p = document.getElementById("score");
    if (color === "pink")
        score += 1;
    else if (color ===  "purple")
        score += 15;
    else if (color ===  "blue")
        score += 3;
    else if (color ===  "green")
        score += 5;

        score_p.textContent = "Score:" + score;
}

function jajdoit () {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3003/getball');
   xhr.setRequestHeader('Content-Type', 'application/json');
    console.log("asd");
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            var userInfo = JSON.parse(xhr.responseText);
            var obj = JSON.parse(userInfo);
            console.log(obj.color);
            var color = obj.color;
            draw(color);
            fill_sum();
            fill_score(color);
            count++;
        }
    };
    var obj = new Object();
    obj.count = count;
    var jsonString= JSON.stringify(obj);
    //var count2 = {"count" : count};
        xhr.send(jsonString);
}