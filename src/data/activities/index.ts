// Imports for Activities
import act20260627 from '@/assets/activities/20260627/20260627.jpg'
import activityDefault from '@/assets/activities/activity-default.jpg'

// ===== 最新消息 =====
export interface Activity {
  id: number;
  title: string;
  date: string;
  image: string;
  contentHtml: string;
  heroImage?: string;
  bodyHtml?: string;
  hasDetailPage?: boolean;
}

export const activities: Activity[] = [
  {
    id: 1,
    title: '115年度第二季會員聯誼餐會 暨壽星慶生會(4 ~ 6月)',
    date: '2026-06-27',
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
    id: 2,
    title: '總會 召開第9屆第6次理監事暨幹部聯席會議',
    date: '2026-07-11',
    image: activityDefault,
    contentHtml: '',
    hasDetailPage: false,
  },
  {
    id: 3,
    title: '本會 召開第26屆第7次理監事聯席會議',
    date: '2026-08-13',
    image: activityDefault,
    contentHtml: '',
    hasDetailPage: false,
  },
  {
    id: 4,
    title: '本會 重陽敬老暨第三季壽星慶生會',
    date: '2026-09-19',
    image: activityDefault,
    contentHtml: '',
    hasDetailPage: false,
  },
  {
    id: 5,
    title: '本會 舉辦台北北音第二屆歌唱友誼賽',
    date: '2026-09-26',
    image: activityDefault,
    contentHtml: '',
    hasDetailPage: false,
  },
  {
    id: 6,
    title: '總會 115年度鳳還巢活動',
    date: '2026-10-02',
    image: activityDefault,
    contentHtml: '',
    hasDetailPage: false,
  },
  {
    id: 7,
    title: '本會 召開第26屆第8次理監事聯席會議',
    date: '2026-10-15',
    image: activityDefault,
    contentHtml: '',
    hasDetailPage: false,
  },
  {
    id: 8,
    title: '總會 召開第9屆第7次理監事暨幹部聯席會議',
    date: '2026-10',
    image: activityDefault,
    contentHtml: '',
    hasDetailPage: false,
  },
  {
    id: 9,
    title: '本會 召開本會第27屆第一次會員大會暨第四季慶生會',
    date: '2026-12-05',
    image: activityDefault,
    contentHtml: '',
    hasDetailPage: false,
  },
  {
    id: 10,
    title: '總會 召開第9屆第8次理監事暨幹部聯席會議',
    date: '2027-01',
    image: activityDefault,
    contentHtml: '',
    hasDetailPage: false,
  },
];

// ===== Google 行事曆 =====
// 請將下方 src 替換為實際的 Google Calendar 嵌入網址
export const googleCalendarEmbedUrl =
  'https://calendar.google.com/calendar/embed?src=tpna26%40gmail.com&ctz=Asia%2FTaipei';
