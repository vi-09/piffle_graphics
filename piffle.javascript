var BROWN = new Color(160, 69, 19);
var PEACH = new Color(255,228,196);
var REDISH = new Color(204,102,102);
var PEACHSHADOW = new Color(228,191,143);
var ORANGE = new Color(220,170,96);
var ORANGESHADOW= new Color(208,113,50);
var GRAY = new Color(206,206,206);
var GRAYSHADOW = new Color(169,169,169);

function start(){ //shows entire design
    spawnPiffle();
}

function spawnPiffle(){
    rightEar(); //gets right ear
    leftEar();  //gets left ear
    rightWhisker();    //gets right "whiskers"
    leftWhisker();     //gets left "whiskers"
    
    var bodySkinShadow = new Oval(95, 90);    //adds body pieces
    bodySkinShadow.setColor(PEACHSHADOW);
    bodySkinShadow.setPosition(95,100);
    add(bodySkinShadow);    
    
    var bodySkin = new Oval (91.5, 72);       //adds body pieces(pt.2)
    bodySkin.setColor(PEACH);
    bodySkin.setPosition(95, 92);
    add(bodySkin);
    
    face();  //adds facial expression
}

function face(){
    var spot = new Arc(25,230,38,0);
    spot.setRotation(5); 
    spot.setPosition(65,69);
    spot.setColor(ORANGE);
    add(spot);
    var spotCoverage = new Oval(44,13);
    spotCoverage.setRotation(-38); 
    spotCoverage.setPosition(67,71);
    spotCoverage.setColor(ORANGE);
    add(spotCoverage);
    var leftEye = new Oval(9,13);
    leftEye.setPosition(69,81);
    leftEye.setColor(BROWN);
    add(leftEye);
    var RightEye = new Oval(9,13);
    RightEye.setPosition(121,81);
    RightEye.setColor(BROWN);
    add(RightEye);
    
    var underTongue = new Oval(15,22);
    underTongue.setPosition(95,92);
    underTongue.setColor(BROWN);
    add(underTongue);
    
    var tongue = new Oval(8,20);
    tongue.setPosition(95,90);
    tongue.setColor(REDISH);
    add(tongue);
    
    var noseConnective = new Oval(13,10);
    noseConnective.setPosition(89,87);
    noseConnective.setColor(BROWN);
    add(noseConnective);
    
    var noseConnective2 = new Oval(13,10);
    noseConnective2.setPosition(101,87);
    noseConnective2.setColor(BROWN);
    add(noseConnective2);
    
    var underNose = new Oval(9,10);
    underNose.setPosition(89,83);
    underNose.setColor(PEACH);
    add(underNose);
    
    var underNose2 = new Oval(9,10);
    underNose2.setPosition(101,83);
    underNose2.setColor(PEACH);
    add(underNose2);
    
    var nose = new Oval(10,5);
    nose.setPosition(95,80);
    nose.setColor(BROWN);
    add(nose);
}
function rightWhisker(){
    var body = new Oval(105, 100);
    body.setColor(BROWN);
    body.setPosition(95,100);
    add(body);    
    
    var fluffTopRight = new Oval(40,30);
    fluffTopRight.setPosition(143, 97);
    fluffTopRight.setColor(BROWN);
    add(fluffTopRight);
    
    var fluffBotRight = new Oval(29, 27);
    fluffBotRight.setColor(BROWN);
    fluffBotRight.setPosition(137, 118);
    add(fluffBotRight);
    
    var fluffBotRightSkin = new Oval(24, 21);
    fluffBotRightSkin.setColor(PEACHSHADOW);
    fluffBotRightSkin.setPosition(135, 117);
    add(fluffBotRightSkin);
    
    var fluffTopRightSkin = new Oval(25, 21);
    fluffTopRightSkin.setColor(PEACH);
    fluffTopRightSkin.setPosition(146, 97);
    add(fluffTopRightSkin);
    
    var fluffTopRightSkinLight = new Oval(25,17);
    fluffTopRightSkinLight.setColor(PEACHSHADOW);
    fluffTopRightSkinLight.setPosition(146, 99);
    add(fluffTopRightSkinLight);
}
function leftWhisker(){
    var fluffTopLeft = new Oval(38, 30);
    fluffTopLeft.setColor(BROWN);
    fluffTopLeft.setPosition(45, 97);
    add(fluffTopLeft);
    
    var fluffBotLeft = new Oval(31, 29);
    fluffBotLeft.setColor(BROWN);
    fluffBotLeft.setPosition(49, 117);
    add(fluffBotLeft);
    
    var fluffBotLeftSkin = new Oval(24, 25);
    fluffBotLeftSkin.setColor(PEACHSHADOW);
    fluffBotLeftSkin.setPosition(50, 115);
    add(fluffBotLeftSkin);
    
    var fluffTopLeftSkin = new Oval(28, 20);
    fluffTopLeftSkin.setColor(PEACH);
    fluffTopLeftSkin.setPosition(45, 97);
    add(fluffTopLeftSkin);
    
    var fluffTopLeftSkinLight = new Oval(28, 16);
    fluffTopLeftSkinLight.setColor(PEACHSHADOW);
    fluffTopLeftSkinLight.setPosition(45, 99);
    add(fluffTopLeftSkinLight);
}
function leftEar(){
    var rightRoundedEar = new Oval(25,55);
    rightRoundedEar.rotate(-3);
    rightRoundedEar.setColor(BROWN);
    rightRoundedEar.setPosition(57, 71.5);
    add(rightRoundedEar);
    
    var rightRoundedEar2 = new Oval(20,50);
    rightRoundedEar2.rotate(-62);
    rightRoundedEar2.setColor(BROWN);
    rightRoundedEar2.setPosition(72, 59);
    add(rightRoundedEar2);
    
    var rightRoundedEarSkin = new Oval(15,45);
    rightRoundedEarSkin.rotate(-3);
    rightRoundedEarSkin.setColor(ORANGESHADOW);
    rightRoundedEarSkin.setPosition(57, 71.5);
    add(rightRoundedEarSkin);
    
    var rightRoundedEar2Skin = new Oval(10,40);
    rightRoundedEar2Skin.rotate(-62);
    rightRoundedEar2Skin.setColor(ORANGESHADOW);
    rightRoundedEar2Skin.setPosition(72, 59);
    add(rightRoundedEar2Skin);
    
    var rightRoundedEarHighlight = new Oval(22,85);
    rightRoundedEarHighlight.rotate(-50);
    rightRoundedEarHighlight.setColor(ORANGE);
    rightRoundedEarHighlight.setPosition(87, 77);
    add(rightRoundedEarHighlight);
}
function rightEar(){
    var leftRoundedEar = new Oval(25,55);
    leftRoundedEar.rotate(2);
    leftRoundedEar.setColor(BROWN);
    leftRoundedEar.setPosition(132, 71.5);
    add(leftRoundedEar);
    
    var leftRoundedEar2 = new Oval(20,55);
    leftRoundedEar2.rotate(62);
    leftRoundedEar2.setColor(BROWN);
    leftRoundedEar2.setPosition(113, 59);
    add(leftRoundedEar2);
    
    var leftRoundedEarSkin = new Oval(15,45);
    leftRoundedEarSkin.rotate(2);
    leftRoundedEarSkin.setColor(ORANGESHADOW);
    leftRoundedEarSkin.setPosition(132, 71.5);
    add(leftRoundedEarSkin);
    
    var leftRoundedEar2Skin = new Oval(15,45);
    leftRoundedEar2Skin.rotate(60);
    leftRoundedEar2Skin.setColor(ORANGESHADOW);
    leftRoundedEar2Skin.setPosition(114, 61);
    add(leftRoundedEar2Skin);

    var leftRoundedEar2Skin = new Oval(23,80);
    leftRoundedEar2Skin.rotate(52);
    leftRoundedEar2Skin.setColor(ORANGE);
    leftRoundedEar2Skin.setPosition(103, 74);
    add(leftRoundedEar2Skin);    
}
