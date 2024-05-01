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