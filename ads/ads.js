// d4cute 헬퍼 [후원] 탭에 실리는 광고 목록 - 여기만 고치면 헬퍼를 다시 빌드하지 않아도 바뀐다
// 추가 방법은 같은 폴더의 README.md 참고. 항목 순서가 화면 순서다. active:false 면 숨긴다.
// i18n 객체에 en 등 타 언어 번역을 추가하면 ?lang=en 시 자동 반영된다.
window.D4CUTE_ADS = [
  {
    id: "starlink",
    active: true,
    partner: "Starlink",
    category: "위성 인터넷",
    accent: "#7dd3fc",
    title: "산속 캠핑장에서도, 배 위에서도 — 어디서나 같은 인터넷",
    lead:
      "스타링크는 저궤도 위성으로 연결하는 인터넷입니다. 2025년 12월 4일 한국 서비스가 " +
      "시작돼, 하늘만 트여 있으면 전국 어디서나 됩니다. 휴대폰이 안 터지는 캠핑장·섬·산간, " +
      "캠핑카·요트, 정전 때의 백업 회선 — 유선이 못 가는 자리에서 가장 빛납니다.",
    videos: [
      { id: "3IXVxxolqeU", label: "뉴스 · 한국 개통", meta: "YTN · 1:49" },
      { id: "WUVx_L_cSOc", label: "강원도 오지 캠핑장 실사용", meta: "테찬 · 4:35" },
      { id: "rpwJX5N-B1Q", label: "한국에서 써 본 리뷰", meta: "뻘짓연구소 · 16:38" },
      { id: "uJT_V5dS7zA", label: "언박싱 · 간단 사용기", meta: "ITSub잇섭 · 16:49" }
    ],
    points: [
      { h: "캠핑 · 차박", p: "오지 캠핑장에서 영상 통화·업무·방송까지. 미니 모델은 노트북만 한 크기라 보조배터리로도 돕니다." },
      { h: "섬 · 산간 세컨하우스", p: "유선이 안 들어오는 집도 하늘만 보이면 개통. 공사 없이 안테나 하나를 세우면 끝입니다." },
      { h: "캠핑카 · 요트 · 낚싯배", p: "이동 중에도 연결됩니다. 바다 위에서 쓰려면 해양 요금제를 따로 확인하세요." },
      { h: "정전 · 통신 장애 대비", p: "지상 회선과 독립된 위성망이라 통신사 장애나 재난 때 백업 회선이 됩니다." },
      { h: "게임은?", p: "지연 시간은 유선보다 깁니다. 공식 사이트의 지역별 속도·지연 안내를 보고 판단하세요." }
    ],
    facts: [
      { k: "주거용", v: "월 87,000원 · 데이터 무제한" },
      { k: "주거용 라이트", v: "월 64,000원" },
      { k: "스탠다드 키트(안테나)", v: "550,000원 · 별도 구매" },
      { k: "비즈니스", v: "월 9만 ~ 341만원" }
    ],
    factsNote: "2025년 12월 보도 기준입니다. 최신 요금·약정·프로모션은 스타링크 공식 사이트에서 확인하세요.",
    cta: {
      label: "추천 링크로 스타링크 가입하기",
      url: "https://starlink.com?referral=RC-DF-5813441-39413-44"
    },
    code: "RC-DF-5813441-39413-44",
    disclosureShort: "추천 링크 · 제작자에게 보상이 갈 수 있고, 가입자 추가 비용은 없습니다.",
    disclosure:
      "이 링크는 제작자의 추천 링크입니다. 이 링크로 가입하면 제작자에게 스타링크 추천 보상이 " +
      "갈 수 있고, 가입자가 더 내는 비용은 없습니다. 요금·가입 조건은 스타링크가 정합니다.",
    sources: [
      { label: "뉴시스 2025-12-04 · 요금제", url: "https://www.newsis.com/view/NISX20251204_0003429054" },
      { label: "디지털데일리 2025-12-03 · 무제한 요금", url: "https://www.ddaily.co.kr/page/view/2025120316581962434" },
      { label: "뉴시스 2026-04-07 · KISDI 분석", url: "https://www.newsis.com/view/NISX20260407_0003581677" }
    ],
    i18n: {
      en: {
        category: "Satellite Internet",
        title: "From mountain campsites to the open sea — internet anywhere",
        lead:
          "Starlink delivers high-speed, low-latency broadband internet via low Earth orbit satellites. " +
          "Ideal for remote outdoor camping, islands, cabins, RVs, boats, or emergency backup when terrestrial lines fail.",
        points: [
          { h: "Camping & Outdoors", p: "Video calls, streaming, and remote work even in the deepest wilderness." },
          { h: "Remote Islands & Cabins", p: "No utility trenching needed. As long as you have a clear sky view, you are connected." },
          { h: "RVs, Boats & Yachts", p: "Stay connected on the move. Explore in-motion mobility and maritime plans." },
          { h: "Emergency Backup", p: "An independent satellite infrastructure that works when landlines and cell towers go down." },
          { h: "Online Gaming?", p: "Latency is generally higher than fiber-optic. Check regional speed and ping specs before subscribing." }
        ],
        facts: [
          { k: "Residential", v: "Unlimited high-speed data" },
          { k: "Standard Kit (Dish)", v: "Hardware purchase required" },
          { k: "Roam & Mobility", v: "Available for portable use" }
        ],
        factsNote: "Pricing and plans subject to regional availability. Please visit the official Starlink site for live details.",
        cta: {
          label: "Join via Referral Link",
          url: "https://starlink.com?referral=RC-DF-5813441-39413-44"
        },
        disclosureShort: "Referral Link · May reward the creator at no additional cost to you.",
        disclosure:
          "This is a creator referral link. Signing up may grant referral benefits to the author at no extra cost to you. Terms are governed by Starlink."
      }
    }
  },
  {
    // 제작자가 속한 클랜의 클랜장이 운영하는 유튜브 채널 (제작자 채널 아님) - 후원 링크가 아니라 소개 (문구·영상은 d4help README 기준)
    id: "uncle-live",
    active: true,
    partner: "삼촌안잔다잉",
    category: "유튜브 · 클랜장",
    accent: "#FF0066",
    title: "클랜장의 실전 라이브와 알짜 공략 — 삼촌안잔다잉",
    lead:
      "<앙증맞은> 무지개날개 클랜장이 디아블로 4 실전 라이브와 공략을 올리는 게임 전문 채널입니다. " +
      "시즌마다 나락 고단·횃불 무한런·보스 파티를 클랜원들과 함께 달리고, 새 시즌엔 라이브에서 " +
      "인게임 클랜 가입 및 게임 소통을 진행합니다.",
    videos: [
      { id: "VFft9Tvh-TQ", label: "횃불 무한 파밍 초보자 가이드", meta: "삼촌안잔다잉" },
      { id: "uCmCQdULFkE", label: "젖소갑빠 · 젖소펫 얻기", meta: "삼촌안잔다잉" },
      { id: "slXu5HD6MnQ", label: "선조야만 버그 · 메커니즘 Part 2", meta: "삼촌안잔다잉" }
    ],
    points: [
      { h: "라이브 소통", p: "실전 라이브에서 디아4 질문과 팁을 나누고, 새 시즌 클랜 가입 소통도 함께합니다." },
      { h: "알짜 공략", p: "횃불 무한런, 젖소갑빠·젖소펫, 선조야만 메커니즘 같은 시즌별 핵심 실전 공략." },
      { h: "클랜 <앙증맞은> 무지개날개", p: "시즌마다 나락 고단·보스 파티·신화 고유 파밍을 함께 달리는 인게임 클랜." },
      { h: "육성 & 세팅 가이드", p: "시즌별 캐릭터 육성, 스킬·정복자 가이드, 장비 세팅과 파밍 팁 공유." }
    ],
    cta: { label: "채널 구독하러 가기", url: "https://www.youtube.com/@삼촌안잔다잉" },
    disclosureShort: "후원 링크가 아니라 제작자가 속한 클랜의 클랜장 채널 소개입니다 — 비용도 보상도 없습니다.",
    disclosure: "이 슬라이드는 추천 링크가 아닙니다. 제작자가 속한 클랜의 클랜장 채널 소개이며, 헬퍼 문의는 받지 않는 순수 게임 채널입니다. 구독해도 누구에게도 비용이나 보상이 생기지 않습니다.",
    i18n: {
      en: {
        category: "YouTube · Clan Leader",
        title: "Clan Leader Live Streams & In-depth Guides — UncleNeverSleeps",
        lead:
          "A Diablo 4 gameplay and build channel hosted by the leader of the Rainbow Wing clan. " +
          "Join high-tier Pit runs, torch farming, and community party play every season.",
        points: [
          { h: "Live Communication", p: "Q&A, theorycrafting, and season launch discussions during live streams." },
          { h: "Core Guides", p: "Deep dives on boss farming, special transmogs, and class mechanics." },
          { h: "In-Game Clan", p: "An active community for end-game boss rotations and mythic unique farming." },
          { h: "Leveling & Builds", p: "Character progression, skill tree setups, paragon boards, and gear optimization." }
        ],
        cta: { label: "Subscribe to Channel", url: "https://www.youtube.com/@삼촌안잔다잉" },
        disclosureShort: "Community channel intro of our in-game clan leader — no fees or referral rewards.",
        disclosure: "This is a community channel introduction for our in-game clan leader. It is not an affiliate link and carries no compensation."
      }
    }
  },
  {
    // 파트너 모집 슬라이드 - 광고가 늘면 자연스럽게 뒤로 밀린다. 빼고 싶으면 active:false
    id: "recruit",
    kind: "recruit",
    active: true,
    partner: "",
    category: "",
    accent: "#eab308",
    title: "다음 파트너 자리입니다",
    lead: "디아블로 4 를 즐기는 분들께 닿는 자리입니다. 헬퍼 이용자에게 도움이 되는 서비스라면 제안해 주세요. 배너 한 장으로 들어갑니다.",
    cta: { label: "텔레그램 그룹에서 제안하기", url: "https://t.me/d4cute_helper" },
    disclosureShort: "광고는 가입자에게 추가 비용이 없는 추천 링크만 받습니다.",
    i18n: {
      en: {
        title: "Your Partnership Here",
        lead: "Directly reach active Diablo 4 players. If your service or product benefits our community, propose a partnership.",
        cta: { label: "Propose on Telegram Group", url: "https://t.me/d4cute_helper" },
        disclosureShort: "We only feature partnerships that offer genuine value with no extra cost to users."
      }
    }
  }
];
