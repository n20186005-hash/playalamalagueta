import type { TopicLocaleContent } from './topic-types';

export const compareZh: Record<string, TopicLocaleContent> = {
  'best-time-to-visit': {
    title: '马拉盖塔海滩最佳旅行时间',
    description: '逐月指南：天气、人流、水温，以及为晒太阳、游泳或清静该何时来。',
    intro: '马拉加的小气候让马拉盖塔全年可去，但体验随季节变化很大。以下是安排行程的时点建议。',
    sections: [
      {
        id: 'summer',
        title: '夏季（6–9 月）',
        content: '炎热、晴朗、热闹，有救生员、全服务与人流高峰。最适合游泳与沙滩生活，但停车与遮阳要早到。',
      },
      {
        id: 'shoulder',
        title: '春秋',
        content: '白天暖、人少、晚春起海水宜人。适合漫步、拍照，以及没人挤的轻松海滩日。',
      },
      {
        id: 'winter',
        title: '冬季（12–2 月）',
        content: '比北欧温和，适合海滨散步与城市观光。游泳靠勇气；服务减少，但步道仍开放。',
      },
    ],
    faq: [
      {
        question: '马拉盖塔什么时候去最好？',
        answer: '晚春与秋人少、水暖；夏季服务全、适合游泳；冬季适合散步与城市游。',
      },
      {
        question: '冬天能游泳吗？',
        answer: '海水偏凉、服务减少，冬泳靠勇气，但步道与城市仍开放。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'malagueta-vs-caleta': {
    title: '马拉盖塔 vs La Caleta 海滩',
    description: '马拉盖塔海滩与东侧 La Caleta 的对比：大小、人流、设施与气氛，帮你选。',
    intro: 'La Caleta 就在马拉盖塔正东，是最自然的替代。两者都是城市海滩，但感觉不同。',
    sections: [
      {
        id: 'size',
        title: '大小与格局',
        content: '马拉盖塔更大更宽，服务更多、租赁成排；La Caleta 更小更围合、更安静，有村庄感。',
      },
      {
        id: 'crowds',
        title: '人流与气氛',
        content: '马拉盖塔人流最大、沙滩吧最全；La Caleta 保留本地、低调的气氛，受家庭欢迎。',
      },
      {
        id: 'pick',
        title: '怎么选',
        content: '想要紧贴中心、服务齐全的海滩日，选马拉盖塔；想要更安静的游泳与慢节奏，向东几步选 La Caleta。',
      },
    ],
    faq: [
      {
        question: 'La Caleta 比马拉盖塔安静吗？',
        answer: '是，La Caleta 更小更围合，比热闹的马拉盖塔更有本地、低调的气氛。',
      },
      {
        question: '哪个海滩更大，马拉盖塔还是 La Caleta？',
        answer: '马拉盖塔更宽更大、服务更多；La Caleta 是旁边更小更静的小湾。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'malagueta-vs-pedregalejo': {
    title: '马拉盖塔 vs Pedregalejo 海滩',
    description: '马拉盖塔与 Pedregalejo 的对比：距离、饮食、气氛，以及哪片更适合你。',
    intro: 'Pedregalejo 在更东，是中心附近最传统的渔村海滩，和中央的马拉盖塔体验不同。',
    sections: [
      {
        id: 'distance',
        title: '距离与到达',
        content: '马拉盖塔离中心步行 15–20 分钟；Pedregalejo 再向东沿步道约 30 分钟，或短途公交、骑车。',
      },
      {
        id: 'food',
        title: '饮食文化',
        content: '两者都有 chiringuito，但 Pedregalejo 是 espeto 文化的腹地，沙滩上一排老店，更像街区。',
      },
      {
        id: 'pick',
        title: '怎么选',
        content: '想要便利与全套服务贴着港口，选马拉盖塔；想要地道渔村餐与更长海滨漫步，选 Pedregalejo。',
      },
    ],
    faq: [
      {
        question: 'espeto 选马拉盖塔还是 Pedregalejo？',
        answer: 'Pedregalejo 是 espeto 文化的腹地，沙滩上一排传统老店；马拉盖塔也供但更中心。',
      },
      {
        question: 'Pedregalejo 离马拉盖塔多远？',
        answer: '沿海滨步道向东约 30 分钟步行，或短途公交、骑车过 La Caleta。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'beaches-near-malaga-centre': {
    title: '马拉加市中心附近的海滩',
    description: '市中心步行可达的主要城市海滩：马拉盖塔、La Caleta、Pedregalejo 与 El Palo，以及它们的不同。',
    intro: '马拉加中心紧挨着一串向东延伸的城市海滩。以下是最近几片怎么选。',
    sections: [
      {
        id: 'chain',
        title: '海滩串',
        content: '从港口向东依次是马拉盖塔、La Caleta、Pedregalejo 与 El Palo，全由平坦海滨步道与公交相连。',
      },
      {
        id: 'character',
        title: '它们有何不同',
        content: '马拉盖塔最中心、服务最全；La Caleta 是安静小湾；Pedregalejo 是渔村餐海滩；El Palo 更远、更本地、espeto 更多。',
      },
      {
        id: 'pick',
        title: '怎么选',
        content: '从老城顺路快去，选马拉盖塔或 La Caleta；想以吃为主，Pedregalejo 或 El Palo 值得多走或短途公交。',
      },
    ],
    faq: [
      {
        question: '马拉加中心附近有哪些海滩？',
        answer: '有马拉盖塔、La Caleta、Pedregalejo 与 El Palo，全由港口东侧海滨步道相连。',
      },
      {
        question: '哪片马拉加城市海滩最中心？',
        answer: '马拉盖塔是离老城与港口最近、服务最全的海滩，步行约 15–20 分钟。',
      },
    ],
    updated: '2026 年 10 月',
  },
};
