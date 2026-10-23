import type { TopicEntry } from './topic-types';

export const nearbyTopics: Record<string, TopicEntry> = {
  'muelle-uno': {
    category: 'nearby',
    related: ['cruise-port-to-malagueta', 'centre-pompidou', 'malagueta-bullring', 'muelle-uno-restaurants'],
    en: {
      title: 'Muelle Uno, Málaga',
      description:
        'Muelle Uno marina promenade by the Port of Málaga: shopping, dining, the Pompidou Centre and a short walk from Malagueta Beach.',
      intro:
        'Muelle Uno is the modern open-air promenade built into the Port of Málaga. It sits between the cruise terminal and Malagueta Beach, blending shopping, dining and culture by the water.',
      sections: [
        {
          id: 'what',
          title: 'What is Muelle Uno',
          content:
            'A pedestrian marina boardwalk with shops, restaurants, a supermarket and event spaces. Its colourful cube entrance and sea views make it a popular stroll before or after the beach.',
        },
        {
          id: 'culture',
          title: 'Culture on site',
          content:
            'The Centre Pompidou Málaga sits at the entrance to Muelle Uno, with its recognisable glass cube. Temporary exhibitions and family activities make it an easy rainy-day or cool-hours stop.',
        },
        {
          id: 'visit',
          title: 'Visiting',
          content:
            'It is free to walk around and open daily. Combine it with a beach day: arrive via Muelle Uno, then follow the promenade east to Malagueta in about 10 minutes.',
        },
      ],
      faq: [
        {
          question: 'How far is Muelle Uno from Malagueta Beach?',
          answer:
            'A 10–15 minute walk east along the seafront promenade from Muelle Uno to the beach.',
        },
        {
          question: 'What is at Muelle Uno?',
          answer:
            'Shops, restaurants, a supermarket, event spaces and the Centre Pompidou Málaga at its entrance.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Muelle Uno, Málaga',
      description:
        'Paseo marinero de Muelle Uno junto al Puerto de Málaga: compras, restauración, el Centro Pompidou y un corto paseo desde la Playa de la Malagueta.',
      intro:
        'Muelle Uno es el paseo abierto y moderno construido en el Puerto de Málaga. Está entre la terminal de cruceros y la Playa de la Malagueta, uniendo compras, restauración y cultura junto al agua.',
      sections: [
        {
          id: 'what',
          title: 'Qué es Muelle Uno',
          content:
            'Un paseo peatonal de marina con tiendas, restaurantes, un supermercado y espacios de eventos. Su entrada de cubo colorido y vistas al mar lo hacen un paseo popular antes o después de la playa.',
        },
        {
          id: 'culture',
          title: 'Cultura en el recinto',
          content:
            'El Centro Pompidou Málaga está a la entrada de Muelle Uno, con su reconocido cubo de vidrio. Sus exposiciones temporales y actividades familiares lo hacen una parada fácil en día de lluvia o en horas de calor.',
        },
        {
          id: 'visit',
          title: 'Visitarlo',
          content:
            'Pasear es gratuito y está abierto todos los días. Combínalo con un día de playa: llega por Muelle Uno y sigue el paseo hacia el este hasta la Malagueta en unos 10 minutos.',
        },
      ],
      faq: [
        {
          question: '¿A qué distancia está Muelle Uno de la Playa de la Malagueta?',
          answer:
            'Un paseo de 10–15 minutos hacia el este por el frente marítimo desde Muelle Uno hasta la playa.',
        },
        {
          question: '¿Qué hay en Muelle Uno?',
          answer:
            'Tiendas, restaurantes, un supermercado, espacios de eventos y el Centro Pompidou Málaga a su entrada.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'centre-pompidou': {
    category: 'nearby',
    related: ['muelle-uno', 'english-cemetery', 'rainy-day', 'one-day-itinerary'],
    en: {
      title: 'Centre Pompidou Málaga',
      description:
        'The Centre Pompidou Málaga art museum at Muelle Uno: what to see, tickets and how to combine it with a Malagueta beach day.',
      intro:
        'The Centre Pompidou Málaga is the first branch of the Paris centre outside France. Its colourful glass cube marks the entrance to Muelle Uno, a short walk from the beach.',
      sections: [
        {
          id: 'collection',
          title: 'What to see',
          content:
            'The permanent collection spans modern and contemporary art, with works by Picasso, Miró, Magritte and Dalí among others, plus rotating temporary exhibitions.',
        },
        {
          id: 'tickets',
          title: 'Tickets and hours',
          content:
            'Tickets are sold at the door and online. The museum is usually open Tuesday to Sunday, closed Mondays; check the current schedule before visiting. A combined beach-and-culture day works well.',
        },
        {
          id: 'visit',
          title: 'Visiting with the beach',
          content:
            'It is about 10–15 minutes on foot from Malagueta. Go to the museum in the cool morning or late afternoon, and save the midday for the sand and sea.',
        },
      ],
      faq: [
        {
          question: 'Where is the Centre Pompidou Málaga?',
          answer:
            'At the entrance to Muelle Uno by the Port of Málaga, about 10–15 minutes’ walk from Malagueta Beach.',
        },
        {
          question: 'Is the Pompidou Málaga worth visiting?',
          answer:
            'Yes if you like modern art: it shows a permanent collection with Picasso, Miró, Magritte and Dalí plus temporary shows.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Centro Pompidou Málaga',
      description:
        'El museo de arte Centro Pompidou Málaga en Muelle Uno: qué ver, entradas y cómo combinarlo con un día de playa en la Malagueta.',
      intro:
        'El Centro Pompidou Málaga es la primera sede del centro de París fuera de Francia. Su colorido cubo de vidrio marca la entrada de Muelle Uno, a pocos pasos de la playa.',
      sections: [
        {
          id: 'collection',
          title: 'Qué ver',
          content:
            'La colección permanente abarca el arte moderno y contemporáneo, con obras de Picasso, Miró, Magritte y Dalí entre otros, además de exposiciones temporales rotatorias.',
        },
        {
          id: 'tickets',
          title: 'Entradas y horarios',
          content:
            'Las entradas se venden en taquilla y en línea. El museo suele abrir de martes a domingo, cerrado los lunes; consulta el horario actual antes de ir. Un día playa y cultura combinado funciona bien.',
        },
        {
          id: 'visit',
          title: 'Visitarlo con la playa',
          content:
            'Está a unos 10–15 minutos a pie de la Malagueta. Ve al museo en la mañana fresca o al final de la tarde, y deja el mediodía para la arena y el mar.',
        },
      ],
      faq: [
        {
          question: '¿Dónde está el Centro Pompidou Málaga?',
          answer:
            'A la entrada de Muelle Uno junto al Puerto de Málaga, a unos 10–15 minutos a pie de la Playa de la Malagueta.',
        },
        {
          question: '¿Merece la pena el Pompidou Málaga?',
          answer:
            'Sí si te gusta el arte moderno: muestra una colección permanente con Picasso, Miró, Magritte y Dalí, además de exposiciones temporales.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'la-farola': {
    category: 'nearby',
    related: ['muelle-uno', 'photo-spots', 'promenade-walk', 'cruise-port-to-malagueta'],
    en: {
      title: 'La Farola Lighthouse, Málaga',
      description:
        'La Farola, Málaga’s historic lighthouse at the port entrance, and how to see it on a walk from Malagueta Beach.',
      intro:
        'La Farola is the iconic lighthouse at the entrance to the Port of Málaga. One of the few lighthouses in Spain with a feminine name, it is a beloved city symbol.',
      sections: [
        {
          id: 'history',
          title: 'History and name',
          content:
            'Built in the 19th century and rebuilt after storms, La Farola still guides ships into the port. Its name (“the lamp”) is unusual because most Spanish lighthouses are masculine.',
        },
        {
          id: 'view',
          title: 'What you see',
          content:
            'The lighthouse stands where the port meets the sea, with open-water views and the city behind. It is a calm spot for photos and a breezy end to the promenade walk.',
        },
        {
          id: 'visit',
          title: 'Visiting',
          content:
            'It is outside, free to view and reached by walking west from Malagueta past Muelle Uno. The breakwater area is pleasant at sunset.',
        },
      ],
      faq: [
        {
          question: 'What is La Farola in Málaga?',
          answer:
            'It is the historic lighthouse at the entrance to the Port of Málaga, a city symbol and a rare feminine-named lighthouse in Spain.',
        },
        {
          question: 'How do I get to La Farola from the beach?',
          answer:
            'Walk west along the seafront past Muelle Uno; the lighthouse is at the port entrance, about 15–20 minutes on foot.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'La Farola de Málaga',
      description:
        'La Farola, el faro histórico de Málaga a la entrada del puerto, y cómo verlo en un paseo desde la Playa de la Malagueta.',
      intro:
        'La Farola es el faro icónico a la entrada del Puerto de Málaga. Uno de los pocos faros de España con nombre femenino, es un símbolo querido de la ciudad.',
      sections: [
        {
          id: 'history',
          title: 'Historia y nombre',
          content:
            'Construido en el siglo XIX y reconstruido tras tormentas, La Farola sigue guiando a los barcos hacia el puerto. Su nombre (“la lámpara”) es inusual porque la mayoría de los faros españoles son masculinos.',
        },
        {
          id: 'view',
          title: 'Qué se ve',
          content:
            'El faro se alza donde el puerto se une al mar, con vistas abiertas al agua y la ciudad al fondo. Es un sitio tranquilo para fotos y un final ventoso del paseo.',
        },
        {
          id: 'visit',
          title: 'Visitarla',
          content:
            'Es al aire libre, gratuita de ver y se llega caminando al oeste desde la Malagueta pasando Muelle Uno. La zona del dique es agradable al atardecer.',
        },
      ],
      faq: [
        {
          question: '¿Qué es La Farola de Málaga?',
          answer:
            'Es el faro histórico a la entrada del Puerto de Málaga, un símbolo de la ciudad y un raro faro de nombre femenino en España.',
        },
        {
          question: '¿Cómo llegar a La Farola desde la playa?',
          answer:
            'Camina al oeste por el frente marítimo pasando Muelle Uno; el faro está en la entrada del puerto, unos 15–20 minutos a pie.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'malagueta-bullring': {
    category: 'nearby',
    related: ['muelle-uno', 'parque-de-malaga', 'one-day-itinerary', 'photo-spots'],
    en: {
      title: 'Malagueta Bullring (Plaza de Toros)',
      description:
        'The Plaza de Toros de La Malagueta: visiting the neo-Mudéjar bullring, its museum and how close it is to the beach.',
      intro:
        'The Plaza de Toros de La Malagueta is Málaga’s main bullring, a striking neo-Mudéjar building a few minutes’ walk from the beach. It hosts shows and a bullfighting museum.',
      sections: [
        {
          id: 'building',
          title: 'The building',
          content:
            'Designed in the 19th century with red-and-white brick arches, the circular ring is one of the city’s most photographed façades. It seats a large crowd during the season.',
        },
        {
          id: 'museum',
          title: 'Museum and tours',
          content:
            'A bullfighting museum (Museo Taurino) inside explains the tradition with costumes, posters and objects. Guided visits often include the ring and the stables.',
        },
        {
          id: 'visit',
          title: 'Visiting from the beach',
          content:
            'It is about a 5–10 minute walk from Malagueta, just behind the promenade. Check event and museum opening times before you go, as they vary by season.',
        },
      ],
      faq: [
        {
          question: 'How far is the bullring from Malagueta Beach?',
          answer:
            'About 5–10 minutes on foot, just behind the seafront promenade.',
        },
        {
          question: 'Can you visit the bullring?',
          answer:
            'Yes. There is a bullfighting museum and guided visits that include the ring and stables; check opening times by season.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Plaza de Toros de la Malagueta',
      description:
        'La Plaza de Toros de La Malagueta: visitar la plaza neo-mudéjar, su museo y cómo de cerca está de la playa.',
      intro:
        'La Plaza de Toros de La Malagueta es la plaza principal de Málaga, un llamativo edificio neo-mudéjar a pocos minutos a pie de la playa. Acoge espectáculos y un museo taurino.',
      sections: [
        {
          id: 'building',
          title: 'El edificio',
          content:
            'Diseñada en el siglo XIX con arcos de ladrillo rojo y blanco, la plaza circular es una de las fachadas más fotografiadas de la ciudad. Alberga a mucha gente en temporada.',
        },
        {
          id: 'museum',
          title: 'Museo y visitas',
          content:
            'Un museo taurino (Museo Taurino) en su interior explica la tradición con trajes, carteles y objetos. Las visitas guiadas suelen incluir la plaza y las cuadras.',
        },
        {
          id: 'visit',
          title: 'Visitarla desde la playa',
          content:
            'Está a unos 5–10 minutos a pie de la Malagueta, justo detrás del paseo. Consulta los horarios de eventos y museo antes de ir, pues varían por temporada.',
        },
      ],
      faq: [
        {
          question: '¿A qué distancia está la plaza de la Playa de la Malagueta?',
          answer:
            'Unos 5–10 minutos a pie, justo detrás del paseo marítimo.',
        },
        {
          question: '¿Se puede visitar la plaza de toros?',
          answer:
            'Sí. Hay un museo taurino y visitas guiadas que incluyen la plaza y las cuadras; consulta los horarios por temporada.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'english-cemetery': {
    category: 'nearby',
    related: ['parque-de-malaga', 'gibralfaro', 'one-day-itinerary', 'centre-pompidou'],
    en: {
      title: 'English Cemetery of Málaga',
      description:
        'The Cementerio Inglés, Málaga’s historic Protestant cemetery near the port, its notable graves and how to visit.',
      intro:
        'The English Cemetery (Cementerio Inglés) is one of Spain’s first non-Catholic burial grounds, opened in the 19th century near the port, a short walk from Malagueta.',
      sections: [
        {
          id: 'history',
          title: 'History',
          content:
            'Created for foreign Protestants and others denied Catholic burial, it became the resting place of traders, writers and travellers linked to Málaga. It reflects the city’s international port past.',
        },
        {
          id: 'graves',
          title: 'Notable graves',
          content:
            'Among the tombs are figures connected to Málaga’s literary and commercial history. The garden setting with mature trees makes it a peaceful, reflective stop.',
        },
        {
          id: 'visit',
          title: 'Visiting',
          content:
            'It is near the port, about 10–15 minutes from the beach. Visits are by arranged tour or open hours; check ahead as access is limited and the site is cared for by a foundation.',
        },
      ],
      faq: [
        {
          question: 'What is the English Cemetery of Málaga?',
          answer:
            'One of Spain’s first non-Catholic cemeteries, opened in the 1800s near the port, with graves of foreign traders and writers.',
        },
        {
          question: 'Can I visit the English Cemetery?',
          answer:
            'Access is limited and usually by arranged tour or set hours; check ahead as a foundation cares for the site.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Cementerio Inglés de Málaga',
      description:
        'El Cementerio Inglés, el histórico cementerio protestante de Málaga cerca del puerto, sus tumbas notables y cómo visitarlo.',
      intro:
        'El Cementerio Inglés es uno de los primeros camposantos no católicos de España, abierto en el siglo XIX cerca del puerto, a pocos pasos de la Malagueta.',
      sections: [
        {
          id: 'history',
          title: 'Historia',
          content:
            'Creado para protestantes extranjeros y otros sin derecho a enterramiento católico, se convirtió en el descanso de comerciantes, escritores y viajeros ligados a Málaga. Refleja el pasado portuario internacional de la ciudad.',
        },
        {
          id: 'graves',
          title: 'Tumbas notables',
          content:
            'Entre las tumbas hay figuras vinculadas a la historia literaria y comercial de Málaga. El jardín con árboles maduros lo hace una parada tranquila y reflexiva.',
        },
        {
          id: 'visit',
          title: 'Visitarlo',
          content:
            'Está cerca del puerto, a unos 10–15 minutos de la playa. La visita es por visita guiada o en horario de apertura; confirma antes, pues el acceso es limitado y lo cuida una fundación.',
        },
      ],
      faq: [
        {
          question: '¿Qué es el Cementerio Inglés de Málaga?',
          answer:
            'Uno de los primeros cementerios no católicos de España, abierto en el 1800 cerca del puerto, con tumbas de comerciantes y escritores extranjeros.',
        },
        {
          question: '¿Se puede visitar el Cementerio Inglés?',
          answer:
            'El acceso es limitado y suele ser por visita guiada o en horario fijado; confirma antes, pues una fundación cuida el recinto.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'parque-de-malaga': {
    category: 'nearby',
    related: ['english-cemetery', 'muelle-uno', 'one-day-itinerary', 'gibralfaro'],
    en: {
      title: 'Parque de Málaga',
      description:
        'The subtropical Parque de Málaga by the port: what to see, the fountains and how to reach it from Malagueta Beach.',
      intro:
        'The Parque de Málaga is a large subtropical park between the port and the city centre, famous for its palms, fountains and bougainvillea. It is a cool, shady retreat near the beach.',
      sections: [
        {
          id: 'plants',
          title: 'What to see',
          content:
            'Wander paths lined with giant ficus, palm trees and exotic plants, with tiled benches, ponds and fountains. It is one of the oldest public parks in the city and free to enter.',
        },
        {
          id: 'location',
          title: 'Location',
          content:
            'It stretches from the port towards the centre, bordering the Paseo del Parque. From Malagueta, cross the park horizontally or walk its northern edge toward the old town.',
        },
        {
          id: 'visit',
          title: 'Visiting',
          content:
            'Open daily and free. It is ideal in the heat of the day when the beach is fullest, and a lovely route between the cruise port, the centre and the beach.',
        },
      ],
      faq: [
        {
          question: 'Where is Parque de Málaga?',
          answer:
            'Between the Port of Málaga and the city centre, bordering the Paseo del Parque, a short walk from Malagueta.',
        },
        {
          question: 'Is Parque de Málaga free?',
          answer:
            'Yes, it is a public park, open daily and free to enter.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Parque de Málaga',
      description:
        'El Parque subtropical de Málaga junto al puerto: qué ver, las fuentes y cómo llegar desde la Playa de la Malagueta.',
      intro:
        'El Parque de Málaga es un gran parque subtropical entre el puerto y el centro, famoso por sus palmeras, fuentes y buganvillas. Es un refugio fresco y sombreado cerca de la playa.',
      sections: [
        {
          id: 'plants',
          title: 'Qué ver',
          content:
            'Recorre senderos bordeados de ficus gigantes, palmeras y plantas exóticas, con bancos de azulejos, estanques y fuentes. Es uno de los parques públicos más antiguos de la ciudad y de entrada gratuita.',
        },
        {
          id: 'location',
          title: 'Ubicación',
          content:
            'Se extiende desde el puerto hacia el centro, bordeando el Paseo del Parque. Desde la Malagueta, cruza el parque en horizontal o camina por su lado norte hacia el casco antiguo.',
        },
        {
          id: 'visit',
          title: 'Visitarlo',
          content:
            'Abierto todos los días y gratuito. Es ideal en las horas de más calor, cuando la playa está más llena, y una ruta agradable entre el puerto de cruceros, el centro y la playa.',
        },
      ],
      faq: [
        {
          question: '¿Dónde está el Parque de Málaga?',
          answer:
            'Entre el Puerto de Málaga y el centro, bordeando el Paseo del Parque, a pocos pasos de la Malagueta.',
        },
        {
          question: '¿Es gratis el Parque de Málaga?',
          answer:
            'Sí, es un parque público, abierto todos los días y de entrada gratuita.',
        },
      ],
      updated: 'October 2026',
    },
  },

  gibralfaro: {
    category: 'nearby',
    related: ['parque-de-malaga', 'one-day-itinerary', 'photo-spots', 'malagueta-bullring'],
    en: {
      title: 'Gibralfaro Castle, Málaga',
      description:
        'Castillo de Gibralfaro: the hilltop castle and viewpoint above Málaga, how to get there and the best views over the bay and Malagueta.',
      intro:
        'The Castillo de Gibralfaro crowns the hill above Málaga, linked by a pine path to the Alcazaba. From its ramparts you get the finest panorama of the city, the port and the beaches.',
      sections: [
        {
          id: 'history',
          title: 'History',
          content:
            'Built on a former Phoenician-Punic site and expanded in the 14th century by the Nasrid rulers, the castle defended the city and the Alcazaba below. Its walls and towers remain impressive.',
        },
        {
          id: 'views',
          title: 'The viewpoint',
          content:
            'The mirador looks over the port, the old town, the Costa del Sol and, on clear days, the mountains. Malagueta and the seafront stretch out directly below.',
        },
        {
          id: 'visit',
          title: 'Getting there',
          content:
            'Reach it on foot via the Camino de Gibralfaro from the Alcazaba (a steep but shaded climb), by car, or by the sightseeing bus. There is an entry fee to the castle; the viewpoint area is part of the visit.',
        },
      ],
      faq: [
        {
          question: 'What is Gibralfaro?',
          answer:
            'A hilltop castle above Málaga with the city’s best panoramic viewpoint over the port, the bay and the beaches.',
        },
        {
          question: 'How do I get to Gibralfaro from the beach?',
          answer:
            'By car or sightseeing bus, or on foot via the Alcazaba path; from Malagueta head into the centre and up towards the Alcazaba.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Castillo de Gibralfaro, Málaga',
      description:
        'Castillo de Gibralfaro: el castillo y mirador en lo alto de Málaga, cómo llegar y las mejores vistas sobre la bahía y la Malagueta.',
      intro:
        'El Castillo de Gibralfaro corona la colina sobre Málaga, unido por un sendero de pinos a la Alcazaba. Desde sus murallas se obtiene la mejor panorámica de la ciudad, el puerto y las playas.',
      sections: [
        {
          id: 'history',
          title: 'Historia',
          content:
            'Construido sobre un antiguo recinto fenicio-púnico y ampliado en el siglo XIV por los nazaríes, el castillo defendió la ciudad y la Alcazaba inferior. Sus murallas y torres siguen impresionando.',
        },
        {
          id: 'views',
          title: 'El mirador',
          content:
            'El mirador se asoma al puerto, al casco antiguo, a la Costa del Sol y, en días claros, a la sierra. La Malagueta y el frente marítimo se extienden justo abajo.',
        },
        {
          id: 'visit',
          title: 'Cómo llegar',
          content:
            'Se llega a pie por el Camino de Gibralfaro desde la Alcazaba (una subida empinada pero sombreada), en coche o en bus turístico. Hay entrada de pago al castillo; la zona del mirador forma parte de la visita.',
        },
      ],
      faq: [
        {
          question: '¿Qué es Gibralfaro?',
          answer:
            'Un castillo en lo alto de Málaga con el mejor mirador panorámico de la ciudad sobre el puerto, la bahía y las playas.',
        },
        {
          question: '¿Cómo llegar a Gibralfaro desde la playa?',
          answer:
            'En coche o bus turístico, o a pie por el camino de la Alcazaba; desde la Malagueta entra al centro y sube hacia la Alcazaba.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'la-caleta': {
    category: 'nearby',
    related: ['pedregalejo', 'espetos', 'chiringuitos', 'beaches-near-malaga-centre'],
    en: {
      title: 'La Caleta Beach, Málaga',
      description:
        'La Caleta, the small cove just east of Malagueta: what makes it different, its chiringuitos and how to walk there.',
      intro:
        'La Caleta is a compact, sheltered beach immediately east of Malagueta. It keeps a local, old-fashioned feel and is known for its family chiringuitos and calm water.',
      sections: [
        {
          id: 'character',
          title: 'Its character',
          content:
            'Smaller and more enclosed than Malagueta, La Caleta has a village-like calm. It is popular with locals and families who want a quieter swim close to the centre.',
        },
        {
          id: 'food',
          title: 'Chiringuitos and espeto',
          content:
            'A cluster of long-standing chiringuitos serves espeto de sardinas and fried fish right on the sand, continuing the beach-food tradition of the Málaga coast.',
        },
        {
          id: 'visit',
          title: 'Getting there',
          content:
            'Walk east along the promenade from Malagueta; La Caleta is the next cove, about 5–10 minutes away. It is an easy add-on to a Malagueta beach day.',
        },
      ],
      faq: [
        {
          question: 'What is La Caleta beach?',
          answer:
            'A small, sheltered cove just east of Malagueta with a local feel, calm water and beach chiringuitos.',
        },
        {
          question: 'How do I walk from Malagueta to La Caleta?',
          answer:
            'Continue east along the promenade; La Caleta is the next cove, about 5–10 minutes on foot.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Playa de la Caleta, Málaga',
      description:
        'La Caleta, la pequeña cala justo al este de la Malagueta: en qué se diferencia, sus chiringuitos y cómo llegar andando.',
      intro:
        'La Caleta es una playa compacta y resguardada inmediatamente al este de la Malagueta. Conserva un aire local y antiguo y es conocida por sus chiringuitos familiares y su agua tranquila.',
      sections: [
        {
          id: 'character',
          title: 'Su carácter',
          content:
            'Más pequeña y encerrada que la Malagueta, La Caleta tiene una calma de pueblo. Es popular con locales y familias que buscan un baño más tranquilo cerca del centro.',
        },
        {
          id: 'food',
          title: 'Chiringuitos y espeto',
          content:
            'Un grupo de chiringuitos de toda la vida sirve espeto de sardinas y pescado frito justo en la arena, continuando la tradición gastronómica de la costa de Málaga.',
        },
        {
          id: 'visit',
          title: 'Cómo llegar',
          content:
            'Camina hacia el este por el paseo desde la Malagueta; La Caleta es la siguiente cala, a unos 5–10 minutos. Es un complemento fácil a un día de playa en la Malagueta.',
        },
      ],
      faq: [
        {
          question: '¿Qué es la playa de la Caleta?',
          answer:
            'Una cala pequeña y resguardada justo al este de la Malagueta, con aire local, agua tranquila y chiringuitos de playa.',
        },
        {
          question: '¿Cómo ir andando de la Malagueta a la Caleta?',
          answer:
            'Sigue hacia el este por el paseo; La Caleta es la siguiente cala, a unos 5–10 minutos a pie.',
        },
      ],
      updated: 'October 2026',
    },
  },

  pedregalejo: {
    category: 'nearby',
    related: ['la-caleta', 'espetos', 'chiringuitos', 'beaches-near-malaga-centre'],
    en: {
      title: 'Pedregalejo, Málaga',
      description:
        'Pedregalejo: the old fishing quarter and beach east of Malagueta, its espeto huts and seaside walk.',
      intro:
        'Pedregalejo is the former fishing village east of the city centre, now a laid-back beach and dining district. It is the heartland of Málaga’s espeto de sardinas culture.',
      sections: [
        {
          id: 'history',
          title: 'Fishing heritage',
          content:
            'Once a working fishing neighbourhood, Pedregalejo keeps its net-huts and low seaside houses. The wooden espetero grills on the sand are a direct link to that past.',
        },
        {
          id: 'food',
          title: 'Eating by the sea',
          content:
            'Rows of chiringuitos specialise in espeto and fried fish, many family-run for generations. It is the most authentic spot to try the dish near the city.',
        },
        {
          id: 'visit',
          title: 'Getting there',
          content:
            'About 30 minutes’ walk east along the promenade from Malagueta, or a short bus or bike ride. The walk itself, past La Caleta, is part of the charm.',
        },
      ],
      faq: [
        {
          question: 'What is Pedregalejo?',
          answer:
            'The old fishing quarter east of the centre, now a relaxed beach and dining district and the home of Málaga’s espeto culture.',
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
      title: 'Pedregalejo, Málaga',
      description:
        'Pedregalejo: el antiguo barrio de pescadores y playa al este de la Malagueta, sus barracas de espeto y paseo marítimo.',
      intro:
        'Pedregalejo es la antigua villa de pescadores al este del centro, hoy un distrito playero y de restauración tranquilo. Es el corazón de la cultura del espeto de Málaga.',
      sections: [
        {
          id: 'history',
          title: 'Herencia pesquera',
          content:
            'Antiguo barrio de pescadores, Pedregalejo conserva sus casetas de redes y casas bajas junto al mar. Las parrillas de caña sobre la arena son un vínculo directo con ese pasado.',
        },
        {
          id: 'food',
          title: 'Comer junto al mar',
          content:
            'Filas de chiringuitos se especializan en espeto y pescado frito, muchos familiares de toda la vida. Es el sitio más auténtico para probar el plato cerca de la ciudad.',
        },
        {
          id: 'visit',
          title: 'Cómo llegar',
          content:
            'Unos 30 minutos a pie hacia el este por el paseo desde la Malagueta, o un corto trayecto en autobús o bici. El propio paseo, pasando La Caleta, es parte del encanto.',
        },
      ],
      faq: [
        {
          question: '¿Qué es Pedregalejo?',
          answer:
            'El antiguo barrio de pescadores al este del centro, hoy un distrito playero y de restauración tranquilo y cuna del espeto de Málaga.',
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
};
