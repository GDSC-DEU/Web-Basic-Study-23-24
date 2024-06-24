# seungjin

임승진의 작업공간 입니다.

# JavaScript가 뭔가요?

**JavaScript**는 웹 페이지에서 복잡한 기능을 구현할 수 있는 스크립팅 또는 프로그래밍 언어입니다. 웹 페이지가 단순히 정적인 정보를 표시하는 것 이상으로 시의적절한 콘텐츠 업데이트, 대화형 지도, 애니메이션 2D/3D 그래픽, 스크롤링 비디오 주크박스 등을 표시할 때마다 **JavaScript**가 관련되어 있을 가능성이 높습니다.

![img](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript/cake.png)

JavaScript는 표준 웹 기술이라는 케이크의 세 번째 층

# **스크립트 언어란(Script Language)?**

_응용 소프트웨어를 제어하는 컴퓨터 프로그래밍 언어를 가리킵니다. 스크립트 프로그래밍 언어라고도 합니다._

**JavaScript(자바스크립트)**

![img](https://images.velog.io/images/gnoeyah/post/26841039-cf4e-4ee3-acb2-903a4112e504/js.png)

미국 넷스케이프(Netscape)의 브렌든 아이크(Brendan Eich)가 개발한 스크립트 프로그래밍 언어

**\* jQuery(제이쿼리)**

![img](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdZ63dLtPSz0cHniC762aiedn2G9XiOJnSw&s)

HTML 문서에 삽입하여 사용할 수 있는 자바스크립트 라이브러리를 말합니다.

**\* JSP(제이에스피)**
자바 서버 페이지(JavaServer Pages)의 약자로서, **HTML 페이지 안에 자바(Java) 코드를 직접 삽입**하여 웹 서버에서 동적으로 웹 페이지를 생성하여 웹브라우저가 표현할 수 있도록 전달해 주는 스크립트 프로그래밍

**\* PHP(피에이치피)**
HTML 문서 안에 포함하여 작동하는 서버 측 스크립트 프로그래밍 언어입니다.

**\* Python(파이썬)**

**\* Ruby(루비)**

# script: 스크립트 요소

HTML 요소는 실행 가능한 코드나 데이터를 삽입하는 데 사용됩니다. 이는 일반적으로 JavaScript 코드를 포함하거나 참조하는 데 사용됩니다.

_script 태그의 위치에 따라 차이가 발생_

# DOM

**`DOM`** (Document Object Model) 은 HTML 또는 XML 기반 문서와 상호작용하고 표현하는 API입니다. DOM은 browser에서 로드되며, node 트리(각 노드는 문서의 부분을 나타냅니다)로 표현하는 문서 모델입니다(예, element, 문자열, 또는 주석).

# Event

**`Event`** 인터페이스는 DOM에서 발생하는 이벤트를 나타냅니다.

이벤트는 마우스를 클릭하거나 키보드를 누르는 것과 같이 사용자의 액션에 의해 발생할 수도 있고, 비동기적 작업의 진행을 나타내기 위해서 API들이 생성할 수도 있습니다.

많은 DOM 요소는 이벤트를 받고("수신"), 받은 이벤트를 "처리"할 수 있습니다. 이벤트 처리기는 주로 `EventTarget.addEventListener()`를 사용해 다양한 요소(`<button>`, `<div>`, `<span>`, 등등)에 연결("부착")됩니다. 올바르게 부착한 경우, `removeEventListener()`를 사용하면 반대로 제거할 수도 있습니다.

# console

**`console`** 객체는 브라우저의 디버깅 콘솔(Firefox 웹 콘솔 등)에 접근할 수 있는 메서드를 제공합니다. 동작 방식은 브라우저마다 다르지만, 사실상 표준으로 여겨지는 기능도 여럿 있습니다.

가장 대표적인 디버깅 방법

```jsx
console.log("링크를 열 수 없습니다");
```

# Variable

```jsx
자바스크립트에서 쓸 수 있는 변수를 선언하는 예약어에는 세가지가 있다.
var
let
const
```

# Document.querySelector()

**`Document.querySelector()`** 는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 `Element`를 반환합니다. 일치하는 요소가 없으면 `null`을 반환합니다. (반환값)

```jsx
document.querySelector(selectors);
```

**`selectors`**

하나 이상의 선택자를 포함한`DOMString`. 유효한 CSS 선택자여야만 하며 아닐 경우 `SYNTAX_ERR` 예외가 발생합니다
