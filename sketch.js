var ball,location1;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    var pos = database.ref('ball/position');
    pos.on("value", reposition,showErr);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({
        "x": location1.x + x,
        "y": location1.y + y
    })
}

function reposition(data){
    location1 = data.val();
    ball.x = location1.x;
    ball.y = location1.y;
    console.log(location1);
}

function showErr(){
    console.log("ERROR");
}
