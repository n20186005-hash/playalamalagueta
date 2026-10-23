import type { TopicEntry } from './topic-types';

export const compareTopics: Record<string, TopicEntry> = {
  'best-time-to-visit': {
    category: 'compare',
    related: ['beach-safety', 'photo-spots', 'one-day-itinerary', 'beaches-near-malaga-centre'],
    en: {
      title: 'Best Time to Visit Malagueta Beach',
      description:
        'Month-by-month guide to Malagueta Beach: weather, crowds, water temperature and when to go for sun, swimming or quiet.',
      intro:
        'Málaga’s microclimate makes Malagueta a year-round destination, but the experience changes a lot by season. Here is when to plan your visit.',
      sections: [
        {
          id: 'summer',
          title: 'Summer (June–September)',
          content:
            'Hot, sunny and lively, with lifeguards, full services and the busiest crowds. Best for swimming and beach life, but arrive early for parking and shade.',
        },
        {
          id: 'shoulder',
          title: 'Spring and autumn',
          content:
            'Warm days, fewer people and pleasant sea temperatures from late spring. Ideal for walking, photography and a relaxed beach day without the summer crush.',
        },
        {
          id: 'winter',
          title: 'Winter (December–February)',
          content:
            'Mild compared with northern Europe, good for seaside walks and city sightseeing. Swimming is for the brave; services are reduced but the promenade stays open.',
        },
      ],
      faq: [
        {
          question: 'When is the best time to visit Malagueta?',
          answer:
            'Late spring and autumn for fewer crowds and warm water; summer for full services and swimming; winter for walks and city trips.',
        },
        {
          question: 'Can you swim in winter?',
          answer:
            'The sea is cool and services are reduced, so winter swimming is for the brave, but the promenade and city stay open.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Mejor Época para Visitar la Playa de la Malagueta',
      description:
        'Guía mes a mes de la Playa de la Malagueta: clima, afluencia, temperatura del agua y cuándo ir por sol, baño o tranquilidad.',
      intro:
        'El microclima de Málaga hace de la Malagueta un destino de todo el año, pero la experiencia cambia mucho según la estación. Aquí cuándo planear la visita.',
      sections: [
        {
          id: 'summer',
          title: 'Verano (junio–septiembre)',
          content:
            'Caluroso, soleado y animado, con socorristas, servicios completos y la mayor afluencia. Ideal para bañarse y la vida de playa, pero llega pronto para aparcar y tener sombra.',
        },
        {
          id: 'shoulder',
          title: 'Primavera y otoño',
          content:
            'Días cálidos, menos gente y agua agradable desde finales de primavera. Perfecto para pasear, fotografiar y un día de playa relajado sin la avalancha estival.',
        },
        {
          id: 'winter',
          title: 'Invierno (diciembre–febrero)',
          content:
            'Suave comparado con el norte de Europa, bueno para paseos junto al mar y turismo urbano. El baño es para los valientes; los servicios se reducen pero el paseo sigue abierto.',
        },
      ],
      faq: [
        {
          question: '¿Cuándo es mejor visitar la Malagueta?',
          answer:
            'Finales de primavera y otoño para menos gente y agua templada; verano para servicios completos y baño; invierno para paseos y ciudad.',
        },
        {
          question: '¿Se puede bañar en invierno?',
          answer:
            'El mar está fresco y los servicios reducidos, así que el baño invernal es para los valientes, pero el paseo y la ciudad siguen abiertos.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'malagueta-vs-caleta': {
    category: 'compare',
    related: ['la-caleta', 'malagueta-vs-pedregalejo', 'beaches-near-malaga-centre', 'espetos'],
    en: {
      title: 'Malagueta vs La Caleta Beach',
      description:
        'How Malagueta Beach compares with La Caleta: size, crowds, facilities and atmosphere, to help you pick.',
      intro:
        'La Caleta sits just east of Malagueta and is the natural alternative. Both are city beaches, but they feel different.',
      sections: [
        {
          id: 'size',
          title: 'Size and layout',
          content:
            'Malagueta is the larger, wider beach with more services and rental rows. La Caleta is smaller, more enclosed and quieter, with a village feel.',
        },
        {
          id: 'crowds',
          title: 'Crowds and atmosphere',
          content:
            'Malagueta draws the biggest crowds and the fullest range of beach bars. La Caleta keeps a local, low-key mood and is popular with families.',
        },
        {
          id: 'pick',
          title: 'Which to choose',
          content:
            'Pick Malagueta for a full-service beach day close to the centre and the port. Choose La Caleta for a calmer swim and a slower pace, a few minutes’ walk east.',
        },
      ],
      faq: [
        {
          question: 'Is La Caleta quieter than Malagueta?',
          answer:
            'Yes. La Caleta is smaller, more enclosed and has a local, low-key atmosphere compared with the busier Malagueta.',
        },
        {
          question: 'Which beach is bigger, Malagueta or La Caleta?',
          answer:
            'Malagueta is wider and larger with more services; La Caleta is the smaller, calmer cove next to it.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Malagueta vs Playa de la Caleta',
      description:
        'Cómo se compara la Playa de la Malagueta con la de la Caleta: tamaño, afluencia, servicios y ambiente para ayudarte a elegir.',
      intro:
        'La Caleta está justo al este de la Malagueta y es la alternativa natural. Ambas son playas urbanas, pero se sienten distintas.',
      sections: [
        {
          id: 'size',
          title: 'Tamaño y trazado',
          content:
            'La Malagueta es la playa más grande y ancha, con más servicios y filas de alquiler. La Caleta es más pequeña, más encerrada y tranquila, con aire de pueblo.',
        },
        {
          id: 'crowds',
          title: 'Afluencia y ambiente',
          content:
            'La Malagueta atrae a más gente y la mayor variedad de chiringuitos. La Caleta mantiene un aire local y discreto y es popular con familias.',
        },
        {
          id: 'pick',
          title: 'Cuál elegir',
          content:
            'Elige la Malagueta para un día de playa con todos los servicios cerca del centro y del puerto. Elige La Caleta para un baño más tranquilo y un ritmo más lento, a pocos minutos al este.',
        },
      ],
      faq: [
        {
          question: '¿Está más tranquila la Caleta que la Malagueta?',
          answer:
            'Sí. La Caleta es más pequeña, más encerrada y tiene un ambiente local y discreto frente a la más concurrida Malagueta.',
        },
        {
          question: '¿Qué playa es más grande, Malagueta o la Caleta?',
          answer:
            'La Malagueta es más ancha y grande, con más servicios; la Caleta es la cala más pequeña y calmada junto a ella.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'malagueta-vs-pedregalejo': {
    category: 'compare',
    related: ['pedregalejo', 'malagueta-vs-caleta', 'beaches-near-malaga-centre', 'espetos'],
    en: {
      title: 'Malagueta vs Pedregalejo Beach',
      description:
        'How Malagueta compares with Pedregalejo: distance, food scene, atmosphere and which suits your day.',
      intro:
        'Pedregalejo lies further east and is the most traditional fishing-beach district near the centre. It is a different experience from central Malagueta.',
      sections: [
        {
          id: 'distance',
          title: 'Distance and access',
          content:
            'Malagueta is a 15–20 minute walk from the centre; Pedregalejo is about 30 minutes further east along the promenade, or a short bus or bike ride.',
        },
        {
          id: 'food',
          title: 'Food culture',
          content:
            'Both have chiringuitos, but Pedregalejo is the heartland of espeto de sardinas, with rows of long-standing huts right on the sand. It feels more like a neighbourhood.',
        },
        {
          id: 'pick',
          title: 'Which to choose',
          content:
            'Choose Malagueta for convenience and a full range of services next to the port. Choose Pedregalejo for an authentic fishing-beach meal and a longer seaside walk.',
        },
      ],
      faq: [
        {
          question: 'Which is better for espeto, Malagueta or Pedregalejo?',
          answer:
            'Pedregalejo is the heartland of espeto de sardinas, with rows of traditional huts on the sand; Malagueta also serves it but feels more central.',
        },
        {
          question: 'How far is Pedregalejo from Malagueta?',
          answer:
            'About 30 minutes on foot east along the promenade, or a short bus or bike ride past La Caleta.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Malagueta vs Pedregalejo',
      description:
        'Cómo se compara la Malagueta con Pedregalejo: distancia, gastronomía, ambiente y qué se ajusta a tu día.',
      intro:
        'Pedregalejo está más al este y es el distrito playero de pescadores más tradicional cerca del centro. Es una experiencia distinta de la Malagueta central.',
      sections: [
        {
          id: 'distance',
          title: 'Distancia y acceso',
          content:
            'La Malagueta está a 15–20 minutos a pie del centro; Pedregalejo queda unos 30 minutos más al este por el paseo, o un corto trayecto en autobús o bici.',
        },
        {
          id: 'food',
          title: 'Cultura gastronómica',
          content:
            'Ambas tienen chiringuitos, pero Pedregalejo es la cuna del espeto de sardinas, con filas de casetas de toda la vida sobre la arena. Se siente más barrio.',
        },
        {
          id: 'pick',
          title: 'Cuál elegir',
          content:
            'Elige la Malagueta por comodidad y toda la gama de servicios junto al puerto. Elige Pedregalejo para una comida auténtica de playa de pescadores y un paseo marítimo más largo.',
        },
      ],
      faq: [
        {
          question: '¿Qué es mejor para espeto, Malagueta o Pedregalejo?',
          answer:
            'Pedregalejo es la cuna del espeto de sardinas, con filas de casetas tradicionales sobre la arena; la Malagueta también lo sirve pero se siente más central.',
        },
        {
          question: '¿A qué distancia está Pedregalejo de la Malagueta?',
          answer:
            'Unos 30 minutos a pie hacia el este por el paseo, o un corto trayecto en autobús o bici pasando La Caleta.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'beaches-near-malaga-centre': {
    category: 'compare',
    related: ['la-caleta', 'pedregalejo', 'malagueta-vs-caleta', 'best-time-to-visit'],
    en: {
      title: 'Beaches Near Málaga Centre',
      description:
        'The main city beaches within easy reach of central Málaga: Malagueta, La Caleta, Pedregalejo and El Palo, and how they differ.',
      intro:
        'Málaga’s centre sits next to a chain of urban beaches running east. Here is how the closest ones compare so you can pick your spot.',
      sections: [
        {
          id: 'chain',
          title: 'The beach chain',
          content:
            'From the port eastwards you meet Malagueta, then La Caleta, Pedregalejo and El Palo. All are linked by the flat seafront promenade and bus lines.',
        },
        {
          id: 'character',
          title: 'How they differ',
          content:
            'Malagueta is the most central and serviced; La Caleta is the calm cove; Pedregalejo is the fishing-beach food spot; El Palo is a longer, local beach further out with more espeto huts.',
        },
        {
          id: 'pick',
          title: 'Choosing',
          content:
            'For a quick visit from the old town, Malagueta or La Caleta win. For a food-focused day, Pedregalejo or El Palo are worth the longer walk or short bus.',
        },
      ],
      faq: [
        {
          question: 'What beaches are near Málaga centre?',
          answer:
            'Malagueta, La Caleta, Pedregalejo and El Palo, all linked by the seafront promenade east of the port.',
        },
        {
          question: 'Which Málaga city beach is most central?',
          answer:
            'Malagueta is the closest full-service beach to the old town and the port, about 15–20 minutes on foot.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Playas cerca del Centro de Málaga',
      description:
        'Las playas urbanas principales al alcance del centro de Málaga: Malagueta, La Caleta, Pedregalejo y El Palo, y en qué se diferencian.',
      intro:
        'El centro de Málaga está junto a una cadena de playas urbanas hacia el este. Aquí se comparan las más cercanas para que elijas tu sitio.',
      sections: [
        {
          id: 'chain',
          title: 'La cadena de playas',
          content:
            'Desde el puerto hacia el este encuentras la Malagueta, luego La Caleta, Pedregalejo y El Palo. Todas unidas por el paseo llano y las líneas de autobús.',
        },
        {
          id: 'character',
          title: 'En qué se diferencian',
          content:
            'La Malagueta es la más central y servicios; La Caleta es la cala tranquila; Pedregalejo es el sitio de comida de playa de pescadores; El Palo es una playa más larga y local, más alejada, con más casetas de espeto.',
        },
        {
          id: 'pick',
          title: 'Cómo elegir',
          content:
            'Para una visita rápida desde el casco antiguo, ganan la Malagueta o La Caleta. Para un día de comida, Pedregalejo o El Palo merecen el paseo más largo o el autobús corto.',
        },
      ],
      faq: [
        {
          question: '¿Qué playas hay cerca del centro de Málaga?',
          answer:
            'Malagueta, La Caleta, Pedregalejo y El Palo, todas unidas por el paseo marítimo al este del puerto.',
        },
        {
          question: '¿Qué playa urbana de Málaga es más central?',
          answer:
            'La Malagueta es la playa con todos los servicios más cercana al casco antiguo y al puerto, a unos 15–20 minutos a pie.',
        },
      ],
      updated: 'October 2026',
    },
  },
};
