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