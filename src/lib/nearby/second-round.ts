import { city, foundation, place, type Localized } from './types';
import { entries } from './second-round-data';
import { visitDetails } from './second-round-details';

const diocesan = { en: 'Diocese of Málaga and the local parish', es: 'Diócesis de Málaga y parroquia local', zh: '马拉加教区及当地堂区' };
const port = { en: 'Málaga Port Authority manages the quay. Confirm access to the chapel interior with the venue.', es: 'La Autoridad Portuaria de Málaga gestiona el muelle. Confirma con el recinto el acceso al interior de la capilla.', zh: '码头由马拉加港务局管理。礼拜堂室内开放情况请向场地确认。' };
const diocesanSource = 'https://diocesismalaga.es/arciprestazgos';
const parkSource = 'https://medioambiente.malaga.eu/parques-y-jardines/parques-y-jardines-de-malaga/grandes-parques/';
const beachSource = 'https://www.malaga.eu/la-ciudad/playas/';
const accessibleHeritage = 'https://www.juntadeandalucia.es/turismoydeporte/ctrjal/destinosturisticosaccesibles/en/node/269';

const sources = {
  port: ['https://www.muelleuno.com/historia/', port, 'outdoor'],
  city: ['https://www.malaga.eu/visorcontenido/ANUDocumentDisplayer/172685/NOTAINFORMATIVA.pdf', city, 'outdoor'],
  parks: [parkSource, city, 'garden'],
  picassopark: ['https://medioambiente.malaga.eu/parques-y-jardines/parques-y-jardines-de-malaga/detalle-del-parque/Jardines-de-Picasso/', city, 'garden'],
  diocese: [diocesanSource, diocesan, 'church'],
  christ: ['https://guiadigital.iaph.es/bien/inmueble/18165', null, 'church'],
  martires: ['https://en.andalucia.org/listing/iglesia-de-los-santos-m%C3%A1rtires/15981101/', diocesan, 'church'],
  heritage: [accessibleHeritage, city, 'outdoor'],
  bishop: [accessibleHeritage, { en: 'Diocese of Málaga. Check the specific exhibition organizer for access to its rooms.', es: 'Diócesis de Málaga. Consulta al organizador de cada exposición para acceder a sus salas.', zh: '马拉加教区。开放展厅请向当期展览组织方确认。' }, 'exhibition'],
  markets: ['https://www.malaga.eu/la-ciudad/instalaciones-y-espacios/', city, 'market'],
  holyweek: ['https://agrupaciondecofradias.com/', foundation('Agrupación de Cofradías de Semana Santa de Málaga'), 'exhibition'],
  oxo: ['https://oxomuseo.com/', foundation('OXO Museo del Videojuego Málaga'), 'exhibition'],
  imagination: ['https://museoimaginacion.com/', foundation('Museo de la Imaginación'), 'exhibition'],
  russian: ['https://www.coleccionmuseoruso.es/', foundation('Agencia Pública para la Gestión de la Casa Natal de Pablo Ruiz Picasso y Otros Equipamientos Museísticos y Culturales'), 'exhibition'],
  termica: ['https://latermicamalaga.com/', foundation('Diputación de Málaga'), 'exhibition'],
  botanic: ['https://laconcepcion.malaga.eu/', city, 'ticketedGarden'],
  dedo: [beachSource + 'el-dedo/', city, 'beach'],
  candado: [beachSource + 'el-candado/', city, 'beach'],
  cuervo: [beachSource + 'el-penon-del-cuervo/', city, 'beach'],
  beaches: [beachSource, city, 'beach'],
} as const satisfies Record<string, readonly [string, Localized | null, string]>;

const duration = {
  outdoor: { en: '10–25 minutes for an exterior stop', es: '10–25 minutos para ver el exterior', zh: '外观短停 10–25 分钟' },
  garden: { en: '30–50 minutes for a loop', es: '30–50 minutos para dar una vuelta', zh: '步道环游 30–50 分钟' },
  church: { en: '10–20 minutes, depending on interior access', es: '10–20 minutos, según el acceso al interior', zh: '10–20 分钟，视堂内开放而定' },
  exhibition: { en: '45–90 minutes for the visit', es: '45–90 minutos de visita', zh: '参观 45–90 分钟' },
  market: { en: '20–40 minutes to see the stalls', es: '20–40 minutos para ver los puestos', zh: '逛摊位 20–40 分钟' },
  ticketedGarden: { en: '90–150 minutes for the main garden', es: '90–150 minutos para el jardín principal', zh: '游览主花园 90–150 分钟' },
  beach: { en: '30–60 minutes for a shore walk', es: '30–60 minutos para pasear por la orilla', zh: '海边散步 30–60 分钟' },
};

function sentence(text: string) {
  return text[0].toUpperCase() + text.slice(1) + '.';
}

export const secondRound = entries.map(([slug, name, area, kind, address, , [title, history, feature]]) => {
  const [source, manager, category] = sources[kind];
  const details = visitDetails[slug];
  return {
    ...place(
      slug, name, area, source, manager,
      [title[0], sentence(history[0]), details.observation.en, details.route.en, details.access.en, details.photo.en, `Start at ${address} and look for ${feature[0]}.`],
      [title[1], sentence(history[1]), details.observation.es, details.route.es, details.access.es, details.photo.es, `Empieza en ${address} y fíjate en ${feature[1]}.`],
      [title[2], `${title[2]}是${history[2]}。`, details.observation.zh, details.route.zh, details.access.zh, details.photo.zh, `从 ${address} 开始，留意${feature[2]}。`],
      `${name}, ${address}`,
    ),
    historyDetail: details.history,
    furtherReading: details.furtherReading,
    address,
    duration: duration[category],
  };
});

export const secondRoundQuestions = Object.fromEntries(secondRound.map(({ slug, title }) => [slug, {
  en: `Where should I start at ${title.en}?`,
  es: `¿Dónde empiezo la visita a ${title.es}?`,
  zh: `游览${title.zh}可以从哪里开始？`,
}]));
