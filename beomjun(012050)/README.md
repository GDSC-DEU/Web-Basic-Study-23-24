***Web-Basic-Study-23-24***

## 2주차(24.05.01 ~ 24.05.07)

15강까지<br>
>영상 링크: https://www.youtube.com/playlist?list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb

<br>
1 ~ 5강까지는 튜토리얼

---

### WEB1 - 6.기본문법 태그

글자에 강조 표시
~~~html
asdfsdf <strong>asfsadfs</strong>
~~~
<br>
밑줄(underline)
<br>
underline의 첫 글자를 씀

~~~html
asdfsdf <strong>asfs<u>ㅁㄴㅇㄻㄴㅇㄹㄴㅁㅇㄹ</u>adfs</strong>
~~~
<br>

---

### WEB1 - 7.혁명적인 변화

<br>
h1 ~ h6까지는 HTML의 headings(제목)
<br>

~~~html
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>
~~~


<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>
<br>

---

### WEB1 - 8.통계에 기반한 학습
<br>

---

### WEB1 - 9.줄바꿈 : br vs p
<br>

br 태그
> ***줄바꿈***이라는 시각적인 의미만을 가지고 있기 때문에 태그를 닫지 않는다.

<br><br>
p 태그
> ***단락을 나타내기 위해서*** 사용됨, 어디서부터 어디까지가 한 단락이라는 것을 표시하기 위해서 태그를 닫는다.<br>

~~~text
정보로 더 가치 있는 태그는 p 태그이다. 하지만 br 태그는 원하는 만큼 줄을 바꿀 수 있지만 p 태그는 여백의 크기가 정해져 있다.

시각적 자유도가 떨어진다.
~~~

<br><br>

CSS 찍먹
~~~html
<h3>대충 제목</h3>
<p>asdfa;lkasd</p>
<p style="margin-top:40px">ㅁㄴㅁㄴㅇㅁㄴㅇㅁㄴㅇ</p>
~~~

<h3>대충 제목</h3>
<p>asdfa;lkasd</p>
<p style="margin-top:40px">ㅁㄴㅁㄴㅇㅁㄴㅇㅁㄴㅇ</p>
<br><br>

---

### WEB1 - 10. html이 중요한 이유

p 태그<br>
<p>
    <strong>
        <span style="font-size:17px">coding</span>
    </strong>
</p>
<br>h 태그<br>
<h3>coding</h3>

~~~html
<p>
    <strong>
        <span style="font-size:22px">coding</span>
    </strong>
</p>

<h3>coding</h3>
~~~
<br>

> 시각적으로는 위의 두 글자는 같아 비슷해 보이지만 검색 엔진의 입장에서 본다면 아래의 coding은 제목, 위의 글은 하나의 단락에 불과하다. 그렇기 때문에 coding이라는 단어로 검색을 한다면 <u>***검색 엔진은 당연히 h 태그를 사용한 사이트를 더 상위에***</u> 표시한다.
<br>

---

### WEB1 - 11. 최후의 문법 속성 & img

이미지를 페이지에 삽입하는 태그 img

~~~html
<p>
    fsdkl;jsdfk;sdflkj;
</p>
<img source="이미지 주소">
<img src="이미지 주소">
<img src="이미지 주소" width="100%>
~~~
<br>

---

### WEB1 - 12. 부모자식과 목록

li - 리스트를 나타내는 태그<br>
ul - li 태그의 부모 태그 리스트를 부분하기 위해 쓰임

> ol - ordered list <br>ul - unordered list
~~~html
<ul>
    <li>1. html</li>
    <li>2. css</li>
    <li>3. javascript</li>
</ul>
<ul>
    <li>asfdasdfl</li>
    <li>ㅇㄹㄴ</li>
    <li>ㅗㅓㅏㅎ</li>
</ul>
~~~

<br>자동으로 숫자를 붙이는 방법
~~~html
<ol>
    <li>html</li>
    <li>css</li>
    <li>javascript</li>
</ol>
<ul>
    <li>asfdasdfl</li>
    <li>ㅇㄹㄴ</li>
    <li>ㅗㅓㅏㅎ</li>
</ul>
~~~

<br>표를 만드는 방법
~~~html
<table>
    <tr>
        <td>head</td>
        <td>99.99</td>
    </tr>
    <tr>
        <td>body</td>
        <td>99.7</td>
    </tr>
    <tr>
        <td>html</td>
        <td>83.7</td>
    </tr>
</table>
~~~


<br>

---

### WEB1 - 13. 문서의구조와 슈퍼스타들

페이지 제목(이름) - title 태그를 사용

~~~html
<title>WEB1 - html</title>
<h1>HTML이란 무엇인가?</h1>
~~~

<br><br>

***웹 사이트의 인코딩 방식***

~~~html
<title>WEB1 - html</title>
<meta charset="utf-8">
<h1>HTML이란 무엇인가?</h1>
~~~

<br><br>

> 본문(p 같은 태그)는 body 태그로 묶고 본문을 설명하는 (title, p 같은)태그는 head로 묶기로 약속 ***body와 head를 묶는 최상위 태그 html***

<br>

~~~text
마지막으로 html 태그 위에 이 문서는 HTML 문서이다 라는 것을 표시하기 위해서
<!doctype html>라고 적는다.
~~~

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>live_server_test</title>
        <meta charset="utf-8">
        <h1>afsdfasdfasdf</h1>
    </head>
    <body>
        <p>
            대충 내용
        </p>
    </body>
</html>
~~~

<br>

---

### WEB1 - 14. HTML 태그의 제왕

~~~text
html의 HyperText를 의미하는 태그 a(anchor)
링크를 만들기 위한 태그
~~~

<br>

~~~text
a 태그를 의미 있게 사용하기 위해서는 hypertext의 h와 참고 문서(Reference)의 ref를 합친 href를 넣어야 한다.
~~~

<br>

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>live_server_test</title>
        <meta charset="utf-8">
        <h1>afsdfasdfasdf</h1>
    </head>
    <body>
        <p>
            대충 내용
        </p>
        <p>
            <a href="https://www.naver.com/" target="_blank" title="h sd">
                네이버
            </a>
        </p>
    </body>
</html>
~~~

~~~text
클릭했을 때, 새 탭이 열리게 하고 싶으면 target="_blank"를 추가 / 클릭하기 전에 해당 링크가 무엇인지 알려주고 싶으면 title="html5"를 추가하면 된다.
~~~

<br>

---

### WEB1 - 15. 웹사이트 완성

~~~text
웹 사이트 완성하기 실습
~~~

<br>

---
## 3주차(24.05.08 ~ 24.05.14)

15강까지<br>
>영상 링크: https://youtube.com/playlist?list=PLuHgQVnccGMAnWgUYiAW2cTzSBywFO75B&si=eArbaWw3jKEdoB6D

# WEB2 CSS

### WEB2 CSS - 1. 수업 소개

~~~text
튜토리얼
~~~

<br>

---

### WEB2 CSS - 2. CSS가 등장하기 전의 상황

~~~text
웹을 꾸미기 위한 방법
1. HTML에 시각효과를 위한 새로운 태그를 추가한다. -> font라는 태그
2. 디자인에 최적화된 새로운 언어를 만든다. -> CSS
~~~

1번 예시

~~~html
<ol>
    <li><a href="1.html"><font color="red">HTML</font></a></li>
    <li><a href="2.html"><font color="red">CSS</font></a></li>
    <li><a href="3.html"><font color="red">JavaScript</font></a></li>
</ol>
~~~

<br>

---

### WEB2 CSS - 3. CSS의 등장

> CSS는 HTML과는 다른 컴퓨터 언어이다.

2번 예시

~~~html
<head>
    <style>
        a {
            color:red;
        }
    </style>
</head>
~~~

~~~text
문서 안의 모든 a 태그의 글자색을 빨간색으로 바꿔라
한 번에 모든 태그의 속성을 바꿀 수 있다.
~~~

<br>

---

### WEB2 CSS - 4. CSS의 기본 문법

> HTML 속성을 이용해서 부분적으로 CSS 사용하기

~~~html
<li><a href="2.html" style="color:red">CSS</a></li>
~~~

~~~css
a {
}
-> 선택자 selector
~~~

<br>

---

### WEB2 CSS 5 - 혁명적 변화

~~~css
a -> 선택자 selector 
{
    color:red; -> property:value
} -> declaration

~~~


<br>

---

### WEB2 CSS - 6. CSS 속성을 스스로 알아내기

~~~html
<style>
    a {
        color:black;
        text-decoration: none;
    }
    h1 {
        font-size: 60px;
        text-align: center;
    }
</style>
~~~

<br>

---

### WEB2 CSS - 7. CSS 선택자의 기본

~~~html
<style>
    a {
        color:black;
        text-decoration: none;
    }
    .saw {
        color:gray
    }
    .active {
        color:red
    }
    h1 {
        font-size: 60px;
        text-align: center;
    }
</style>
<ol>
    <li><a href="1.html" class="saw">HTML</a></li>
    <li><a href="2.html" class="saw active">CSS</a></li>
    <li><a href="3.html">JavaScript</a></li>
</ol>
~~~

~~~text
html의 class(그룹화) 사용하기
.을 붙여서 사용
순서 때문에 active가 적용된다.
~~~

우선순위 : ID 선택자 > 클래스 선택자 > 태그 선택자
~~~html
<style>
    a {
        color:black;
        text-decoration: none;
    }
    #active {
        color:red
    }
    .saw {
        color:gray
    }
    h1 {
        font-size: 60px;
        text-align: center;
    }
</style>
<ol>
    <li><a href="1.html" class="saw">HTML</a></li>
    <li><a href="2.html" class="saw" id="active">CSS</a></li>
    <li><a href="3.html">JavaScript</a></li>
</ol>
~~~

~~~text
ID는 한 번만 나와야 한다.
조금 더 구체적인 것이 더 우선순위가 된다.
~~~

<br>

---

### WEB2 CSS - 8. 박스 모델

~~~html
<style>
    h1 { block level element
        border-width: 5px;
        border-color: red;
        border-style: solid;
        display: inline; 속성을 이용해서 바꿀 수 있음(기본값이 존재)
    }
    a { inline element
        border-width: 5px;
        border-color: red;
        border-style: solid;
    }
</style>
~~~

중복 제거 방법

~~~html
<style>
    h1, a {
        /* border-width: 5px;
        border-color: red;
        border-style: solid;
        display: inline; */
        border: 5px solid red;
    }
</style>
~~~

~~~text
화면 전체를 사용함 -> block level element
자기 크기만 사용함 -> inline element
내용이 태두리 간격을 -> padding
태두리와 태두리 사이 -> margin
~~~

<br>

---

### WEB2 CSS - 9. 박스 모델 써먹기

~~~text
실습
~~~

<br>

---

### WEB2 CSS - 10. 그리드 소개

~~~text
아무 의미 없는 디자인을 위해서 존재하는 태그 div, span
div -> block level element
span -> inline element
~~~

~~~html
<style>
    #grid {
        border: 5px solid pink;
        display: grid;
        grid-template-columns: 2fr 1fr; 자동으로 조정되는 단위 fr
    }
    div {
        border: 5px solid gray;
    }
</style>
~~~

> HTML, CSS, JS 기술들 중에서 해당 웹 브라우저에서 사용할 수 있는지 없는지 알 수 있는 사이트<br>
https://caniuse.com/

<br>

---

### WEB2 CSS - 11. 그리드 써먹기

~~~text
실습 2.html
~~~

<br>

---

### WEB2 CSS - 12. 미디어 쿼리 소개

반응형 디자인

~~~html

<style>
    div {
        border: 10px solid green;
        font-size: 60px;
    }
    @media(max-width: 800px){
        div {
            display: none;
        }
    }
    
</style>
~~~

<br>

---

### WEB2 CSS - 13. 미디어 쿼리 써먹기

~~~html
실습 2.html

<style>
@media(max-width: 800px){
    #grid {
        display: block;
        grid-template-columns: 150px 1fr;
    }
    ol {
        border-right: none;
    }
    h1 {
        border-bottom: none;
    }
}
</style>
~~~

<br>

---

### WEB2 CSS - 14. CSS 코드의 재사용

~~~html
<head>
    <title>file=1.html</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
</head>
~~~

~~~text
CSS 파일을 외부로 분리하면 최초 로딩에서는 추가적으로 파일을 다운로드하기 때문에 시간이 더 걸릴 수도 있지만 두 번째부터는 컴퓨터에 저장한 CSS 파일을 불러올 수 있기 때문에 로딩 시간을 줄일 수 있다.
~~~


<br>

---

### WEB2 CSS - 15. 수업을 마치며

~~~text
대충 공부하라는 말
~~~

<br>

---

### WEB2 JavaScript - 1.수업소개

~~~text
튜토리얼
~~~

<br>

---

### WEB2 JavaScript - 2.수업의 목적

~~~html
<input type="button" value="night" onclick="
document.querySelector('body').style.backgroundColor='black';
document.querySelector('body').style.color='white';
">
<input type="button" value="white" onclick="
document.querySelector('body').style.backgroundColor='white';
document.querySelector('body').style.color='black';
">
~~~

<br>

---

### WEB2 JavaScript - 3.HTML과 JS의 만남 : script 태그

~~~html
<script>
    document.write(1+1); # 2
</script>
<h1>1+1</h1> # 1+1
~~~

<br>

---

### WEB2 JavaScript - 4.HTML과 JS의 만남 : 이벤트

~~~html
<input type="button" value="alert" onclick="alert('asdf');">
<input type="text" onchange="alert('내용이 바뀜')">
<input type="text" onkeydown="alert('키를 눌렀음')">
~~~
<br>
onclick 속성 값으로는 반드시 JavaScript가 들어가야 한다.
<br>

> 웹 브라우저 위에서 일어나는 일을 이벤트라고 한다. <br>브라우저에서는 이러한 이벤트들을 미리 정의해 놓았기 때문에 이것들을 이용해서 사용자와 상호작용할 수 있다.

<br>

---

### WEB2 JavaScript - 5.HTML과 JS의 만남 (콘솔)

~~~text
JavaScript는 브라우저에서 실행되기 때문에 브라우저의 Console 창을 이용해서 JavaScript를 사용할 수 있다. (현재 보고 있는 웹 페이지 위에서 실행되기 때문에 JavaScript를 이용하여 해당 페이지에서 필요한 동작을 할 수 있음)
~~~

<br>

---

### WEB2 JavaScript - 6.데이터타입 - 문자열과 숫자

~~~javascript
# 문자와 숫자 타입에 대해 배움
1==2    # false
1==1    # true
1=="1"  # true
"1"==1  # true
~~~

<br>

---

### WEB2 JavaScript - 7.변수와 대입 연산자

~~~javascript
var name = '추가 내용';
alert("asdf fdsa asdggds " + name + " asdfasdfjkl;fds");
~~~

<br>

---

### WEB2 JavaScript - 8.웹브라우저 제어

~~~text
JavaScript를 이용해서 웹 브라우저 제어하기
~~~