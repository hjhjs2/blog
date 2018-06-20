// console.log('load');

var mainTyping1 = document.getElementById('typing1');
var subTyping1 = document.getElementById('typing2');
var mainTyping2 = document.getElementById('typing3');
var subTyping2 = document.getElementById('typing4');
var mainTyping3 = document.getElementById('typing5');
var subTyping3 = document.getElementById('typing6');
var mainTyping4 = document.getElementById('typing7');
var subTyping4 = document.getElementById('typing8');
var mainTyping5 = document.getElementById('typing9');
var subTyping5 = document.getElementById('typing10');
var homeMenu = document.getElementById('home');
var profileMenu = document.getElementById('profile');
var musicMenu = document.getElementById('music');
var galleryMenu = document.getElementById('gallery');
var videoMenu = document.getElementById('video');
var profileBtn = document.getElementById('profileMore');
var musicBtn = document.getElementById('musicMore');
var galleryBtn = document.getElementById('galleryMore');
var videoBtn = document.getElementById('videoMore');

var str1 = "\" PIECE OF CHEEZE \"";
var str2 = " 치즈 (CHEEZE) 의 계절은 아름답게 돌아오고, 즐거운 날은 조금 슬프게 지나간다. 그의 계절의 조각이 모여 하나의 작품이 완성된다."
var str3 = "\" PROFILE OF CHEEZE \"";
var str4 = "치즈 (CHEEZE) 는 톡 쏘는 레모네이드처럼, 달콤쌉싸름한 밀크 초콜릿처럼 세련된 어반 팝 스타일을 추구하는 싱어송라이터이다."
var str5 = "\" MUSIC OF CHEEZE \"";
var str6 = "치즈 (CHEEZE) 의 음악이 주는 어떤 시각적인 인상들이 있다. 가만히 눈을 감고 이들의 음악을 들을 때 생각나는 어떤 이미지들 말이다."
var str7 = "\" GALLERY OF CHEEZE \"";
var str8 = "치즈 (CHEEZE) 는 따사한 볕이 넉넉히 떨어져 나른함 가득한 인적 드문 동네 카페의 창가 자리 같은 풍경과 함께 하는 느낌을 준다."
var str9 = "\" VIDEO OF CHEEZE \"";
var str10 = "치즈 (CHEEZE) 의 작품은 저마다의 기억 속에 기록된 한없이 달콤한, 더러는 터무니없이 쓰기도 한 사랑 또는 연애의 다양한 장면들이다."

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var j = 0;
var duration1 = 200;
var duration2 = 100;


// 메인 화면에서 타이핑 실행
function onHomeMenu() {
    var homeMainTyping = function () {
        if (a < str1.length) {
            mainTyping1.append(str1[a]);
            a++;
        } else {
            clearInterval(startHomeMainTyping);
        }
        // console.log('homeMainTyping');
  };
  var startHomeMainTyping = setInterval(homeMainTyping, duration1);
  
  var homeSubTyping = function () {
        if (b < str2.length) {
            subTyping1.append(str2[b]);
            b++;
        } else {
            clearInterval(startHomeSubTyping);
        }
        // console.log('homeSubTyping');
  };
  var startHomeSubTyping = setInterval(homeSubTyping, duration2);
}


// Home 메뉴 클릭 시 애니메이션 실행
function clickHomeMenu() {
    mainTyping1.style.animation = 'name 2s ease-in-out';
    subTyping1.style.animation = 'name 3s ease-in-out';
}
homeMenu.addEventListener('click', clickHomeMenu);


// PROFILE 화면에서 타이핑 실행
function onProfileMenu() {
    var profileMainTyping = function () {
        if (c < str3.length) {
            mainTyping2.append(str3[c]);
            c++;
        } else {
            clearInterval(startProfileMainTyping);
        }
        // console.log('profileMainTyping');
    };
    var startProfileMainTyping = setInterval(profileMainTyping, duration1);

    var profileSubTyping = function () {
        if (d < str4.length) {
            subTyping2.append(str4[d]);
            d++;
        } else {
            clearInterval(startProfileSubTyping);
        }
        // console.log('profileSubTyping');
    };
    var startProfileSubTyping = setInterval(profileSubTyping, duration2);
    
    profileBtn.style.animation = 'name4 5s ease-in-out';
}


// PROFILE 메뉴 클릭 시 애니메이션 실행
function clickProfileMenu() {
    mainTyping2.style.animation = 'name 2s ease-in-out';
    subTyping2.style.animation = 'name 3s ease-in-out';
    profileBtn.style.animation = 'name4 5s ease-in-out';
}
profileMenu.addEventListener('click', clickProfileMenu);


// MUSIC 화면에서 타이핑 실행
function onMusicMenu() {
    var musicMainTyping = function () {
        if (e < str5.length) {
            mainTyping3.append(str5[e]);
            e++;
        } else {
            clearInterval(startMusicMainTyping);
        }
        // console.log('musicMainTyping');
    };
    var startMusicMainTyping = setInterval(musicMainTyping, duration1);

    var musicSubTyping = function () {
        if (f < str6.length) {
            subTyping3.append(str6[f]);
            f++;
        } else {
            clearInterval(startMusicSubTyping);
        }
        // console.log('musicSubTyping');
    };
    var startMusicSubTyping = setInterval(musicSubTyping, duration2);   

    musicBtn.style.animation = 'name4 5s ease-in-out';
}


// MUSIC 메뉴 클릭 시 애니메이션 실행
function clickMusicMenu() {
    mainTyping3.style.animation = 'name 2s ease-in-out';
    subTyping3.style.animation = 'name 3s ease-in-out';
    musicBtn.style.animation = 'name4 5s ease-in-out';
}
musicMenu.addEventListener('click', clickMusicMenu);


// GALLERY 화면에서 타이핑 실행
function onGalleryMenu() {
    var galleryMainTyping = function () {
        if (g < str7.length) {
            mainTyping4.append(str7[g]);
            g++;
        } else {
            clearInterval(startGalleryMainTyping);
        }
        // console.log('galleryMainTyping');
    };
    var startGalleryMainTyping = setInterval(galleryMainTyping, duration1);

    var gallerySubTyping = function () {
        if (h < str8.length) {
            subTyping4.append(str8[h]);
            h++;
        } else {
            clearInterval(startGallerySubTyping);
        }
        // console.log('gallerySubTyping');
    };
    var startGallerySubTyping = setInterval(gallerySubTyping, duration2);

    galleryBtn.style.animation = 'name4 5s ease-in-out';
}


// GALLERY 메뉴 클릭 시 애니메이션 실행
function clickGalleryMenu() {
    mainTyping4.style.animation = 'name 2s ease-in-out';
    subTyping4.style.animation = 'name 3s ease-in-out';
    galleryBtn.style.animation = 'name4 5s ease-in-out';
}
galleryMenu.addEventListener('click', clickGalleryMenu);


// VIDEO 화면에서 타이핑 실행
function onVideoMenu() {
    var videoMainTyping = function () {
        if (i < str9.length) {
            mainTyping5.append(str9[i]);
            i++;
        } else {
            clearInterval(startVideoMainTyping);
        }
        // console.log('videoMainTyping');
    };
    var startVideoMainTyping = setInterval(videoMainTyping, duration1);

    var videoSubTyping = function () {
        if (j < str10.length) {
            subTyping5.append(str10[j]);
            j++;
        } else {
            clearInterval(startVideoSubTyping);
        }
        // console.log('videoSubTyping');
    };
    var startVideoSubTyping = setInterval(videoSubTyping, duration2);  

    videoBtn.style.animation = 'name4 5s ease-in-out';
}


// VIDEO 메뉴 클릭 시 애니메이션 실행
function clickVideoMenu() {
    mainTyping5.style.animation = 'name 2s ease-in-out';
    subTyping5.style.animation = 'name 3s ease-in-out';
    videoBtn.style.animation = 'name4 5s ease-in-out';
}
videoMenu.addEventListener('click', clickVideoMenu);


// 메인 페이지 애니메이션
var mainLogo = document.getElementById('logo');
var mainMenu = document.getElementById('menuBtn');
var footerCopyright = document.getElementById('copyright');
var footerSNS = document.getElementById('sns');

function appear(){
    mainLogo.style.animation = 'name 1s ease-in-out';
    mainMenu.style.animation = 'name 1s ease-in-out';
    footerCopyright.style.animation = 'name2 1.5s ease-in-out';
    footerSNS.style.animation = 'name3 1.5s ease-in-out';
    mainTyping1.style.animation = 'name 2s ease-in-out';
    subTyping1.style.animation = 'name 3s ease-in-out'
}


// 페이지 로드 시 실행
window.addEventListener('load', function() {
    appear();
    onHomeMenu();
    onProfileMenu();
    onMusicMenu();
    onGalleryMenu();
    onVideoMenu();
}, false);