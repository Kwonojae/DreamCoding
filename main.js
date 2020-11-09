/*
컴포넌트란?
컴포넌트는 프로그래밍의 한 부분을 의미하며 재사용이 가능한 최소 단위를 말한다. 

그래서 객체지향언어를 사용할 때 자주 사용되며 재사용이 가능하기 때문에 컴포넌트 단위로 분류하거나 이동 가능하다는 특징이 있다.

렌더링이란?

서버로부터 HTML 파일을 받아 브라우저에 뿌려주는 과정이다.

parsing이란
다른 형식으로 저장된 데이터를 원하는 형식의 데이터로 변환하는것 형변화과는 다른 의미 저장구조가 유사항 경우.

객체란 무엇일까요?
일반적으로 일상 생활에서 인식할 수 있는 사물로 이해하면 될 것 같습니다.
사물은 각각의 특징을 가지고 있고, 어떤 동작을 하는 사물도 있을 것입니다.

사람을 예를 들어 봅시다.
사람은 눈, 팔, 다리 등의 특징을 가지고 있습니다. 또한 걷기, 뛰기, 말하기 등의 동작을 할 수 있습니다.

자바스크립트에서는 null과 undefined 를 제외한 모든 것을 객체로 취급하는 객체 기반 언어입니다. 따라서 객체의 개념은 굉장히 중요합니다.
 
위에서 사람을 예로 들었던 것을 보도록 하겠습니다.
프로퍼티(property) : 눈, 팔, 다리 등의 특징들을 말합니다.
메소드(method) : 걷기, 뛰기, 말하기 등의 동작을 말합니다. 이 메소드도 프로퍼티에 속하지만 동작하는 프로퍼티를 메소드라 부르는 것입니다.
 
자바스크립트에서의 객체는 프로퍼티(property)의 집합입니다.
프로퍼티는 "이름(name) 또는 키(key)"와 값(value)의 관계로 이루어져 있습니


DOM이란?
이렇게 파싱된 HTML 언어는 트리구조를 갖는 객체로 표현되는데, 이를 DOM(Document Object Model)이라고 한다.
DOM은 문서에 접근할 수 있는 API로, node와 property, 
method를 갖는 객체로 이루어져 스크립트나 CSS와 같은 언어들이 DOM 구조에 접근 하여 커스텀 할 수 있게 만들어주는 연결 부분 역할을 갖는다.

때문에 DOM을 이용하여 텍스트값을 변경할 수 있고 스타일링 및 노드 구조까지도 바꿀 수 있다.



Strict Mode란?

Strict Mode의 선언방식 입니다.
이 문구는 ES5부터 적용되는 키워드로, 안전한 코딩을 위한 하나의 가이드라인 입니다.

Strict Mode는 코드에 더 나은 오류 검사를 적용하는 방법입니다.
Strict Mode를 사용하면, 예를 들어 암시적으로 선언한 변수를 사용하거나 읽기 전용 속성에 값을 할당하거나 확장할 수 없는 개체에 속성을 추가할 수 없습니다.
Strict Mode는 ECMAScript 5 버전에 있는 새로운 기능으로써, 당신의 프로그램 또는 함수를 엄격한 운용 콘텍스트 안에서 실행시킬 수 있게끔 합니다. 
이 엄격한 콘텍스트는 몇가지 액션들을 실행할 수 없도록 하며, 좀 더 많은 예외를 발생시킵니다.


Strict Mode의 장점

흔히 발생하는 코딩 실수를 잡아내서 예외를 발생 시킵니다.
상대적으로 안전하지 않은 액션이 발생하는 것을 방지합니다.
정확하게 고려되지 않은 기능들을 비활성화 시킵니다.

*/

'use strict';
console.log('Hello world');

let a;
a = 6;