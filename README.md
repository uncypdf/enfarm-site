# ENFARM Website

엔팜(enfarm.co.kr)용 정적 회사소개 웹사이트 초안입니다.

## 기술 구성

- Next.js
- Tailwind CSS
- Static Export
- Cloudflare Pages 배포 가능

## 실행 방법

```bash
npm install
npm run dev
```

## 정적 빌드

```bash
npm run build
```

빌드 결과물은 `out` 폴더에 생성됩니다.

## 수정할 항목

- `src/app/page.tsx`
  - 제품 문구
  - 회사 소개 문구
  - 이메일/전화번호/주소
- `src/app/layout.tsx`
  - 사이트 제목/설명
- `src/app/globals.css`
  - 컬러 시스템
