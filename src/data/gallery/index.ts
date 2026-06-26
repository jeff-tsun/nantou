// ===== 活動紀錄 =====
export interface Gallery {
  id: number;
  title: string;
  youtubeUrl: string;
  date: string;
}

export const gallery: Gallery[] = [
  {
    id: 1,
    title: '台北市南投縣同鄉會第26屆第一次會員大會 暨 第25.26屆理事長、婦女會會長交接、理監事就職典禮及第四季會員慶生會',
    youtubeUrl: 'https://www.youtube.com/watch?v=wctP1_7ZX70',
    date: '2024-12-14',
  },
  {
    id: 2,
    title: '知能研習急救訓練-第26屆台北市南投縣同鄉會',
    youtubeUrl: 'https://www.youtube.com/watch?v=AbcQ7fJhbHo',
    date: '2025-07-03',
  },
  {
    id: 3,
    title: '手作優格教學-第26屆台北市南投縣同鄉會',
    youtubeUrl: 'https://www.youtube.com/watch?v=jJMr8Bhvwqg',
    date: '2025-06-19',
  },
  {
    id: 4,
    title: '新春開工團拜-第26屆台北市南投縣同鄉會',
    youtubeUrl: 'https://www.youtube.com/watch?v=3zPjbTlPpfs',
    date: '2025-02-05',
  },
  {
    id: 5,
    title: '台北市南投縣同鄉會第26屆第二次會員大會-頒發感謝狀、旗袍之美 青花瓷',
    youtubeUrl: 'https://www.youtube.com/watch?v=MucoFpVkaZc',
    date: '2025-12-06',
  },
  {
    id: 6,
    title: '台北市南投縣同鄉會第26屆第二次會員大會-單簧管笛四重奏',
    youtubeUrl: 'https://www.youtube.com/watch?v=YIDa_S4pOUA',
    date: '2025-12-06',
  },
  {
    id: 7,
    title: '台北市南投縣同鄉會第26屆第二次會員大會-木管五重奏',
    youtubeUrl: 'https://www.youtube.com/watch?v=QM8WRr9x4ZY',
    date: '2025-12-06',
  },
  {
    id: 8,
    title: '台北市南投縣同鄉會第26屆第二次會員大會-木管五重奏-木舞飛揚 進場',
    youtubeUrl: 'https://www.youtube.com/watch?v=r9WHmRaURcE&',
    date: '2025-12-06',
  },
  {
    id: 9,
    title: '台北市南投縣同鄉會第26屆第二次會員大會-三代同堂',
    youtubeUrl: 'https://www.youtube.com/watch?v=o34JEQoBpDM',
    date: '2025-12-06',
  },
  {
    id: 10,
    title: '台北市南投縣同鄉會第26屆第二次會員大會-提案及貴賓介紹',
    youtubeUrl: 'https://www.youtube.com/watch?v=mBfOc3d7N5o',
    date: '2025-12-06',
  },
  {
    id: 11,
    title: '台北市南投縣同鄉會第26屆第二次會員大會-監察報告 林綉春 常監',
    youtubeUrl: 'https://www.youtube.com/watch?v=QGQ5CPhyE3c',
    date: '2025-12-06',
  },
  {
    id: 12,
    title: '台北市南投縣同鄉會第26屆第二次會員大會-貴賓致詞陳威中、林秋香',
    youtubeUrl: 'https://www.youtube.com/watch?v=H0vvnlgWv4o',
    date: '2025-12-06',
  },
  {
    id: 13,
    title: '台北市南投縣同鄉會第26屆第二次會員大會-貴賓致詞陳文質、陳柄嶂',
    youtubeUrl: 'https://www.youtube.com/watch?v=8Zx_rW-5rFg',
    date: '2025-12-06',
  },
  {
    id: 14,
    title: '台北市南投縣同鄉會第26屆第二次會員大會-貴賓致詞洪孟楷、區長',
    youtubeUrl: 'https://www.youtube.com/watch?v=hPgoKiHVr1I',
    date: '2025-12-06',
  },
  {
    id: 15,
    title: '台北市南投縣同鄉會第26屆第二次會員大會-貴賓致詞林哲生',
    youtubeUrl: 'https://www.youtube.com/watch?v=l0gHCkq7Vkw',
    date: '2025-12-06',
  },
  {
    id: 16,
    title: '台北市南投縣同鄉會第26屆第二次會員大會表演-舞獅迎三代',
    youtubeUrl: 'https://www.youtube.com/watch?v=fnnvw5RV31c',
    date: '2025-12-06',
  },
];

// ===== 工具函式 =====
export function getYouTubeEmbedUrl(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

// ===== 照片紀錄 =====
export interface PhotoItem {
  id: number;
  title: string;
  imageUrl: string;
  date: string;
}


