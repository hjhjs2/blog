// 메인 비디오
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '600',
    width: '900',
    videoId: 'LsLUz7ArmGI',
    playerVars : {
        autoplay : 1,
        controls : 0,
        rel : 0,
        fs : 0,
        modestbrading : 0,
        showinfo : 0
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


// 비디오 변경
function video(player, idvideo) {
    document.getElementById('player').src
    = 'https://www.youtube.com/embed/' + idvideo + '?rel=0' + '&autoplay=1' + '&controls=0' + '&fs=0' + '&modestbrading=0' + '&showinfo=0';
}


// 비디오 리스트
// Elements
var $btnMenu = document.getElementById('btn-menu');
var $sideMenu = document.getElementById('side-menu');
var $btnClose = document.getElementById('btn-close');
var $sideMenuList = $sideMenu.querySelectorAll('li');

// 메뉴가 열려있는지 상태 체크
var _isOpen = false;
var _isAni = false;

function onClickBtnMenu(event) {
    event.preventDefault();
    // 애니메이션 중인 상태에서 버튼 클릭이 안되도록 방지
    if (_isAni) return;
    if (!_isOpen) {
        _isOpen = true;
        _isAni = true;
        $sideMenu.classList.add('open');
        setTimeout(function() {
            ///// 메뉴가 열림
            for (var i = 0; i < $sideMenuList.length; i++) {
                menuAni(i);    
            }
            /////
            _isAni = false;
        }, 400);
    }
    // console.log('btn menu click');
}

// a 태그에 순차적인 애니메이션
function menuAni(id) {
    setTimeout(function() {
        // console.log(id);
        $sideMenuList[id].classList.add('ani');
    }, 50 * id);
}

function onClickBtnClose(event) {
    event.preventDefault();
    if (_isAni) return;
    if (_isOpen) {
        _isOpen = false;
        _isAni = true;
        $sideMenu.classList.remove('open');
        setTimeout(function() {
            ///// 메뉴가 닫힘
            for(var i = 0; i < $sideMenuList.length; i++) {
                $sideMenuList[i].classList.remove('ani');
            }
            /////
            _isAni = false;
        }, 400);
    }
    // console.log('btn menu click');   
}

$btnMenu.addEventListener('click', onClickBtnMenu);
$btnClose.addEventListener('click', onClickBtnClose);


// 비디오 리스트 선택
var $list = document.getElementById('list');
var $listItem = $list.querySelectorAll('a');

var _cuId = 0;
var _exId = 0;

function listClick(id) {
    function onClickList() {
        var $el = this, $parent = $el.parentElement;
        if (!$parent.classList.contains('selected')) {
            // console.log('클릭');
            _cuId = id;
            $listItem[_exId].parentElement.classList.remove('selected');
            $parent.classList.add('selected');
            _exId = _cuId;
        }
    }
    $listItem[id].addEventListener('click', onClickList);
}


// 초기화
function init() {
    console.log('초기화');
    for (var i = 0; i < $listItem.length; i++) {
        listClick(i);
    }
}
init();


// 뒤로 가기
function goBack() {
    window.history.back();
}