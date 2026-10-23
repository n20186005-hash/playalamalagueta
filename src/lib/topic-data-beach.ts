import type { TopicEntry } from './topic-types';

export const beachTopics: Record<string, TopicEntry> = {
  'getting-here': {
    category: 'beach',
    related: ['parking', 'airport-to-malagueta', 'train-station-to-malagueta', 'promenade-walk'],
    en: {
      title: 'How to Get to Malagueta Beach, Málaga',
      description:
        'Ways to reach Playa de la Malagueta from Málaga city centre, by bus, on foot, by bike and by car, with the closest stops and walking times.',
      intro:
        'Playa de la Malagueta sits on the Paseo Marítimo Pablo Ruiz Picasso, just east of Málaga’s historic centre. It is one of the easiest urban beaches in the city to reach, whether you walk, take the bus, cycle or drive.',
      sections: [
        {
          id: 'on-foot',
          title: 'On foot from the centre',
          content:
            'From the Alcazaba or the port area, the beach is about a 15–20 minute walk along the seafront. Follow the Paseo del Parque and continue onto the Paseo Marítimo Pablo Ruiz Picasso. The flat, shaded promenade makes the walk pleasant even in summer.',
        },
        {
          id: 'by-bus',
          title: 'By urban bus',
          content:
            'EMT Málaga lines 11 and 34 stop closest to the beach (parada “Malagueta”). Line 11 runs from the city centre and the bus station, while line 34 connects the centre with the eastern seafront. A single ticket is cheap and buses run frequently during the day.',
        },
        {
          id: 'by-bike',
          title: 'By bike or on foot along the promenade',
          content:
            'The seafront has a segregated cycle lane that links the centre, the port and La Malagueta. Málaga’s public bike scheme and shared scooters are practical for the short hop from the old town.',
        },
        {
          id: 'by-car',
          title: 'By car',
          content:
            'Driving takes only a few minutes from the centre, but parking on the promenade fills up fast in summer. See our parking guide for the nearest paid lots and tips on when to arrive.',
        },
      ],
      faq: [
        {
          question: 'How long is the walk from Málaga centre to Malagueta Beach?',
          answer:
            'Roughly 15–20 minutes on foot along the flat seafront promenade from the Alcazaba or port area.',
        },
        {
          question: 'Which bus goes to Malagueta Beach?',
          answer:
            'EMT lines 11 and 34 stop at “Malagueta”, a short walk from the sand. Both connect the city centre with the beach.',
        },
        {
          question: 'Can I reach the beach without a car?',
          answer:
            'Yes. The beach is walkable from the centre, served by urban buses, and linked by a seafront cycle lane and shared bikes.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Cómo llegar a la Playa de la Malagueta, Málaga',
      description:
        'Formas de llegar a la Playa de la Malagueta desde el centro de Málaga en autobús, a pie, en bici y en coche, con las paradas más cercanas y tiempos a pie.',
      intro:
        'La Playa de la Malagueta se encuentra en el Paseo Marítimo Pablo Ruiz Picasso, justo al este del centro histórico de Málaga. Es una de las playas urbanas más fáciles de alcanzar, ya sea a pie, en autobús, en bicicleta o en coche.',
      sections: [
        {
          id: 'on-foot',
          title: 'A pie desde el centro',
          content:
            'Desde la Alcazaba o la zona del puerto, la playa está a unos 15–20 minutos a pie por el frente marítimo. Sigue el Paseo del Parque y continúa por el Paseo Marítimo Pablo Ruiz Picasso. El paseo llano y con sombra hace el trayecto agradable incluso en verano.',
        },
        {
          id: 'by-bus',
          title: 'En autobús urbano',
          content:
            'Las líneas 11 y 34 de EMT Málaga son las que paran más cerca de la playa (parada “Malagueta”). La línea 11 sale del centro y de la estación de autobuses, y la 34 conecta el centro con el frente oriental. El billete sencillo es económico y los autobuses circulan con frecuencia durante el día.',
        },
        {
          id: 'by-bike',
          title: 'En bicicleta o a pie por el paseo',
          content:
            'El frente marítimo tiene un carril bici segregado que une el centro, el puerto y La Malagueta. El sistema público de bicicletas de Málaga y los patinetes compartidos son prácticos para el corto trayecto desde el casco antiguo.',
        },
        {
          id: 'by-car',
          title: 'En coche',
          content:
            'En coche se tarda solo unos minutos desde el centro, pero el aparcamiento del paseo se llena pronto en verano. Consulta nuestra guía de aparcamiento para los parkings de pago más cercanos y cuándo llegar.',
        },
      ],
      faq: [
        {
          question: '¿Cuánto se tarda a pie del centro a la Playa de la Malagueta?',
          answer:
            'Unos 15–20 minutos a pie por el paseo llano y marítimo desde la Alcazaba o la zona del puerto.',
        },
        {
          question: '¿Qué autobús va a la Playa de la Malagueta?',
          answer:
            'Las líneas 11 y 34 de EMT paran en “Malagueta”, a pocos pasos de la arena. Ambas conectan el centro con la playa.',
        },
        {
          question: '¿Se puede llegar a la playa sin coche?',
          answer:
            'Sí. La playa es accesible a pie desde el centro, cuenta con autobuses urbanos y está unida por un carril bici de frente marítimo y bicicletas compartidas.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'airport-to-malagueta': {
    category: 'beach',
    related: ['getting-here', 'train-station-to-malagueta', 'cruise-port-to-malagueta', 'parking'],
    en: {
      title: 'Málaga Airport to Malagueta Beach',
      description:
        'How to travel from Málaga-Costa del Sol Airport (AGP) to Playa de la Malagueta by train, bus, taxi and ride-hailing, with times and costs.',
      intro:
        'Málaga Airport (AGP) is about 11 km southwest of the city. Reaching Malagueta Beach is straightforward thanks to the Cercanías C1 train, which links the airport with the centre in around 15 minutes.',
      sections: [
        {
          id: 'by-train',
          title: 'By train (Cercanías C1)',
          content:
            'The C1 commuter train runs from the airport to Málaga Centro-Alameda and María Zambrano. From Centro-Alameda it is a flat 15–20 minute walk or a short bus ride to the beach. Trains run roughly every 20–30 minutes and are the cheapest reliable option.',
        },
        {
          id: 'by-taxi',
          title: 'By taxi or ride-hailing',
          content:
            'Taxis have a fixed-ish fare to the centre (around €20–30 depending on time and luggage). The drive takes 20–30 minutes in normal traffic. Ride-hailing pickups are signed outside the terminals.',
        },
        {
          id: 'by-bus',
          title: 'By express bus',
          content:
            'The Exprés Aeropuerto (line A) connects the airport with the city centre (Paseo del Parque), from where the beach is a 15-minute walk. It is handy if you have heavy luggage and want a direct seat.',
        },
      ],
      faq: [
        {
          question: 'Is there a train from Málaga airport to Malagueta Beach?',
          answer:
            'Yes. The C1 Cercanías train goes from the airport to Málaga Centro-Alameda; from there it is a 15–20 minute walk or a short bus to the beach.',
        },
        {
          question: 'How much is a taxi from the airport to the beach?',
          answer:
            'Around €20–30 to the centre depending on time of day and luggage, with a 20–30 minute drive in normal traffic.',
        },
        {
          question: 'How long does the airport transfer take?',
          answer:
            'By train about 15 minutes to the centre plus the walk; by taxi or bus roughly 20–30 minutes depending on traffic.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Del Aeropuerto de Málaga a la Playa de la Malagueta',
      description:
        'Cómo ir del Aeropuerto de Málaga-Costa del Sol (AGP) a la Playa de la Malagueta en tren, autobús, taxi y VTC, con tiempos y precios.',
      intro:
        'El Aeropuerto de Málaga (AGP) está unos 11 km al suroeste de la ciudad. Llegar a la Playa de la Malagueta es sencillo gracias al tren Cercanías C1, que une el aeropuerto con el centro en unos 15 minutos.',
      sections: [
        {
          id: 'by-train',
          title: 'En tren (Cercanías C1)',
          content:
            'El tren de cercanías C1 va del aeropuerto a Málaga Centro-Alameda y María Zambrano. Desde Centro-Alameda hay un paseo llano de 15–20 minutos o un corto trayecto en autobús hasta la playa. Los trenes pasan cada 20–30 minutos y son la opción fiable más económica.',
        },
        {
          id: 'by-taxi',
          title: 'En taxi o VTC',
          content:
            'Los taxis tienen una tarifa aproximada al centro (unos 20–30 € según hora y equipaje). El trayecto dura 20–30 minutos con tráfico normal. La recogida de VTC está señalizada fuera de las terminales.',
        },
        {
          id: 'by-bus',
          title: 'En autobús exprés',
          content:
            'El Exprés Aeropuerto (línea A) une el aeropuerto con el centro (Paseo del Parque), desde donde la playa está a 15 minutos a pie. Es cómodo si llevas mucho equipaje y quieres un asiento directo.',
        },
      ],
      faq: [
        {
          question: '¿Hay tren del aeropuerto de Málaga a la Playa de la Malagueta?',
          answer:
            'Sí. El tren Cercanías C1 va del aeropuerto a Málaga Centro-Alameda; desde allí son 15–20 minutos a pie o un corto autobús hasta la playa.',
        },
        {
          question: '¿Cuánto cuesta un taxi del aeropuerto a la playa?',
          answer:
            'Unos 20–30 € al centro según la hora y el equipaje, con un trayecto de 20–30 minutos en tráfico normal.',
        },
        {
          question: '¿Cuánto dura el traslado desde el aeropuerto?',
          answer:
            'En tren unos 15 minutos al centro más el paseo; en taxi o autobús unos 20–30 minutos según el tráfico.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'train-station-to-malagueta': {
    category: 'beach',
    related: ['getting-here', 'airport-to-malagueta', 'cruise-port-to-malagueta', 'parking'],
    en: {
      title: 'Málaga Train Station to Malagueta Beach',
      description:
        'How to get from María Zambrano / Centro-Alameda station to Playa de la Malagueta by bus, on foot and by taxi.',
      intro:
        'Málaga’s main rail hub is María Zambrano, with the adjacent Centro-Alameda Cercanías stop. From either, Malagueta Beach is a short hop east along the promenade.',
      sections: [
        {
          id: 'walking',
          title: 'Walking from Centro-Alameda',
          content:
            'Centro-Alameda is the closest station to the beach. Cross the river Guadalmedina and follow the seafront north-east; the walk is about 15–20 minutes on flat ground.',
        },
        {
          id: 'by-bus',
          title: 'By bus from María Zambrano',
          content:
            'From María Zambrano you can take EMT line 11 towards the beach, or walk 5 minutes to Centro-Alameda and continue on foot. Buses are frequent during daylight hours.',
        },
        {
          id: 'taxi',
          title: 'Taxi',
          content:
            'A taxi from María Zambrano to the beach is a quick 5–10 minute ride and costs only a few euros, useful if you have luggage or kids.',
        },
      ],
      faq: [
        {
          question: 'Which station is closest to Malagueta Beach?',
          answer:
            'Centro-Alameda (Cercanías) is the closest, about 15–20 minutes on foot. María Zambrano is the main long-distance hub a few minutes further west.',
        },
        {
          question: 'Can I walk from the train station to the beach?',
          answer:
            'Yes. From Centro-Alameda it is a flat 15–20 minute walk along the seafront; from María Zambrano add about 5 minutes.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'De la Estación de Málaga a la Playa de la Malagueta',
      description:
        'Cómo ir de la estación María Zambrano / Centro-Alameda a la Playa de la Malagueta en autobús, a pie y en taxi.',
      intro:
        'El principal nudo ferroviario de Málaga es María Zambrano, con la parada de Cercanías Centro-Alameda junto a ella. Desde cualquiera de las dos, la Playa de la Malagueta está a un corto trayecto hacia el este por el paseo.',
      sections: [
        {
          id: 'walking',
          title: 'A pie desde Centro-Alameda',
          content:
            'Centro-Alameda es la estación más cercana a la playa. Cruza el río Guadalmedina y sigue el frente marítimo hacia el noreste; el paseo es de unos 15–20 minutos por terreno llano.',
        },
        {
          id: 'by-bus',
          title: 'En autobús desde María Zambrano',
          content:
            'Desde María Zambrano puedes tomar la línea 11 de EMT hacia la playa, o caminar 5 minutos hasta Centro-Alameda y continuar a pie. Los autobuses son frecuentes en horario diurno.',
        },
        {
          id: 'taxi',
          title: 'Taxi',
          content:
            'Un taxi de María Zambrano a la playa es un trayecto rápido de 5–10 minutos y cuesta solo unos pocos euros, útil si llevas equipaje o niños.',
        },
      ],
      faq: [
        {
          question: '¿Qué estación está más cerca de la Playa de la Malagueta?',
          answer:
            'Centro-Alameda (Cercanías) es la más cercana, a unos 15–20 minutos a pie. María Zambrano es la principal de larga distancia, unos minutos más al oeste.',
        },
        {
          question: '¿Se puede ir andando de la estación a la playa?',
          answer:
            'Sí. Desde Centro-Alameda son 15–20 minutos llano por el frente marítimo; desde María Zambrano suma unos 5 minutos más.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'cruise-port-to-malagueta': {
    category: 'beach',
    related: ['getting-here', 'airport-to-malagueta', 'muelle-uno', 'promenade-walk'],
    en: {
      title: 'Cruise Port to Malagueta Beach',
      description:
        'How cruise passengers at the Port of Málaga can reach Playa de la Malagueta on foot, by shuttle and by taxi.',
      intro:
        'The Port of Málaga (Puerto de Málaga) is one of the main cruise calls in the Mediterranean. Malagueta Beach is only about 1 km east of the passenger terminal, an easy walk along the water.',
      sections: [
        {
          id: 'on-foot',
          title: 'On foot',
          content:
            'From the cruise terminal, exit towards the city and follow the promenade east past Muelle Uno. The beach is roughly a 12–15 minute walk along the seafront.',
        },
        {
          id: 'shuttle',
          title: 'Port shuttle and taxis',
          content:
            'Cruise days often have a free port shuttle to the terminal gate. Taxis wait near the terminal; the short ride to the beach takes only a few minutes.',
        },
        {
          id: 'combine',
          title: 'Combine with Muelle Uno',
          content:
            'Muelle Uno shopping and dining area sits between the terminal and the beach, so you can stroll the port, grab a coffee, then continue to the sand.',
        },
      ],
      faq: [
        {
          question: 'How far is Malagueta Beach from the cruise port?',
          answer:
            'About 1 km, roughly a 12–15 minute walk east along the seafront promenade past Muelle Uno.',
        },
        {
          question: 'Can cruise passengers walk to the beach?',
          answer:
            'Yes. Exit the terminal towards the city, follow the promenade past Muelle Uno and the beach is a short walk east.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Del Puerto de Cruceros a la Playa de la Malagueta',
      description:
        'Cómo llegar los pasajeros de crucero del Puerto de Málaga a la Playa de la Malagueta a pie, en lanzadera y en taxi.',
      intro:
        'El Puerto de Málaga es uno de los principales puertos de cruceros del Mediterráneo. La Playa de la Malagueta está solo unos 1 km al este de la terminal de pasajeros, un paseo fácil junto al agua.',
      sections: [
        {
          id: 'on-foot',
          title: 'A pie',
          content:
            'Desde la terminal de cruceros, sal hacia la ciudad y sigue el paseo hacia el este pasando Muelle Uno. La playa está a unos 12–15 minutos a pie por el frente marítimo.',
        },
        {
          id: 'shuttle',
          title: 'Lanzadera del puerto y taxis',
          content:
            'En días de crucero suele haber una lanzadera gratuita hasta la puerta de la terminal. Los taxis esperan cerca; el corto trayecto a la playa dura solo unos minutos.',
        },
        {
          id: 'combine',
          title: 'Combínalo con Muelle Uno',
          content:
            'La zona comercial y de restauración Muelle Uno está entre la terminal y la playa, así puedes pasear por el puerto, tomar un café y seguir hasta la arena.',
        },
      ],
      faq: [
        {
          question: '¿A qué distancia está la Playa de la Malagueta del puerto de cruceros?',
          answer:
            'Unos 1 km, aproximadamente 12–15 minutos a pie hacia el este por el paseo marítimo pasando Muelle Uno.',
        },
        {
          question: '¿Pueden los pasajeros de crucero ir andando a la playa?',
          answer:
            'Sí. Sal de la terminal hacia la ciudad, sigue el paseo pasando Muelle Uno y la playa está a un corto paseo hacia el este.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'parking': {
    category: 'beach',
    related: ['getting-here', 'sunbeds-and-umbrellas', 'facilities', 'beach-safety'],
    en: {
      title: 'Parking Near Malagueta Beach',
      description:
        'Where to park near Playa de la Malagueta: seafront pay-and-display spaces, underground car parks and tips to avoid the summer scramble.',
      intro:
        'Malagueta has limited on-street parking right by the sand, so it pays to know the options before you drive. The seafront and the nearby underground car parks are the most convenient, but they fill up in peak season.',
      sections: [
        {
          id: 'street',
          title: 'Seafront pay-and-display',
          content:
            'Metered blue-zone spaces line the Paseo Marítimo. They are the closest to the sand but limited and time-restricted, especially in summer mornings. Have coins or a parking app ready.',
        },
        {
          id: 'underground',
          title: 'Underground car parks',
          content:
            'The parking under the Paseo del Parque and near the port are a short walk from the beach and offer shade and security. Rates are higher than street parking but you are guaranteed a space outside the very busiest days.',
        },
        {
          id: 'tips',
          title: 'Tips to avoid stress',
          content:
            'Arrive before 11:00 in summer, consider the bus or bike instead of driving, and park a little further west near the centre if the seafront is full. Never leave valuables in the car.',
        },
      ],
      faq: [
        {
          question: 'Is there parking at Malagueta Beach?',
          answer:
            'Yes, there is metered seafront parking and underground car parks nearby, but spaces are limited and fill quickly in summer.',
        },
        {
          question: 'How much does parking cost?',
          answer:
            'Street blue-zone parking is cheap by the hour; underground car parks charge more but offer shade and guaranteed spaces.',
        },
        {
          question: 'When should I arrive to find parking?',
          answer:
            'Before 11:00 in high season. Later in the day the seafront fills up and you may need to park near the centre and walk.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Aparcamiento cerca de la Playa de la Malagueta',
      description:
        'Dónde aparcar cerca de la Playa de la Malagueta: plazas de zona azul en el frente, parkings subterráneos y trucos para evitar la aglomeración estival.',
      intro:
        'La Malagueta tiene aparcamiento en superficie limitado junto a la arena, así que conviene conocer las opciones antes de venir en coche. El frente marítimo y los parkings subterráneos cercanos son los más cómodos, pero se llenan en temporada alta.',
      sections: [
        {
          id: 'street',
          title: 'Zona azul en el frente',
          content:
            'Las plazas de pago del Paseo Marítimo son las más cercanas a la arena, pero limitadas y con tiempo restringido, sobre todo por las mañanas de verano. Lleva monedas o una app de aparcamiento.',
        },
        {
          id: 'underground',
          title: 'Parkings subterráneos',
          content:
            'El parking bajo el Paseo del Parque y cerca del puerto están a pocos pasos de la playa y ofrecen sombra y seguridad. La tarifa es mayor que en superficie, pero garantizan plaza salvo los días de más afluencia.',
        },
        {
          id: 'tips',
          title: 'Trucos para evitar el estrés',
          content:
            'Llega antes de las 11:00 en verano, plantéate el autobús o la bici en lugar del coche, y aparca un poco más al oeste cerca del centro si el frente está lleno. Nunca dejes objetos de valor en el coche.',
        },
      ],
      faq: [
        {
          question: '¿Hay aparcamiento en la Playa de la Malagueta?',
          answer:
            'Sí, hay zona azul en el frente y parkings subterráneos cercanos, pero las plazas son limitadas y se llenan pronto en verano.',
        },
        {
          question: '¿Cuánto cuesta aparcar?',
          answer:
            'La zona azul en superficie es barata por hora; los parkings subterráneos cuestan más pero ofrecen sombra y plaza garantizada.',
        },
        {
          question: '¿Cuándo debo llegar para encontrar aparcamiento?',
          answer:
            'Antes de las 11:00 en temporada alta. Más tarde el frente se llena y puede que debas aparcar cerca del centro y venir andando.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'sunbeds-and-umbrellas': {
    category: 'beach',
    related: ['facilities', 'beach-safety', 'chiringuitos', 'budget-food'],
    en: {
      title: 'Sunbeds & Umbrellas at Malagueta Beach',
      description:
        'How sun lounger and umbrella rental works at Playa de la Malagueta, typical prices and what is included in a beach set.',
      intro:
        'Malagueta is a serviced urban beach, so you can rent a sun lounger and parasol right on the sand instead of bringing your own. Rental is run by the beach concessions and chiringuitos along the promenade.',
      sections: [
        {
          id: 'how',
          title: 'How rental works',
          content:
            'Look for the rows of loungers with attendants along the central beach. You pay per set (usually two loungers and one parasol) for the day. Pay at the attendant or the adjoining chiringuito; keep the receipt.',
        },
        {
          id: 'prices',
          title: 'Typical prices',
          content:
            'A standard set of two sunbeds and an umbrella is usually a few euros each; prices rise a little in peak summer. Rates are posted on signs at the concession. Bring cash as a backup.',
        },
        {
          id: 'free',
          title: 'Free sand option',
          content:
            'If you prefer, large stretches of Malagueta are free public sand where you can lay your own towel. The rental rows are clearly separated from the free areas.',
        },
      ],
      faq: [
        {
          question: 'Can I rent sunbeds at Malagueta Beach?',
          answer:
            'Yes. Concessions along the central beach rent sets of sun loungers and parasols by the day.',
        },
        {
          question: 'How much are sunbeds and umbrellas?',
          answer:
            'Typically a few euros per lounger; a set of two beds and one umbrella is posted at the concession and rises slightly in peak summer.',
        },
        {
          question: 'Is there free beach at Malagueta?',
          answer:
            'Yes. Much of the sand is free public space for your own towel; only the concession rows are paid.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Hamacas y Sombrillas en la Playa de la Malagueta',
      description:
        'Cómo funciona el alquiler de hamacas y sombrillas en la Playa de la Malagueta, precios habituales y qué incluye el conjunto de playa.',
      intro:
        'La Malagueta es una playa urbana servicios, por lo que puedes alquilar hamaca y parasol justo en la arena en lugar de traer los tuyos. El alquiler lo gestionan las concesiones y chiringuitos del paseo.',
      sections: [
        {
          id: 'how',
          title: 'Cómo funciona el alquiler',
          content:
            'Busca las filas de hamacas con socorrista o encargado en la playa central. Pagas por conjunto (suele ser dos hamacas y una sombrilla) para el día. Paga al encargado o en el chiringuito contiguo y guarda el recibo.',
        },
        {
          id: 'prices',
          title: 'Precios habituales',
          content:
            'Un conjunto de dos hamacas y una sombrilla suele costar unos pocos euros cada una; los precios suben algo en pleno verano. Las tarifas están en carteles en la concesión. Lleva efectivo por si acaso.',
        },
        {
          id: 'free',
          title: 'Opción de arena gratuita',
          content:
            'Si lo prefieres, gran parte de la Malagueta es arena pública gratuita donde puedes extender tu propia toalla. Las filas de alquiler están claramente separadas de las zonas libres.',
        },
      ],
      faq: [
        {
          question: '¿Se pueden alquilar hamacas en la Playa de la Malagueta?',
          answer:
            'Sí. Las concesiones de la playa central alquilan conjuntos de hamacas y parasoles por el día.',
        },
        {
          question: '¿Cuánto cuestan hamacas y sombrillas?',
          answer:
            'Suele ser unos pocos euros por hamaca; un conjunto de dos camas y una sombrilla tiene tarifa fijada en la concesión y sube algo en pleno verano.',
        },
        {
          question: '¿Hay playa gratuita en la Malagueta?',
          answer:
            'Sí. Gran parte de la arena es zona pública gratuita para tu toalla; solo las filas de concesión son de pago.',
        },
      ],
      updated: 'October 2026',
    },
  },

  facilities: {
    category: 'beach',
    related: ['sunbeds-and-umbrellas', 'accessibility', 'beach-safety', 'chiringuitos'],
    en: {
      title: 'Facilities at Malagueta Beach',
      description:
        'Public showers, toilets, lifeguards, children’s play areas and accessibility at Playa de la Malagueta.',
      intro:
        'Malagueta is one of the best-equipped urban beaches in Málaga, with the services you would expect from a city beach managed by the Ayuntamiento de Málaga.',
      sections: [
        {
          id: 'services',
          title: 'Public services',
          content:
            'The beach has public toilets and open-air showers, foot-rinse points, and a seasonal lifeguard and rescue post. There are litter bins and regular cleaning through the day.',
        },
        {
          id: 'family',
          title: 'For families',
          content:
            'A children’s playground and calm, shallow-entry swimming make it popular with families. The wide promenade is buggy-friendly and good for a stroll.',
        },
        {
          id: 'season',
          title: 'Seasonal notes',
          content:
            'Lifeguards and some services operate mainly from June to September. Outside summer, the beach is quieter and services are reduced, but the sand and promenade remain open.',
        },
      ],
      faq: [
        {
          question: 'Are there showers and toilets at Malagueta Beach?',
          answer:
            'Yes. There are public toilets, open-air showers and foot-rinse points along the beach.',
        },
        {
          question: 'Is there a lifeguard?',
          answer:
            'A lifeguard and rescue post operates in the summer season, roughly June to September.',
        },
        {
          question: 'Is Malagueta good for families?',
          answer:
            'Yes. It has a children’s playground, gentle entry to the water and a wide, buggy-friendly promenade.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Servicios de la Playa de la Malagueta',
      description:
        'Duchas públicas, aseos, socorristas, zona infantil y accesibilidad en la Playa de la Malagueta.',
      intro:
        'La Malagueta es una de las playas urbanas mejor equipadas de Málaga, con los servicios propios de una playa gestionada por el Ayuntamiento de Málaga.',
      sections: [
        {
          id: 'services',
          title: 'Servicios públicos',
          content:
            'La playa cuenta con aseos públicos y duchas al aire libre, puntos de aclarado de pies y un puesto de socorrismo estival. Hay papeleras y limpieza regular durante el día.',
        },
        {
          id: 'family',
          title: 'Para familias',
          content:
            'Un área infantil y un baño de entrada suave la hacen muy popular con las familias. El ancho paseo es cómodo para cochecitos y para pasear.',
        },
        {
          id: 'season',
          title: 'Notas de temporada',
          content:
            'Socorristas y algunos servicios funcionan sobre todo de junio a septiembre. Fuera del verano la playa está más tranquila y con servicios reducidos, pero la arena y el paseo siguen abiertos.',
        },
      ],
      faq: [
        {
          question: '¿Hay duchas y aseos en la Playa de la Malagueta?',
          answer:
            'Sí. Hay aseos públicos, duchas al aire libre y puntos de aclarado de pies por la playa.',
        },
        {
          question: '¿Hay socorrista?',
          answer:
            'Hay puesto de socorrismo en temporada estival, aproximadamente de junio a septiembre.',
        },
        {
          question: '¿Es la Malagueta buena para familias?',
          answer:
            'Sí. Tiene área infantil, entrada suave al agua y un ancho paseo cómodo para cochecitos.',
        },
      ],
      updated: 'October 2026',
    },
  },

  accessibility: {
    category: 'beach',
    related: ['facilities', 'with-kids', 'getting-here', 'beach-safety'],
    en: {
      title: 'Accessibility at Malagueta Beach',
      description:
        'Step-free access, accessible promenade, beach wheelchairs and facilities for visitors with reduced mobility at Playa de la Malagueta.',
      intro:
        'Malagueta is a flat, urban beach with good step-free access from the promenade. The city beach service provides accessible ramps and, in season, adapted beach wheelchairs.',
      sections: [
        {
          id: 'access',
          title: 'Getting onto the sand',
          content:
            'Wooden boardwalks and ramps lead from the promenade to the sand at several points. The promenade itself is smooth, step-free and suitable for wheelchairs and pushchairs.',
        },
        {
          id: 'wheelchairs',
          title: 'Beach wheelchairs',
          content:
            'During the summer season, adapted amphibious wheelchairs and companion support are often available through the municipal beach service. Ask at the lifeguard post or the information point for availability.',
        },
        {
          id: 'facilities',
          title: 'Accessible facilities',
          content:
            'Public toilets include accessible cubicles, and the seafront is well lit in the evening. Parking for disabled badge holders is available in the blue zone near the beach.',
        },
      ],
      faq: [
        {
          question: 'Is Malagueta Beach wheelchair accessible?',
          answer:
            'Yes. Ramps and boardwalks connect the step-free promenade with the sand, and accessible toilets are available.',
        },
        {
          question: 'Are beach wheelchairs available?',
          answer:
            'In summer, adapted amphibious wheelchairs are often offered by the municipal beach service; ask at the lifeguard post for availability.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Accesibilidad en la Playa de la Malagueta',
      description:
        'Acceso sin barreras, paseo accesible, sillas anfibias y servicios para visitantes con movilidad reducida en la Playa de la Malagueta.',
      intro:
        'La Malagueta es una playa urbana y llana con buen acceso sin barreras desde el paseo. El servicio municipal de playa ofrece rampas adaptadas y, en temporada, sillas anfibias.',
      sections: [
        {
          id: 'access',
          title: 'Acceso a la arena',
          content:
            'Pasarelas y rampas de madera unen el paseo con la arena en varios puntos. El propio paseo es llano, sin peldaños y apto para sillas de ruedas y cochecitos.',
        },
        {
          id: 'wheelchairs',
          title: 'Sillas anfibias',
          content:
            'En temporada estival suele haber sillas anfibias adaptadas y acompañamiento a través del servicio municipal de playa. Pregunta en el puesto de socorrismo o en el punto de información por disponibilidad.',
        },
        {
          id: 'facilities',
          title: 'Servicios accesibles',
          content:
            'Los aseos públicos incluyen cabinas accesibles y el frente está bien iluminado por la noche. Hay aparcamiento para titulares de tarjeta de discapacidad en la zona azul cerca de la playa.',
        },
      ],
      faq: [
        {
          question: '¿Es accesible la Playa de la Malagueta en silla de ruedas?',
          answer:
            'Sí. Rampas y pasarelas unen el paseo sin barreras con la arena, y hay aseos accesibles.',
        },
        {
          question: '¿Hay sillas anfibias en la playa?',
          answer:
            'En verano el servicio municipal suele ofrecer sillas anfibias adaptadas; pregunta en el puesto de socorrismo por disponibilidad.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'promenade-walk': {
    category: 'beach',
    related: ['getting-here', 'photo-spots', 'muelle-uno', 'la-farola'],
    en: {
      title: 'Malagueta Promenade Walk',
      description:
        'A flat seafront walking route along the Paseo Marítimo Pablo Ruiz Picasso, from the port past Malagueta to the eastern beaches.',
      intro:
        'The Paseo Marítimo Pablo Ruiz Picasso is a wide, shaded promenade perfect for a relaxed seaside stroll. It links the port, Malagueta and the beaches further east in one continuous walk.',
      sections: [
        {
          id: 'route',
          title: 'The route',
          content:
            'Start at Muelle Uno by the port, walk east past the Malagueta beach bars and the bullring viewpoint, and continue towards La Caleta and Pedregalejo. The whole stretch is flat and about 3 km one way to Pedregalejo.',
        },
        {
          id: 'features',
          title: 'What you pass',
          content:
            'Along the way you will find chiringuitos, exercise zones, bike lanes, public art and open sea views. It is popular with walkers, runners and skaters from early morning to sunset.',
        },
        {
          id: 'tips',
          title: 'Walking tips',
          content:
            'Go early or late to avoid the midday sun in summer, carry water, and keep to the shaded side where the palms line the path. The promenade is lit in the evening.',
        },
      ],
      faq: [
        {
          question: 'How long is the Malagueta promenade walk?',
          answer:
            'It is about 3 km one way from the port to Pedregalejo, all flat and continuous along the seafront.',
        },
        {
          question: 'Is the promenade good for walking and running?',
          answer:
            'Yes. It is wide, flat, shaded in parts and popular with walkers, runners and skaters from morning to sunset.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Paseo Marítimo de la Malagueta',
      description:
        'Ruta a pie llana junto al Paseo Marítimo Pablo Ruiz Picasso, desde el puerto pasando la Malagueta hasta las playas orientales.',
      intro:
        'El Paseo Marítimo Pablo Ruiz Picasso es un paseo ancho y sombreado perfecto para un paseo tranquilo junto al mar. Une el puerto, la Malagueta y las playas más al este en un solo recorrido continuo.',
      sections: [
        {
          id: 'route',
          title: 'La ruta',
          content:
            'Empieza en Muelle Uno junto al puerto, camina hacia el este pasando los chiringuitos de la Malagueta y el mirador de la plaza de toros, y continúa hacia La Caleta y Pedregalejo. Todo el tramo es llano y unos 3 km en una dirección hasta Pedregalejo.',
        },
        {
          id: 'features',
          title: 'Qué encuentras',
          content:
            'Por el camino hay chiringuitos, zonas de ejercicio, carril bici, arte público y vistas abiertas al mar. Es muy frecuentado por paseantes, corredores y patinadores desde la mañana hasta la puesta de sol.',
        },
        {
          id: 'tips',
          title: 'Consejos para caminar',
          content:
            'Ve temprano o al final del día para evitar el sol del mediodía en verano, lleva agua y camina por la zona sombreada donde palmeras bordean el camino. El paseo está iluminado por la noche.',
        },
      ],
      faq: [
        {
          question: '¿Cuánto mide el paseo de la Malagueta?',
          answer:
            'Unos 3 km en una dirección desde el puerto hasta Pedregalejo, todo llano y continuo junto al frente marítimo.',
        },
        {
          question: '¿Es buen paseo para caminar y correr?',
          answer:
            'Sí. Es ancho, llano, sombreado en tramos y muy frecuentado por paseantes, corredores y patinadores de mañana a tarde.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'photo-spots': {
    category: 'beach',
    related: ['promenade-walk', 'la-farola', 'boat-trips', 'best-time-to-visit'],
    en: {
      title: 'Best Photo Spots at Malagueta Beach',
      description:
        'Where to take photos at Playa de la Malagueta: the promenade, chiringuitos, sea views and the best light for sunrise and sunset.',
      intro:
        'Malagueta’s golden sand, blue water and city skyline make it an easy place to shoot. The light is best in the early morning and late afternoon.',
      sections: [
        {
          id: 'promenade',
          title: 'Promenade and palms',
          content:
            'The shaded palm promenade gives clean leading lines and a classic Málaga postcard frame. Shoot low for reflections after the morning cleaning.',
        },
        {
          id: 'chiringuitos',
          title: 'Chiringuitos and beach life',
          content:
            'The colourful beach bars and rows of sunbeds make natural foreground subjects. Early morning, before crowds, keeps the scene calm.',
        },
        {
          id: 'light',
          title: 'Best light',
          content:
            'Sunrise lights the water from the east; sunset warms the promenade and the city behind the beach. The blue hour after sunset is great for long exposures of the lit seafront.',
        },
      ],
      faq: [
        {
          question: 'When is the best light for photos at Malagueta?',
          answer:
            'Early morning for calm, empty scenes and sunrise over the water; late afternoon and blue hour for warm, lit promenade shots.',
        },
        {
          question: 'Where are the most photogenic spots?',
          answer:
            'The palm promenade, the rows of chiringuitos and the open sea horizon are the classic frames.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Mejores Rincones para Fotos en la Playa de la Malagueta',
      description:
        'Dónde hacer fotos en la Playa de la Malagueta: el paseo, los chiringuitos, las vistas al mar y la mejor luz para amaneceres y atardeceres.',
      intro:
        'La arena dorada, el agua azul y el skyline de la ciudad hacen de la Malagueta un lugar fácil de fotografiar. La luz es mejor al amanecer y al final de la tarde.',
      sections: [
        {
          id: 'promenade',
          title: 'Paseo y palmeras',
          content:
            'El paseo sombreado de palmeras da líneas de fuga limpias y un encuadre de postal clásica de Málaga. Dispara desde abajo para reflejos tras la limpieza matutina.',
        },
        {
          id: 'chiringuitos',
          title: 'Chiringuitos y vida de playa',
          content:
            'Los coloridos chiringuitos y las filas de hamacas son un primer plano natural. Por la mañana, antes de la gente, la escena queda tranquila.',
        },
        {
          id: 'light',
          title: 'La mejor luz',
          content:
            'El amanecer ilumina el agua desde el este; la puesta de sol calienta el paseo y la ciudad detrás de la playa. La hora azul tras el ocaso es ideal para largas exposiciones del frente iluminado.',
        },
      ],
      faq: [
        {
          question: '¿Cuándo hay mejor luz para fotos en la Malagueta?',
          answer:
            'Por la mañana temprano para escenas tranquilas y amanecer sobre el agua; al final de la tarde y en la hora azul para planos cálidos del paseo iluminado.',
        },
        {
          question: '¿Dónde están los rincones más fotogénicos?',
          answer:
            'El paseo de palmeras, las filas de chiringuitos y el horizonte abierto al mar son los encuadres clásicos.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'boat-trips': {
    category: 'beach',
    related: ['photo-spots', 'getting-here', 'muelle-uno', 'best-time-to-visit'],
    en: {
      title: 'Boat Trips from Malagueta Beach',
      description:
        'Sightseeing boats,glass-bottom catamarans and short cruises that depart near Playa de la Malagueta and the Port of Málaga.',
      intro:
        'The waterfront by Malagueta and the adjacent Port of Málaga is the launch point for short sightseeing boats along the Costa del Sol coast.',
      sections: [
        {
          id: 'options',
          title: 'Types of trips',
          content:
            'Options range from glass-bottom catamaran rides to see the seabed, to sunset and dolphin-watch cruises. Most leave from the port quays a short walk west of the beach.',
        },
        {
          id: 'booking',
          title: 'Where to book',
          content:
            'Tickets are sold at kiosks along Muelle Uno and the port, or online in advance in summer. Trips usually run from spring to autumn, with fewer departures in winter.',
        },
        {
          id: 'tips',
          title: 'Tips',
          content:
            'Bring sun protection and water, arrive 20 minutes early, and pick a morning trip if you are prone to seasickness. Check the cancellation policy for rough-sea days.',
        },
      ],
      faq: [
        {
          question: 'Where do boat trips leave from near Malagueta?',
          answer:
            'Most sightseeing and catamaran trips leave from the Port of Málaga quays, a short walk west of the beach at Muelle Uno.',
        },
        {
          question: 'Are there glass-bottom boat trips?',
          answer:
            'Yes. Glass-bottom catamarans and short coastal cruises are common from the port, mainly from spring to autumn.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Paseos en Barco desde la Playa de la Malagueta',
      description:
        'Barcos de turismo, catamaranes de fondo de cristal y cortas travesías que salen cerca de la Playa de la Malagueta y el Puerto de Málaga.',
      intro:
        'El frente marítimo de la Malagueta y el adyacente Puerto de Málaga son el punto de salida de cortas travesías turísticas por la costa del Sol.',
      sections: [
        {
          id: 'options',
          title: 'Tipos de paseos',
          content:
            'Las opciones van desde catamaranes de fondo de cristal para ver el fondo marino hasta cruceros al atardecer y avistamiento de delfines. La mayoría salen de los muelles del puerto, a pocos pasos al oeste de la playa.',
        },
        {
          id: 'booking',
          title: 'Dónde reservar',
          content:
            'Los billetes se venden en quioscos por Muelle Uno y el puerto, o en línea con antelación en verano. Suelen funcionar de primavera a otoño, con menos salidas en invierno.',
        },
        {
          id: 'tips',
          title: 'Consejos',
          content:
            'Lleva protección solar y agua, llega 20 minutos antes y elige un paseo de mañana si sufres mareo. Revisa la política de cancelación por mar gruesa.',
        },
      ],
      faq: [
        {
          question: '¿De dónde salen los barcos cerca de la Malagueta?',
          answer:
            'La mayoría de los barcos turísticos y catamaranes salen de los muelles del Puerto de Málaga, a pocos pasos al oeste de la playa en Muelle Uno.',
        },
        {
          question: '¿Hay catamaranes de fondo de cristal?',
          answer:
            'Sí. Los catamaranes de fondo de cristal y cortas travesías costeras son habituales desde el puerto, sobre todo de primavera a otoño.',
        },
      ],
      updated: 'October 2026',
    },
  },

  'beach-safety': {
    category: 'beach',
    related: ['facilities', 'accessibility', 'sunbeds-and-umbrellas', 'best-time-to-visit'],
    en: {
      title: 'Beach Safety at Malagueta',
      description:
        'Flags, lifeguards, sun care and swimming advice for a safe day at Playa de la Malagueta.',
      intro:
        'Malagueta is a supervised city beach, but a few simple habits keep your beach day safe and comfortable.',
      sections: [
        {
          id: 'flags',
          title: 'Lifeguards and flags',
          content:
            'In summer a lifeguard post is staffed and coloured flags show sea conditions: green for calm, yellow for caution, red for no swimming. Always follow the flag and the lifeguards’ instructions.',
        },
        {
          id: 'sun',
          title: 'Sun and heat',
          content:
            'The Andalusian sun is strong from late spring to early autumn. Use sunscreen, a hat and shade in the middle of the day, and drink water regularly. Umbrellas and the promenade palms help.',
        },
        {
          id: 'swim',
          title: 'Swimming tips',
          content:
            'Swim within the marked areas, watch for boats near the harbour mouth, and keep children within arm’s reach. Showers and foot-rinse points are there to wash off salt and sand.',
        },
      ],
      faq: [
        {
          question: 'Is Malagueta Beach safe for swimming?',
          answer:
            'Yes, it is a supervised city beach with lifeguards in summer and flagged swimming zones; follow the flag colours and lifeguard advice.',
        },
        {
          question: 'What do the beach flags mean?',
          answer:
            'Green means calm seas, yellow means caution, red means do not swim. Always obey the posted flag.',
        },
      ],
      updated: 'October 2026',
    },
    es: {
      title: 'Seguridad en la Playa de la Malagueta',
      description:
        'Banderas, socorristas, cuidado solar y consejos de baño para un día seguro en la Playa de la Malagueta.',
      intro:
        'La Malagueta es una playa urbana vigilada, pero unos hábitos sencillos hacen tu día de playa seguro y cómodo.',
      sections: [
        {
          id: 'flags',
          title: 'Socorristas y banderas',
          content:
            'En verano hay puesto de socorrismo y banderas de colores indican el estado del mar: verde para calma, amarilla para precaución, roja para no bañarse. Respeta siempre la bandera y las indicaciones de los socorristas.',
        },
        {
          id: 'sun',
          title: 'Sol y calor',
          content:
            'El sol andaluz es fuerte de finales de primavera a principios de otoño. Usa protección solar, gorra y sombra a mediodía, y bebe agua con frecuencia. Las sombrillas y las palmeras del paseo ayudan.',
        },
        {
          id: 'swim',
          title: 'Consejos de baño',
          content:
            'Bañate dentro de las zonas señalizadas, vigila las embarcaciones cerca de la bocana y mantén a los niños al alcance. Las duchas y puntos de aclarado sirven para quitar sal y arena.',
        },
      ],
      faq: [
        {
          question: '¿Es segura la Playa de la Malagueta para bañarse?',
          answer:
            'Sí, es una playa urbana vigilada con socorristas en verano y zonas de baño balizadas; respeta los colores de bandera y el consejo de los socorristas.',
        },
        {
          question: '¿Qué significan las banderas de la playa?',
          answer:
            'Verde significa mar en calma, amarilla precaución, roja no bañarse. Obedece siempre la bandera expuesta.',
        },
      ],
      updated: 'October 2026',
    },
  },
};
