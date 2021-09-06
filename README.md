# Project Title
- Hye-Weather-App

# Project 제작 기간
- 21년 9월 5일 ~ ing

## Project 계획 이유
- open API를 사용하는 연습을 하기 위해서 open API를 찾아보면 많은 open API가 있었습니다. 카카오 오픈API들도 있었고 날씨 API도 있었는데 그 중 날씨 API를 선택하였습니다. 그 이유는 아침마다 날씨를 확인하는 제 습관을 보곤 날씨 open API를 사용해보자 해서 이 날씨앱을 만드는 것을 계획했습니다.

---

## Project 기능
1. 시간대별 배경 변화(색상) / 지역별 배경 변화 (사진)
  
2. Light / Dark 기능

## Project 사용 언어/라이브러리/프레임워크
- html/css
- javascript
- Bootstrap icon

## CSS 초기화
- normalize.css 사용

## Open API
- https://openweathermap.org/api > openweather API 


### 시간대별 배경 색상 변경
#### 시간대별 배경 색상 (4시간 간격)
- 12AM ~ 4AM  : 
	- background-image: linear-gradient(to top, #2b5876 0%, #4e4376 100%);
- 4AM ~ 8AM   : 
	- background-image: linear-gradient(to bottom, #667eea 0%, #764ba2 100%);
- 8AM ~ 12PM  : 
	- background-image: linear-gradient(to bottom, #7DE2FC 0%, #B9B6E5 100%);
- 12PM ~ 4PM  :
	- background-image: linear-gradient(to top, #0acffe 0%, #495aff 100%);
- 4PM ~ 8PM   :
	- background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);
- 8PM ~ 12AM  : 
	- background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);

<br>

<img src="https://user-images.githubusercontent.com/85651246/132193143-47948951-b276-49ec-82e5-ec9a69a7423d.PNG">