# Restaurant Reservation App

## 概要
このプロジェクトは、ユーザーがレストランの予約を簡単に行えるアプリケーションです。高級感のあるデザインと落ち着いた雰囲気を持ち、直感的なインターフェースを提供します。

## 機能
- **日付選択**: ユーザーが予約日を選択できるカレンダーインターフェース。
- **時間選択**: ユーザーが予約時間を選択できるドロップダウンメニュー。
- **人数選択**: ユーザーが予約する人数を選択できるインターフェース。
- **アレルギー情報入力**: ユーザーがアレルギー情報を入力できるテキストフィールド。
- **予約確認メール送信**: 予約情報を受け取り、確認メールを送信する機能。

## ディレクトリ構造
```
restaurant-reservation-app
├── src
│   ├── components
│   │   ├── DatePicker.tsx
│   │   ├── TimePicker.tsx
│   │   ├── GuestSelector.tsx
│   │   ├── AllergyInput.tsx
│   │   └── ReservationForm.tsx
│   ├── pages
│   │   └── ReservationPage.tsx
│   ├── styles
│   │   └── luxury-theme.css
│   ├── utils
│   │   └── sendConfirmationEmail.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 使用方法
1. リポジトリをクローンします。
2. 必要な依存関係をインストールします。
   ```
   npm install
   ```
3. アプリケーションを起動します。
   ```
   npm start
   ```

## 開発
- TypeScriptを使用しており、型安全なコードを実現しています。
- スタイルはCSSを使用しており、高級感のあるデザインを提供します。

## ライセンス
このプロジェクトはMITライセンスの下で提供されています。