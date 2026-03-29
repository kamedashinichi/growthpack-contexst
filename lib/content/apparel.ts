import type { IndustryContent } from "./types"

export const apparel: IndustryContent = {
  id: "apparel",
  seo: {
    title:
      "アパレル店舗の顧客接点DX｜LINEミニアプリ開発 | グロースパック for LINE",
    description:
      "193名調査で見えた店舗スタッフの課題。50ブランド横断の会員証で顧客接点を一元化。",
    ogTitle: "アパレル店舗の顧客接点DX｜Growthpack for LINE",
    ogDescription:
      "193名調査で見えた店舗スタッフの課題。50ブランド横断の会員証で顧客接点を一元化。",
  },
  hero: {
    h1: "50ブランド、1つの会員証。",
    subCopy:
      "EC×店舗の会員データを統合し、ブランドを横断した顧客体験をLINEミニアプリで実現。",
    visualVariant: "typography",
    displayStats: [
      { value: "3倍", label: "会員数増加" },
      { value: "5秒", label: "で会員登録完了" },
      { value: "10万人", label: "友だち増加（1ヶ月）" },
    ],
  },
  problems: [
    {
      title: "接客以外の業務が4割超 ── 過半数のスタッフが直面",
      description:
        "店舗スタッフの半数以上が、業務時間の4割以上を接客以外に費やしています。",
      stat: { value: "50.8%", label: "アパレル店舗スタッフ業務実態調査 2026（n=193）" },
    },
    {
      title: "最大の課題は\u201C手作業オペ\u201D ── EC連携ではない",
      description:
        "値下げ・価格変更など店舗オペレーションの手作業が課題深刻度1位（Top2Box率36.3%）。EC×店舗連携（22.8%）を大きく上回りました。",
      stat: { value: "36.3%", label: "同上" },
    },
    {
      title: "改善の声が届かない ── 8割超が\u201C壁\u201Dを感じている",
      description:
        "改善意見を持つ店舗スタッフ122名のうち、82.0%が「伝えても反映されない」「言いづらい」「手段がない」と回答しています。",
      stat: { value: "82.0%", label: "同上" },
    },
  ],
  solutionStory: {
    headline: "3つのPhaseで、顧客との関係を積み上げる",
    subheadline:
      "LINE基本機能で顧客基盤を作り、アパレル特化機能で接客の接点と情報を蓄積し、セグメントマネージャーでフォローを自動化",
    steps: [
      {
        label: "Phase 1｜顧客基盤をつくる",
        description:
          "友だち追加と同時に全ブランド共通の会員化。LINE会員証・クーポン・スタンプカードで顧客接点を構築。",
        featureId: "memberscard",
      },
      {
        label: "Phase 2｜接客の接点と情報を蓄積する",
        description:
          "店頭商品シェアで来店顧客との接点を作り、顧客カルテに情報を自動蓄積。POS連携なしでも運用可能。",
        featureId: "product-share",
      },
      {
        label: "Phase 3｜フォローを自動化する",
        description:
          "セグメントマネージャーが全機能のデータを1人の顧客レコードに統合。条件に応じたフォローメッセージを自動配信。",
        featureId: "segment-manager",
      },
    ],
  },
  featureHighlights: [
    {
      featureId: "memberscard",
      name: "LINE会員証",
      industryContext:
        "来店時にバーコード提示で50ブランド横断のポイントを加算。アプリDL不要で、ライトユーザーの会員化率が3倍に。EC購買データとの自動連携で、オンライン・オフラインの購買行動を統合する。",
      proof: "PAL CLOSET：新規会員登録数200%増",
    },
    {
      featureId: "1to1",
      name: "1to1コミュニケーション",
      industryContext:
        "顧客ごとのLINEチャット履歴を全スタッフで共有。来店予約の確認、入荷通知、コーディネート提案をLINE上で完結。スタッフ異動後も途切れない接客を実現する。",
      proof: undefined,
    },
    {
      featureId: "coupon",
      name: "クーポン配信",
      industryContext:
        "購買履歴・来店頻度に基づくセグメント別クーポンで、一律配信と比較してブロック率を18%低減。誕生日クーポン、休眠復帰クーポンなど、顧客のライフサイクルに応じた施策を自動化する。",
      proof: undefined,
    },
    {
      featureId: "gift",
      name: "ギフト（友人紹介）",
      industryContext:
        "既存会員がLINEで友人にギフトを贈ると、受け取った友人も会員登録。紹介者と被紹介者双方にインセンティブを付与し、広告費をかけずに新規顧客を獲得する仕組み。",
      proof: undefined,
    },
  ],
  caseStudies: [
    {
      company: "PAL CLOSET（パルグループ）",
      industry: "アパレル・ファッション｜50ブランド・1,078店舗",
      quote:
        "Native appはアプリDLが必要な為、ライトユーザーや操作に不慣れなお客様に導入が進まず、スタッフ/ユーザー双方に課題感があった。LINE Mini appはライトユーザーへのリーチ＆会員化という棲み分けができた",
      metrics: [
        { value: "200", unit: "%", label: "新規会員数増加" },
        { value: "10", unit: "万人", label: "友だち追加/月" },
        { value: "5", unit: "倍", label: "EC売上成長" },
      ],
      details:
        "50ブランド・1,078店舗を展開するパルグループが、LINEミニアプリで会員基盤を統合。既存のネイティブアプリではリーチできなかったライトユーザー層の会員化に成功し、新規会員登録数は導入前の3倍に。友だち追加は月間10万人ペースで推移し、EC売上は5倍に成長した。",
    },
  ],
  cta: {
    headline: "製品資料をダウンロード",
    subtext:
      "機能詳細・導入事例・料金プランなど、詳しい情報を資料でご確認いただけます",
  },
}
