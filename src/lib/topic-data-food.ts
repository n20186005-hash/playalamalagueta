import type { TopicEntry } from './topic-types';

export const foodTopics: Record<string, TopicEntry> = {
  restaurants: {
    category: 'food',
    related: ['chiringuitos', 'seafood-and-fried-fish', 'muelle-uno-restaurants', 'espetos'],
    en: {
      title: 'Restaurants Near Malagueta Beach',
      description:
        'Where to eat around Playa de la Malagueta: beachfront dining, seafood houses and the restaurants of Muelle Uno and the port.',
      intro:
        'Malagueta and its neighbours offer a full range of dining, from toes-in-the-sand chiringuitos to sit-down seafood restaurants and the modern restaurants of Muelle Uno.',
      sections: [
        {
          id: 'beachfront',
          title: 'Beachfront dining',
          content:
            'The promenade behind the sand is lined with restaurants serving Mediterranean and Andalusian food. Many have terraces facing the sea, ideal for a long lunch out of the midday sun.',
        },
        {
          id: 'port',
          title: 'Port and Muelle Uno',
          content:
            'A few minutes west, Muelle Uno and the port area add international options, cafés and restaurants with marina views. It is a good fallback when the beach bars are full.',
        },
        {
          id: 'tips',
          title: 'Choosing a table',
          content:
            'Look for the menú del día at lunch for value, check the fresh-fish price by weight before ordering, and book ahead on summer weekends. Most places are casual and family-friendly.',
        },
      ],
      faq: [
        {
          question: 'Are there restaurants on Malagueta Beach?',
          answer:
            'Yes. The promenade behind the sand has many restaurants and chiringuitos, and Muelle Uno is a short walk west with more options.',
        },
        {
          question: 'Where can I eat with a sea view?',
          answer:
            'The beachfront restaurants and the terraces of Muelle Uno both offer sea or marina views.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Restaurantes cerca de la Playa de la Malagueta',
      description:
        'Dónde comer cerca de la Playa de la Malagueta: restauración frente al mar, casas de pescado y los restaurantes de Muelle Uno y el puerto.',
      intro:
        'La Malagueta y sus alrededores ofrecen toda la gama gastronómica, desde chiringuitos con los pies en la arena hasta restaurantes de pescado y la oferta moderna de Muelle Uno.',
      sections: [
        {
          id: 'beachfront',
          title: 'Restauración frente al mar',
          content:
            'El paseo tras la arena está lleno de restaurantes de cocina mediterránea y andaluza. Muchos tienen terrazas al mar, ideales para un almuerzo largo fuera del sol del mediodía.',
        },
        {
          id: 'port',
          title: 'Puerto y Muelle Uno',
          content:
            'A pocos minutos al oeste, Muelle Uno y la zona del puerto añaden opciones internacionales, cafeterías y restaurantes con vistas a la marina. Es un buen plan B cuando los chiringuitos están llenos.',
        },
        {
          id: 'tips',
          title: 'Elegir mesa',
          content:
            'Busca el menú del día al almuerzo para ahorrar, pregunta el precio del pescado fresco por peso antes de pedir y reserva los fines de semana de verano. La mayoría son locales informales y familiares.',
        },
      ],
      faq: [
        {
          question: '¿Hay restaurantes en la Playa de la Malagueta?',
          answer:
            'Sí. El paseo tras la arena tiene muchos restaurantes y chiringuitos, y Muelle Uno está a pocos pasos al oeste con más opciones.',
        },
        {
          question: '¿Dónde comer con vistas al mar?',
          answer:
            'Tanto los restaurantes frente al mar como las terrazas de Muelle Uno ofrecen vistas al mar o a la marina.',
        },
      ],
      updated: 'October 2026',
    },
  },

  chiringuitos: {
    category: 'food',
    related: ['espetos', 'seafood-and-fried-fish', 'restaurants', 'drinks-and-terraces'],
    en: {
      title: 'Chiringuitos at Malagueta Beach',
      description:
        'What a chiringuito is, what to eat there and how the beach bars of Playa de la Malagueta work.',
      intro:
        'A chiringuito is a relaxed beach bar built right on the sand. Malagueta’s chiringuitos are the classic way to eat and drink by the Mediterranean without leaving the beach.',
      sections: [
        {
          id: 'what',
          title: 'What is a chiringuito',
          content:
            'Chiringuitos are casual, often wooden beach bars serving drinks, tapas and grilled fish. At Malagueta they sit along the back of the beach with sun shades and sea-facing tables.',
        },
        {
          id: 'eat',
          title: 'What to order',
          content:
            'The signature dish is espeto de sardinas (sardines grilled on a stake over embers). Also try fried fish, gazpacho in summer and a cold beer or tinto de verano.',
        },
        {
          id: 'how',
          title: 'How they work',
          content:
            'Most open from late morning to late evening in season. You can sit at a table or take a drink to go. Prices are posted; the rental loungers are separate from the food service.',
        },
      ],
      faq: [
        {
          question: 'What is a chiringuito at Malagueta?',
          answer:
            'It is a casual beach bar on the sand serving drinks, tapas and grilled fish, with tables facing the sea.',
        },
        {
          question: 'What food is a chiringuito known for?',
          answer:
            'Espeto de sardinas above all, plus fried fish, gazpacho and cold drinks in summer.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Chiringuitos de la Playa de la Malagueta',
      description:
        'Qué es un chiringuito, qué comer en él y cómo funcionan las barracas de playa de la Playa de la Malagueta.',
      intro:
        'El chiringuito es una barra playera y relajada construida sobre la arena. Los chiringuitos de la Malagueta son la forma clásica de comer y beber junto al Mediterráneo sin salir de la playa.',
      sections: [
        {
          id: 'what',
          title: 'Qué es un chiringuito',
          content:
            'Los chiringuitos son bares playeros, a menudo de madera, que sirven bebidas, tapas y pescado a la brasa. En la Malagueta se sitúan al fondo de la playa con sombreaderos y mesas al mar.',
        },
        {
          id: 'eat',
          title: 'Qué pedir',
          content:
            'El plato estrella es el espeto de sardinas (sardinas asadas en caña sobre brasas). También prueba el pescado frito, el gazpacho en verano y una cerveza fría o tinto de verano.',
        },
        {
          id: 'how',
          title: 'Cómo funcionan',
          content:
            'La mayoría abre desde media mañana hasta tarde en temporada. Puedes sentarte a la mesa o llevarte una bebida. Los precios están expuestos; las hamacas de alquiler son independientes del servicio de comida.',
        },
      ],
      faq: [
        {
          question: '¿Qué es un chiringuito en la Malagueta?',
          answer:
            'Es una barra playera y casual sobre la arena que sirve bebidas, tapas y pescado a la brasa, con mesas al mar.',
        },
        {
          question: '¿Por qué comida se conoce al chiringuito?',
          answer:
            'Por el espeto de sardinas sobre todo, además del pescado frito, el gazpacho y las bebidas frías de verano.',
        },
      ],
      updated: 'October 2026',
    },
  },

  espetos: {
    category: 'food',
    related: ['chiringuitos', 'seafood-and-fried-fish', 'la-caleta', 'pedregalejo'],
    en: {
      title: 'Espetos de Sardinas at Malagueta',
      description:
        'Málaga’s iconic espeto de sardinas: how sardines are grilled on a stake over embers, where to try it and when it is in season.',
      intro:
        'Espeto de sardinas is the dish most associated with Málaga’s beaches. Fresh sardines are skewered on a cane stake and slowly grilled over an open wood ember fire right on the sand.',
      sections: [
        {
          id: 'how',
          title: 'How it is made',
          content:
            'Sardines are threaded head-to-tail onto a thin cane (caña) and leaned into a cone-shaped ember grill called a “espetero”. They cook gently, basting in their own oil, with no fuss and just a little salt.',
        },
        {
          id: 'where',
          title: 'Where to try it',
          content:
            'The chiringuitos of Malagueta serve espeto in season, as do the beach bars of La Caleta and Pedregalejo further east. Order a ración for the table with a cold drink.',
        },
        {
          id: 'season',
          title: 'Best season',
          content:
            'Sardines are at their best from spring to early autumn when they are fattest. You will find espeto on beach menus from around March through October.',
        },
      ],
      faq: [
        {
          question: 'What is espeto de sardinas?',
          answer:
            'Fresh sardines skewered on a cane stake and grilled slowly over an open wood-ember fire, a Málaga beach speciality.',
        },
        {
          question: 'Where can I eat espeto at Malagueta?',
          answer:
            'The beach chiringuitos serve it in season, and the bars of La Caleta and Pedregalejo nearby also do.',
        },
        {
          question: 'When is espeto in season?',
          answer:
            'Best from spring to early autumn; beach menus usually list it from around March to October.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Espeto de Sardinas en la Malagueta',
      description:
        'El icónico espeto de sardinas de Málaga: cómo se asan las sardinas en caña sobre brasas, dónde probarlo y cuándo es temporada.',
      intro:
        'El espeto de sardinas es el plato más ligado a las playas de Málaga. Las sardinas frescas se ensartan en caña y se asan despacio sobre brasas abiertas justo en la arena.',
      sections: [
        {
          id: 'how',
          title: 'Cómo se hace',
          content:
            'Las sardinas se ensartan cabeza con cola en una caña fina y se apoyan en un horno cónico de brasas llamado “espetero”. Cocinan despacio, confitándose en su propia grasa, sin más que un poco de sal.',
        },
        {
          id: 'where',
          title: 'Dónde probarlo',
          content:
            'Los chiringuitos de la Malagueta sirven espeto en temporada, como las barracas de La Caleta y Pedregalejo más al este. Pide una ración para la mesa con una bebida fría.',
        },
        {
          id: 'season',
          title: 'Mejor temporada',
          content:
            'Las sardinas están en su punto de primavera a principios de otoño, cuando están más grasas. El espeto aparece en las cartas de playa desde marzo hasta octubre.',
        },
      ],
      faq: [
        {
          question: '¿Qué es el espeto de sardinas?',
          answer:
            'Sardinas frescas ensartadas en caña y asadas despacio sobre brasas abiertas de leña, una especialidad de playa de Málaga.',
        },
        {
          question: '¿Dónde comer espeto en la Malagueta?',
          answer:
            'Los chiringuitos de la playa lo sirven en temporada, y las barracas de La Caleta y Pedregalejo cercanas también.',
        },
        {
          question: '¿Cuándo es temporada de espeto?',
          answer:
            'Mejor de primavera a principios de otoño; las cartas de playa suelen incluirlo de marzo a octubre.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'seafood-and-fried-fish': {
    category: 'food',
    related: ['espetos', 'chiringuitos', 'restaurants', 'muelle-uno-restaurants'],
    en: {
      title: 'Seafood & Fried Fish at Malagueta',
      description:
        'Pescaíto frito and other Málaga seafood to try near Playa de la Malagueta, plus what to pair it with.',
      intro:
        'Andalusian fried fish—pescaíto frito—is a staple of the Málaga coast. Around Malagueta you will find it at chiringuitos and seafood restaurants alike.',
      sections: [
        {
          id: 'dishes',
          title: 'Typical dishes',
          content:
            'Expect small fried fish like boquerones (anchovies), calamares, gambas and cazón en adobo (marinated dogfish). All are lightly floured and fried, served warm with lemon.',
        },
        {
          id: 'pair',
          title: 'What to pair',
          content:
            'Locals pair fried fish with a cold beer, a glass of dry Málaga wine or tinto de verano. A side of gazpacho or ensalada malagueña (orange and cod salad) balances the meal.',
        },
        {
          id: 'order',
          title: 'How to order',
          content:
            'Fried fish is often sold by weight (ración or medía ración). Ask the price per kilo before ordering and share several types across the table.',
        },
      ],
      faq: [
        {
          question: 'What is pescaíto frito?',
          answer:
            'A variety of small fish lightly floured and fried, typical of the Andalusian coast, served warm with lemon.',
        },
        {
          question: 'What goes with fried fish in Málaga?',
          answer:
            'A cold beer, dry Málaga wine or tinto de verano, plus gazpacho or ensalada malagueña on the side.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Marisco y Pescado Frito en la Malagueta',
      description:
        'Pescaíto frito y otros mariscos de Málaga para probar cerca de la Playa de la Malagueta, y con qué acompañarlos.',
      intro:
        'El pescado frito andaluz —el pescaíto frito— es un clásico de la costa de Málaga. Cerca de la Malagueta lo encuentras tanto en chiringuitos como en restaurantes de pescado.',
      sections: [
        {
          id: 'dishes',
          title: 'Platos típicos',
          content:
            'Cuenta con pescado pequeño frito como boquerones, calamares, gambas y cazón en adobo. Todo se reboza ligero y se fríe, se sirve templado con limón.',
        },
        {
          id: 'pair',
          title: 'Con qué acompañar',
          content:
            'Los locales acompañan el pescado frito con cerveza fría, un vino seco de Málaga o tinto de verano. Una gazpacho o ensalada malagueña (naranja y bacalao) equilibran el plato.',
        },
        {
          id: 'order',
          title: 'Cómo pedir',
          content:
            'El pescado frito a menudo se vende por peso (ración o media ración). Pregunta el precio por kilo antes de pedir y comparte varios tipos en la mesa.',
        },
      ],
      faq: [
        {
          question: '¿Qué es el pescaíto frito?',
          answer:
            'Variedad de pescado pequeño rebozado ligero y frito, típico de la costa andaluza, que se sirve templado con limón.',
        },
        {
          question: '¿Con qué se acompaña el pescado frito en Málaga?',
          answer:
            'Con cerveza fría, vino seco de Málaga o tinto de verano, y de guarnición gazpacho o ensalada malagueña.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'breakfast-and-coffee': {
    category: 'food',
    related: ['drinks-and-terraces', 'muelle-uno-restaurants', 'ice-cream', 'restaurants'],
    en: {
      title: 'Breakfast & Coffee Near Malagueta Beach',
      description:
        'Where to get morning coffee, pastries and a beachside breakfast around Playa de la Malagueta and Muelle Uno.',
      intro:
        'Start your beach day with a coffee and a pastry. The promenade and Muelle Uno have cafés that open early for walkers and swimmers.',
      sections: [
        {
          id: 'cafes',
          title: 'Cafés and bakeries',
          content:
            'Look for cafeterías along the promenade and by the port for coffee, tostada with tomato, croissants and fresh orange juice. Many open from 08:00 in season.',
        },
        {
          id: 'muelle',
          title: 'Muelle Uno morning',
          content:
            'The marina’s café strip is pleasant for a sit-down breakfast with a sea breeze. It is quieter than the midday crowd and good for people-watching.',
        },
        {
          id: 'tips',
          title: 'Tips',
          content:
            'Grab a takeaway coffee and walk the promenade at sunrise, or sit down before 09:30 to beat the heat. Tap water is safe to drink in Málaga.',
        },
      ],
      faq: [
        {
          question: 'Where can I get coffee near Malagueta Beach?',
          answer:
            'Cafeterías along the promenade and by Muelle Uno open early for coffee, pastries and fresh juice.',
        },
        {
          question: 'Is there a beachside breakfast spot?',
          answer:
            'Yes. The promenade cafés and the Muelle Uno marina strip both serve early breakfasts with a sea view.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Desayuno y Café cerca de la Playa de la Malagueta',
      description:
        'Dónde tomar café, bollería y un desayuno junto al mar cerca de la Playa de la Malagueta y Muelle Uno.',
      intro:
        'Empieza el día de playa con un café y un dulce. El paseo y Muelle Uno tienen cafeterías que abren temprano para paseantes y bañistas.',
      sections: [
        {
          id: 'cafes',
          title: 'Cafeterías y panaderías',
          content:
            'Busca cafeterías por el paseo y junto al puerto para café, tostada con tomate, croissants y zumo de naranja recién exprimido. Muchas abren a las 08:00 en temporada.',
        },
        {
          id: 'muelle',
          title: 'Muelle Uno por la mañana',
          content:
            'La franja de cafeterías de la marina es agradable para un desayuno sentado con brisa marina. Está más tranquila que la multitud del mediodía y buena para ver pasar gente.',
        },
        {
          id: 'tips',
          title: 'Consejos',
          content:
            'Toma un café para llevar y pasea al amanecer, o siéntate antes de las 09:30 para evitar el calor. El agua del grifo es potable en Málaga.',
        },
      ],
      faq: [
        {
          question: '¿Dónde tomar café cerca de la Playa de la Malagueta?',
          answer:
            'Las cafeterías del paseo y de Muelle Uno abren temprano para café, bollería y zumo recién exprimido.',
        },
        {
          question: '¿Hay sitio para desayunar junto al mar?',
          answer:
            'Sí. Las cafeterías del paseo y la franja de la marina de Muelle Uno sirven desayunos tempranos con vistas al mar.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'ice-cream': {
    category: 'food',
    related: ['drinks-and-terraces', 'breakfast-and-coffee', 'promenade-walk', 'budget-food'],
    en: {
      title: 'Ice Cream Near Malagueta Beach',
      description:
        'Where to find heladerías and gelato along the Malagueta promenade and Muelle Uno.',
      intro:
        'An ice cream is the classic Málaga beach treat. Heladerías line the promenade and the port, open late into the evening.',
      sections: [
        {
          id: 'where',
          title: 'Where to find it',
          content:
            'Look for heladerías along the Paseo Marítimo and around Muelle Uno. Many serve Italian-style gelato, fruit sorbets and classic Spanish flavours.',
        },
        {
          id: 'flavours',
          title: 'Flavours to try',
          content:
            'Beyond vanilla and chocolate, try local touches like mango, lemon sorbet, or turrón. A cone to go is perfect for a promenade stroll.',
        },
        {
          id: 'tips',
          title: 'Tips',
          content:
            'Shops stay open well into the night in summer, so it doubles as a post-dinner treat. Watch for melting in the afternoon heat and eat it quickly.',
        },
      ],
      faq: [
        {
          question: 'Where can I get ice cream near Malagueta?',
          answer:
            'Heladerías along the Paseo Marítimo and around Muelle Uno serve gelato and sorbets, open late in summer.',
        },
        {
          question: 'What flavours are typical in Málaga?',
          answer:
            'Italian gelato plus fruit sorbets like mango and lemon, and Spanish notes such as turrón.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Helados cerca de la Playa de la Malagueta',
      description:
        'Dónde encontrar heladerías y gelato por el paseo de la Malagueta y Muelle Uno.',
      intro:
        'El helado es el dulce de playa clásico de Málaga. Las heladerías bordean el paseo y el puerto, abiertas hasta tarde.',
      sections: [
        {
          id: 'where',
          title: 'Dónde encontrarlo',
          content:
            'Busca heladerías por el Paseo Marítimo y alrededor de Muelle Uno. Muchas sirven gelato italiano, sorbetes de fruta y sabores clásicos españoles.',
        },
        {
          id: 'flavours',
          title: 'Sabores que probar',
          content:
            'Además de vainilla y chocolate, prueba toques locales como mango, sorbete de limón o turrón. Un cucurucho para llevar es perfecto para pasear.',
        },
        {
          id: 'tips',
          title: 'Consejos',
          content:
            'Las tiendas abren hasta tarde en verano, así que también vale como postre tras la cena. Vigila que se derrita con el calor de la tarde y cómelo pronto.',
        },
      ],
      faq: [
        {
          question: '¿Dónde tomar helado cerca de la Malagueta?',
          answer:
            'Heladerías por el Paseo Marítimo y alrededor de Muelle Uno sirven gelato y sorbetes, abiertas hasta tarde en verano.',
        },
        {
          question: '¿Qué sabores son típicos en Málaga?',
          answer:
            'Gelato italiano más sorbetes de fruta como mango y limón, y notas españolas como el turrón.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'drinks-and-terraces': {
    category: 'food',
    related: ['chiringuitos', 'ice-cream', 'evening-for-couples', 'muelle-uno-restaurants'],
    en: {
      title: 'Drinks & Terraces Near Malagueta',
      description:
        'Beach bars, sea-view terraces and where to have a drink after the beach around Playa de la Malagueta.',
      intro:
        'When the sun drops, the promenade comes alive with places for a cold drink. From beach chiringuitos to marina terraces, there is a spot for every mood.',
      sections: [
        {
          id: 'beach',
          title: 'On the beach',
          content:
            'Chiringuitos serve beer, tinto de verano and mojitos with your feet near the sand. They stay open into the evening, great for a sunset drink.',
        },
        {
          id: 'marina',
          title: 'Marina terraces',
          content:
            'Muelle Uno has bars with marina views, good for a spritz or cocktail after dinner. The atmosphere is livelier than the quiet beach end.',
        },
        {
          id: 'tips',
          title: 'Tips',
          content:
            'Happy hour and live music appear in summer. Carry some cash for small beach bars, and keep an eye on the time if you plan an early start.',
        },
      ],
      faq: [
        {
          question: 'Where can I have a drink near Malagueta Beach?',
          answer:
            'Beach chiringuitos for a drink by the sand, and Muelle Uno marina bars for cocktails and sea views.',
        },
        {
          question: 'Is there nightlife by the beach?',
          answer:
            'It is relaxed rather than clubby: sunset drinks at chiringuitos and livelier marina bars in summer.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Bebidas y Terrazas cerca de la Malagueta',
      description:
        'Barras de playa, terrazas al mar y dónde tomar algo tras la playa cerca de la Playa de la Malagueta.',
      intro:
        'Cuando se pone el sol, el paseo se llena de sitios para una bebida fría. Desde chiringuitos hasta terrazas de marina, hay un rincón para cada momento.',
      sections: [
        {
          id: 'beach',
          title: 'En la playa',
          content:
            'Los chiringuitos sirven cerveza, tinto de verano y mojitos con los pies cerca de la arena. Abren hasta la noche, ideales para una copa al atardecer.',
        },
        {
          id: 'marina',
          title: 'Terrazas de la marina',
          content:
            'Muelle Uno tiene bares con vistas a la marina, buenos para un spritz o cóctel tras la cena. El ambiente es más animado que el tranquilo extremo de la playa.',
        },
        {
          id: 'tips',
          title: 'Consejos',
          content:
            'En verano hay happy hour y música en vivo. Lleva algo de efectivo para las barras pequeñas y vigila la hora si planeas madrugar.',
        },
      ],
      faq: [
        {
          question: '¿Dónde tomar algo cerca de la Playa de la Malagueta?',
          answer:
            'Chiringuitos de playa para una copa junto a la arena, y bares de la marina de Muelle Uno para cócteles y vistas al mar.',
        },
        {
          question: '¿Hay marcha nocturna junto a la playa?',
          answer:
            'Es tranquila antes que de discoteca: copas al atardecer en chiringuitos y bares de marina más animados en verano.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'budget-food': {
    category: 'food',
    related: ['chiringuitos', 'restaurants', 'ice-cream', 'breakfast-and-coffee'],
    en: {
      title: 'Budget Food at Malagueta Beach',
      description:
        'How to eat well near Playa de la Malagueta without overspending: menú del día, tapas and takeaway options.',
      intro:
        'A beach day need not be expensive. With a few local tricks you can eat by the sea on a modest budget.',
      sections: [
        {
          id: 'menu',
          title: 'Menú del día',
          content:
            'Many promenade restaurants offer a fixed-price lunch menu with a drink. It is the best value sit-down meal and common from Monday to Saturday.',
        },
        {
          id: 'tapas',
          title: 'Tapas and sharing',
          content:
            'Order a few tapas or a media ración of fried fish to share, rather than full plates. A bocadillo from a cafetería is a cheap beach lunch.',
        },
        {
          id: 'self',
          title: 'Self-catering',
          content:
            'Pick up fruit, bread and water from a centre shop and picnic on the promenade. Bringing your own drinks avoids beach-bar prices.',
        },
      ],
      faq: [
        {
          question: 'How can I eat cheaply near Malagueta?',
          answer:
            'Go for the menú del día at lunch, share tapas, grab a bocadillo, or picnic with items bought in the centre.',
        },
        {
          question: 'Is the menú del día good value?',
          answer:
            'Yes. It is a fixed-price lunch with a drink, the best-value sit-down meal along the promenade.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Comer Barato en la Playa de la Malagueta',
      description:
        'Cómo comer bien cerca de la Playa de la Malagueta sin gastar de más: menú del día, tapas y opciones para llevar.',
      intro:
        'Un día de playa no tiene por qué ser caro. Con unos trucos locales puedes comer junto al mar con un presupuesto modesto.',
      sections: [
        {
          id: 'menu',
          title: 'Menú del día',
          content:
            'Muchos restaurantes del paseo ofrecen menú del día a precio fijo con bebida. Es la comida sentada con mejor relación calidad-precio y habitual de lunes a sábado.',
        },
        {
          id: 'tapas',
          title: 'Tapas y compartir',
          content:
            'Pide varias tapas o una media ración de pescado frito para compartir, en lugar de platos completos. Un bocadillo de cafetería es un almuerzo de playa barato.',
        },
        {
          id: 'self',
          title: 'Autoconsumo',
          content:
            'Compra fruta, pan y agua en una tienda del centro y haz picnic en el paseo. Traer tus propias bebidas evita los precios de la barra de playa.',
        },
      ],
      faq: [
        {
          question: '¿Cómo comer barato cerca de la Malagueta?',
          answer:
            'Apunta al menú del día al almuerzo, comparte tapas, coge un bocadillo o haz picnic con lo comprado en el centro.',
        },
        {
          question: '¿Vale la pena el menú del día?',
          answer:
            'Sí. Es un almuerzo a precio fijo con bebida, la comida sentada con mejor relación calidad-precio del paseo.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'el-cachalote': {
    category: 'food',
    related: ['promenade-walk', 'photo-spots', 'seafood-and-fried-fish', 'la-caleta'],
    en: {
      title: 'El Cachalote Monument at Malagueta',
      description:
        'The giant sperm-whale sculpture on the Malagueta promenade, what it is and why it honours Málaga’s fishing heritage.',
      intro:
        'El Cachalote is the giant sperm-whale sculpture that has stood on the Malagueta promenade for decades. It is a favourite meeting point and a nod to the city’s maritime past.',
      sections: [
        {
          id: 'what',
          title: 'What it is',
          content:
            'A large concrete sculpture of a cachalote (sperm whale) sits on the seafront near the beach. It has become an unofficial landmark of Malagueta and a popular photo stop.',
        },
        {
          id: 'meaning',
          title: 'Why it is there',
          content:
            'The whale celebrates Málaga’s fishing and whaling history and its bond with the sea. It sits among the chiringuitos and the espeto grills that define the beach’s food culture.',
        },
        {
          id: 'visit',
          title: 'Visiting',
          content:
            'It is free to see and open at any time along the promenade. Combine it with a walk to the beach, a photo, and a sardine lunch at a nearby chiringuito.',
        },
      ],
      faq: [
        {
          question: 'What is El Cachalote at Malagueta?',
          answer:
            'It is a giant sperm-whale sculpture on the seafront, a long-standing landmark and meeting point of the beach.',
        },
        {
          question: 'Why is there a whale statue on the beach?',
          answer:
            'It honours Málaga’s fishing and maritime heritage and sits among the beach’s chiringuitos and espeto grills.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'El Cachalote de la Malagueta',
      description:
        'La gigantesca escultura de cachalote en el paseo de la Malagueta, qué es y por qué honra la tradición pesquera de Málaga.',
      intro:
        'El Cachalote es la gigantesca escultura de cachalote que lleva décadas en el paseo de la Malagueta. Es un punto de encuentro y un homenaje al pasado marinero de la ciudad.',
      sections: [
        {
          id: 'what',
          title: 'Qué es',
          content:
            'Una gran escultura de hormigón de un cachalote (ballena esperma) se alza en el frente marítimo cerca de la playa. Se ha vuelto un hito informal de la Malagueta y una parada fotográfica popular.',
        },
        {
          id: 'meaning',
          title: 'Por qué está ahí',
          content:
            'La ballena celebra la historia pesquera y ballenera de Málaga y su vínculo con el mar. Está entre los chiringuitos y las parrillas de espeto que definen la cultura gastronómica de la playa.',
        },
        {
          id: 'visit',
          title: 'Visitarlo',
          content:
            'Es gratuito y está accesible en cualquier momento del paseo. Combínalo con un paseo a la playa, una foto y un almuerzo de sardinas en un chiringuito cercano.',
        },
      ],
      faq: [
        {
          question: '¿Qué es El Cachalote de la Malagueta?',
          answer:
            'Es una gigantesca escultura de cachalote en el frente marítimo, un hito y punto de encuentro de la playa desde hace décadas.',
        },
        {
          question: '¿Por qué hay una estatua de ballena en la playa?',
          answer:
            'Honra la tradición pesquera y marinera de Málaga y se sitúa entre los chiringuitos y espetos de la playa.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'muelle-uno-restaurants': {
    category: 'food',
    related: ['muelle-uno', 'restaurants', 'drinks-and-terraces', 'cruise-port-to-malagueta'],
    en: {
      title: 'Muelle Uno Restaurants',
      description:
        'Dining at Muelle Uno marina: restaurants, cafés and cuisine with a view next to the Port of Málaga, a short walk from Malagueta.',
      intro:
        'Muelle Uno is the open-air shopping and dining promenade by the Port of Málaga, a few minutes west of Malagueta. It gathers many of the area’s restaurants in one spot.',
      sections: [
        {
          id: 'offer',
          title: 'The dining offer',
          content:
            'You will find seafood restaurants, international cuisine, burger and sushi spots, and cafés with terraces over the marina. It suits both a quick lunch and a longer dinner.',
        },
        {
          id: 'view',
          title: 'Eating with a view',
          content:
            'Most terraces face the boats and the sea. It is a popular sunset spot and a calmer alternative to the busy beach bars at peak times.',
        },
        {
          id: 'tips',
          title: 'Tips',
          content:
            'Book in summer evenings, compare menus posted at the entrance, and pair your meal with a stroll around the port. It is an easy walk from Malagueta.',
        },
      ],
      faq: [
        {
          question: 'What restaurants are at Muelle Uno?',
          answer:
            'Seafood houses, international cuisine, burger and sushi spots and cafés, many with marina-view terraces.',
        },
        {
          question: 'How far is Muelle Uno from Malagueta Beach?',
          answer:
            'A few minutes’ walk west along the seafront, past the cruise terminal.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Restaurantes de Muelle Uno',
      description:
        'Comer en la marina de Muelle Uno: restaurantes, cafeterías y cocina con vistas junto al Puerto de Málaga, a pocos pasos de la Malagueta.',
      intro:
        'Muelle Uno es el paseo comercial y gastronómico al aire libre del Puerto de Málaga, a pocos minutos al oeste de la Malagueta. Reúne muchos de los restaurantes de la zona en un solo lugar.',
      sections: [
        {
          id: 'offer',
          title: 'La oferta gastronómica',
          content:
            'Hay casas de pescado, cocina internacional, hamburguesas y sushi, y cafeterías con terrazas sobre la marina. Vale tanto para un almuerzo rápido como para una cena más larga.',
        },
        {
          id: 'view',
          title: 'Comer con vistas',
          content:
            'La mayoría de las terrazas dan a los barcos y al mar. Es un sitio de atardecer popular y una alternativa más tranquila a las barras de playa en las horas punta.',
        },
        {
          id: 'tips',
          title: 'Consejos',
          content:
            'Reserva las noches de verano, compara las cartas expuestas a la entrada y acompaña la comida con un paseo por el puerto. Es un paseo fácil desde la Malagueta.',
        },
      ],
      faq: [
        {
          question: '¿Qué restaurantes hay en Muelle Uno?',
          answer:
            'Casas de pescado, cocina internacional, hamburguesas y sushi, y cafeterías, muchas con terrazas a la marina.',
        },
        {
          question: '¿A qué distancia está Muelle Uno de la Playa de la Malagueta?',
          answer:
            'A pocos minutos a pie hacia el oeste por el frente marítimo, pasando la terminal de cruceros.',
        },
      ],
      updated: 'October 2026',
    },
  },
};
