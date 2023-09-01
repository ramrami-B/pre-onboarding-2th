# Ramhub Issues

## 🐶 Logo

<img src='https://my-web-contents-bucket.s3.ap-northeast-2.amazonaws.com/ram_logo.png' width=50 />

## 🌱 About Ramhub Issues

`Ramhub Issues`는 Github API를 활용하여 [facebook/react 레파지토리](https://github.com/facebook/react/issues)의 open 상태인 issue들을 commet 순으로 불러와서 보여주고, 상세 내용을 확인 할 수 있도록 제공해주는 페이지 입니다.

_\*원티드 프리온보딩 인턴십 프론트엔드 2주차 과제_

## 🛫 시작하기

```
git clone https://github.com/ramrami-B/ramhub-issues.git
cd ramhub-issues
npm install
npm rum start
```

⚠️ 애플리케이션을 시작하기 위해서 `node v18`이 필요합니다.

## 🔗 배포 링크

http://ramhub-issues.s3-website.ap-northeast-2.amazonaws.com/

## ⚒️ 기술 스택

- core: `typescript`
- style: `styled-components`
- 상태관리: `reduxjs/toolkit` `react-redux`
- api: `octokit`
- 배포: `aws s3`
- react-router-dom v6.xx
- node v18.xx

## 🌲 폴더 구조

```
.
├── pubilc/
│   ├── favico.ico
│   └── index.html
├── src/
│   ├── api/
│   │   └── octokit.ts
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── issue/
│   │   │   ├── IssueDetailHead.tsx
│   │   │   └── IssueListItem.tsx
│   │   └── ui/
│   │       ├── AdBanner.tsx
│   │       ├── Error.tsx
│   │       └── Loading.tsx
│   ├── constants/
│   │   └── colors.ts
│   ├── hooks/
│   │   ├── useAppDispatch.ts
│   │   ├── useAppSelector.ts
│   │   └── useIntersectionObserver.ts
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── PageLayout.tsx
│   ├── pages/
│   │   ├── IssueDetailPage.tsx
│   │   └── IssueListPage.tsx
│   ├── redux/
│   │   ├── issueSlice.ts
│   │   └── store.ts
│   └── utils/
│       └── dateFormatter.ts
├── package-lock.json
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md
```

---

프로젝트를 진행하면서 작성한 글:
- [Redux in my 2nd Week Assignment](https://ramrami-b.notion.site/Redux-in-my-2nd-Week-Assignment-5fdc6ac9f1d141a498aa6dde0ca1c10b?pvs=4)
- [AWS S3 배포 & GitHub Actions CI/CD](https://ramrami-b.notion.site/AWS-S3-GitHub-Actions-CI-CD-3952f516cc6a40e5abd52dca02c7f4d1?pvs=4)
