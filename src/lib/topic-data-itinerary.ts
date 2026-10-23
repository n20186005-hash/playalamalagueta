import type { TopicEntry } from './topic-types';

export const itineraryTopics: Record<string, TopicEntry> = {
  'half-day-itinerary': {
    category: 'itinerary',
    related: ['one-day-itinerary', 'with-kids', 'promenade-walk', 'muelle-uno'],
    en: {
      title: 'Half-Day Itinerary at Malagueta Beach',
      description:
        'A practical half-day plan for Playa de la Malagueta: beach time, a promenade walk, lunch and a nearby sight.',
      intro:
        'If you have only a morning or an afternoon, Malagueta packs a full experience into a small area. Here is a relaxed half-day plan.',
      sections: [
        {
          id: 'morning',
          title: 'Beach and swim',
          content:
            'Arrive mid-morning, rent a lounger or lay your towel, and enjoy the sea before it gets busy. The shallow entry makes swimming easy and pleasant.',
        },
        {
          id: 'walk',
          title: 'Promenade walk',
          content:
            'Stroll the Paseo Marítimo towards Muelle Uno or La Caleta. Stop at El Cachalote for a photo and watch the boats in the port.',
        },
        {
          id: 'lunch',
          title: 'Lunch by the sea',
          content:
            'End with espeto de sardinas or fried fish at a chiringuito, or a marina table at Muelle Uno. You are back on the sand or in the centre within minutes.',
        },
      ],
      faq: [
        {
          question: 'Can I see Malagueta in half a day?',
          answer:
            'Yes. A morning or afternoon covers the beach, a promenade walk and a seaside lunch, with Muelle Uno a short walk away.',
        },
        {
          question: 'What fits in a half-day plan?',
          answer:
            'Beach and swim, a walk to Muelle Uno or La Caleta, a photo at El Cachalote, and lunch at a chiringuito.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Itinerario de Medio Día en la Playa de la Malagueta',
      description:
        'Plan práctico de medio día para la Playa de la Malagueta: playa, paseo, almuerzo y un monumento cercano.',
      intro:
        'Si solo tienes una mañana o una tarde, la Malagueta concentra una experiencia completa en poco espacio. Aquí tienes un plan relajado de medio día.',
      sections: [
        {
          id: 'morning',
          title: 'Playa y baño',
          content:
            'Llega a media mañana, alquila una hamaca o extiende tu toalla y disfruta del mar antes de que se llene. La entrada suave facilita el baño.',
        },
        {
          id: 'walk',
          title: 'Paseo marítimo',
          content:
            'Pasea por el Paseo Marítimo hacia Muelle Uno o La Caleta. Para en El Cachalote para una foto y mira los barcos del puerto.',
        },
        {
          id: 'lunch',
          title: 'Almuerzo junto al mar',
          content:
            'Termina con espeto de sardinas o pescado frito en un chiringuito, o una mesa de marina en Muelle Uno. Estás de vuelta a la arena o al centro en minutos.',
        },
      ],
      faq: [
        {
          question: '¿Se puede ver la Malagueta en medio día?',
          answer:
            'Sí. Una mañana o tarde cubre la playa, un paseo y un almuerzo junto al mar, con Muelle Uno a pocos pasos.',
        },
        {
          question: '¿Qué cabe en un plan de medio día?',
          answer:
            'Playa y baño, paseo a Muelle Uno o La Caleta, foto en El Cachalote y almuerzo en un chiringuito.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'one-day-itinerary': {
    category: 'itinerary',
    related: ['half-day-itinerary', 'with-kids', 'gibralfaro', 'pedregalejo'],
    en: {
      title: 'One-Day Itinerary at Malagueta Beach',
      description:
        'A full day around Playa de la Malagueta: beach, culture at Muelle Uno, a sightseeing sight and a seafood dinner.',
      intro:
        'With a full day you can mix beach, culture and food without rushing. This plan balances sun and shade through the hottest hours.',
      sections: [
        {
          id: 'morning',
          title: 'Morning: beach and bullring',
          content:
            'Start with the sea and a swim, then walk to the Plaza de Toros de La Malagueta or the Parque de Málaga in the late morning to stay cool.',
        },
        {
          id: 'midday',
          title: 'Midday: culture and lunch',
          content:
            'Visit the Centre Pompidou Málaga at Muelle Uno, then lunch by the marina. Save the midday sun for shade or a long meal.',
        },
        {
          id: 'afternoon',
          title: 'Afternoon: beach again or Gibralfaro',
          content:
            'Return to the sand for a late swim, or climb to Gibralfaro for the view. End the day with espeto at a chiringuito or dinner at Pedregalejo.',
        },
      ],
      faq: [
        {
          question: 'How do I spend a full day at Malagueta?',
          answer:
            'Beach in the morning, culture and lunch at Muelle Uno midday, then a late swim or Gibralfaro, ending with seafood.',
        },
        {
          question: 'What sights pair with the beach?',
          answer:
            'The bullring, Parque de Málaga, Centre Pompidou and Gibralfaro are all close and easy to combine.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Itinerario de un Día en la Playa de la Malagueta',
      description:
        'Un día completo junto a la Playa de la Malagueta: playa, cultura en Muelle Uno, una visita y cena de marisco.',
      intro:
        'Con un día entero puedes mezclar playa, cultura y comida sin prisa. Este plan equilibra sol y sombra en las horas de más calor.',
      sections: [
        {
          id: 'morning',
          title: 'Mañana: playa y plaza',
          content:
            'Empieza con el mar y un baño, luego camina a la Plaza de Toros de La Malagueta o al Parque de Málaga a media mañana para estar frescos.',
        },
        {
          id: 'midday',
          title: 'Mediodía: cultura y almuerzo',
          content:
            'Visita el Centro Pompidou Málaga en Muelle Uno y almuerza en la marina. Deja el sol del mediodía para la sombra o una comida larga.',
        },
        {
          id: 'afternoon',
          title: 'Tarde: playa otra vez o Gibralfaro',
          content:
            'Vuelve a la arena para un baño tardío o sube a Gibralfaro para la vista. Termina el día con espeto en un chiringuito o cena en Pedregalejo.',
        },
      ],
      faq: [
        {
          question: '¿Cómo pasar un día entero en la Malagueta?',
          answer:
            'Playa por la mañana, cultura y almuerzo en Muelle Uno al mediodía, luego baño tardío o Gibralfaro, terminando con marisco.',
        },
        {
          question: '¿Qué visitas combinan con la playa?',
          answer:
            'La plaza de toros, el Parque de Málaga, el Centro Pompidou y Gibralfaro están cerca y fáciles de unir.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'with-kids': {
    category: 'itinerary',
    related: ['accessibility', 'facilities', 'half-day-itinerary', 'pedregalejo'],
    en: {
      title: 'Malagueta Beach with Kids',
      description:
        'Family tips for Playa de la Malagueta: shallow water, playground, shade, food and a calm plan for a day with children.',
      intro:
        'Malagueta is one of the easiest Málaga beaches for families, with gentle water, a playground and a flat, buggy-friendly promenade.',
      sections: [
        {
          id: 'water',
          title: 'Safe swimming',
          content:
            'The beach has a gentle slope and flagged swimming zones watched by lifeguards in summer. Keep children within arm’s reach and use the showers to rinse off salt.',
        },
        {
          id: 'play',
          title: 'Play and shade',
          content:
            'A children’s playground sits on the promenade, and the palms give shaded rest spots. An umbrella rental keeps the little ones out of the midday sun.',
        },
        {
          id: 'plan',
          title: 'A simple family day',
          content:
            'Morning swim, playground break, lunch at a chiringuito with a children’s menu, then an ice cream and a short walk to El Cachalote. Rest in the park if it gets hot.',
        },
      ],
      faq: [
        {
          question: 'Is Malagueta good for kids?',
          answer:
            'Yes. It has gentle, flagged swimming, a playground, shade and a flat promenade good for pushchairs.',
        },
        {
          question: 'What should families bring?',
          answer:
            'Sun cream, a hat, water, beach toys and an umbrella; the beach also rents loungers and parasols.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Playa de la Malagueta con Niños',
      description:
        'Consejos familiares para la Playa de la Malagueta: agua suave, zona infantil, sombra, comida y un plan tranquilo con niños.',
      intro:
        'La Malagueta es una de las playas más fáciles de Málaga para familias, con agua suave, área infantil y un paseo llano y cómodo para cochecitos.',
      sections: [
        {
          id: 'water',
          title: 'Baño seguro',
          content:
            'La playa tiene pendiente suave y zonas de baño balizadas y vigiladas por socorristas en verano. Mantén a los niños al alcance y usa las duchas para quitar la sal.',
        },
        {
          id: 'play',
          title: 'Juego y sombra',
          content:
            'Una zona infantil está en el paseo, y las palmeras dan sombra para descansar. El alquiler de sombrilla protege a los pequeños del sol del mediodía.',
        },
        {
          id: 'plan',
          title: 'Un día familiar sencillo',
          content:
            'Baño por la mañana, descanso en la zona infantil, almuerzo en un chiringuito con menú infantil, luego un helado y un corto paseo a El Cachalote. Descansa en el parque si hace mucho calor.',
        },
      ],
      faq: [
        {
          question: '¿Es buena la Malagueta para niños?',
          answer:
            'Sí. Tiene baño suave y balizado, zona infantil, sombra y un paseo llano bueno para cochecitos.',
        },
        {
          question: '¿Qué deben llevar las familias?',
          answer:
            'Protector solar, gorra, agua, juguetes de playa y sombrilla; la playa también alquila hamacas y parasoles.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'evening-for-couples': {
    category: 'itinerary',
    related: ['drinks-and-terraces', 'muelle-uno', 'photo-spots', 'promenade-walk'],
    en: {
      title: 'Malagueta in the Evening for Couples',
      description:
        'A romantic evening plan by Playa de la Malagueta: sunset walk, beach-bar drinks and a marina dinner.',
      intro:
        'As the heat fades, Malagueta turns romantic. A sunset walk and a seaside drink make an easy, low-cost evening for two.',
      sections: [
        {
          id: 'sunset',
          title: 'Sunset walk',
          content:
            'Stroll the promenade as the light warms the sand and the city. The stretch between the beach and Muelle Uno is calm and photogenic at golden hour.',
        },
        {
          id: 'drinks',
          title: 'Drinks at the beach',
          content:
            'Share a drink at a chiringuito with your feet near the sand, or move to a marina terrace at Muelle Uno for a spritz with a view.',
        },
        {
          id: 'dinner',
          title: 'Dinner by the water',
          content:
            'Stay for seafood at the beach or cross to Muelle Uno for a sit-down dinner. The lit promenade makes the walk back pleasant.',
        },
      ],
      faq: [
        {
          question: 'Is Malagueta nice in the evening?',
          answer:
            'Yes. Sunset walks, beach-bar drinks and marina dinners make it a relaxed, romantic spot after dark.',
        },
        {
          question: 'Where to go for a couple’s evening?',
          answer:
            'A golden-hour promenade walk, a drink at a chiringuito or Muelle Uno terrace, and dinner by the water.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'La Malagueta al Atardecer en Pareja',
      description:
        'Plan romántico junto a la Playa de la Malagueta: paseo al atardecer, copas en la playa y cena en la marina.',
      intro:
        'Cuando baja el calor, la Malagueta se vuelve romántica. Un paseo al atardecer y una copa junto al mar hacen una velada fácil y económica para dos.',
      sections: [
        {
          id: 'sunset',
          title: 'Paseo al atardecer',
          content:
            'Pasea por el paseo cuando la luz calienta la arena y la ciudad. El tramo entre la playa y Muelle Uno está tranquilo y es fotogénico a la hora dorada.',
        },
        {
          id: 'drinks',
          title: 'Copas en la playa',
          content:
            'Comparte una copa en un chiringuito con los pies cerca de la arena, o muévete a una terraza de la marina en Muelle Uno para un spritz con vistas.',
        },
        {
          id: 'dinner',
          title: 'Cena junto al agua',
          content:
            'Quédate para marisco en la playa o cruza a Muelle Uno para una cena sentada. El paseo iluminado hace agradable el regreso.',
        },
      ],
      faq: [
        {
          question: '¿Es agradable la Malagueta por la noche?',
          answer:
            'Sí. Paseos al atardecer, copas en barras de playa y cenas en la marina la hacen un sitio relajado y romántico tras oscurecer.',
        },
        {
          question: '¿Adónde ir para una velada en pareja?',
          answer:
            'Un paseo a la hora dorada, una copa en un chiringuito o terraza de Muelle Uno, y cena junto al agua.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'rainy-day': {
    category: 'itinerary',
    related: ['centre-pompidou', 'muelle-uno', 'gibralfaro', 'one-day-itinerary'],
    en: {
      title: 'Rainy Day Near Malagueta Beach',
      description:
        'What to do when it rains at Playa de la Malagueta: museums, shopping and covered spots within walking distance.',
      intro:
        'Málaga is a great city for grey days. If the beach is out, several sights near Malagueta keep you dry and entertained.',
      sections: [
        {
          id: 'culture',
          title: 'Museums and culture',
          content:
            'The Centre Pompidou Málaga at Muelle Uno is the closest indoor option. The city centre also holds the Picasso Museum and the Cathedral, a short bus or walk away.',
        },
        {
          id: 'covered',
          title: 'Covered and shopping',
          content:
            'Muelle Uno has covered passages and shops, and the city’s markets and the harbour area offer sheltered strolls. A coffee and a long lunch fill the gap nicely.',
        },
        {
          id: 'tips',
          title: 'Tips',
          content:
            'Check museum opening days (many close Mondays), bring a light rain layer, and use the bus or a short taxi from the beach rather than walking in the downpour.',
        },
      ],
      faq: [
        {
          question: 'What can I do near Malagueta on a rainy day?',
          answer:
            'The Centre Pompidou at Muelle Uno, plus the Picasso Museum and Cathedral in the centre, are close indoor options.',
        },
        {
          question: 'Is Muelle Uno good in the rain?',
          answer:
            'Yes, it has covered passages, shops and places to eat, a short walk from the beach.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Día de Lluvia cerca de la Playa de la Malagueta',
      description:
        'Qué hacer si llueve en la Playa de la Malagueta: museos, compras y sitios cubiertos a poca distancia.',
      intro:
        'Málaga es una gran ciudad para los días grises. Si la playa no está, varias visitas cerca de la Malagueta te mantienen seco y entretenido.',
      sections: [
        {
          id: 'culture',
          title: 'Museos y cultura',
          content:
            'El Centro Pompidou Málaga en Muelle Uno es la opción cubierta más cercana. El centro también tiene el Museo Picasso y la Catedral, a un corto autobús o paseo.',
        },
        {
          id: 'covered',
          title: 'Cubierto y compras',
          content:
            'Muelle Uno tiene pasajes y tiendas cubiertas, y los mercados y la zona del puerto ofrecen paseos resguardados. Un café y una comida larga cubren el hueco bien.',
        },
        {
          id: 'tips',
          title: 'Consejos',
          content:
            'Revisa los días de apertura de museos (muchos cierran los lunes), lleva una prenda ligera de lluvia y usa el autobús o un taxi corto desde la playa en lugar de caminar bajo el aguacero.',
        },
      ],
      faq: [
        {
          question: '¿Qué hacer cerca de la Malagueta en un día lluvioso?',
          answer:
            'El Centro Pompidou en Muelle Uno, más el Museo Picasso y la Catedral en el centro, son opciones cubiertas cercanas.',
        },
        {
          question: '¿Es bueno Muelle Uno con lluvia?',
          answer:
            'Sí, tiene pasajes y tiendas cubiertas y sitios donde comer, a pocos pasos de la playa.',
        },
      ],
      updated: 'October 2026',
    },
  },
};
