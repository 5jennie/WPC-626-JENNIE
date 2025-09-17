// CGV PJ 추가기능 JS - main.js

// 로딩확인
console.log("나야나 로딩!");

// 영화 정보 유튜브 객체
const 유튜브 = {
    "귀멸의칼날":"zN8K_uE1LYg",
    "어쩔수가없다":"ckHwZNuV-wQ",
    "얼굴":"dM0quIEmrYA",
    "F1더무비":"6a_X77HO4Vk",
    "모노노케히메":"zp53g5bqEzU",
    "귀시":"Q9yTAnQaCeU",
};


// 1. 대상 선정
// 1-1. 포스터 링크 이미지 a요소 > 이벤트 대상
const 링크 = document.querySelectorAll('.poster-menu-box li a')
// 1-2. 영화 상영 아이프레인 > 변경 대상
const 아이프레임 = document.querySelector('.screen iframe')

// 2. 이벤트 대상에 클릭이벤트 적용
링크.forEach((요소)=>{
    요소.onclick = () => {

        // 3. 클릭된 a요소 자식중 h2요소의 글자읽기
        let 영화명 = 요소.querySelector('h3').getAttribute('data-text');
        console.log("클릭된 영화명:", 영화명);

        // 4. 아이프레임 소스 변경하기
        아이프레임.src = `https://www.youtube.com/embed/${유튜브[영화명]}?autoplay=1`;
    };
});
