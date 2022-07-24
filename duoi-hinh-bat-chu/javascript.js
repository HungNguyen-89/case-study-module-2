let score = 0;
let demFalse = 0;
let demXacNhan = 1;
let a = [];
let dem = 1;
let demGoiy = 5;
let markGoiy;
let x = 0;
let c = [];
c[0] = 0;
let j = 0;
a[0] = 'いちご';
a[1] = 'りんご';
a[2] = 'さくらんぼ';
a[3] = 'みかん';
a[4] = 'もも';
a[5] = 'ぶどう';
a[6] = 'すいか';
a[7] = 'かき';
a[8] = 'なし';
a[9] = 'くり';
a[10] = 'すもも';


function getRandomNumber() {
    let check;
    do {
        check = true;
        x = Math.floor(Math.random() * 11);
        for (i = 0; i <= j; i++) {
            if (c[i] == x) {
                check = false;
                break;
            }
        }
        if (check == true) {
            if (dem > 0) {
                document.getElementById("hiddenNumber").innerHTML = x;
                document.getElementById('image-background').innerHTML = '<img src="image/' + x + '.jpg">';
                dem = 0;
                c[j++] = x;
            }
        }
    }
    while (check == false && j < a.length)
}


let time = 31;
let myInterval = -1;
let timeABC;
function setTimeClock() {
    if (myInterval == -1) {
        myInterval = setInterval("coutDown()", 1000)
    }
    else {
        clearInterval(myInterval);
        myInterval = -1;
        time = 31;
    }
}

function coutDown() {
    time--;
    document.getElementById("timeClock").innerHTML = '00 : ' + time;
    timeABC = time;
    if (time < 10) {
        document.getElementById("timeClock").innerHTML = '00 : 0' + time;
    }
    if (time == 0) {
        document.getElementById('image-background').innerHTML = '<img src="image/backgroundgameover.JPG">' +
            '<audio autoplay><source src="./sound/gameover.wav"></audio>';
        clearInterval(myInterval);
        document.getElementById("notification").innerHTML = 'Bạn đã thua cuộc!!!';
        document.getElementById("buttonPlayContainer").innerHTML = "";
    }
}

function playGame() {
    getRandomNumber();
    display(x);
    document.getElementById("buttonPlayContainer").innerHTML = '<button id="btn1" onclick="xacnhan()" class="buttonPlay">Trả lời </button>' +
        '<button id="btn2" onclick="tieptuc()" class="buttonPlay2">Tiếp theo <i class="fa-solid fa-angles-right"></i></button>';
    setTimeClock();
    document.getElementById("btn2").disabled = true;
    document.getElementById("totalAnswer").innerHTML = demXacNhan;
}


function xacnhan() {
    setTimeClock();
    demXacNhan++;
    dem = 1;
    document.getElementById("buttonPlayContainer").innerHTML = '<button id="btn1" onclick="xacnhan()" class="buttonPlay2">Trả lời</button><br>' +
        '<button id="btn2" onclick="tieptuc()" class="buttonPlay button2">Tiếp theo  <i class="fa-solid fa-angles-right"></i></button> ' +
        '<audio autoplay><source src="sound/selectClick.wav"></audio>';
    let dapan = (document.getElementById("txt").value).toLowerCase();
    let x = document.getElementById("hiddenNumber").innerHTML;
    if (dapan == a[x]) {
        document.getElementById("notification").innerHTML = "Bạn đã trả lời chính xác" +
            '<audio autoplay><source src="sound/correctAnswer.wav"></audio>';
        document.getElementById("btn1").disabled = true;
    }
    else {
        document.getElementById('image-background').innerHTML = '<img src="image/backgroundgameover.JPG">' +
            '<audio autoplay><source src="sound/gameover.wav"></audio>';
        document.getElementById("notification").innerHTML = 'Bạn đã thua cuộc!!!';
        document.getElementById("buttonPlayContainer").innerHTML = "";
        document.getElementById("inputText").innerHTML = "";
        document.getElementById("suggest").innerHTML = "";

    }
}

function tieptuc() {
    if (demXacNhan <= a.length) {
        getRandomNumber();
        display(x);
        document.getElementById("buttonPlayContainer").innerHTML = '<button id="btn1" onclick="xacnhan()" class="buttonPlay"> Trả lời</button><br>' +
            '<button id="btn2" onclick="tieptuc()" class="buttonPlay2 button2">Tiếp theo  <i class="fa-solid fa-angles-right"></i></button>' +
            '<audio autoplay><source src="sound/selectClick.wav"></audio>';
        setTimeClock();
        document.getElementById("totalAnswer").innerHTML = demXacNhan;
        document.getElementById("btn2").disabled = true;
        document.getElementById("notification").innerHTML = '';
    }
    else {
        document.getElementById('backgroundWiner').innerHTML = '<img src="image/backgroundwiner.JPG">' +
            '<audio autoplay><source src="sound/winner.wav"></audio>';
        document.getElementById("notification").innerHTML = 'Chúc mừng bạn đã chiến thắng!!!';
        document.getElementById("btn2").disabled = true;
    }
}
function display(x) {
    let table = "<table border='0' ><tr>"
    for (i = 0; i < a[x].length; i++) {
        table += "<td>" + '<input type="text" class="txtNumber" placeholder="' + (i + 1) + '" >' + "</td>";
    }
    table = table + "</tr></table>";
    document.getElementById("suggest").innerHTML = table;
    document.getElementById("inputText").innerHTML = '<input type="text" id="txt" placeholder="Nhập đáp án vào đây!!!">';
}


playGame();
