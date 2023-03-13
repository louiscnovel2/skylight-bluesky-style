# Skylight Bluesky Style

これは[penpenpng](https://snort.social/p/npub133vj8ycevdle0cq8mtgddq0xtn34kxkwxvak983dx0u5vhqnycyqj6tcza)さんが作成したSkylightをCSSでBluesky風にアレンジしたフォークです。

Skylight Bluesky Style

https://skylight.louis-c-novel.com/#/

## インストール

### Node.jsとnpmのインストール

aptでNode.jsとnpmをインストールします。

```
sudo apt update
sudo apt upgrade
sudo apt install nodejs npm
```

n package をインストールします。

```
sudo npm cache clean
sudo npm install n -g
```

最後に n package を使って node をインストールします。

```
sudo n stable
sudo ln -sf /usr/local/bin/node /usr/bin/node
```

### vue-cliのインストール

vue-cliをインストールします。3系になって名称が変わったようです。

```
sudo npm install -g @vue/cli
```

■出典

https://webjin.work/install-vue-js-on-ubuntu-16-04-at-npm/

### Apacheのインストール

```
sudo apt-get install apache2
```

■出典

https://qiita.com/takey/items/75e6984468f0f6870a97

##ダウンロード

```
git clone https://github.com/louiscnovel2/skylight-bluesky-style.git
```

ダウンロードしたディレクトリに移動します。

**louisは自分のユーザー名に変えてください！！**

```
cd /home/louis/skylight-bluesky-style
```

### npmのビルド

```
npm install
npm run dev
```

ビルドするとdistディレクトリが生成されます。

これをApache2のドキュメントルートにコピーします。

```
cp -pR /home/louis/skylight-bluesky-style/* /var/www/html/
```

http://localhost:8080 にアクセスして、ちゃんと表示されていることを確認します。

もしポート開放がされていて、本番環境でビルドしたい場合はこのように入力して下さい。

```
npm install
npm run build
```

■出典

https://asameshicode.com/deploy-vue-app/

## 著作権とライセンス表示

Copyright (c) 2023 [penpenpng](https://snort.social/p/npub133vj8ycevdle0cq8mtgddq0xtn34kxkwxvak983dx0u5vhqnycyqj6tcza) Skylight All Rights Reserved.

Released under the MIT license

https://github.com/louiscnovel2/skylight-bluesky-style/blob/main/LICENSE

## 本家はこちら↓

本家のGithubページはこれ↓

https://github.com/penpenpng/skylight

Minimal bsky web client implementation.

https://penpenpng.github.io/skylight/
