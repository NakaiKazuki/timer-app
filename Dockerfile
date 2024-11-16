FROM node:18-bullseye

# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y \
    libx11-dev \
    libxtst-dev \
    libpng-dev \
    libxss-dev \
    gcc \
    g++ \
    make \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# package.jsonなどの設定ファイルをコピー
COPY package*.json ./

# Electronとビルドに必要なパッケージをインストール
RUN npm install -g electron-builder && \
    npm install

# ビルドスクリプト
COPY build.sh /app/
RUN chmod +x /app/build.sh

ENTRYPOINT ["/app/build.sh"]