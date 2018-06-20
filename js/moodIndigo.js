// console.log('load');

var Album = document.getElementById('albumName');
var table = document.getElementById('music');
var CDImg = document.getElementById('CD');


// 페이지 로드 시 앨범 이미지 나옴
window.addEventListener('load', function(){
    CDImg.style.animation = 'move 1.5s ease-in-out';
    Album.style.animation = 'nameMove 2s ease-in-out';
    table.style.animation = 'nameMove 4s ease-in-out';
})


// Mood Indigo 재생
var Audio1 = document.getElementById('music1');

function playAudio1() {
    Audio1.play();
    CDImg.style.animation = 'spin1 4s linear infinite';
    musicName.innerHTML = '\" Mood Indigo \"';
    console.log('Audio1.Play()');
} 
function pauseAudio1() {
    Audio1.pause();
    CDImg.style.animation = '';
    console.log('Audio1.Pause()');
}
function stopAudio1() {
    Audio1.pause();
    Audio1.currentTime = 0;
    CDImg.style.animation = '';
    musicName.innerHTML = '';
    console.log('Audio1.Stop()');
}


// track 선택했을 시 글자 추가, 색 변경
var musicName = document.getElementById('trackName');
var num1 = document.getElementById('track1');
var table = document.getElementById('music');
// console.log(table);
var tableItemAEl = table.getElementsByTagName('a');
// console.log(tableItemAEl);
var isClick = false;

function onClickAlbum() {
    musicName.innerHTML = '';
    tableItemAEl[0].classList.remove('selected');
}
Album.addEventListener('click', onClickAlbum);

function onClickNum1() {
    // console.log('click');
    if (!isClick) {
        musicName.innerHTML = '\" 지금 이 순간, 난 순간을 믿어요. \"';
        tableItemAEl[0].classList.add('selected');
        isClick = true;
    } else {
        musicName.innerHTML = '';
        tableItemAEl[0].classList.remove('selected');
        isClick = false;
    }
}
num1.addEventListener('click', onClickNum1);


// 뒤로 가기
var btnClose = document.getElementById('btn-close');
function goBack() {
    window.history.back();
}
btnClose.addEventListener('click', goBack);