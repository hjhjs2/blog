var $gallery = document.getElementById('gallery');

var $view = $gallery.querySelector('.view');
var $viewContainer = $view.querySelector('.view-container');
var $viewItem = $view.querySelectorAll('.view-item');

var $list = $gallery.querySelector('.list');
var $listItem = $list.querySelectorAll('a');

// 갤러리의 Width 값
var _galleryW = 800;
var _cuId = 0;
var _exId = 0;

// 전체 이미지의 개수
var _max = $viewItem.length;

// 갤러리 리사이즈
function galleryResize() {
    console.log(_max);
    // 800 * 4 = 3200
    $viewContainer.style.width = _galleryW * _max + 'px';
    for (var i = 0; i < $viewItem.length; i++) {
        $viewItem[i].style.width = _galleryW + 'px';
    }
}

function gallerySlide() {
    // 현재 _cuId = 0. 800 * 0 = 0. 0 * -1 = 0.
    // 현재 _cuId = 1. 800 * 1 = 800. 800 * -1 = -800.
    // 현재 _cuId = 2. 800 * 2 = 1600. 800 * -2 = -1600.
    // 현재 _cuId = 3. 800 * 3 = 2400. 800 * -3 = -2400.

    /*
    $viewContainer.style.left = _galleryW * _cuId * -1 + 'px';
    $viewContainer.style.transitionProperty = 'left'; // 움직일 스타일 속성
    $viewContainer.style.transitionDuration = 600 + 'ms'; // 속도
    // $viewContainer.style.transitionTimeFunction = 'ease-in-out';
    $viewContainer.style.transitionTimeFunction = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';
    // 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'; // quad ease in out
    */

    /*
    css.
    transform : translate3d(0, 0, 0);
    -webkit-transform : --- // 크롬, 사파리
    -moz-transform : --- // 파이어폭스
    -o-transform : --- // 오페라
    -ms-transform : --- // 익스플로러
    */

    // _cuId = 1
    // _exId = 0
    // Math.abs(_cuId - _exId) = 1

    // _cuId = 0
    // _exId = 3
    // Math.abs(_cuId - _exId) = 3

    // 각 리스트의 격차에 따른 속도 분배
    var duration = 400 + 200 * Math.abs(_cuId - _exId);
    console.log(duration);

    $viewContainer.style.transform = 'translate3d(' + _galleryW * _cuId * -1 + 'px, 0, 0';
    $viewContainer.style.transitionProperty = 'transform';
    $viewContainer.style.transitionDuration = duration + 'ms';
    $viewContainer.style.transitionTimeFunction = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';
}
$viewContainer.addEventListener('transitionend', function() {
    $viewContainer.style.transitionProperty = null;
    $viewContainer.style.transitionDuration = null;
    $viewContainer.style.transitionTimeFunction = null;
});

function listClick(id) {
    function onClickList(event) {
        event.preventDefault();
        var $el = this, $parent = $el.parentElement;
        if (!$parent.classList.contains('selected')) {
            console.log('클릭');
            _cuId = id;
            $listItem[_exId].parentElement.classList.remove('selected');
            $parent.classList.add('selected');
            gallerySlide();
            _exId = _cuId;
        }
    }
    $listItem[id].addEventListener('click', onClickList);
}

// 초기화
function init() {
    console.log('초기화');
    galleryResize();
    for (var i = 0; i < $listItem.length; i++) {
        listClick(i);
    }
}
init();

// 뒤로 가기
function goBack() {
    window.history.back();
}