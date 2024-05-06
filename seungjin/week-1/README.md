# 구글 폰트를 HTML 파일에 적용하는 방법

## 구글 폰트 가져오기

1. 구글 폰트 웹사이트에 접속합니다. [Google Fonts](https://fonts.google.com/)
   원하는 폰트를 검색하거나 둘러보세요. 예를 들어, "Roboto"라고 검색할 수 있습니다.

2. 선택한 폰트를 클릭합니다.

3. 페이지 우측 상단에 있는 `"Get Font"` 버튼을 클릭합니다.

4. 선택한 스타일과 문자 집합을 확인하고, `"Get embed code"` 탭으로 이동합니다.

## HTML 파일에 폰트 적용하기

1. "Get embed code" 탭의 `<link>` 태그를 Copy code합니다.

2. `<head>` 태그 내에 다음 코드를 추가하여 폰트를 가져옵니다:

   ```html
   <!-- 예시 -->
   <link
     href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
     rel="stylesheet"
   />
   ```

   여기서 `"family=Roboto:wght@400;700"`는 Roboto 폰트의 일반(400)과 굵게(700) 스타일을 가져온다는 것을 의미합니다. 원하는 스타일에 따라 숫자를 조정할 수 있습니다.

3. `<style>` 태그 내에 다음 CSS 코드를 추가하여 `<h1>` 태그에 폰트를 적용합니다:

   ```html
   <!-- 예시 -->
   <style>
     h1 {
       font-family: "Roboto", sans-serif;
     }
   </style>
   ```

   위 코드에서 `'Roboto'`는 가져온 폰트의 이름을 나타냅니다. 만약
   다른 폰트를 사용한다면 해당 폰트의 이름으로 변경해야 합니다.

## HTML 파일에 적용된 폰트 확인하기

    이제 HTML 파일에 `<h1>` 태그를 사용하면 해당 폰트가 적용된 것을 확인할 수 있습니다.
