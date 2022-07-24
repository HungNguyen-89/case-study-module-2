let array1 = ["A.", "B.", "C.", "D."];
let array2 = ["私は速くから彼女が働く<span style='color:blue'><u>姿</u></span>を見ていた",
    "スポーツをする時は、ときどき水分を<span style='color:blue'><u>補った</span></u>ほうがいい。",
    "３人に1人の<span style='color:blue'><u>割合</span></u>で、その試験に合格している。",
    "それでは、来月の<span style='color:blue'><u>中旬</span></u>にまたご連絡します。",
    "病気やけがに<span style='color:blue'><u>備えて</span></u>、危険に入っておいたほうがいい。",
    "ズボンの前と後ろを<span style='color:blue'><u>逆</span></u>にはいていた。",
    "<span style='color:blue'><u>先着</span></u>100名様に、記念品をプレゼントします。",
    "この国初めての宇宙飛行士にインタビューする機会が<span style='color:blue'><u>得られた</span></u>。",
    "入学試験の日程は学部によって<span style='color:blue'><u>異なる</span></u>。",
    "先輩に<span style='color:blue'><u>願書</span></u>の書き方を教えてもらった。",
    "その国際会議には日本の<span style='color:blue'><u>首相</span></u>も出席するそうだ。",
    "この機械は壊れやすいので、<span style='color:blue'><u>乱暴</span></u>に扱わないでください。",
    "親友が海外へ留学してしまって<span style='color:blue'><u>寂しい</span></u>。",
    "10年後に、<span style='color:blue'><u>再び</span></u>ここで会いましょう。",
    "今日はデパートで新しい<span style='color:blue'><u>靴</span></u>を買うつもりだ。",
    "彼が<span style='color:blue'><u>登場</span></u>すると拍手が起きた。",
    "新しい歯が<span style='color:blue'><u>生えて</span></u>きた。",
    "今日は体調が悪いので、<span style='color:blue'><u>激しい</span></u>運動はできない。",
    "この会社は現在、社員を<span style='color:blue'><u>募集</span></u>している。",
    "チケット売り場の前に長い<span style='color:blue'><u>行列</span></u>ができていた。",
    "日本料理には<span style='color:blue'><u>辛い</span></u>ものが少ないと思う。",
    "ここの<span style='color:blue'><u>名物</span></u>は魚を使った料理だ。",
    "両親は、私も妹も<span style='color:blue'><u>平等</span></u>に愛し、育ててくれた。",
    "この家は、<span style='color:blue'><u>日中</span></u>誰もいないことが多い。",
    "初級から上級まで、<span style='color:blue'><u>各種</span></u>コースを揃えております。",
    "彼女は悲しそうな<span style='color:blue'><u>表情</span></u>をしていた。",
    "この携帯電話は<span style='color:blue'><u>操作</span></u>しにくい。",
    "この部屋は<span style='color:blue'><u>湿気</span></u>が多い。",
    "地震でビルが<span style='color:blue'><u>傾いて</span></u>しまった。"];
let array3 = [["すかた", "すがた", "すはた", "すはだ"],
["とった", "あたった", "たもった", "おぎなった"],
["かつあい", "かっごう", "わりあい", "わりごう"],
["なかば", "なかごろ", "ちゅうかん", "ちゅうじゅん"],
["ささえて", "そなえて", "そろえて", "ひかえて"],
["きゃく", "きゃぐ", "ぎゃく", "ぎゃぐ"],
["さっき", "せんき", "さきちゃく", "せんちゃく"],
["いられた", "うられた", "えられた", "とられた"],
["いなる", "しなる", "かたなる", "ことなる"],
["がんしょ", "げんしょ", "がんしょう", "げんしょう"],
["しゅそう", "しゅしょう", "しゅうそう", "しゅうしょう"],
["らんばく", "らんぼう", "ろうばく", "ろうぼう"],
["かなしい", "くるしい", "こいしい", "さびしい"],
["さいび", "またび", "たびたび", "ふたたび"],
["かさ", "くつ", "ふく", "かばん"],
["とば", "とうば", "とじょう", "とうじょう"],
["いえて", "うえて", "はえて", "なまえて"],
["あやしい", "きびしい", "くるしい", "はげしい"],
["ほしゅう", "ほじゅう", "ぼしゅう", "ぼじゅう"],
["こうれい", "こうれつ", "ぎょうれい", "ぎょうれつ"],
["つらい", "からい", "しぶい", "にがい"],
["なぶつ", "なもの", "めいぶつ", "めいもの"],
["へいとう", "へいどう", "びょうとう", "びょうどう"],
["ひなか", "にちなか", "ひちゅう", "にっちゅう"],
["かくしゅ", "かっしゅ", "かくしゅう", "かっしゅう"],
["ひゅうじゅう", "ひゅうじょう", "ひょうじゅう", "ひょうじょう"],
["そうさ", "そうさく", "しょうさ", "しょうさく"],
["しつき", "しっき", "しつけ", "しっけ"],
["はぶいて", "かたむいて", "きずついて", "ふりむいて"],
];
let array4 = ["<span><u>　　　　　</span></u>の言葉の読み方として最もよいものを、1・2・3・4から一つ選びなさい。"]
let kq = [2,
    4,
    3,
    4,
    2,
    3,
    4,
    3,
    4,
    1,
    2,
    2,
    4,
    4,
    2,
    4,
    3,
    4,
    3,
    4,
    2,
    3,
    4,
    4,
    1,
    4,
    1,
    2,
    2,
];
let d = [];
d[0] = 0;
let w = 0;
let c = [];
c[0] = 0;
let j = 0;
let x;
let y;
let ht = "";
let i;
let dem = 0;
function getRandomArray() {
    let check;
    do {
        check = true;
        x = Math.floor(Math.random() * 4);
        for (i = 0; i <= j; i++) {
            if (c[i] == x) {
                check = false;
                break;
            }
        }
        if (check == true) {
            c[j++] = x;
        }
    }
    while (j < 4)
}
function getRandomArray2() {
    let check;
    do {
        check = true;
        y = Math.floor(Math.random() * array2.length);
        for (i = 0; i <= w; i++) {
            if (d[i] == y) {
                check = false;
                break;
            }
        }
        if (check == true) {
            d[w++] = y;
        }
    }
    while (w < array2.length)
}




function check(x) {
    let mark = true;
    let index;
    let chon = "chon" + x;
    let kt = "check" + x;
    let dapan = "dapan" + x;
    console.log(chon);
    let a = document.getElementById(chon).value;
    console.log(a);
    let b;
    switch (a) {
        case "A":
            {
                b = 0;
                document.getElementById(x + "0").style.color = "blue";
                document.getElementById(x + "1").style.color = "black";
                document.getElementById(x + "2").style.color = "black";
                document.getElementById(x + "3").style.color = "black";
                break;
            }
        case "B":
            {
                b = 1;
                document.getElementById(x + "0").style.color = "black";
                document.getElementById(x + "1").style.color = "blue";
                document.getElementById(x + "2").style.color = "black";
                document.getElementById(x + "3").style.color = "black";
                break;
            }
        case "C":
            {
                b = 2;
                document.getElementById(x + "0").style.color = "black";
                document.getElementById(x + "1").style.color = "black";
                document.getElementById(x + "2").style.color = "blue";
                document.getElementById(x + "3").style.color = "black";
                break;
            }
        case "D":
            {
                b = 3;
                document.getElementById(x + "0").style.color = "black";
                document.getElementById(x + "1").style.color = "black";
                document.getElementById(x + "2").style.color = "black";
                document.getElementById(x + "3").style.color = "blue";
                break;
            }
    }
    for (i = 0; i < 4; i++) {
        if (c[i] == kq[x] - 1) {
            index = i;
        }
    }
    if (index == b) {
        document.getElementById(kt).innerHTML = '正解';
    }
    else {
        document.getElementById(kt).innerHTML = 'NG';
    }
    document.getElementById(dapan).innerHTML = index;
    for (let q = 0; q < kq.length; q++) {
        let g = document.getElementById("chon" + q).value;
        if (g == "") {
            mark = false;
            break;
        }
    }
    if (mark == true) {
        document.getElementById("check").innerHTML = '<button class="summit" onclick="check2()">CHECK</button>';
    }

}
function check2() {
    for (x = 0; x < kq.length; x++) {
        let z = document.getElementById("dapan" + x).innerHTML;
        let k = document.getElementById("check" + x).innerHTML;

        if (k == "正解") {
            document.getElementById("check" + x).style.color = "red";
            document.getElementById("check" + x).style.fontWeight = "bold";
        }
        else {
            document.getElementById("check" + x).style.color = "black";
            document.getElementById("check" + x).style.background = "yellow";
        }
        document.getElementById(x + z).style.color = "red";
        document.getElementById(x + z).style.fontWeight = "bold"
        document.getElementById("select" + x).innerHTML = "";
    }
    document.getElementById("check").innerHTML = '<button class="summit2" id="btn1" onclick="check2()">CHECK</button>';
    document.getElementById("btn1").disabled = true;
}




function displayMondaiQuestion(array4, x) {
    let table = '<table><td>問題 ' + x + '. </td>' +
        '<td> ' + array4[x - 1] + ' </td></table>';
    let mondai = "questionMondai" + x;
    document.getElementById(mondai).innerHTML = table;
}

function displayOneQuestionRandom(array1, array3, x, n) {
    getRandomArray();
    let kt = "check" + x;
    let chon = "chon" + x;
    let dapan = "dapan" + x;
    let num = n + 1;
    let table = '<div class="questionNumber">' + num + '. ' + array2[x] + '</div>';
    for (let i = 0; i < 4; i++) {
        table += "<div class='answerABCD answer" + i + " ' id=" + x + i + " >" + array1[i] + array3[c[i]] + "</div>";
    }
    table = table + '<div class="selectAnswerABCD"> <div id="select' + x + '"><select class="selectAnswer" id="' + chon + '" onchange="check(' + x + ')"> <option value=""></option>' +
        '<option value="A">A</option>' +
        '<option value="B">B</option>' +
        '<option value="C">C</option>' +
        '<option value="D">D</option>' +
        '</select></div>' +
        '<div class="textHidden" id="' + kt + '" style="color: white;"></div>' +
        '<div class="textHidden" id="' + dapan + '" style="color: white;"></div></div>';
    let number = "result" + x;
    document.getElementById(number).innerHTML = table;
}

function displayQuestionRandom() {
    getRandomArray2();
    for (let i = 0; i < array2.length; i++) {
        displayOneQuestionRandom(array1, array3[d[i]], d[i], i);
    }
}

function displayMondai1() {
    getRandomArray2();
    for (i = 0; i < array2.length; i++) {
        let a = '<div class="questionRandom"' +
            '<div id="result' + d[i] + '"></div></div>';
        ht = ht + a;
    }
    document.getElementById("backgroundMondai1").innerHTML = ht;
    document.getElementById("check").innerHTML = '<button class="summit2" id="btn" onclick="check2()">CHECK</button>';
    document.getElementById("btn").disabled = true;
    displayMondaiQuestion(array4, 1);
    displayQuestionRandom();
}

displayMondai1();
