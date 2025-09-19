// 큐브 JS

// defer로 호출해서 이 파일은 html로딩후 실행됨!!

//////////////////////////////////////////
// [1] 큐브크기변경 버튼 기능 구현하기 //////
/////////////////////////////////////////

// 1. 요소 선택하기 ///
// 사이즈 변경 버튼 요소 선택하기 ////
const 버튼들 = document.querySelectorAll(".btn-size");
console.log(버튼들);

// 2. 요소 컬렉션 개수 만큼 반복처리하기 ////
// forEach() 메서드는 여러개를 수집하는 컬렉션 이어서
// 사용하면 개수만큼 자동으로 반복처리함!
// forEach(하나씩변수=>{여기서 하나씩 처리함!})
버튼들.forEach(나야나=>{
    console.log(나야나);
    // 3. 이벤트 함수 설정하기 ///
    나야나.onclick = ()=>{
        // 버튼요소의 글자 읽어오기
        console.log(나야나.innerText);

        // css의 변수값을 js에서 변경하기
        // document.documentElement.style.setProperty(변수명,변수값);
        document.documentElement
        .style.setProperty('--cube-size',`${나야나.innerText}`);
    }; /// onclick 이벤트 함수 //////////
}); ///// forEach 메서드 ///////////


///////////////////////////////////////////////////
// [2] 큐브에 마우스오버/아웃시 그림자 제어하기 //////
//////////////////////////////////////////////////

// 1. 대상요소 선택하기 ///
// 1-1. 큐브 요소 선택하기
const 큐브 = document.querySelector(".cube");

// 1-2. 그림자 요소 선택하기
const 그림자 = document.querySelector(".shadow");

console.log(큐브, 그림자);

// 2. 이벤트 함수 설정하기 ///
// 2-1. 큐브에 마우스오버 이벤트 함수 설정하기
큐브.onmouseover = ()=>{
    // 그림자 제어하기
    그림자.style.animationPlayState = "paused";
};
// 2-2. 큐브에 마우스아웃시 이벤트 함수 설정하기
큐브.onmouseout = ()=>{
    // 그림자 제어하기
    그림자.style.animationPlayState = "running";
};


/* 
실제 html요소에 직접 넣었던 소스!
 onmouseover="
    document.querySelector('.shadow').style.animationPlayState='paused';
    " onmouseout="document.querySelector('.shadow').style.animationPlayState='running';"
*/



