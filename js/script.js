let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');

}

window.scroll = () => {
    navbar.classList.remove('active');
}

let mainVid = document.querySelector('.main-video');

document.querySelectorAll('.course-3 .box .video video').forEach(vid => {
    vid.onclick = () => {
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }
});

document.querySelector('#close-vid').onclick = () => {
    mainVid.classList.remove('active');
}


let i;
let left = 1;
let right = 5;
function show() {
    for (i = left; i <= right; i++)
        document.getElementById("c" + i).style.display = "inline-block";
}
function moveLeft() {
    if (left <= 3 && right <= 7) {
        document.getElementById("c" + left).style.display = "none";
        document.getElementById("rightarrow").style.visibility = "visible";
        left++;
        right += 1;
        for (i = left; i <= right; i++)
            document.getElementById("c" + i).style.display = "inline-block";
    } else document.getElementById("leftarrow").style.visibility = "hidden";
}
function moveRight() {
    if (left >= 2 && right >= 6) {
        document.getElementById("c" + right).style.display = "none";
        document.getElementById("leftarrow").style.visibility = "visible";
        left -= 1;
        right -= 1;
        for (i = left; i <= right; i++)
            document.getElementById("c" + i).style.display = "inline-block";
    } else
        document.getElementById("rightarrow").style.visibility = "hidden";
}
show();
