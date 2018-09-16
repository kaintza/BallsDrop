let count = 1;
let score = 0;

function addBall () {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/getball');
    xhr.setRequestHeader('Content-Type', 'application/json');
    console.log("asd");
    xhr.onload = function () {
        if (xhr.status === 200) {
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
    let obj = new Object();
    obj.count = count;
    let jsonString= JSON.stringify(obj);
    //var count2 = {"count" : count};
    xhr.send(jsonString);
}

function draw(color) {

    let ul = document.getElementById("ball_container");

    let listItem = document.createElement("li");
    let canvas = document.createElement("canvas");
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
    let sum_p = document.getElementById("sum");
    sum_p.textContent = "Sum:" + count;
}

function fill_score (color) {
    console.log(color);
    let score_p = document.getElementById("score");
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

