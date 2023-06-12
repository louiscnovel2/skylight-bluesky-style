# Skylight Bluesky Style

これは[penpenpng](https://snort.social/p/npub133vj8ycevdle0cq8mtgddq0xtn34kxkwxvak983dx0u5vhqnycyqj6tcza)さんが作成したSkylightをCSSでBluesky風にアレンジしたフォークです。

Skylight Bluesky Style

https://louis-c-novel.com/#/

## 環境

・Raspberry Pi 3 Model B

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

## ダウンロード

```
git clone https://github.com/louiscnovel2/skylight-bluesky-style.git
```

ダウンロードしたディレクトリに移動します。

**louisは自分のユーザー名に変えてください！！**

```
cd /home/louis/skylight-bluesky-style
```

## ローカル環境で稼働する場合

### npmのビルド

```
npm install
npm run dev
```

http://localhost:8080 にアクセスして、ちゃんと表示されていることを確認します。

## 本番環境で稼働する場合

もしポート開放がされていて、本番環境でビルドしたい場合はこのように入力して下さい。

```
npm install
npm run build
```

ビルドするとdistディレクトリが生成されます。

これをApacheのドキュメントルートにコピーします。

**louisは自分のユーザー名に変えてください！！**

```
sudo cp -pR /home/louis/skylight-bluesky-style/dist/* /var/www/html/
```

これでドメインにアクセスするとちゃんと表示されるはずです。

■出典

https://asameshicode.com/deploy-vue-app/

## PWA対応について

PWAに対応するには、以下の方法の通りにします。

パーミッションを一時的に777にします。

```
sudo chmod -R 777 /var/www/html
```

[WinSCP](https://forest.watch.impress.co.jp/library/software/winscp/)をダウンロードします。

IPアドレスとユーザー名とパスワードを入力して、ログインします。

以下のファイルを全部ドラッグアンドドロップで`/var/www/html`にアップロードします。

・manifest.json

・serviceworker.js

・192.png

・512.png

その後、index.htmlを書き換えます。

```
sudo apt install vim
sudo vim /var/www/html/index.html
```

`href`の値を全部消して`./manifest.json`へと書き換えて下さい。

```
<link rel="manifest" href="./manifest.json">
```

そうするとPWAのインストールボタンが表示されます。

最後にパーミッションを775にします。

```
sudo chmod -R 775 /var/www/html
```

お疲れ様でした。

## 著作権とライセンス表示

Copyright (c) 2023 [penpenpng](https://snort.social/p/npub133vj8ycevdle0cq8mtgddq0xtn34kxkwxvak983dx0u5vhqnycyqj6tcza) Skylight All Rights Reserved.

Released under the MIT license

https://github.com/louiscnovel2/skylight-bluesky-style/blob/main/LICENSE

## 本家はこちら↓

本家のGithubページはこれ↓

https://github.com/penpenpng/skylight

Minimal bsky web client implementation.

https://penpenpng.github.io/skylight/
