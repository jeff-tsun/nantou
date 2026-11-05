// Imports for Activities
import act20260627 from '@/assets/activities/20260627/01.jpg'
import act20261017 from '@/assets/activities/20261017/01.png'
import act20261008 from '@/assets/activities/20261008/01.jpg'
import act20261103 from '@/assets/activities/20261103/01.jpg'
import act20261002_01 from '@/assets/activities/20261002/01.jpg'
import act20261002_02 from '@/assets/activities/20261002/02.jpg'
import act20261205_01 from '@/assets/activities/20261205/01.png'
import act20261205_02 from '@/assets/activities/20261205/02.png'
import act20260929_01 from '@/assets/activities/20260929/01.jpg'
import act20260929_02 from '@/assets/activities/20260929/02.jpg'
import act20260929_03 from '@/assets/activities/20260929/03.jpg'
import act20261020_01 from '@/assets/activities/20261020/01.jpg'
import act20261020_02 from '@/assets/activities/20261020/02.jpg'
import act20261108 from '@/assets/activities/20261108/01.jpg'
import act20260926_01 from '@/assets/activities/20260926/01.jpg'
import act20260926_02 from '@/assets/activities/20260926/02.jpg'
import act20260926_03 from '@/assets/activities/20260926/03.jpg'
import act20260919 from '@/assets/activities/20260919/01.jpg'
import activityDefault from '@/assets/activities/activity-default.jpg'

// ===== 最新消息 =====
// news: 最新快訊 / course: 課程公告 / event: 活動訊息
export type ActivityTag = 'news' | 'course' | 'event';

export interface Activity {
  tag: ActivityTag;
  id: number;
  title: string;
  startDate: string;
  endDate?: string;
  image: string;
  contentHtml: string;
  heroImage?: string;
  bodyHtml?: string;
  hasDetailPage?: boolean;
}

const rawActivities: Omit<Activity, 'id'>[] = [
  {
    tag: 'event',
    title: '115年度第二季會員聯誼餐會 暨壽星慶生會(4 ~ 6月)',
    startDate: '2026-06-27',
    image: act20260627,
    contentHtml: `
      <p>歡迎鄉親攜伴寶眷參加，共同聯誼交流！</p>
      <ul>
        <li>📅 <strong>日期：</strong>115年6月27日（星期六）上午 10:30</li>
        <li>📍 <strong>地點：</strong>薪僑園水源會館（百合廳）<br>台北市中正區思源街16號2樓（禮客商場2樓）</li>
        <li>💰 <strong>費用：</strong>會員 500 元（配偶／直系親屬 800 元）；非會員 1,000 元</li>
      </ul>
      <h3>活動流程</h3>
      <ul>
        <li>10:40 ~ 11:40　自然美學壓花木框手作</li>
        <li>11:40 ~ 14:30　午宴暨慶生會</li>
      </ul>
      <p>理事長 陳怡潔 暨理監事團隊 敬邀</p>
      <p>📌 報名參加請 LINE 群組登記</p>
    `,
    heroImage: act20260627,
    bodyHtml: '',
  },
  {
    tag: 'news',
    title: '【本會】第26屆第7次理監事聯席會議',
    startDate: '2026-10-08',
    image: act20261008,
    contentHtml: '',
    heroImage: act20261008,
    bodyHtml: `
      <h3>📢 台北市南投縣同鄉會 公告</h3>
      <p>本會將召開第七次理監事聯席會議，敬請各位理監事撥冗出席，謝謝。</p>
      <p>
        📍日期：10/8 (四）<br>
        📍時間：中午12：00 (11:30可進場)<br>
        📍地點：心潮仙宮  (微風南山 4F / 台北市信義區松智路17號4樓） 
      </p>
      <div>🚌交通方式：</p>
      <p>
        👉捷運淡水信義紅線［台北101站/世貿站］ 4 號出口步行 5 分鐘<br>
        👉捷運板南藍線［市政府站］3 號出口步行 15 分鐘。
     </p>
      <h3>🌹敬邀🌹</h3>
      <p>歷屆理事長、本屆理監事及顧問參加。</p>
      <p>📌第八次理監事聯席會議預計於11/3(二)中午召開，地點將另行通知，敬請留意後續公告。</p>
      <a target="_blank" href="https://maps.app.goo.gl/63y8TMxtnH6pTq6t6?g_st=il">點此打開地點 google map</a>
    `,
  },
  {
    tag: 'news',
    title: '【本會】第26屆第8次理監事聯席會議',
    startDate: '2026-11-03',
    image: act20261103,
    contentHtml: '',
    heroImage: act20261103,
    bodyHtml: `
      <h3>📢 台北市南投縣同鄉會 公告</h3>
      <p>本會將召開第八次理監事聯席會議，敬請各位理監事撥冗出席，謝謝。</p>
      <p>
        📍日期：115/11/3（二）<br>
        📍用餐及會議時間：11:30-14:00 （午餐外燴饗宴）<br>
        📍地點：本會會館 
      </p>
      <h3>🌹敬邀🌹</h3>
      <p>歷屆理事長、本屆理監事及顧問參加。</p>
    `,
  },
  {
    tag: 'news',
    title: '【總會】第9屆第7次理監事暨幹部聯席會議',
    startDate: '2026-10-17',
    image: act20261017,
    contentHtml: '',
    heroImage: act20261017,
    bodyHtml: `
      <h3>第9屆第七次理監事會暨幹部聯席會議</h3>
      <p>會議日期：115年10月17日（星期六）</p>
      <p>
        報到時間：上午10:00－10:30<br>
        會議時間：上午10:30 準時開會<br>
        會議地點：南投縣鹿谷鄉廣興村中正一路 148 號 
      </p>
      <p>出席人員：本會監事主席、副總會長及理、監事（含候補理、監事）</p>
      <p>列席人員：本會輔導總會長、榮譽總會長、名譽總會長、各縣市會理事長、總幹事、顧問、正副秘書長、九大部長、13鄉鎮市總召、副總召。</p>
      <div>備註：</p>
      <ol class="list-decimal pl-6 space-y-1">
        <li>請於 10月7日前完成報名及註明用餐習慣 （葷食、素食）， 以利統計訂餐。</li>
        <li>理監事若有提案， 請於10月7日前以文字方式告知李政謙秘書長。</li>
      </ol>
    `,
  },
  {
    tag: 'event',
    title: '115年度鳳還巢活動報名開跑！',
    startDate: '2026-10-2',
    endDate: '2026-10-3',
    image: act20261002_01,
    contentHtml: `
      <p>一年一度的鄉親盛會鳳還巢活動即將登場，即刻開始報名至8/8(六)前。</p>
      <p>
        <strong>❤️10/2（第一天）</strong><br>
        車上享用早餐 → 明德水庫乘船環湖&海棠島客家舞蹈劇場及歌舞演出 → 風味午餐 → 禪機山仙佛寺 →  入住今埔里渡假大酒店 → 享用風味晚餐 → 卡拉 OK 歡唱~附設:男女裸湯
      </p>
      <p>
        <strong>❤️10/3（第二天）</strong><br>
        飯店內自助早餐 → 鳳還巢大會師聯誼活動與午宴 (會展中心) → 行程結束
      </p>
      <p><strong>🛏️住宿：</strong><br>
      今埔里渡假大酒店，安排住宿二人房 (如有住宿同伴請另行通知秘書)</p>
      <p>人數：80位 (額滿爲止)</p>
    `,
    heroImage: act20261002_01,
    bodyHtml: `
      <h3>📢【115年度鳳還巢活動報名開跑！】</h3>
      <p>一年一度的鄉親盛會鳳還巢活動即將登場，即刻開始報名至8/8(六)前。</p>
      <p>🗓️ 活動日期：10/2 - 10/3 (週五、週六)</p>
      <p>
        <strong>❤️10/2（第一天）</strong><br>
        車上享用早餐 → 明德水庫乘船環湖&海棠島客家舞蹈劇場及歌舞演出 → 風味午餐 → 禪機山仙佛寺 →  入住今埔里渡假大酒店 → 享用風味晚餐 → 卡拉 OK 歡唱~附設:男女裸湯
      </p>
      <p>
        <strong>❤️10/3（第二天）</strong><br>
        飯店內自助早餐 → 鳳還巢大會師聯誼活動與午宴 (會展中心) → 行程結束
      </p>
      <p>
        💰費用：4200元<br>
        👉會員每人優惠1000元，實收3200元。<br>
        👉會員配偶及直系親屬每人優惠500元，實收3700元。
      </p>
      <p>🛏️住宿：今埔里渡假大酒店，安排住宿二人房 (如有住宿同伴請另行通知秘書)</p>
      <p>聯絡秘書請加入下方LINE<br>
        <a
          href="https://lin.ee/YyaTrgU"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-line inline-flex items-center gap-2 rounded-lg bg-[#06C755] hover:bg-[#05b34c] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-200"
          style="color: #ffffff !important; text-decoration: none !important;"
        >
          <svg class="h-5 w-5 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 5.6 2 10.05c0 3.98 3.55 7.32 8.35 7.95.33.07.77.22.88.5.1.25.07.64.03.9l-.14.85c-.04.25-.2.98.86.53 1.06-.45 5.72-3.37 7.8-5.77C21.2 13.4 22 11.8 22 10.05 22 5.6 17.52 2 12 2Z" />
            <text x="12" y="12.4" text-anchor="middle" font-size="5.2" font-weight="800" font-family="Arial, sans-serif" fill="#06C755">LINE</text>
          </svg>
          加 LINE 進一步確認
        </a>
      </p>
      <p>人數：80位 (額滿爲止)</p>
      <h3>⚠️重要提醒</h3>
      <p>贈送每人一件鳳還巢紀念Polo衫，總會通知因製衣時程緊迫，欲參加鳳還巢的鄉親請於8/8(六)前登記報名並提供衣服尺寸，感謝鄉親的配合🙏🙏🙏</p>
      <p>📝10/2-10/3 鳳還巢報名報名參加請直接回覆姓名+衣服尺寸、素食</p>
      <p>
        <img src="${act20261002_02}" alt="活動海報" />
      </p>
    `,
  },
  {
    tag: 'event',
    title: '【夏末樂活・三代同遊】宜蘭萌寵傳藝一日遊 暨 第三季慶生會（7-9月）',
    startDate: '2026-09-19',
    image: act20260919,
    contentHtml: `
      <p>
        <strong>🔸日期：</strong>115/9/19(六)<br>
        <strong>🔸集合時間：</strong>8:00 準時出發<br>
        <strong>🔸集合地點：</strong>正德基金會大樓前（台北市民權西路125號）
      </p>
      <p>
        <strong>💰活動費用</strong><br>
        👉 <strong>會員：</strong>1,100元<br>
        👉 <strong>配偶／直系親屬：</strong>1,400元<br>
        👉 <strong>第二、三代：</strong>800元（鼓勵二、三代踴躍參加）<br>
        👉 <strong>非會員：</strong>2,100元<br>
        ※ 費用包含：遊覽車資、早中晚三餐、雙門票（蘭陽動植物王國、傳藝中心）、動物餵食體驗、保險。
      </p>
      <p><strong>💗 報名截止：</strong>請於 9/8 (二) 前 完成報名與繳費。</p>
    `,
    heroImage: act20260919,
    bodyHtml: `
      <p>
        <strong>🔸日期：</strong>115/9/19(六)<br>
        <strong>🔸集合時間：</strong>8:00 準時出發<br>
        <strong>🔸集合地點：</strong>正德基金會大樓前（台北市民權西路125號）
      </p>

      <h3>【🚌 當日精彩行程】</h3>
      <p>
        <strong>08:00</strong>｜準時出發・歡樂啟程（車上備有早點）<br>
        <strong>09:30</strong>｜蘭陽動植物王國（動物餵食、溫馨互動）<br>
        <strong>12:00</strong>｜午餐饗宴－傳藝中心・滿饌樓餐廳<br>
        <strong>14:00</strong>｜國立傳統藝術中心（臨水劇場大戲、古風街屋巡禮）<br>
        <strong>17:30</strong>｜晚餐饗宴－壯圍穀倉風味餐廳（古早味割稻飯）
      </p>

      <h3>【💰 活動費用】</h3>
      <p>
        👉 <strong>會員：</strong>1,100元<br>
        👉 <strong>配偶／直系親屬：</strong>1,400元<br>
        👉 <strong>第二、三代：</strong>800元（鼓勵二、三代踴躍參加）<br>
        👉 <strong>非會員：</strong>2,100元<br>
        ※ 費用包含：遊覽車資、早中晚三餐、雙門票（蘭陽動植物王國、傳藝中心）、動物餵食體驗、保險。
      </p>

      <h3>【貼心提醒】</h3>
      <p>
        🎁 <strong>80歲敬老禮金登記：</strong>適逢敬老禮金領取期間，本年度滿 80 歲之會員請先登記，以利為您備妥敬老禮金。（將於 9 月另行公告敬老活動）<br>
        🎂 <strong>第三季慶生：</strong>歡迎 7-9 月壽星一同歡慶生日！<br>
        💗 <strong>報名截止：</strong>請於 9/8 (二) 前 完成報名與繳費。<br>
        📝 <strong>報名參加：</strong>(請註明 月壽星、素食、敬老)
      </p>

      <h3>🌹 活動亮點：</h3>
      <p><strong>🐈 萌寵互動：</strong>走訪「蘭陽動植物王國」，全台首座日式風格萌寵樂園！近距離與水豚、袋鼠、羊駝等可愛小動物溫馨互動與餵食，老少咸宜好走不費力，非常適合好友同樂、孩子放電，留下滿滿童趣笑容。</p>
      <p><strong>🍱 宜蘭傳統藝術中心・滿饌樓</strong><br>座落於園區水岸旁的景觀餐廳，環境典雅寬敞。主打道地精緻的宜蘭風味手路菜與澎湃合菜，讓全家三代在古色古香的氛圍中舒適享用豐富午餐。</p>
      <p><strong>⭐️ 傳藝巡禮：</strong>宜蘭傳統藝術中心，漫步紅磚老街與傳統街屋，彷彿穿越時光隧道！除了欣賞「臨水劇場」震撼精彩的傳統大戲表演，還能與古風建築合影留念、體驗各類傳統童玩與手作工藝，三代同遊共創溫馨回憶。</p>
      <p><strong>🥗 雙重美饌：</strong>午餐享用傳藝滿饌樓精緻手路菜，晚餐品嚐壯圍穀倉懷舊割稻飯，為一日旅程畫下完美句點。</p>
      <p><strong>🎂 溫馨慶生：</strong>特別規劃第三季（7-9月）壽星專屬慶生環節與滿滿祝福</p>

      <p>
        台北市南投縣同鄉會<br>
        理事長 陳怡潔 暨理監事團隊 敬邀
      </p>
    `,
  },
  {
    tag: 'event',
    title: '【台北市第二屆北音歌唱賽】報名簡章',
    startDate: '2026-09-26',
    image: act20260926_01,
    contentHtml: `
      <p>熱愛歌唱的朋友照過來！舞台已備妥，萬元獎金等你來拿！</p>
      <p>
        <strong>🗓️ 日期：</strong>9 月 26 日（六）<br>
        <strong>📍 地點：</strong>台北市中正區福州街 59 號前停車場<br>
        <strong>截止日期：</strong>9月24日
      </p>
      <p>
        <strong>💰 報名費用：</strong>$1,000元<br>
        <strong>✨ 免費優惠：</strong>螢雪里里民、台北市/新北市南投同鄉會會員 免費參賽！<br>
        <strong>📞 報名專線：</strong>(02)2357-9813 （週一至四 13:30-17:30）邱秘書 或群組報名
      </p>
    `,
    heroImage: act20260926_01,
    bodyHtml: `
      <p>熱愛歌唱的朋友照過來！舞台已備妥，萬元獎金等你來拿！</p>
      <p>
        <strong>🗓️日期：</strong>9 月 26 日（六）<br>
        <strong>📍 地點：</strong>台北市中正區福州街 59 號前停車場<br>
        <strong>截止日期：</strong>9月24日
      </p>
      <p>
        <strong>💰 報名費用：</strong>$1,000元<br>
        <strong>✨ 免費優惠：</strong>螢雪里里民、台北市/新北市南投同鄉會會員 免費參賽！<br>
        <strong>📞 報名專線：</strong>(02)2357-9813 （週一至四 13:30-17:30）邱秘書 或群組報名
      </p>
      <p>聯絡秘書請加入下方LINE<br>
        <a
          href="https://lin.ee/YyaTrgU"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-line inline-flex items-center gap-2 rounded-lg bg-[#06C755] hover:bg-[#05b34c] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-200"
          style="color: #ffffff !important; text-decoration: none !important;"
        >
          <svg class="h-5 w-5 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 5.6 2 10.05c0 3.98 3.55 7.32 8.35 7.95.33.07.77.22.88.5.1.25.07.64.03.9l-.14.85c-.04.25-.2.98.86.53 1.06-.45 5.72-3.37 7.8-5.77C21.2 13.4 22 11.8 22 10.05 22 5.6 17.52 2 12 2Z" />
            <text x="12" y="12.4" text-anchor="middle" font-size="5.2" font-weight="800" font-family="Arial, sans-serif" fill="#06C755">LINE</text>
          </svg>
          加 LINE 進一步確認
        </a>
      </p>

      <h3>👥 參賽資格</h3>
      <p>凡對歌唱有興趣者皆可報名(職業、專業、表演歌手及本會第一名者為表演賽)</p>

      <h3>⏰ 當日賽程流程：</h3>
      <ul>
        <li><strong>14:30</strong>｜初賽（自選曲 1 首）</li>
        <li><strong>17:30</strong>｜決賽準備</li>
        <li><strong>18:00</strong>｜決賽（指定曲 1 首＋自選曲 1 首）</li>
        <li><strong>20:00</strong>｜頒獎典禮</li>
      </ul>

      <h3>🎵 賽制簡介：</h3>
      <p>
        <strong>初賽：</strong>演唱自選曲 1 首（取 10 位進決賽）<br>
        <strong>決賽指定曲（5選1）：</strong>《一剪梅》｜《掌聲響起》｜《流水年華》｜《用心良苦》｜《思慕的人》<br>
        <strong>決賽：</strong>指定曲 1 首 + 自選曲 1 首<br>
        <span class="text-sm text-muted-foreground">(評分標準將於現場/賽前再行公布)</span>
      </p>

      <h3>《線上登記》</h3>
      <p>
        115年9月26日<br>
        ️螢雪里/台北市.新北市南投縣同鄉會<br>
        ㊗中秋圓重陽聯歡日<br>
        台北北音第二屆歌唱友誼賽
      </p>
      <p>
        請大家一定要登記領取與報名哦!<br>
        ⬇️點選登記填寫<br>
        <a href="https://forms.gle/rSTkhcCHkVyksAFR9" target="_blank" rel="noopener noreferrer">https://forms.gle/rSTkhcCHkVyksAFR9</a>
      </p>

      <h3>📌 即時查詢</h3>
      <p>
        《編號/領取時間》<br>
        <a href="https://pse.is/9jyp2y" target="_blank" rel="noopener noreferrer">https://pse.is/9jyp2y</a>
      </p>
      <p>
        憑身分證(里民/同鄉會會員)每戶一份一人代表填寫，依報名順序與現場領牌號領取<br>
        <strong>**本戶人數五位(含)以上，請攜帶戶口名簿，再送一份禮物送完為止**</strong>
      </p>
      <p>
        <img src="${act20260926_02}" alt="活動海報" />
      </p>
      <p>
        <img src="${act20260926_03}" alt="活動海報" />
      </p>
      <p>
        理事長陳怡潔 暨 理監事團隊 敬邀
      </p>
    `,
  },
  {
    tag: 'event',
    title: '🎨 藝起動手・讓腦袋也動起來！10堂藝術創作活力課開始招生',
    startDate: '2026-09-29',
    endDate: '2026-12-08',
    image: act20260929_01,
    contentHtml: `
      <p>每週二上午，留兩個小時給自己。這不只是來做手作，而是透過不同媒材，讓我們一起動手、動眼、動腦、動感官、也動起生活圈！</p>
      <p>
        <strong>📅 日期：</strong>9/29~12/8，每週二<br>
        <strong>⏰ 時間：</strong>9:30～11:30<br>
        <strong>🏠 地點：</strong>台北市南投同鄉會會館<br>
        <strong>👩‍🎨 講師：</strong>許雅禎老師｜藝術創作家
      </p>
      <p>
        <strong>《費用》</strong><br>
        📍 <strong>婦女會會員：</strong>免費<br>
        📍 <strong>台北市南投同鄉會會員：</strong>講師費由婦女會贊助，10堂材料費整期優惠 $1,300（單堂$150）
      </p>
    `,
    heroImage: act20260929_01,
    bodyHtml: `
      <p>
        每週二上午，留兩個小時給自己。<br>
        這不只是來做手作，而是透過不同媒材，讓我們一起：<br>
        ✋ <strong>動手</strong>👀 <strong>動眼</strong>🧠 <strong>動腦</strong>🎨 <strong>動感官</strong>👥 <strong>也動起生活圈</strong>
      </p>

      <h3>《10週、10種不同體驗》</h3>
      <p>
        彩繪美瓶燈｜苔球植物｜蝶古麻布袋｜拇指琴｜水晶發財樹｜拼布掛畫｜藝術花圈｜流體熊｜馬賽克｜非遺漆畫扇<br>
        <strong>每一堂都不一樣！</strong>
      </p>
      <p>
        透過畫、剪、貼、纏、排、組裝與配色，練習：<br>
        <strong>手眼協調｜手部靈活｜專注力｜空間感｜創造力｜人際交流</strong><br>
        不是要比誰做得漂亮，而是讓自己持續接觸新東西、動手操作、動腦思考。
      </p>

      <h3>【課程資訊】</h3>
      <p>
        <strong>📅 日期：</strong>9/29~12/8，每週二<br>
        <strong>⏰ 時間：</strong>9:30～11:30<br>
        <strong>🏠 地點：</strong>台北市南投同鄉會會館<br>
        <strong>👩‍🎨 講師：</strong>許雅禎老師｜藝術創作家
      </p>

      <h3>《費用》</h3>
      <p>
        📍 <strong>婦女會會員：</strong>免費<br>
        📍 <strong>台北市南投同鄉會會員：</strong>講師費由婦女會贊助<br>
        💰 <strong>10堂材料費：</strong>原合計 $1,350，整期優惠 $1,300<br>
        💰 <strong>單堂：</strong>$150，視剩餘名額開放。
      </p>

      <p>
        男女都歡迎・零基礎也可以<br>
        夫妻、朋友相約一起來更有趣！<br>
        退休可以慢生活，但不要停止接觸新事物。<br>
        不是每週來做一件作品，而是每週給手、眼、腦一種新的刺激。
      </p>
      <p>
        <img src="${act20260929_02}" alt="活動海報2" />
      </p>
      <p>
        <img src="${act20260929_03}" alt="活動海報3" />
      </p>
    `,
  },
  {
    tag: 'news',
    title: '📢 台北市南投縣同鄉會會員暨子女獎學金申請通知',
    startDate: '2026-10-20',
    image: act20261020_01,
    contentHtml: `
      <p><strong>💰 獎學金金額：</strong>每名新台幣 伍仟元整</p>
      <p>
        <strong>📬 申請期限：</strong>即日起至 10月20日止（以郵戳為憑）<br>
        <strong>🏠 郵寄地址：</strong>100 台北市中正區仁愛路一段4號12樓之2 台北市南投縣同鄉會 收<br>
        <strong>📞 聯絡電話：</strong>2357-9813
      </p>
    `,
    heroImage: act20261020_01,
    bodyHtml: `
      <p><strong>💰 獎學金金額：</strong>每名新台幣 伍仟元整</p>

      <h3>📄 申請資格</h3>
      <p>申請人須同時符合以下條件：</p>
      <p>
        <strong>（一）</strong>為本會連續繳交常年會費(含申請當年)二年以上普通會員(含榮譽會員)本人或其子女。<br>
        <strong>（二）</strong>就讀國內公私立大學部、大專(不含學分班、進修部、社區大學、五專三年級以下)，學年度學業及操行成績平均達八十分以上，且每學期學業及操行成績均不得低於七十五分。
      </p>

      <h3>📬 申請期限</h3>
      <p>
        <strong>即日起至 10月20日止。</strong><br>
        請將申請書及相關資料以掛號郵寄至本會，以郵戳為憑。
      </p>

      <h3>🏠 郵寄地址</h3>
      <p>
        100 台北市中正區仁愛路一段4號12樓之2<br>
        台北市南投縣同鄉會 收<br>
        <strong>📞 聯絡電話：</strong>2357-9813
      </p>

      <h3>📘 詳細申請辦法</h3>
      <p>請參閱本會「獎學金實施要點」。</p>
      <p>
        <img src="${act20261020_02}" alt="活動海報" />
      </p>
      <p class="mt-4">
        <a
          href="${act20261020_02}"
          download="獎學金申請辦法.jpg"
          target="_blank"
          style="color: #ffffff !important; text-decoration: none !important;"
          class="btn-download inline-flex items-center gap-2 rounded-lg bg-[#1c8d3f] px-5 py-2.5 text-white hover:bg-[#157a34] transition-colors"
        >📥 下載</a>
      </p>
    `,
  },
  {
    tag: 'news',
    title: '📢 台北市南投縣同鄉會 115 年度「會員敬老」活動公告',
    startDate: '2026-09-01',
    endDate: '2026-10-29',
    image: activityDefault,
    contentHtml: `
      <p>為表達敬老之意，本會將辦理 115 年度會員敬老活動，相關說明如下：</p>
      <p>
        <strong>📍領取資格：</strong>須入會滿一年以上，且 👉<strong>年齡滿80歲（含80歲）</strong>👈 之會員<br>
        <strong>📍領取期間：</strong>9/1~10/29<br>
        <strong>📍敬老禮金：</strong>1,000 元整/人。
      </p>
      <p>🙏🙏🙏請務必於期間內領取完畢或轉抵年費，截止日後視同”放棄領取”，感謝配合。</p>
    `,
    heroImage: activityDefault,
    bodyHtml: `
      <p>為表達敬老之意，本會將辦理 115 年度會員敬老活動，相關說明如下：</p>

      <p>
        <strong>📍領取資格：</strong>須入會滿一年以上，且 👉<strong>年齡滿80歲（含80歲）</strong>👈 之會員
      </p>

      <p>
        <strong>📍領取期間：</strong><strong>9/1~10/29</strong><br>
        🙏🙏🙏請務必於期間內領取完畢或轉抵年費，截止日後視同”放棄領取”，感謝配合。
      </p>

      <p>
        <strong>📍敬老禮金：</strong><strong>1,000 元整/人。</strong>
      </p>

      <p>
        🎉 請符合資格的會員於期限內，攜證件至會館領取。9月19日本會活動當日，已有會員登記現場領取。<br>
        敬祝大家健康長壽！
      </p>
    `,
  },
  {
    tag: 'event',
    title: '📢 台北市南投縣同鄉會【第四季會員聯誼餐會曁壽星慶生會（10-12月）】',
    startDate: '2026-11-08',
    image: act20261108,
    contentHtml: `
      <p>
        <strong>📅 日期：</strong>115年11月8日（星期日）上午11:30<br>
        <strong>📍 地點：</strong>天成大飯店（台北市中正區忠孝西路一段43號）<br>
        <strong>💰 費用：</strong>會員500元 (配偶/直系親屬 800元)、非會員 1000元
      </p>
      <p>👉若當季壽星無法出席，請聯絡秘書，以便安排相關事宜。</p>
    `,
    heroImage: act20261108,
    bodyHtml: `
      <p>
        <strong>📅 日期：</strong>115年11月8日（星期日）上午11:30<br>
        <strong>📍 地點：</strong>天成大飯店<br>
        <strong>🏠 地址：</strong>台北市中正區忠孝西路一段43號<br>
        <span class="text-sm text-muted-foreground">（交通方式：搭乘捷運淡水信義線或板南線至台北車站，由 M3 出口出站，左側即達）</span>
      </p>
      <p>
        <strong>💰 費用：</strong>會員500元 (配偶/直系親屬 800元)、非會員 1000元
      </p>
      <p>
        👉若當季壽星無法出席，請聯絡秘書，以便安排相關事宜。
      </p>
      <p>聯絡秘書請加入下方LINE<br>
        <a
          href="https://lin.ee/YyaTrgU"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-line inline-flex items-center gap-2 rounded-lg bg-[#06C755] hover:bg-[#05b34c] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-200"
          style="color: #ffffff !important; text-decoration: none !important;"
        >
          <svg class="h-5 w-5 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 5.6 2 10.05c0 3.98 3.55 7.32 8.35 7.95.33.07.77.22.88.5.1.25.07.64.03.9l-.14.85c-.04.25-.2.98.86.53 1.06-.45 5.72-3.37 7.8-5.77C21.2 13.4 22 11.8 22 10.05 22 5.6 17.52 2 12 2Z" />
            <text x="12" y="12.4" text-anchor="middle" font-size="5.2" font-weight="800" font-family="Arial, sans-serif" fill="#06C755">LINE</text>
          </svg>
          加 LINE 進一步確認
        </a>
      </p>
      <p>
        📝<strong>報名參加請直接回覆姓名、月壽星、素食</strong>
      </p>
      <p>
        理事長 陳怡潔 暨理監事團隊 敬邀
      </p>
    `,
  },
  {
    tag: 'course',
    title: '🔔 台北市南投縣同鄉會 書法班🖌️招生公告',
    startDate: '2026-11-02',
    endDate: '2027-05-10',
    image: activityDefault,
    contentHtml: `
      <p>
        👉 <strong>師資：</strong>敦請曾安騰老師、中華書法學會理事長，教學因才施教，個別指導。<br>
        👉 <strong>上課時間：</strong>每月第一、三週 週一下午 2:00--4:00<br>
        👉 <strong>地點：</strong>台北市南投縣同鄉會會館（台北市中正區仁愛路ㄧ段4號12樓之2）<br>
        👉 <strong>學費：</strong>一期10堂課收費1500元
      </p>
      <p>📝報名請洽秘書邱鈺婷 (電話:2357-9813)。</p>
    `,
    heroImage: activityDefault,
    bodyHtml: `
      <p>
        👉 <strong>師資：</strong>敦請曾安騰老師、中華書法學會理事長，書法教學經驗豐富，老師教學因才施教，個別指導，學員上課輕鬆自在，進步神速 ！
      </p>

      <p>
        👉 <strong>上課時間：</strong>每月第一、三週<br>
        週一下午 2:00--4:00上課
      </p>

      <p>
        👉 <strong>地點：</strong>台北市南投縣同鄉會會館（台北市中正區仁愛路ㄧ段4號12樓之2）
      </p>

      <p>
        👉 <strong>學費：</strong>一期10堂課收費1500元
      </p>

      <p>
        👉 <strong>開課日期：</strong><br>
        115年11/2、11/16、12/7、12/21、<br>
        116年1/4、3/15、3/29、4/12、4/26、5/10
      </p>

      <p>
        👉 <strong>上課所需紙張請老師統一代購</strong>
      </p>

      <p>
        📝<strong>歡迎對書法與毛筆字有興趣的朋友踴躍報名參加，報名請洽秘書邱鈺婷 (電話:2357-9813)。</strong>
      </p>
      <p>聯絡秘書請加入下方LINE<br>
        <a
          href="https://lin.ee/YyaTrgU"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-line inline-flex items-center gap-2 rounded-lg bg-[#06C755] hover:bg-[#05b34c] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-200"
          style="color: #ffffff !important; text-decoration: none !important;"
        >
          <svg class="h-5 w-5 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 5.6 2 10.05c0 3.98 3.55 7.32 8.35 7.95.33.07.77.22.88.5.1.25.07.64.03.9l-.14.85c-.04.25-.2.98.86.53 1.06-.45 5.72-3.37 7.8-5.77C21.2 13.4 22 11.8 22 10.05 22 5.6 17.52 2 12 2Z" />
            <text x="12" y="12.4" text-anchor="middle" font-size="5.2" font-weight="800" font-family="Arial, sans-serif" fill="#06C755">LINE</text>
          </svg>
          加 LINE 進一步確認
        </a>
      </p>
      <p>
        <a
          href="https://lin.ee/YyaTrgU"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-line inline-flex items-center gap-2 rounded-lg bg-[#06C755] hover:bg-[#05b34c] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-200"
          style="color: #ffffff !important; text-decoration: none !important;"
        >
          <svg class="h-5 w-5 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 5.6 2 10.05c0 3.98 3.55 7.32 8.35 7.95.33.07.77.22.88.5.1.25.07.64.03.9l-.14.85c-.04.25-.2.98.86.53 1.06-.45 5.72-3.37 7.8-5.77C21.2 13.4 22 11.8 22 10.05 22 5.6 17.52 2 12 2Z" />
            <text x="12" y="12.4" text-anchor="middle" font-size="5.2" font-weight="800" font-family="Arial, sans-serif" fill="#06C755">LINE</text>
          </svg>
          加 LINE 報名
        </a>
      </p>
    `,
  },
  {
    tag: 'course',
    title: '☯️ 易經命理八字基礎班招生公告',
    startDate: '2026-11-02',
    endDate: '2027-05-10',
    image: activityDefault,
    contentHtml: `
      <p>
        👉 <strong>師資：</strong>曾安騰老師<br>
        👉 <strong>上課時間：</strong>每月第一、三週 週一下午 4:00--6:00<br>
        👉 <strong>地點：</strong>台北市南投縣同鄉會會館（台北市中正區仁愛路ㄧ段4號12樓之2）<br>
        👉 <strong>學費：</strong>一期10堂課收費2000元（未達10人報名則均攤）
      </p>
      <p>【算命自己來☯️開運自己來】報名請洽秘書邱鈺婷 (電話:2357-9813)。</p>
    `,
    heroImage: activityDefault,
    bodyHtml: `
      <p>
        👉 <strong>師資：</strong>曾安騰老師
      </p>
      <h3>👉 課程大綱</h3>
      <ol class="list-decimal pl-6 space-y-1">
        <li>河圖、洛書、先後天八卦</li>
        <li>五行方位</li>
        <li>十天干、十二地支、陰陽生剋</li>
        <li>天干沖和、地支刑沖穿害</li>
        <li>成方、會局</li>
        <li>四時八節用事、六十甲子空亡</li>
        <li>四時旺衰、二十四氣節月建</li>
        <li>十二長生訣、支藏人元</li>
        <li>起十神、五鼠盾</li>
        <li>五虎盾、四柱排列習作</li>
        <li>大運運行</li>
        <li>完成命盤習作</li>
      </ol>

      <p class="mt-4">
        👉 <strong>上課時間：</strong>每月第一、三週<br>
        週一下午 4:00--6:00上課
      </p>

      <p>
        👉 <strong>地點：</strong>台北市南投縣同鄉會會館（台北市中正區仁愛路ㄧ段4號12樓之2）
      </p>

      <p>
        👉 <strong>學費：</strong>一期10堂課收費2000元（未達10人報名則均攤）
      </p>

      <p>
        👉 <strong>開課日期：</strong><br>
        115年11/2、11/16、12/7、12/21、<br>
        116年1/4、3/15、3/29、4/12、4/26、5/10
      </p>

      <p>
        🔸 <strong>上課日期：</strong>每月第一、三週的星期一<br>
        🔸 <strong>上課時間：</strong>4:00--6:00 PM
      </p>

      <p>
        📝<strong>【算命自己來☯️開運自己來】歡迎對易經命理有興趣的朋友踴躍報名參加，報名請洽秘書邱鈺婷 (電話:2357-9813)。</strong>
      </p>
      <p>聯絡秘書請加入下方LINE<br>
        <a
          href="https://lin.ee/YyaTrgU"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-line inline-flex items-center gap-2 rounded-lg bg-[#06C755] hover:bg-[#05b34c] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-200"
          style="color: #ffffff !important; text-decoration: none !important;"
        >
          <svg class="h-5 w-5 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 5.6 2 10.05c0 3.98 3.55 7.32 8.35 7.95.33.07.77.22.88.5.1.25.07.64.03.9l-.14.85c-.04.25-.2.98.86.53 1.06-.45 5.72-3.37 7.8-5.77C21.2 13.4 22 11.8 22 10.05 22 5.6 17.52 2 12 2Z" />
            <text x="12" y="12.4" text-anchor="middle" font-size="5.2" font-weight="800" font-family="Arial, sans-serif" fill="#06C755">LINE</text>
          </svg>
          加 LINE 進一步確認
        </a>
      </p>
    `,
  },
  {
    tag: 'event',
    title: '召開本會第27屆第一次會員大會暨第26、27屆理事長交接、理監事就職典禮,恭請撥冗蒞臨。',
    startDate: '2026-12-05',
    image: act20261205_01,
    contentHtml: '',
    heroImage: act20261205_01,
    bodyHtml: `
      <p>
        <img src="${act20261205_02}" alt="活動海報" />
      </p>
    `,
  },
];

export const activities: Activity[] = rawActivities.map((item, index) => ({
  ...item,
  id: index + 1,
}));

// ===== Google 行事曆 =====
// 請將下方 src 替換為實際的 Google Calendar 嵌入網址
export const googleCalendarEmbedUrl =
  'https://calendar.google.com/calendar/embed?src=tpna26%40gmail.com&ctz=Asia%2FTaipei';
