# 원티드 프리온보딩 인턴십 프론트엔드 - 2주차 과제

## 프로젝트 소개

[원티드 프리온보딩 인턴십 프론트엔드 2주차 과제](https://younuk.notion.site/Week-2-a28eb717312a434498ea431d2ff8fc17)의 요구사항을 구현한 프로젝트입니다!
주제: **Facebook의 React - Github Issue 데이터 화면에 출력**

## 개발 기간

2023.08.29 ~2023.09.01

## 프로젝트에 사용한 주요 라이브러리

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/styled component-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img alt="Octokit" src ="https://img.shields.io/badge/Octokit-white.svg?style=flat-square&logo=Octokit&logoColor=black"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint">

## 배포

[[클릭]배포된 프로젝트 확인하기](https://github-issue-display.vercel.app/)

## 로컬 실행

### 1. clone 및 패키지 설치

```
git clone https://github.com/SeungrokYoon/github-issue-display.git
npm install
```

### 2. .env 파일 생성 후 액세스 코드 삽입

깃헙 액세스 토큰을 추가해야 Github API를 제한없이 사용할 수 있습니다!

엑세스 토큰 획득 경로: [Github profile settings](https://github.com/settings/profile) =>
`Developer settings` =>
`Personal access tokens` 으로 접근하여 토큰 생성 후, 복사하여 사용!

```
REACT_APP_GITHUB_ACCESS_TOKEN = "${본인의 Github access_token}"
```

### 3. 실행하기

```
npm start
```

## 페이지구성 및 주요 기능

각 페이지들은 공통 헤더를 `PageLayout`을 통해 공유합니다

- `IssueListPage` (이슈 리스트가 광고와 함께 렌더링되는 페이지)

  - 이슈 목록을 `Github API`와 `Octokit` 을 활용하여 open 상태의 이슈 중 코멘트가 많은 순으로 정렬
  - 다섯 번째 셀마다 광고 이미지 출력광고
  - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)[PR](https://github.com/SeungrokYoon/github-issue-display/pull/14)
    ![image](https://github.com/SeungrokYoon/github-issue-display/assets/44149596/44c7003a-9411-4bdf-87d1-7d217f4f0e99)

- `IssuePage` (이슈 상세 내용이 마크다운으로 렌더링되는 페이지)
  - 마크다운으로 렌더링
    ![image](https://github.com/SeungrokYoon/github-issue-display/assets/44149596/6ba0b3ba-2bb7-46e1-a9ef-27a904a4a460)
- `NotFoundPage` (잘못된 경로로 라우팅을 요청했을 때 출력되틑 페이지)
  ![image](https://github.com/SeungrokYoon/github-issue-display/assets/44149596/0b110536-4fdf-4cb5-8492-74e8c8649285)
- `AsyncErrorPage` (특정 이슈 호출에 실패했을 때)
  ![image](https://github.com/SeungrokYoon/github-issue-display/assets/44149596/b4854d16-b2a0-48c0-96c3-cf4250aa6f91)

- 데이터 로드 시 로딩 스피너 출력
  ![Sep-01-2023 16-28-06](https://github.com/SeungrokYoon/github-issue-display/assets/44149596/39a04b36-03e9-49d0-874d-b68df1790c2f)

## 디렉토리 구조

```
📦src
 ┣ 📂api
 ┃ ┗ 📜issue.ts
 ┣ 📂components
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜ImageBanner.tsx
 ┃ ┣ 📜IssueIcon.tsx
 ┃ ┗ 📜IssueListItem.tsx
 ┣ 📂constants
 ┃ ┗ 📜advertisement.ts
 ┣ 📂hooks
 ┃ ┣ 📜useFetchIssueList.ts
 ┃ ┗ 📜useIntersect.ts
 ┣ 📂pages
 ┃ ┣ 📜IssueListPage.tsx
 ┃ ┣ 📜IssuePage.tsx
 ┃ ┣ 📜PageLayout.tsx
 ┃ ┣ 📜router.tsx
 ┃ ┗ 📜styles.tsx
 ┣ 📂store
 ┃ ┗ 📜IssueListContext.tsx
 ┣ 📂styles
 ┃ ┣ 📜DefaultTheme.ts
 ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┗ 📜stled.d.ts
 ┣ 📂utils
 ┃ ┣ 📜axiosInstance.ts
 ┃ ┣ 📜dateConverter.ts
 ┃ ┗ 📜octokitInstance.ts
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```
