---
title: D3.jsとモジュール
date: 2016-03-10
categories: ["D3.js"]
tags: ["D3.js"]
author: 久保青水
---

[D3.js]はデータビジュアライゼーションのためのJavaScriptライブラリ。  
D3.js v4がリリースされた。v4はD3.jsの各機能がモジュールとなっているらしい。モジュールとは？

### それまでのJavaScript

それまでのJavaScriptは、ページ内でライブラリを読み込む方式が主流だった。

```html
<head>
  <!-- 外部ライブラリを読み込む -->
  <script src="https://hogehoge.com/library.min.js"></script>
</head>
```

### Node.jsの発展とモジュール化

Node.jsの発展でJavaScriptライブラリ及びモジュールが開発で容易にインストールできるようになった。

```shell
npm install d3
```

Gulp や Webpack などの開発ライブラリによって、モジュールを使った開発方法が盛んに。これによって、ページ内では特定のJavaScriptライブラリの全てを読み込む必要はなくなり、必要な機能だけをまとめた小さいサイズのJavaScriptコードを読み込むことが可能に。

```html
<head>
  <!-- モジュールの必要な機能だけをまとめたJavaScriptファイル -->
  <script src="./bundle.js"></script>
</head>
```

[D3.js]: https://d3js.org/ "D3.js"
