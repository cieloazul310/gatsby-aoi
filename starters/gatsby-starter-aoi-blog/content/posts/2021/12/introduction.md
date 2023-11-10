---
title: Gatsby Theme Aoiについて
date: 2021-12-20
categories: []
tags: ["Gatsby", "MUI", "TypeScript"]
author: cieloazul310
image: ./IMG_8906.jpeg
imageAlt: Flags
---

Gatsby Theme AoiはMUIベースのGatsbyテーマです。

## 特長

- MUI v5(Material-UI)対応
- TypeScript対応
- Gatsby v4対応

## インストール方法

使い方は二通り。Gatsby Theme Aoiのスターターをクローンする方法と、Gatsbyプロジェクトに手動でインストールがあります。

### スターターを使う場合

```shell
curl https://codeload.github.com/cieloazul310/gatsby-aoi/tar.gz/main | tar -xz --strip=2  gatsby-aoi-main/starters/gatsby-starter-aoi-theme
cd gatsby-starter-aoi-theme
```

### 手動でインストールする場合

```shell
npm install @cieloazul310/gatsby-theme-aoi
```

## 使い方

### 1. gatsby-config.jsを編集

```javascript
module.exports = {
  ...,
  plugins: [
    ...plugins,
    {
      resolve: `@cieloazul310/gatsby-theme-aoi`,
      options: {
        siteId: `your-site-id`,
      },
    },
  ],
};
```

### 2. レイアウトを使う

```tsx
import { Layout } from '@cieloazul310/gatsby-theme-aoi';

function Page() {
  return (
    <Layout title="Page Title">
      <PageContents />
    </Layout>
  );
}

export default Page;
```

### 3. コンポーネントを使う

```tsx
import {
  AppLink,
  Paragraph,
} from '@cieloazul310/gatsby-theme-aoi';

function Hoge() {
  return (
    <Paragraph>
      空気は我らの周りに重い。旧い西欧は、毒された重苦しい雰囲気の中で麻痺する。偉大さの無い物質主義が人々の考えにのしかかり、諸政府と諸個人との行為を束縛する。世界が、その分別臭くてさもしい利己主義に浸って窒息して死にかかっている。世界の息がつまる。――もう一度窓を開けよう。広い大気を流れ込ませよう。英雄たちの息吹を吸おうではないか。<br />
      <AppLink to="/next-page">Next Page</AppLink>
    </Paragraph>
  );
}
```
