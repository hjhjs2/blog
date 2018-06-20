// 아코디언 메뉴
var $menu = document.getElementById('accordion-menu');
var $menuItems = $menu.querySelectorAll('.menu-item');
var $menuItemsEl = $menu.querySelectorAll('a');
var $menuItemName = document.getElementsByClassName('year');
// console.log($menuItemsEl);
var _max = $menuItems.length;
var _isOpen = false;
var _isAni = false;
var _itemW = 1;
var _winW = 0, _winH = 0;

function menu(id) {
    var $close = $menuItems[id].querySelector('.btn-close');
    function onClickMenu(e){
        e.preventDefault();
        var $parent = this.parentElement;
        if(_isAni) return;
        if(!$parent.classList.contains('selected')){
            menuItemClassReset();
            $parent.classList.add('selected');
            _isOpen = true;
            _isAni = true;
            for(var i = 0; i < _max; i++){
                var width = 0;
                if(i === id){
                    width = _winW * _itemW;
                }else{
                    width = _winW * (1.0 - _itemW) / (_max - 1);
                }
                $menuItems[i].style.width = width + 'px';        
            }
            setTimeout(function() {
                _isAni = false;
            }, 300);
        }        
    }
    function onClickMenuClose(e) {
        e.preventDefault();
        var $parent = this.parentElement;
        if($parent.classList.contains('selected')) {
            _isOpen = false;
            $parent.classList.remove('selected');
            for(var i = 0; i < _max; i++){
                width = _winW / _max;
                $menuItems[i].style.width = width + 'px';
            }
        }
    }
    $menuItemsEl[id].addEventListener('click', onClickMenu);
    $close.addEventListener('click', onClickMenuClose);
}

for(var i = 0; i < _max; i++) {
    menu(i);
}

function menuItemClassReset() {
    for(var i = 0; i < _max; i++) {
        $menuItems[i].classList.remove('selected');
    }
}

function onResize() {
    $menu.classList.add('resize');
    _winW = window.innerWidth;
    _winH = window.innerHeight;
    $menu.style.width = _winW + 'px';
    $menu.style.height = _winH + 'px';
    for(var i = 0; i < _max; i++){
        var width = 0;
        if(_isOpen) {
            if($menuItems[i].classList.contains('selected')){
                width = _winW * _itemW;
            }else {
                width = _winW * (1.0 - _itemW) / (_max - 1);
            }
        }else {
            width = _winW / _max;
        }
        $menuItems[i].style.width = width + 'px';
    }
    setTimeout(function() {
        $menu.classList.remove('resize');
    }, 10);
}
onResize();
window.addEventListener('resize', onResize);


// 페이지 로드 시 실행
window.addEventListener('load', function() {
    $menuItemName[0].style.animation = 'name 2s ease-in-out';
    $menuItemName[1].style.animation = 'name 2s ease-in-out';
    $menuItemName[2].style.animation = 'name 2s ease-in-out';
}, false);


// 뒤로 가기
function goBack() {
    window.history.back();
}


// 페이지 이동
function goPage1() {
    location.href="./moodIndigo.html";
    console.log('start');
}

function goPage2() {
    location.href="./q.html";
    console.log('start');
}

function goPage3() {
    location.href="./bye.html";
    console.log('start');
}

function goPage4() {
    location.href="./beThere.html";
    console.log('start');
}

function goPage5() {
    location.href="./shortfilm1.html";
    console.log('start');
}

function goPage6() {
    location.href="./shortfilm2.html";
    console.log('start');
}

function goPage7() {
    location.href="./shortfilm3.html";
    console.log('start');
}