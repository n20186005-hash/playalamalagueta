import type { TopicLocaleContent } from './topic-types';

export const itineraryZh: Record<string, TopicLocaleContent> = {
  'half-day-itinerary': {
    title: '马拉盖塔海滩半日行程',
    description: '马拉盖塔海滩的实用半日计划：沙滩时光、步道漫步、午餐与一处附近景点。',
    intro: '若只有一上午或一下午，马拉盖塔能在小范围内装满体验。这是一份轻松的半日安排。',
    sections: [
      {
        id: 'morning',
        title: '沙滩与游泳',
        content: '上午中段到达，租张躺椅或铺开浴巾，在人多前享受大海。平缓的入水坡让游泳轻松愉快。',
      },
      {
        id: 'walk',
        title: '海滨步道',
        content: '沿 Paseo Marítimo 走向 Muelle Uno 或 La Caleta，在鲸鱼雕塑 El Cachalote 拍照，看港口的船。',
      },
      {
        id: 'lunch',
        title: '海边午餐',
        content: '以 chiringuito 的沙丁鱼串烤或炸鱼收尾，或去 Muelle Uno 码头坐下来吃。几分钟内你就回到沙滩或市中心。',
      },
    ],
    faq: [
      {
        question: '半天能玩完马拉盖塔吗？',
        answer: '能。一上午或一下午可覆盖沙滩、步道漫步与海边午餐，Muelle Uno 也几步之遥。',
      },
      {
        question: '半日计划能装下什么？',
        answer: '沙滩游泳、走到 Muelle Uno 或 La Caleta、在 El Cachalote 拍照、chiringuito 午餐。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'one-day-itinerary': {
    title: '马拉盖塔海滩一日行程',
    description: '围绕马拉盖塔海滩的一整天：沙滩、Muelle Uno 文化、一处景点与海鲜晚餐。',
    intro: '有一整天，你就能把海滩、文化与美食混搭而不赶。这份计划在最热的时段用阴凉调剂。',
    sections: [
      {
        id: 'morning',
        title: '上午：沙滩与斗牛场',
        content: '先下海游泳，临近中午走到 Plaza de Toros de La Malagueta 或 Parque de Málaga 纳凉。',
      },
      {
        id: 'midday',
        title: '正午：文化与午餐',
        content: '参观 Muelle Uno 边的蓬皮杜中心，再在码头用餐。把正午烈日留给阴凉或长餐。',
      },
      {
        id: 'afternoon',
        title: '下午：再下海或上城堡',
        content: '回沙滩晚泳，或登 Gibralfaro 看景。以 chiringuito 的 espeto 或 Pedregalejo 的晚餐收尾。',
      },
    ],
    faq: [
      {
        question: '在马拉盖塔怎么过一整天？',
        answer: '上午沙滩，正午 Muelle Uno 文化与午餐，下午晚泳或 Gibralfaro，最后吃海鲜。',
      },
      {
        question: '哪些景点能配海滩？',
        answer: '斗牛场、马拉加公园、蓬皮杜中心与 Gibralfaro 都近，易串联。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'with-kids': {
    title: '带娃游马拉盖塔海滩',
    description: '家庭贴士：平缓海水、游乐区、遮阳、食物，以及与孩子在海滩的轻松一天。',
    intro: '马拉盖塔是马拉加最适合家庭的沙滩之一，水缓、有游乐区，步道平坦好推车。',
    sections: [
      {
        id: 'water',
        title: '安全游泳',
        content: '坡道平缓、有救生员看守的划定泳区。让孩子保持在伸手可及范围，用淋浴冲掉盐分。',
      },
      {
        id: 'play',
        title: '玩耍与遮阳',
        content: '步道上有儿童游乐区，棕榈提供休息阴影。租把遮阳伞让小朋友避开正午烈日。',
      },
      {
        id: 'plan',
        title: '简单的家庭日',
        content: '上午游泳、游乐区歇脚、有儿童餐的 chiringuito 午餐，再吃个冰淇淋走到 El Cachalote。热了就去公园休息。',
      },
    ],
    faq: [
      {
        question: '马拉盖塔适合孩子吗？',
        answer: '适合，水缓、泳区有看守、有游乐区与平坦好推车的步道。',
      },
      {
        question: '家庭该带什么？',
        answer: '防晒、帽子、水、沙滩玩具与遮阳伞；海滩也租躺椅与遮阳伞。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'evening-for-couples': {
    title: '情侣的马拉盖塔傍晚',
    description: '马拉盖塔海滩边的浪漫傍晚：日落漫步、沙滩吧小酌与码头晚餐。',
    intro: '暑气退去，马拉盖塔变得浪漫。金色时分的漫步与贴海小酌，是为两人而设的轻松低价夜晚。',
    sections: [
      {
        id: 'sunset',
        title: '日落漫步',
        content: '在光线把沙与城市染暖时漫步步道。海滩到 Muelle Uno 这一段在黄金时段很静、很出片。',
      },
      {
        id: 'drinks',
        title: '沙滩小酌',
        content: '在脚边是沙的 chiringuito 共享一杯，或转到 Muelle Uno 码头露台喝杯 spritz 看景。',
      },
      {
        id: 'dinner',
        title: '水边晚餐',
        content: '留在沙滩吃海鲜，或到 Muelle Uno 坐下来晚餐。亮灯的步道让回程很舒服。',
      },
    ],
    faq: [
      {
        question: '马拉盖塔傍晚好玩吗？',
        answer: '好玩，日落漫步、沙滩吧小酌与码头晚餐，入夜后轻松又浪漫。',
      },
      {
        question: '情侣傍晚去哪里？',
        answer: '黄金时段步道漫步、chiringuito 或 Muelle Uno 露台小酌、水边晚餐。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'rainy-day': {
    title: '马拉盖塔海滩的雨天备选',
    description: '下雨时 nearby 能做什么：博物馆、购物与有顶处的选择。',
    intro: '马拉加很适合阴天。若海滩去不成，马拉盖塔附近有几处室内景点让你躲雨又不无聊。',
    sections: [
      {
        id: 'culture',
        title: '博物馆与文化',
        content: 'Muelle Uno 边的蓬皮杜中心是最近的室内选择。市中心还有毕加索博物馆与主教座堂，短途公交或步行即到。',
      },
      {
        id: 'covered',
        title: '有顶与购物',
        content: 'Muelle Uno 有带顶的通道与商店，港口区也适合遮风散步。一杯咖啡加长午餐正好填空档。',
      },
      {
        id: 'tips',
        title: '实用提示',
        content: '核对博物馆开放日（许多周一闭馆）；带件轻薄雨具；从海滩改乘公交或短途出租，别在暴雨里走。',
      },
    ],
    faq: [
      {
        question: '马拉盖塔附近雨天能做什么？',
        answer: 'Muelle Uno 的蓬皮杜中心，加上市中心的毕加索博物馆与主教座堂，都是近便的室内选择。',
      },
      {
        question: 'Muelle Uno 雨天合适吗？',
        answer: '合适，它有带顶通道、商店与用餐处，离海滩几步之遥。',
      },
    ],
    updated: '2026 年 10 月',
  },
};
