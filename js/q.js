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
    Audio2.pause();
    Audio3.pause();
    Audio4.pause();
    Audio5.pause();
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


// 어떻게 생각해 재생
var Audio2 = document.getElementById('music2');

function playAudio2() { 
    Audio2.play();
    Audio1.pause();
    Audio3.pause();
    Audio4.pause();
    Audio5.pause();
    CDImg.style.animation = 'spin2 4s linear infinite';
    musicName.innerHTML = '\" 어떻게 생각해 \"';
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


// 깊이 아래로 재생
var Audio3 = document.getElementById('music3');

function playAudio3() { 
    Audio3.play();
    Audio1.pause();
    Audio2.pause();
    Audio4.pause();
    Audio5.pause();
    CDImg.style.animation = 'spin1 4s linear infinite';
    musicName.innerHTML = '\" 깊이 아래로 \"';
    console.log('Audio3.Play()');
} 
function pauseAudio3() {
    Audio3.pause();
    CDImg.style.animation = '';
    console.log('Audio3.Pause()');
}
function stopAudio3() {
    Audio3.pause();
    Audio3.currentTime = 0;
    CDImg.style.animation = '';
    musicName.innerHTML = '';
    console.log('Audio3.Stop()');
}


// How Can I Do 재생
var Audio4 = document.getElementById('music4');

function playAudio4() { 
    Audio4.play();
    Audio1.pause();
    Audio2.pause();
    Audio3.pause();
    Audio5.pause();
    CDImg.style.animation = 'spin2 4s linear infinite';
    musicName.innerHTML = '\" How Can I Do \"';
    console.log('Audio4.Play()');
} 
function pauseAudio4() {
    Audio4.pause();
    CDImg.style.animation = '';
    console.log('Audio4.Pause()');
}
function stopAudio4() {
    Audio4.pause();
    Audio4.currentTime = 0;
    CDImg.style.animation = '';
    musicName.innerHTML = '';
    console.log('Audio4.Stop()');
}


// 새벽길 재생
var Audio5 = document.getElementById('music5');

function playAudio5() { 
    Audio5.play();
    Audio1.pause();
    Audio2.pause();
    Audio3.pause();
    Audio4.pause();
    CDImg.style.animation = 'spin1 4s linear infinite';
    musicName.innerHTML = '\" 새벽길 \"';
    console.log('Audio5.Play()');
} 
function pauseAudio5() {
    Audio5.pause();
    CDImg.style.animation = '';
    console.log('Audio5.Pause()');
}
function stopAudio5() {
    Audio5.pause();
    Audio5.currentTime = 0;
    CDImg.style.animation = '';
    musicName.innerHTML = '';
    console.log('Audio5.Stop()');
}


// track 선택했을 시 글자 추가
var musicName = document.getElementById('trackName');
var num1 = document.getElementById('track1');
var num2 = document.getElementById('track2');
var num3 = document.getElementById('track3');
var num4 = document.getElementById('track4');
var num5 = document.getElementById('track5');

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
    musicName.innerHTML = '\" 지금 이 순간, 난 순간을 믿어요. \"';
}
num1.addEventListener('click', onClickNum1);

function onClickNum2() {
    // console.log('click2');
    musicName.innerHTML = '\" 마냥 하늘만 보며 결국 잘될 거라고 얘기했지 \"';
}
num2.addEventListener('click', onClickNum2);

function onClickNum3() {
    // console.log('click3');
    musicName.innerHTML = '\" 아직 그대 얼굴이 시간으로도 묻어지지 않아요. \"';
}
num3.addEventListener('click', onClickNum3);

function onClickNum4() {
    // console.log('click4');
    musicName.innerHTML = '\" 그대 중심으로 맴돌고 맴돌아 더 가까이 다가가고 싶어 \"';
}
num4.addEventListener('click', onClickNum4);

function onClickNum5() {
    // console.log('click5');
    musicName.innerHTML = '\" 지나버린 추억은 이제서야 아름다워지네 \"';
}
num5.addEventListener('click', onClickNum5);


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