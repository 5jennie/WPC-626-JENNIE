// 도깨비 PJ 공통 JS - common.js /////////

// 같은 이름의 변수의 충돌을 막기위해 지역변수화를 해준다!
// 방법은 (()=>{나의코드})() 익명함수를 바로 실행하는 지역코드로 감싸준다!
// 나의코드는 지역화가 되고 익명함수는 바로 실행된다!
// -> (익명함수)() 이렇게 쓰면 익명함수가 바로 실행됨!

/// 지역화 코드 시작 //////////////
(() => {
  // 1. 상단, 하단 공통 모듈 html넣기
  // (1) 대상 : #top-area, #bottom-area
  const $topArea = $("#top-area");
  const $bottomArea = $("#bottom-area");

  // (2) 대상에 load() 메서드로 html넣기
  // load(파일경로, 로딩후실행함수)
  $topArea.load("./inc/header.html",headerFn);
  // -> 상단부 html파일이 모두 로딩된후 headerFn함수가 실행됨!
  $bottomArea.load("./inc/footer.html");
})();
/// 지역화 코드 종료 //////////////

/// 상단파트에서 실행할 함수 /////////////
function headerFn() {
  ///////////////////////////////////////////////////
  // 1. 큐브로고박스 일정간격으로 클래스 넣었다 빼기 ///
  //////////////////////////////////////////////////

  // -> 로고가 일정 간격으로 회전함!
  // 지금은 1.5초씩 alternate하였으므로 총 3초걸림

  // 1-1. 대상선정 : .cube-logo
  const cubeLogo = document.querySelector(".cube-logo");

  // 1-2. 클래스 셋팅함수 ////////////////
  const setClass = () => {
    // 클래스넣기
    cubeLogo.classList.add("rotate-cube");

    // 3초후 클래스 제거하기
    // setTimeout(함수, 시간);
    setTimeout(() => {
      cubeLogo.classList.remove("rotate-cube");
    }, 3000);
  }; /////////// setClass 함수 //////////

  // 1-3. 일정간격으로 클래스 셋팅함수 호출하기 ///////
  // setInterval(함수, 시간);
  // 일정시간 간격으로 함수가 실행됨!
  setInterval(setClass, 10000);
  /// 10초간격으로 실행됨! //////

  // 1-4. 처음에 회전하도록 클래스 셋팅함수 호출하기
  setClass();
} ////////////// headerFn ///////////////
