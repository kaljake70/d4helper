# 디아블로 4 지도 도감 (Maps)

성역 전체 지도의 순간이동진과 지도 아이콘(던전·보루·속삭임·소굴·지옥물결 등)을 하나의 좌표로 모은 데이터입니다.

- `atlas.json` — 항목 목록
  - `kind`: waypoint · dungeon · stronghold · whisper · lair · helltide · unknown
  - `name` / `name_en`: 한국어 이름 / 영어 공식 이름 (순간이동진)
  - `ko_verified`: 한국어 이름을 게임 툴팁에서 직접 읽어 확인했는지
  - `region` / `region_en`: 지역 한국어 / 영어 (조각난 봉우리 Fractured Peaks · 스코스글렌 Scosglen · 메마른 평원 Dry Steppes · 케지스탄 Kehjistan · 하웨자르 Hawezar · 나한투 Nahantu · 스코보스 Skovos)
  - `uid`: 공식 영어 이름으로 만든 고유 이름 (`Bear-Tribe-Refuge`). 영어 미확인 곳은 좌표 임시 uid (`WP-n672_238`)
  - `gx`, `gy`: Tab 지도를 끝까지 축소한 1080p 화면에서 '조각난 봉우리' 방패 문양 기준 픽셀 좌표
  - `cell`: `gx`·`gy` 를 64px 칸으로 나눈 격자 칸
  - `tip`: 툴팁 머리글 그림 (`tips/`)
- 아직 열지 않은 순간이동진은 지도에 보이지 않아 빠져 있을 수 있습니다. 이벤트·속삭임처럼 시간마다 바뀌는 항목은 수집 시각 기준입니다.
