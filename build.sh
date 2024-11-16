#!/bin/bash

# 依存関係のインストール（必要な場合）
if [ ! -d "node_modules" ]; then
  npm install
fi

# Windows用にビルド
npm run package-win