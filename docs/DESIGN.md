# DESIGN.md — Growthpack LPサイト デザインシステム

出典: クラスメソッド株式会社 公式サイト（https://classmethod.jp/）の構造・トーン・配色観察をベースに、Growthpack LPサイトで再現可能な形へ落とし込んだ仕様書。

LINE連携プロダクトであることを視覚的に即伝えるため、プライマリに LINE 公式ブランドカラー **LINE Green (#06C755)** を採用。

---

## 0. デザイン原則

classmethod.jp の視覚DNA調査（2026-04-11 WebFetch）から抽出した、同社らしさの核:

**classmethod.jp の特徴**
- 情報密度が高い／ミニマルではない／静的で堅牢
- 実績写真を背景にしたヒーロー（白背景ではない）、装飾より説得力
- クライアントロゴを大量表示、認定バッジ・ISO・実績数で信頼を重ねて構築
- CTAは過度に派手でない（青系）、電話番号を併記、複数箇所に配置
- 人物顔出し無し。実務シーン（工場・店舗・オフィス）の写真
- ナビは白背景＋黒テキスト＋ドロップダウンで多階層を整理

**LP に取り込むべき原則**

1. **ヒーローは写真背景＋白テキスト** — ミニアプリ画面 or 業務シーンをカバー。装飾グラフィックは控えめ
2. **信頼の層を重ねる** — 認定バッジ帯 + クライアントロゴ帯 + 実績数字の3層でパートナーシップを可視化
3. **情報密度で信頼を作る** — 空白で上品さを出すより、整理された密度で「ちゃんと調べて作った」印象を優先
4. **CTAは過度に派手にしない** — LINE Green dark を使うが、ボタンサイズは標準、電話番号や「無料相談」テキストを併記
5. **技術者向けの実直さ** — 煽り語NG、丁寧体、数値根拠を並べる
6. **モノクロ基調 × LINE Green 差し色** — 本文は白黒、LINE Green はブランド色として限定使用
7. **レイアウトは中央寄せグリッド** — コンテンツ幅 `max-w-[1200px]` (wide) / `max-w-[900px]` (default)

---

## 1. カラーパレット

（2026-04-11 現実装に整合: DESIGN-DIFF.md のアクション1で値を統一済み）

### ベース

| 用途 | トークン | HEX | 使用箇所 |
|-----|---------|-----|---------|
| 背景（白） | `--color-bg` | `#ffffff` | 基本背景 |
| 背景（淡グレー） | `--color-bg-muted` | `#F8F9FA` | セクション交互塗り、カード背景 |
| 背景（ダーク） | `--color-bg-dark` | `#1a1d21` | フッター、コントラストセクション |
| テキスト（主） | `--color-text` | `#1F2937` | 本文、見出し |
| テキスト（副） | `--color-text-sub` | `#6B7280` | キャプション、meta情報 |
| テキスト（淡） | `--color-text-muted` | `#9CA3AF` | 補助、placeholder |
| ボーダー | `--color-border` | `#E5E7EB` | 区切り線、カード枠 |

### アクセント（ブランド）

| 用途 | トークン | HEX | 使用箇所 |
|-----|---------|-----|---------|
| プライマリ（LINE Green） | `--color-primary` | `#06C755` | ブランドCI、バッジ、リンクホバー、アクセント装飾 |
| プライマリ dark | `--color-primary-dark` | `#05A847` | **CTAボタン本体・本文リンク**（#06C755 は白文字のコントラストがAA未達のため、文字を載せる面にはこちらを使う） |
| プライマリ darker | `--color-primary-darker` | `#048838` | ボタンhover、押下時 |
| プライマリ light | `--color-primary-light` | `#E8F8F0` | 背景タグ、アイコン背景円 |
| セカンダリ | `--color-secondary` | `#32373c` | サブCTA、ダークボタン |
| 成功・注目 | `--color-accent` | `#FB923C` | 期間限定バッジ、キャンペーン、new表示 |

### Semantic accent（警告・エラー・注意）

| 用途 | トークン | HEX | 使用箇所 |
|-----|---------|-----|---------|
| エラー | `--color-error` | `#EF4444` | 入力エラー、必須警告 |
| 注意 | `--color-caution` | `#FCD34D` | 注意表示、hero装飾円 |
| 注意背景 | `--color-caution-bg` | `#FEF3C7` | 注意文の背景塗り |
| Award/実績 | `--color-award` | `#F59E0B` | 実績バッジのAwardアイコン（慣習的な金色） |

### ブランド例外: AWS関連セクション

| 用途 | HEX | 使用箇所 | 根拠 |
|-----|-----|---------|------|
| AWSブランドオレンジ | `#FF9900` | strength-section.tsx のAWS Premier Tierブロック | Amazon公式ブランドカラー。AWS連携実績を示す**意味的な色使用**のため、LINE Greenパレットに統一せず例外として残す |

**原則**: LINE Green パレットと AWS オレンジは**同一セクション内で競合させない**。AWS ブロックは独立した区画で提示し、周囲は LINE Green 系にする。

### コントラスト運用の原則（重要）

- `#06C755` は白文字を載せると **コントラスト比 ~3.0** で WCAG AA 未達
- したがって**テキストを載せる面（ボタン・リンク・見出し強調）には `--color-primary-dark #05A847` を使う**
- `#06C755` 自体は「色面の単独表現」（ロゴ隣接のアクセント、アイコン、下線装飾、ライン装飾、バッジ背景でテキストなし）に限定
- light トークン `#E8F8F0` はタグ背景・強調ブロックの塗り用

**配色原則**: 1画面のCTAは `--color-primary-dark` か `--color-secondary` のどちらか1色に統一。`--color-accent` はバッジ専用。3色を同じ画面で競わせない。

---

## 2. タイポグラフィ

### フォントファミリー（globals.css で body にグローバル適用済み）

```css
font-family:
  var(--font-noto-sans-jp),
  "Hiragino Kaku Gothic ProN",
  "Hiragino Sans",
  -apple-system,
  BlinkMacSystemFont,
  "Helvetica Neue",
  Arial,
  sans-serif;
```

- 和文優先（Noto Sans JP → ヒラギノ角ゴ ProN）、欧文は system-ui フォールバック
- 数値・英語はプロポーショナルでOK。等幅は `code` 要素のみ
- **body の line-height は 1.75 をグローバル既定**（globals.css `@layer base` 参照）
- **見出し h1〜h3 は line-height 1.3 + letter-spacing -0.01em、h4〜h6 は 1.4** がグローバル既定

### 見出しスケール（現LPで実際に使われているパターンを標準化）

| 用途 | 推奨クラス | モバイル〜デスクトップサイズ |
|-----|----------|---------------------------|
| h1 hero 大 | `text-4xl md:text-5xl font-bold` | 36→48px |
| h1 hero 標準 | `text-3xl sm:text-4xl md:text-5xl font-bold` | 30→36→48px |
| h2 section | `text-2xl sm:text-3xl md:text-4xl font-bold` | 24→30→36px **（LP標準・12箇所で使用中）** |
| h2 小 | `text-xl sm:text-2xl md:text-3xl font-bold` | 20→24→30px |
| h3 subsection | `text-lg sm:text-xl md:text-2xl font-bold` | 18→20→24px |
| h3 小 | `text-base sm:text-lg md:text-xl font-bold` | 16→18→20px |
| h4 小見出し | `text-sm sm:text-base md:text-lg font-bold` | 14→16→18px |
| 強調キャプション | `text-xs sm:text-sm font-bold` | 12→14px |
| body 本文 | `text-sm sm:text-base leading-relaxed` | 14→16px |
| body 大 | `text-base sm:text-lg leading-relaxed` | 16→18px |
| meta | `text-xs` | 12px |

**許容パターンは上記10種類のみ**。新規コードではこのセットから選び、独自の `text-X sm:text-Y md:text-Z` を新設しない。

### 見出しの装飾パターン

- 装飾なしが基本。下線・色塗りは使わない
- セクション見出しの上に小さな英語キャプション（`text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#05A847]`）を置くパターンを標準とする
  ```
  SERVICE
  サービス一覧
  ```

### Weight ルール

- 見出し: `font-bold` (700) が標準、`font-semibold` (600) は補助見出しのみ
- 本文: `font-normal` (400)
- 強調: `font-bold` (700) をインラインで使う。`font-medium` (500) は**ラベル・バッジ限定**

---

## 3. レイアウト & グリッド

### コンテナ（現LPで実際に使われている値を標準化）

| 幅 | 用途 | 使用箇所 |
|---|------|---------|
| `max-w-[1200px]` | ヘッダー・フッター・ワイドセクション | 14箇所で使用、LP標準 |
| `max-w-[900px]` | 標準コンテンツ（本文・カード・フォーム） | 10箇所で使用、LP標準 |
| `max-w-[720px]` | 読み物（ブログ・記事本文） | 新設。今後 MDX 本文で使う想定 |

全てセンタリング (`mx-auto`) + 左右パディング `px-4 sm:px-5 md:px-6`

**ルール**: 新規セクションを作るときは上記3種以外の任意値 `max-w-[540px]` 等を使わない。`<Section container="wide|default|narrow">` コンポーネント（`components/shared/ui/section.tsx`）を使用すること。

### 縦リズム（現LPで実際に使われている値を標準化）

| サイズ | 値 | 用途 | 使用箇所 |
|-------|-----|------|---------|
| `sm` | `py-12 sm:py-16 md:py-20` | 標準セクション | 11箇所で使用、LP標準 |
| `md` | `py-16 sm:py-20 md:py-28` | 主要セクション | 7箇所で使用 |
| `lg` | `py-20 sm:py-24 md:py-32` | ヒーロー・最終CTA帯 | 新設 |

**ルール**: 新規セクションは `<Section spacing="sm|md|lg">` を使用。手書き py-* を直接書かない。

### 要素間余白

- 段落間: `space-y-4`（16px）
- 見出しと本文: `mt-4`〜`mt-6`
- ボタンと直前テキスト: `mt-8`
- カードグリッドの gap: `gap-6 md:gap-8`
- セクションヘッダー（見出し）と中身の間: `mb-8 sm:mb-12 md:mb-16`

### ブレークポイント（Tailwind デフォルト準拠）

| ブレークポイント | 幅 | 用途 |
|---------------|-----|------|
| (default) | 〜639px | スマホ縦 |
| `sm:` | 640px〜 | スマホ横・小タブ |
| `md:` | 768px〜 | タブレット |
| `lg:` | 1024px〜 | ノートPC |
| `xl:` | 1280px〜 | デスクトップ |

---

## 4. コンポーネント

**重要**: セクション4のボタン・カード・セクションは**共通プリミティブで実装済み**です。LPの新規コードでは以下のプリミティブを使用し、独自の button/card/section 要素を書かないでください。

- `components/shared/ui/button.tsx` — `<Button variant="primary|secondary|outline|ghost|link|destructive" size="default|sm|lg">`
- `components/shared/ui/section.tsx` — `<Section spacing="sm|md|lg" container="wide|default|narrow" background="white|muted|accent|dark">`
- `components/shared/ui/card.tsx` — `<Card variant="default|elevated|outline|accent" rounded="lg|xl|2xl" padding="sm|md|lg">`

### ボタン (`<Button>`)

```tsx
import { Button } from '@/components/shared/ui/button';

<Button variant="primary">お問い合わせ</Button>
<Button variant="secondary">資料ダウンロード</Button>
<Button variant="outline">詳しく見る</Button>
<Button variant="primary" size="lg">無料で試す</Button>
<Button variant="link" asChild><a href="/features">機能一覧へ →</a></Button>
```

**仕様**:
- 角丸: `rounded-md`（6px）
- padding: default = `px-6 py-3`, sm = `px-4 py-2`, lg = `px-8 py-4`
- 最小幅: default = 160px, sm = 120px, lg = 200px
- font: `font-semibold` (600) / サイズは size に連動
- transition: `150ms`
- focus ring: `#06C755` (LINE Green brand)
- primary 背景: `#05A847` (AA 確保)、hover `#048838`
- secondary 背景: `#32373c`、hover `#1a1d21`
- outline: `#05A847` 2pxボーダー + 同色テキスト、hover で塗り

### カード (`<Card>`)

```tsx
import { Card } from '@/components/shared/ui/card';

<Card>標準カード（白背景+薄ボーダー+hover シャドウ）</Card>
<Card variant="elevated" rounded="xl" padding="lg">目立たせたい注目カード</Card>
<Card variant="accent">事例・メッセージカード（LINE Green light 背景）</Card>
```

**仕様**:
- 角丸: `rounded-lg`（8px）が default、`rounded-xl` `rounded-2xl` も選択可
- padding: `md`（p-6 md:p-8）が default
- default variant: 白背景 + `#E5E7EB` 薄ボーダー + hover で shadow-lg + `#06C755/40` ボーダー
- accent variant: `#E8F8F0` 背景 + `#06C755/20` ボーダー

### セクション (`<Section>`)

```tsx
import { Section } from '@/components/shared/ui/section';

<Section spacing="sm" container="wide">
  <h2>セクション見出し</h2>
  {/* ... */}
</Section>

<Section spacing="md" container="default" background="muted">
  {/* 標準コンテンツ幅 + 淡グレー背景 */}
</Section>

<Section spacing="lg" background="dark">
  {/* 最終CTA帯 */}
</Section>
```

**仕様**:
- `spacing`: sm (py-12 sm:py-16 md:py-20) / md (py-16 sm:py-20 md:py-28) / lg (py-20 sm:py-24 md:py-32)
- `container`: wide (max-w-[1200px]) / default (max-w-[900px]) / narrow (max-w-[720px])
- `background`: white / muted (#F8F9FA) / accent (#E8F8F0) / dark (#1a1d21 + text-white)
- `noContainer={true}` でコンテナを外してフルブリードにできる

### ナビゲーション（既存 header.tsx で実装）

- ヘッダー高さ: `h-16 md:h-20`（64–80px）
- 背景: 白 + 下部 `border-b border-[#E5E7EB]`
- スクロール追従: `sticky top-0 z-50 bg-white/95 backdrop-blur`
- ナビリンク色: `text-[#1F2937]` / hover `text-[#06C755]` + hover bg `#E8F8F0`
- モバイル: 768px 未満はハンバーガーメニュー、右からスライドイン

### リンク（本文中）

```tsx
<a className="text-[#05A847] underline underline-offset-2 hover:text-[#048838]">
  テキスト
</a>
```

または `<Button variant="link" asChild><a>...</a></Button>` を使用。

- 本文中のリンクは**下線あり**（classmethod.jp 同様）
- 色は `#05A847`（dark 版）を使用し、白背景での可読性を確保

---

## 5. 画像・アイコン・メディア

- **画像形式**: WebP優先。`<Image>` コンポーネント（Next.js）で幅固定＋`quality={85}`
- **角丸**: 写真は `rounded-lg`（8px）、アバターのみ `rounded-full`
- **シャドウ**: hover時の `shadow-lg`（`shadow: 0 10px 30px rgba(0,0,0,0.12)`）
- **ヒーロー画像**: 16:9 または 4:3。上下余白を確保し、背景と馴染ませる
- **アイコン**: Lucide-react 統一。サイズは `w-5 h-5`（20px）を標準、ヒーローアクセントのみ `w-8 h-8`
- **装飾グラデーション**: `#06C755` と `#05A847` の2色までに限定。3色以上のグラデは使わない

---

## 6. トーン & ボイス

### 語調

- **敬語・丁寧体**: 「〜します」「〜いたします」「〜を支援します」
- **断定を避けすぎない**: 数値を伴う事実は断定で書く（例: 「導入10,000社以上」）
- **専門用語は避けない**: 読者は意思決定者（部長〜役員）。技術用語は正確に使い、必要箇所のみ注釈
- **煽り語NG**: 「今すぐ」「革命」「絶対」「完全自動化」など

### 見出しの書き方

- 課題起点: 「〇〇にお困りではありませんか？」→ 次見出しで解決
- 機能名 + 価値: 「LINEミニアプリ対応 — 会員証から接客まで一貫対応」
- 数値訴求: 「会員化率3〜5倍 / ブロック率2.5-7%」
- 疑問形見出しで読み進ませる: 「なぜ LINE が選ばれるのか？」

### CTA文言

| シーン | 標準文言 |
|-------|---------|
| 問い合わせ | お問い合わせ / ご相談はこちら |
| 資料請求 | 資料ダウンロード（無料） |
| 事例 | 導入事例を見る |
| 詳細 | 詳しく見る / 機能一覧へ |

- 「無料」「今だけ」は最小限。ボタン下の補助テキストに回す

---

## 7. 画面ごとの構成パターン（classmethod.jp 準拠）

### ヒーロー（写真背景＋白テキスト版）

- **背景**: ダークオーバーレイ付きの実務シーン画像（店舗 / オフィス / ミニアプリ画面）
  - 背景画像 → `bg-gradient-to-r from-[#0a0a0a]/85 to-[#0a0a0a]/60` を重ねる
  - `text-white` で見出し、`text-white/80` でサブコピー
- **構成**: 左右2カラム（md:以上）、スマホは縦積み
- **左**: 認定バッジ + H1（白・太字） + サブコピー + CTA2個 + 「実績数字 5,000社」
- **右**: LINEミニアプリ画面モックアップ（ダーク背景に浮かぶ）
- **高さ**: `min-h-[560px] md:min-h-[640px]`

### 信頼バッジ帯（ヒーロー直下）

- 横並びのモノクロロゴ5〜8個を淡いグレー背景 `bg-[#F8F9FA]` で並べる
- 上に小見出し「TRUSTED BY / 導入実績」
- ロゴは `grayscale` で、hover で `grayscale-0` にして遊びを入れる

### 認定・ISO 帯

- 白背景 + 細ボーダー区切り
- 「LINEヤフー Technology Partner」「AWS Premier Tier」「ISO 27001」等のバッジ＋短いラベル
- 4〜6個を横並び

### 機能紹介セクション

- 3〜4カラムのカードグリッド（白背景カード）
- 各カードに: アイコン（上） / 見出し（中） / 説明文（下） / Phase ラベル
- カード間 `gap-6 md:gap-8`

### 事例セクション（classmethod.jp 準拠）

- 横スクロールカルーセル or 3カラムグリッド
- 各カードに: 背景画像 + 企業ロゴ + 業種タグ + 1行の成果
- hoverで拡大・シャドウ
- **事例企業は公開確認済みのもののみ**（ルール: 未確認の技術連携は記載しない）

### CTA 帯（複数配置）

- ヒーロー内・セクション中盤・最終の3箇所に配置
- メインCTA + 電話番号 + 受付時間を横並び
  ```
  [無料で相談する] または お電話 0120-XXX-XXX（平日 10:00-18:00）
  ```
- 電話番号は classmethod.jp に倣って併記。ダーク帯の最終CTAでは特に強調

### 問い合わせ前の最終 CTA 帯

- ダーク背景 `bg-[#1a1d21]` + 白文字
- 見出し + 1行サブコピー + 大きな CTA ボタン + 電話番号

### フッター

- 背景 `bg-[#0a0a0a]` / 文字 `text-white/80`
- 4〜5カラム: 会社情報 / サービス / 機能 / 事例 / リソース
- 最下段 copyright は左寄せ `text-xs text-white/50`、右側に SNS アイコン

---

## 8. アクセシビリティ

- **コントラスト**: 本文は WCAG AA 以上（`#1F2937` on `#ffffff`）
- **フォーカス可視化**: 全インタラクティブ要素に `focus:ring-2`
- **代替テキスト**: 全画像に `alt` 必須。装飾画像は `alt=""`
- **見出し階層**: h1→h2→h3 を飛ばさない
- **ダークセクションの文字**: `text-white` + `opacity-90` 以上
- **タップ領域**: 最小 `44×44px`（`py-3 px-6` が目安）
- **LINE Green の扱い**: テキストを載せる面は必ず `#05A847` 以上の暗さを使う。`#06C755` 直にテキストを載せない

---

## 9. 実装タスク（初期整備チェックリスト）

- [ ] `data/config/colors.js` を LINE Green 構造に書き換え（DESIGN-DIFF.md アクション4）
- [ ] `tailwind.config.ts` の primary マッピング更新
- [ ] `globals.css` にフォントファミリー・本文デフォルト line-height 1.75 を設定
- [ ] 共通ボタンコンポーネント `<Button variant="primary|secondary|outline">` を作成
- [ ] 共通カードコンポーネント `<Card>` を作成
- [ ] セクションラッパー `<Section spacing="sm|md|lg">` を作成
- [ ] 既存LPのHero/Feature/Case/FooterをこのDESIGN.mdに沿ってリファクタ

---

## 10. 更新履歴

- 2026-04-11 v1 初版。classmethod.jp 観察ベース
- 2026-04-11 v1.1 プライマリをLINE公式ブランドカラー (LINE Green #06C755) に変更。AA可読性確保のためボタン/リンクのテキスト面は dark 版 #05A847 を使う2段構えに
- 2026-04-11 v1.2 DESIGN-DIFF.md アクション1反映。現実装に合わせて neutral 系 HEX (text/border/bg-muted) と LINE Green dark/light を統一。Semantic accent (error/caution) を追加定義
- 2026-04-11 v1.3 DESIGN-DIFF.md アクション3-5反映。LINE Green light を #E8F8F0 に統一（5箇所置換）、tailwind.config.ts と colors.js を LINE Green 構造に書き換え（Indigoデッドコード除去）、hero装飾円の青 #3B82F6 を LINE Green に変更、AWS #FF9900 を意味的例外として明文化、Award #F59E0B をトークンとして追加
- 2026-04-11 v1.4 セクション2〜4を現LP実装値に整合。globals.css にフォントスタック・行間1.75・見出し行間デフォルトを注入。共通プリミティブ `<Button>` `<Section>` `<Card>` を DESIGN.md §4 準拠で新設（components/shared/ui/）。タイポグラフィスケールを現LP使用パターンに合わせて10種に絞り込み、コンテナ幅 900px / section padding 3段 (sm/md/lg) を標準化
- 2026-04-11 v1.5 **classmethod.jp の視覚DNA再調査結果を反映**。原則を「情報密度で信頼を作る」「写真背景ヒーロー」「認定バッジ帯 + クライアントロゴ帯 + 実績数字の3層信頼構築」「電話番号併記のCTA」等に刷新。§7 画面構成パターンを classmethod.jp 準拠で全面書き換え（ヒーロー白背景→写真背景、信頼バッジ帯追加、CTAに電話番号併記）
