import type { TopicLocaleContent } from './topic-types';

export const nearbyZh: Record<string, TopicLocaleContent> = {
  'muelle-uno': {
    title: 'Muelle Uno（马拉加码头）',
    description: '马拉加港边的 Muelle Uno 海滨步道：购物、餐饮、蓬皮杜中心，以及距马拉盖塔海滩几步之遥。',
    intro: 'Muelle Uno 是建在马拉加港内的现代化露天步道，位于邮轮码头与马拉盖塔海滩之间，把购物、餐饮与文化聚在水边。',
    sections: [
      {
        id: 'what',
        title: '什么是 Muelle Uno',
        content: '一条行人码头步道，有商店、餐厅、超市与活动空间。彩色立方体入口与海景让它成为去海滩前后热门的散步地。',
      },
      {
        id: 'culture',
        title: '现场文化',
        content: '马拉加蓬皮杜中心（Centre Pompidou Málaga）就在 Muelle Uno 入口，以玻璃立方体为标志。临时展与家庭活动让它成为雨天或凉爽时段的便利去处。',
      },
      {
        id: 'visit',
        title: '怎么逛',
        content: '免费步行、每日开放。可这样安排：经 Muelle Uno 到达，再沿步道向东约 10 分钟走到马拉盖塔。',
      },
    ],
    faq: [
      {
        question: 'Muelle Uno 离马拉盖塔海滩多远？',
        answer: '沿海滨步道向东步行约 10–15 分钟即到海滩。',
      },
      {
        question: 'Muelle Uno 有什么？',
        answer: '有商店、餐厅、超市、活动空间，以及入口处的蓬皮杜中心。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'centre-pompidou': {
    title: '马拉加蓬皮杜中心',
    description: 'Muelle Uno 边的蓬皮杜中心美术馆：看什么、门票与如何与马拉盖塔海滩日结合。',
    intro: '蓬皮杜中心马拉加馆是巴黎本馆在法国之外的首个分馆，彩色玻璃立方体标出 Muelle Uno 的入口，离海滩几步之遥。',
    sections: [
      {
        id: 'collection',
        title: '看什么',
        content: '常设展涵盖现代与当代艺术，含毕加索、米罗、马格利特与达利等作品，并有轮换的临时展。',
      },
      {
        id: 'tickets',
        title: '门票与时段',
        content: '门票现场与线上均有售。通常周二至周日开放、周一闭馆；出发前请核对当前安排。海滩与文化可安排在同一天。',
      },
      {
        id: 'visit',
        title: '与海滩怎么搭配',
        content: '距马拉盖塔约 10–15 分钟步行。选凉爽的早晨或傍晚逛馆，正午留给沙滩大海。',
      },
    ],
    faq: [
      {
        question: '蓬皮杜中心马拉加馆在哪里？',
        answer: '在 Muelle Uno 入口、马拉加港边，距马拉盖塔海滩约 10–15 分钟步行。',
      },
      {
        question: '蓬皮杜马拉加馆值得去吗？',
        answer: '若喜欢现代艺术值得：常设展有毕加索、米罗、马格利特与达利，外加临时展。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'la-farola': {
    title: '马拉加的 La Farola 灯塔',
    description: '港口入口处的历史灯塔 La Farola，以及从马拉盖塔海滩步行如何到达。',
    intro: 'La Farola 是马拉加港入口的标志性灯塔，是西班牙少数以阴性命名的灯塔之一，也是深受喜爱的城市符号。',
    sections: [
      {
        id: 'history',
        title: '历史与名字',
        content: '建于 19 世纪，历经风暴重建，至今仍指引船只入港。其名“la farola”（灯）属阴性，在西语灯塔中少见。',
      },
      {
        id: 'view',
        title: '能看到什么',
        content: '灯塔立于港海交汇处，面向开阔水面、背靠城市，是拍照的安静点，也是步道漫步吹风的好终点。',
      },
      {
        id: 'visit',
        title: '怎么到达',
        content: '户外免费观看，从马拉盖塔向西过 Muelle Uno 即到，步行约 15–20 分钟。防波堤一带日落很美。',
      },
    ],
    faq: [
      {
        question: '马拉加的 La Farola 是什么？',
        answer: '是马拉加港入口的历史灯塔，是城市符号，也是西班牙少见的阴性名灯塔。',
      },
      {
        question: '从海滩怎么去 La Farola？',
        answer: '沿海滨向西过 Muelle Uno，灯塔在港口入口，步行约 15–20 分钟。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'malagueta-bullring': {
    title: '马拉盖塔斗牛场（Plaza de Toros）',
    description: '新穆德哈尔风格的 Plaza de Toros de La Malagueta：参观这座斗牛场、其博物馆，以及它离海滩多近。',
    intro: 'Plaza de Toros de La Malagueta 是马拉加主斗牛场，一座醒目、红白砖拱的新穆德哈尔建筑，离海滩几分钟步行。',
    sections: [
      {
        id: 'building',
        title: '建筑',
        content: '19 世纪设计，红白砖拱环绕圆形场地，是城市最常入镜的外立面之一，旺季可容纳大量观众。',
      },
      {
        id: 'museum',
        title: '博物馆与导览',
        content: '场内的斗牛博物馆（Museo Taurino）用服装、海报与实物介绍这项传统；导览常含场地与马厩。',
      },
      {
        id: 'visit',
        title: '从海滩怎么去',
        content: '距马拉盖塔约 5–10 分钟步行，就在步道后方。活动与博物馆开放时间随季节变动，出发前请核对。',
      },
    ],
    faq: [
      {
        question: '斗牛场离马拉盖塔海滩多远？',
        answer: '约 5–10 分钟步行，就在海滨步道后方。',
      },
      {
        question: '能参观斗牛场吗？',
        answer: '可以，有斗牛博物馆与含场地、马厩的导览；开放时间随季节变动。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'english-cemetery': {
    title: '马拉加的英国墓园（Cementerio Inglés）',
    description: '港口附近历史悠久的新教墓园，其知名墓主与参观方式。',
    intro: '英国墓园（Cementerio Inglés）是西班牙最早的非天主教墓园之一，19 世纪开在港口附近，离马拉盖塔几步之遥。',
    sections: [
      {
        id: 'history',
        title: '历史',
        content: '为无法在天主教墓地安葬的外国新教徒等而设，后成为与马拉加有关的商人、作家与旅人的安息地，折射城市国际港口的过往。',
      },
      {
        id: 'graves',
        title: '知名墓主',
        content: '墓中有与马拉加文学、商业历史相关的人物；树木成荫的园林环境让它成为安静、沉思的停留点。',
      },
      {
        id: 'visit',
        title: '怎么参观',
        content: '靠近港口，距海滩约 10–15 分钟。参观多为预约导览或固定时段；因由基金会管护，访问受限，请提前确认。',
      },
    ],
    faq: [
      {
        question: '马拉加的英国墓园是什么？',
        answer: '西班牙最早的非天主教墓园之一，19 世纪开在港口附近，葬有外国商人与作家。',
      },
      {
        question: '能参观英国墓园吗？',
        answer: '访问受限，通常需预约导览或固定时段；因基金会管护，请提前确认。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'parque-de-malaga': {
    title: '马拉加公园（Parque de Málaga）',
    description: '港口边的亚热带公园：看什么、喷泉，以及从马拉盖塔海滩如何到达。',
    intro: 'Parque de Málaga 是港口与市中心之间的大型亚热带公园，以棕榈、喷泉与三角梅闻名，是靠近海滩的清凉绿荫去处。',
    sections: [
      {
        id: 'plants',
        title: '看什么',
        content: '沿小径是高大的榕树、棕榈与异域植物，配瓷砖长椅、池塘与喷泉。它是城市最古老的公共公园之一，免费进入。',
      },
      {
        id: 'location',
        title: '位置',
        content: '从港口向市中心延伸，临 Paseo del Parque。从马拉盖塔可横穿公园，或沿其北侧走向老城。',
      },
      {
        id: 'visit',
        title: '怎么逛',
        content: '每日开放、免费。沙滩最挤的正午最适宜，也是连接邮轮港、市中心与海滩的宜人路线。',
      },
    ],
    faq: [
      {
        question: '马拉加公园在哪里？',
        answer: '在马拉加港与市中心之间，临 Paseo del Parque，离马拉盖塔几步之遥。',
      },
      {
        question: '马拉加公园免费吗？',
        answer: '是，是公共公园，每日开放、免费进入。',
      },
    ],
    updated: '2026 年 10 月',
  },

  gibralfaro: {
    title: '马拉加的希布拉尔法罗城堡（Gibralfaro）',
    description: '城市上空的城堡与观景台：历史、俯瞰海湾与马拉盖塔的最佳视角，以及如何上去。',
    intro: 'Castillo de Gibralfaro 矗立在城市上方的山丘，经松径与 Alcazaba 相连。从城垛可俯瞰城市、港口与海滩的最美全景。',
    sections: [
      {
        id: 'history',
        title: '历史',
        content: '建在腓尼基—布匿旧址之上，14 世纪由纳斯里德王朝扩建，用于守卫城市与下方的 Alcazaba。城墙与塔楼至今壮观。',
      },
      {
        id: 'views',
        title: '观景台',
        content: '观景台俯瞰港口、老城、太阳海岸，晴天还能望见群山。马拉盖塔与海滨步道就铺展在正下方。',
      },
      {
        id: 'visit',
        title: '怎么上去',
        content: '可从 Alcazaba 经 Camino de Gibralfaro 步行（陡但有树荫）、自驾或乘观光巴士。进城需购票；观景台包含在参观内。',
      },
    ],
    faq: [
      {
        question: 'Gibralfaro 是什么？',
        answer: '是城市上空山丘上的城堡，拥有俯瞰港口、海湾与海滩的最佳全景。',
      },
      {
        question: '从海滩怎么去 Gibralfaro？',
        answer: '可自驾或乘观光巴士，也可从 Alcazaba 步道上山；从马拉盖塔先入城再向 Alcazaba 方向走。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'la-caleta': {
    title: 'La Caleta 海滩',
    description: '紧邻马拉盖塔东侧的小海湾：它与大滩有何不同、那里的 chiringuito，以及怎么走到。',
    intro: 'La Caleta 是马拉盖塔正东一个紧凑、避风的小湾，保留更本地、更旧式的气氛，以家庭 chiringuito 与平静海水闻名。',
    sections: [
      {
        id: 'character',
        title: '它的气质',
        content: '比马拉盖塔更小、更围合，有村庄般的安静，受当地人与家庭青睐，想离中心近又清静游泳很合适。',
      },
      {
        id: 'food',
        title: 'Chiringuito 与 espeto',
        content: '一排老牌 chiringuito 就在沙滩上供应沙丁鱼串烤与炸鱼，延续马拉加海岸的沙滩饮食传统。',
      },
      {
        id: 'visit',
        title: '怎么走到',
        content: '从马拉盖塔沿步道向东，La Caleta 是下一个小湾，约 5–10 分钟，可轻易加进海滩日。',
      },
    ],
    faq: [
      {
        question: 'La Caleta 海滩是什么？',
        answer: '是马拉盖塔正东一个小而避风的小湾，气氛本地、海水平静，有沙滩 chiringuito。',
      },
      {
        question: '从马拉盖塔怎么走到 La Caleta？',
        answer: '沿步道向东，La Caleta 是下一个小湾，约 5–10 分钟。',
      },
    ],
    updated: '2026 年 10 月',
  },

  pedregalejo: {
    title: 'Pedregalejo（佩德雷加莱霍）',
    description: '马拉盖塔以东的旧渔村与海滩：espeto 烤炉与海滨漫步。',
    intro: 'Pedregalejo 是原渔村，位于市中心东侧，如今是悠闲的海滩与餐饮区，也是马拉加 espeto 文化的腹地。',
    sections: [
      {
        id: 'history',
        title: '渔业传统',
        content: '曾是作业的渔村，保留着渔网小屋与低矮海屋。沙滩上的木质 espetero 烤炉是那段过往的直接延续。',
      },
      {
        id: 'food',
        title: '海边吃法',
        content: '一排 chiringuito 专做 espeto 与炸鱼，许多是经营数代的家庭店，是城里最地道尝这道菜的地方。',
      },
      {
        id: 'visit',
        title: '怎么去',
        content: '从马拉盖塔沿海滨步道向东约 30 分钟步行，或短途公交、骑车。途经 La Caleta 的步行本身就是乐趣。',
      },
    ],
    faq: [
      {
        question: 'Pedregalejo 是什么？',
        answer: '是市中心东侧的老渔村，如今是悠闲的海滩餐饮区，也是马拉加 espeto 文化的腹地。',
      },
      {
        question: 'Pedregalejo 离马拉盖塔多远？',
        answer: '沿海滨步道向东约 30 分钟步行，或短途公交、骑车过 La Caleta。',
      },
    ],
    updated: '2026 年 10 月',
  },
};
