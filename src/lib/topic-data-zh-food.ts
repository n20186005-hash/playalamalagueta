import type { TopicLocaleContent } from './topic-types';

export const foodZh: Record<string, TopicLocaleContent> = {
  restaurants: {
    title: '马拉盖塔海滩周边餐厅',
    description: '马拉盖塔海滩（Playa de la Malagueta）一带哪里吃饭：海滨餐厅、海鲜馆与码头 Muelle Uno 的餐饮。',
    intro: '马拉盖塔及周边提供完整的用餐选择，从脚踏沙滩的 chiringuito 到坐下来的海鲜餐厅，再到 Muelle Uno 与港口的现代餐馆。',
    sections: [
      {
        id: 'beachfront',
        title: '海滨用餐',
        content: '沙滩后方步道两侧排布着地中海与安达卢西亚风味餐厅，许多带面朝大海的露台，适合避开正午烈日的长午餐。',
      },
      {
        id: 'port',
        title: '港口与 Muelle Uno',
        content: '向西几分钟即是 Muelle Uno 与港口区，这里有更多国际风味、咖啡馆与海景露台，是沙滩吧满座时的好备选。',
      },
      {
        id: 'tips',
        title: '选位建议',
        content: '午餐可看“当日套餐”（menú del día）更划算；点鲜鱼前先问清按重量计价；夏季周末建议预订。多数餐厅风格休闲、适合家庭。',
      },
    ],
    faq: [
      {
        question: '马拉盖塔海滩上有餐厅吗？',
        answer: '有，沙滩后方步道有许多餐厅与 chiringuito，向西步行到 Muelle Uno 还有更多选择。',
      },
      {
        question: '哪里能边吃边看海？',
        answer: '海滨餐厅与 Muelle Uno 的露台都面向海或码头。',
      },
    ],
    updated: '2026 年 10 月',
  },

  chiringuitos: {
    title: '马拉盖塔的沙滩吧（Chiringuito）',
    description: '什么是 chiringuito、在里头吃什么，以及马拉盖塔海滩的沙滩吧是怎么运作的。',
    intro: 'Chiringuito 是建在沙滩上的休闲小酒吧。马拉盖塔的 chiringuito 是贴着地中海、不用离开沙滩就能吃喝的经典方式。',
    sections: [
      {
        id: 'what',
        title: '什么是 Chiringuito',
        content: 'Chiringuito 多为木质、风格随意的沙滩吧，供应饮料、小吃与烤鱼。在马拉盖塔，它们沿沙滩后方一字排开，带遮阳与面海座位。',
      },
      {
        id: 'eat',
        title: '点什么吃',
        content: '招牌是“espeto de sardinas”（沙丁鱼串烤），此外还有炸鱼、夏季的 gazpacho 冷汤，配一杯冰啤酒或 tinto de verano。',
      },
      {
        id: 'how',
        title: '怎么运作',
        content: '旺季通常从上午营业到深夜。可坐下来点单，也可外带一杯。价格公开标示；租赁躺椅与餐饮是分开的。',
      },
    ],
    faq: [
      {
        question: '马拉盖塔的 chiringuito 是什么？',
        answer: '是建在沙滩上的休闲酒吧，供应饮料、小吃与烤鱼，座位面朝大海。',
      },
      {
        question: 'chiringuito 以什么食物闻名？',
        answer: '首推沙丁鱼串烤（espeto），还有炸鱼、gazpacho 与夏季冷饮。',
      },
    ],
    updated: '2026 年 10 月',
  },

  espetos: {
    title: '马拉盖塔的沙丁鱼串烤（Espeto de Sardinas）',
    description: '马拉加标志性的 espeto de sardinas：沙丁鱼如何在炭火上串烤、去哪里吃、什么季节最肥美。',
    intro: 'Espeto de sardinas 是与马拉加海滩最绑定的菜肴。新鲜沙丁鱼串在芦苇竿上，在沙滩的炭火堆上慢慢烤熟。',
    sections: [
      {
        id: 'how',
        title: '怎么烤',
        content: '沙丁鱼头尾相接连在细芦苇竿上，斜插入圆锥形的炭火烤炉（espetero），靠自身油脂慢慢烤香，只撒少许盐，不加花哨调味。',
      },
      {
        id: 'where',
        title: '去哪里吃',
        content: '马拉盖塔的 chiringuito 在产季都供应 espeto；向东的 La Caleta 与 Pedregalejo 沙滩吧也一样。一桌点一份配冷饮即可。',
      },
      {
        id: 'season',
        title: '最佳季节',
        content: '沙丁鱼在春到初秋最肥美。沙滩菜单通常从约三月一直列到十月。',
      },
    ],
    faq: [
      {
        question: '什么是 espeto de sardinas？',
        answer: '新鲜沙丁鱼串在芦苇竿上、在露天炭火上慢烤，是马拉加的沙滩特色。',
      },
      {
        question: '在马拉盖塔哪里能吃 espeto？',
        answer: '海滩的 chiringuito 产季都供应，附近 La Caleta 与 Pedregalejo 也有。',
      },
      {
        question: 'espeto 什么季节有？',
        answer: '春到初秋最佳；沙滩菜单通常从三月到十月都有。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'seafood-and-fried-fish': {
    title: '马拉盖塔的海鲜与炸鱼',
    description: '马拉加的 pescaíto frito（安达卢西亚炸鱼）及在马拉盖塔海滩附近可尝试的其他海鲜，配什么喝。',
    intro: '安达卢西亚炸小鱼（pescaíto frito）是马拉加海岸的主食。在马拉盖塔，chiringuito 与海鲜餐厅都能吃到。',
    sections: [
      {
        id: 'dishes',
        title: '常见菜品',
        content: '有boquerones（凤尾鱼）、calamares（鱿鱼）、gambas（虾）与 cazón en adobo（腌狗鱼）等，轻裹面糊油炸，配柠檬温热上桌。',
      },
      {
        id: 'pair',
        title: '配什么喝',
        content: '当地人配冰啤酒、一杯干型马拉加酒或 tinto de verano；再来一份 gazpacho 或 ensalada malagueña（橙与鳕鱼沙拉）更解腻。',
      },
      {
        id: 'order',
        title: '怎么点',
        content: '炸鱼常按重量计（一份或半份）。点前先问每公斤价格，再与同伴分几样共享。',
      },
    ],
    faq: [
      {
        question: '什么是 pescaíto frito？',
        answer: '多种小鱼轻裹面糊油炸，是安达卢西亚海岸的特色，配柠檬温热上桌。',
      },
      {
        question: '马拉加的炸鱼配什么？',
        answer: '配冰啤酒、干型马拉加酒或 tinto de verano，再来份 gazpacho 或橙鳕鱼沙拉。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'breakfast-and-coffee': {
    title: '马拉盖塔海滩的早餐与咖啡',
    description: '在马拉盖塔海滩与 Muelle Uno 一带，哪里能喝到清晨咖啡、吃到可颂与海边早餐。',
    intro: '用一杯咖啡加一份糕点开启海滩日。步道与 Muelle Uno 的咖啡馆在清晨就开门，方便散步者与游泳客。',
    sections: [
      {
        id: 'cafes',
        title: '咖啡馆与面包房',
        content: '步道与港口一带的 cafetería 供应咖啡、番茄酱吐司（tostada）、可颂与鲜榨橙汁，旺季多从早上 8 点开门。',
      },
      {
        id: 'muelle',
        title: 'Muelle Uno 的早晨',
        content: '码头区的咖啡一条街适合坐下来吹海风吃早餐，比正午人少，也适合看人来人往。',
      },
      {
        id: 'tips',
        title: '实用提示',
        content: '带一杯外带咖啡在步道看日出，或在 9:30 前坐下避开暑热。马拉加自来水可饮用。',
      },
    ],
    faq: [
      {
        question: '马拉盖塔海滩附近哪里能喝咖啡？',
        answer: '步道与 Muelle Uno 的咖啡馆清晨就开门，供应咖啡、糕点与鲜榨果汁。',
      },
      {
        question: '有海边早餐的地方吗？',
        answer: '有，步道咖啡馆与 Muelle Uno 码头区都提供面海的早期早餐。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'ice-cream': {
    title: '马拉盖塔海滩的冰淇淋',
    description: '在马拉盖塔步道与 Muelle Uno 哪里能买到 heladería 与意式 gelato。',
    intro: '冰淇淋是马拉加海滩的经典小食。沿步道与港口的 heladería 开到很晚，是散步与饭后的甜点。',
    sections: [
      {
        id: 'where',
        title: '哪里买',
        content: 'Paseo Marítimo 与 Muelle Uno 一带都有 heladería，供应意式 gelato、水果雪芭与经典西班牙口味。',
      },
      {
        id: 'flavours',
        title: '推荐口味',
        content: '除了香草巧克力，可试芒果、柠檬雪芭等果味，或 turrón（牛轧糖）等西班牙风味。拿蛋筒边走边吃最配步道。',
      },
      {
        id: 'tips',
        title: '实用提示',
        content: '夏季商店开到深夜，也可当饭后甜点。午后炎热时注意尽快吃，避免融化。',
      },
    ],
    faq: [
      {
        question: '马拉盖塔附近哪里能买冰淇淋？',
        answer: '步道与 Muelle Uno 的 heladería 供应 gelato 与雪芭，夏季开到很晚。',
      },
      {
        question: '马拉加常见什么口味？',
        answer: '意式 gelato 加芒果、柠檬等果味雪芭，以及 turrón 等西班牙风味。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'drinks-and-terraces': {
    title: '马拉盖塔海滩的饮品与露台',
    description: '沙滩吧、面海露台，以及玩完海滩后在哪里喝一杯。',
    intro: '太阳一落，步道就热闹起来，处处是可小酌的地方。从沙滩 chiringuito 到码头露台，总有一处合你心情。',
    sections: [
      {
        id: 'beach',
        title: '在沙滩上',
        content: 'Chiringuito 供应啤酒、tinto de verano 与莫吉托，脚边就是沙子，开到傍晚，适合看日落喝一杯。',
      },
      {
        id: 'marina',
        title: '码头露台',
        content: 'Muelle Uno 有面码头的酒吧，适合饭后喝杯 spritz 或鸡尾酒，气氛比安静的沙滩端更热闹。',
      },
      {
        id: 'tips',
        title: '实用提示',
        content: '夏季有欢乐时光与现场音乐；小沙滩吧备点现金更方便；若打算早起别喝太晚。',
      },
    ],
    faq: [
      {
        question: '马拉盖塔海滩附近哪里能喝一杯？',
        answer: '沙滩 chiringuito 可贴沙小酌，Muelle Uno 码头酒吧则有鸡尾酒与海景。',
      },
      {
        question: '海滩晚上热闹吗？',
        answer: '偏悠闲而非喧闹：沙滩吧看日落，码头酒吧夏季更热闹。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'budget-food': {
    title: '马拉盖塔海滩的平价吃法',
    description: '如何在马拉盖塔海滩附近吃不超支：当日套餐、小吃分享与外带选择。',
    intro: '海滩一天也能很省钱。掌握几个本地窍门，就能以 modest 预算靠海用餐。',
    sections: [
      {
        id: 'menu',
        title: '当日套餐',
        content: '许多步道餐厅提供含饮料的“当日套餐”（menú del día），是坐下来最划算的一餐，周一至周六常见。',
      },
      {
        id: 'tapas',
        title: '小吃与分享',
        content: '点几份 tapas 或半份炸鱼共享，比点整盘更省；咖啡馆的三明治是便宜的沙滩午餐。',
      },
      {
        id: 'self',
        title: '自己准备',
        content: '在市中心买水果、面包与水到步道野餐；自带饮料可避开沙滩吧的价位。',
      },
    ],
    faq: [
      {
        question: '在马拉盖塔怎么吃得便宜？',
        answer: '午餐选当日套餐、分享 tapas、买三明治，或从市中心采买野餐。',
      },
      {
        question: '当日套餐划算吗？',
        answer: '划算，是含饮料的固定价午餐，步道沿线最划算的坐餐。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'el-cachalote': {
    title: '马拉盖塔的鲸鱼雕塑 El Cachalote',
    description: '海滨步道上的巨型抹香鲸雕塑，它是什么、为何纪念马拉加的渔业传统。',
    intro: 'El Cachalote 是矗立在海滨步道数十年的巨型抹香鲸雕塑，是马拉盖塔的标志性见面点与对城市海洋往事的致敬。',
    sections: [
      {
        id: 'what',
        title: '它是什么',
        content: '一座大型混凝土抹香鲸（cachalote）雕塑坐落在海滨临海处，靠近沙滩，已成为马拉盖塔非正式的 landmarks 与热门拍照点。',
      },
      {
        id: 'meaning',
        title: '为何在这里',
        content: '鲸鱼纪念马拉加的渔业与捕鲸历史，以及城市与海的纽带。它身处定义海滩饮食文化的 chiringuito 与 espeto 烤炉之间。',
      },
      {
        id: 'visit',
        title: '怎么看',
        content: '免费、随时可在步道看到。可与海滩漫步、拍照、再到附近 chiringuito 吃份沙丁鱼串联起来。',
      },
    ],
    faq: [
      {
        question: '马拉盖塔的 El Cachalote 是什么？',
        answer: '是海滨临海的一座巨型抹香鲸雕塑，是海滩长期以来的地标与见面点。',
      },
      {
        question: '沙滩上为什么有鲸鱼雕像？',
        answer: '它致敬马拉加的渔业与海洋传统，坐落于海滩的 chiringuito 与 espeto 烤炉之间。',
      },
    ],
    updated: '2026 年 10 月',
  },

  'muelle-uno-restaurants': {
    title: 'Muelle Uno 的餐厅',
    description: 'Muelle Uno 码头餐饮：餐厅、咖啡馆与面码头视野的料理，距马拉盖塔几步之遥。',
    intro: 'Muelle Uno 是港口边的露天购物餐饮步道，在马拉盖塔以西几分钟，把该区许多餐厅集中在一处。',
    sections: [
      {
        id: 'offer',
        title: '餐饮选择',
        content: '有海鲜馆、国际料理、汉堡与寿司，以及带码头露台的咖啡馆，既适合快手午餐也适合慢晚餐。',
      },
      {
        id: 'view',
        title: '边吃边看景',
        content: '多数露台面朝船只与大海，是热门的日落点，也是高峰时段比拥挤沙滩吧更安静的替代。',
      },
      {
        id: 'tips',
        title: '实用提示',
        content: '夏季晚上建议预订；进门处比对公示菜单；餐后顺港口散步。从马拉盖塔走过去很轻松。',
      },
    ],
    faq: [
      {
        question: 'Muelle Uno 有哪些餐厅？',
        answer: '有海鲜馆、国际料理、汉堡与寿司，以及多家码头露台咖啡馆。',
      },
      {
        question: 'Muelle Uno 离马拉盖塔海滩多远？',
        answer: '沿海滨向西步行几分钟，过邮轮码头即到。',
      },
    ],
    updated: '2026 年 10 月',
  },
};
