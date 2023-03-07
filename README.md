# 조재호 포트폴리오(PF-1)
## 소개
> 가상클라이언트 A씨를 가정하여 만든 개인 포트폴리오 사이트입니다. 

---
## 배포링크
> 배포방식은 AWS: S3의 간이 배포를 이용하였습니다.

> [바로가기](https://eundoe-sportsspring.s3.ap-northeast-2.amazonaws.com/index.html)

---
## 개발 도구 및 환경
> 개발환경 : VScode, npm, Parcel-bundler

> 개발도구 : HTML, CSS, Javascript, jQuery

## 프로젝트 설명
### 프로젝트 계획서 
> 추후정추가예정

### 헤더(Header) & 푸터(Footer)
* 헤더와 푸터는 각페이지의 Html에 삽입하고 js와 css를 공유하여 import하는 방식을 이용했습니다.

### 메인페이지(index.html)
1. 슬로건 부분을 jquery로 구현해서 element node의 추가와 제거로 구현했습니다.
2. Trend 상품들은 브라우저 사이즈 980이하에서는 Slide기능을 추가해서 반응형 사이트에 맞게했습니다.

### 샵 페이지 (menStore.html/womenStore.html)
1. 데이터 방식은 Json으로 작성하여 불러오는 방식을 이용
2. Sorting 기능을 넣어서 각 제품별로 정리하였음 
3. pagination을 만들어서 한 페이지에서 데이터를 받아오는 형식
4. 제품 클릭시 Modal Window로 제품 상세정보가 나타나게 하고 카트에 넣는 기능을 추가
5. 카트에 넣을때 해당 데이터는 Local Storage를 통해서 임시로 넣어둠

### 이벤트 페이지(event.html)
1. 이벤트는 랜덤으로 1~6까지의 숫자를 받아서 상자를 생성 각 상자를 클릭시 랜덤 티켓을 획득을 알람으로 획득 여부확인가능합니다.
2. 가상 프로젝트에서 리트라이 기능을 넣어서 기능 구현 확인 가능하게 했습니다.

### 콘택트 페이지(contact.html)
1. 지도는 google map의 iframe을 채용했습니다.
2. FAQ는 아코디언 구조를 이용해서 보이게 해두었습니다.

---
## 자기평가
### 부족한 점
1. 아직 Back-End분야의 이해도가 낮아 추가하지 못한 페이지는 추후에 Back-End분야의 공부를 마친다면 도전 해보고싶습니다.
2. Front-End첫 포트폴리오라서 계획단계에서부터 부족한 부분들이 많았던것 같습니다.
3. npm 업데이트로인해서 Parcel-bundler의 오류가 발생하는 현상에 있어서 많이 당황했었습니다. npm 버젼 관리에 대해서 좀 더 공부를 해야겠다고 생각했습니다.
