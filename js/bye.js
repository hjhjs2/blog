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


// 좋아해 (bye) 재생
var Audio1 = document.getElementById('music1');

function playAudio1() {
    Audio1.play();
    Audio2.pause();
    CDImg.style.animation = 'spin1 4s linear infinite';
    musicName.innerHTML = '\" 좋아해 (bye) \"';
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


// 좋아해 (bye) (Inst.) 재생
var Audio2 = document.getElementById('music2');

function playAudio2() { 
    Audio2.play();
    Audio1.pause();
    CDImg.style.animation = 'spin2 4s linear infinite';
    musicName.innerHTML = '\" 좋아해 (bye) (Inst.) \"';
    console.log('Audio2.Play()');
} 
function pauseAudio2() {
    Audio2.pause();
    CDImg.style.animation = '';
    console.log('Audio2.Pause()');
}
function stopAudio2() {
    Audio2.pause();
    Audio2.currentTime = 0;
    CDImg.style.animation = '';
    musicName.innerHTML = '';
    console.log('Audio2.Stop()');
}


// track 선택했을 시 글자 추가
var musicName = document.getElementById('trackName');
var num1 = document.getElementById('track1');
var num2 = document.getElementById('track2');
var table = document.getElementById('music');
// console.log(table);
var tableItemAEl = table.getElementsByTagName('a');
// console.log(tableItemAEl);

function onClickAlbum() {
    musicName.innerHTML = '';
    tableItemAEl[_cuId].classList.remove('selected');
}
Album.addEventListener('click', onClickAlbum);

function onClickNum1() {
    // console.log('click');
    musicName.innerHTML = '\" 널 좋아한단 말이 나와, 널 사랑하고 있진 않을까 \"';
}
num1.addEventListener('click', onClickNum1);

function onClickNum2() {
    // console.log('click2');
    musicName.innerHTML = '\" 하고 싶었던 말, 네게 언제쯤 전할 수 있을까 \"';
}
num2.addEventListener('click', onClickNum2);


// track 선택했을 시 색 변경
var _cuId = 0;
var _exId = _cuId;

function btnTrackClick(id) {
    function onClickTrack(event) {
        event.preventDefault();
        // console.log(id);

        var $el = this, $parent = $el.parentElement;
            
        if (!$parent.classList.contains('selected')) {
            // selected 되어 있는 것은 클릭해도 아무런 반응이 없게 함
               
            // 전역변수의 id 를 바꿈
            _cuId = id;

            tableItemAEl[_exId].classList.remove('selected');
            tableItemAEl[_cuId].classList.add('selected');

            // 다음에 누를 것을 대비하여, 이전 id 를 현재의 id 로 변경
            _exId = _cuId;
        }
    }
    tableItemAEl[id].addEventListener('click', onClickTrack)
}

for (var i = 0; i < tableItemAEl.length; i++) {
    btnTrackClick(i);
}


// 뒤로 가기
var btnClose = document.getElementById('btn-close');
function goBack() {
    window.history.back();
}
btnClose.addEventListener('click', goBack);