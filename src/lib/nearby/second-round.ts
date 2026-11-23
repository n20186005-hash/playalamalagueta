import { city, foundation, place, type Localized } from './types';
import { entries } from './second-round-data';

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

const access = {
  outdoor: { en: 'Free to visit from the public street or path. Follow posted detours and check any notices for building access.', es: 'La visita desde la calle o el paseo público es gratuita. Sigue los desvíos señalizados y consulta los avisos para acceder a edificios.', zh: '从公共街道或步道免费参观。现场有改道时看路牌，建筑内部开放请查现场公告。' },
  garden: { en: 'Public garden. Check gates and access notices and allow time for a loop on the main paths.', es: 'Jardín público. Consulta los avisos de acceso y las puertas, y reserva tiempo para recorrer los caminos principales.', zh: '这是公共花园。查看入口公告，预留时间走一圈主步道。' },
  church: { en: 'The exterior is visible from the street. For the interior, check the parish schedule and give priority to worshippers during services.', es: 'El exterior se ve desde la calle. Para entrar, comprueba el horario parroquial y da prioridad a los fieles durante los oficios.', zh: '街上可以看到外观。进堂前查看堂区安排，礼拜期间礼让信众。' },
  exhibition: { en: 'Check the venue’s current exhibitions, last entry, admission and booking options before setting out.', es: 'Antes de salir, consulta la exposición en curso, la última admisión, la entrada y las opciones de reserva.', zh: '出发前查阅场馆当期展览、最后入场时间、票价和预约方式。' },
  market: { en: 'Check the market’s morning opening and visit while the stalls are trading. Ask the seller before photographing a stall.', es: 'Consulta la apertura matinal y acude mientras los puestos están abiertos. Pide permiso antes de fotografiar un puesto.', zh: '核对市场早间营业安排，在摊位营业时前往。拍摄摊位先问摊主。' },
  ticketedGarden: { en: 'Check the garden’s seasonal timetable, last admission and ticket prices. Start with the main paths before choosing a longer route.', es: 'Consulta el horario de temporada, la última entrada y las tarifas. Empieza por los caminos principales antes de elegir un recorrido largo.', zh: '查询植物园季节开放时间、最后入场和票价。先走主步道，再选择较长的支线。' },
  beach: { en: 'Public beach. Check the flags and seasonal services on the city beach listing before swimming.', es: 'Playa pública. Antes de bañarte, comprueba las banderas y los servicios de temporada en la ficha municipal.', zh: '公共海滩。下水前查看警示旗，并在市政海滩资料里核对当季服务。' },
};

const duration = {
  outdoor: { en: '10–25 minutes for an exterior stop', es: '10–25 minutos para ver el exterior', zh: '外观短停 10–25 分钟' },
  garden: { en: '30–50 minutes for a loop', es: '30–50 minutos para dar una vuelta', zh: '步道环游 30–50 分钟' },
  church: { en: '10–20 minutes, depending on interior access', es: '10–20 minutos, según el acceso al interior', zh: '10–20 分钟，视堂内开放而定' },
  exhibition: { en: '45–90 minutes for the visit', es: '45–90 minutos de visita', zh: '参观 45–90 分钟' },
  market: { en: '20–40 minutes to see the stalls', es: '20–40 minutos para ver los puestos', zh: '逛摊位 20–40 分钟' },
  ticketedGarden: { en: '90–150 minutes for the main garden', es: '90–150 minutos para el jardín principal', zh: '游览主花园 90–150 分钟' },
  beach: { en: '30–60 minutes for a shore walk', es: '30–60 minutos para pasear por la orilla', zh: '海边散步 30–60 分钟' },
};

const direction = {
  harbor: ['Use the port-side footway from La Malagueta', 'Sal de La Malagueta por el paseo del puerto', '从马拉盖塔沿港边步道出发'],
  center: ['Walk toward the old town via Paseo del Parque', 'Ve al casco histórico por el Paseo del Parque', '经公园大道步行去老城'],
  north: ['Head inland from La Malagueta and check the transit option for the uphill leg', 'Dirígete al interior desde La Malagueta y consulta el transporte para el tramo de subida', '从马拉盖塔向内陆走，上坡路段可先查询公交'],
  west: ['Cross the city center westbound from La Malagueta and check the bus for the onward leg', 'Cruza el centro hacia el oeste desde La Malagueta y consulta el autobús para el resto del trayecto', '从马拉盖塔穿过市中心向西，后半程可先查公交'],
  east: ['Follow the coast east toward El Palo, or use an eastbound city bus', 'Sigue la costa hacia El Palo o toma un autobús urbano en dirección este', '沿海岸往东到埃尔帕洛方向，或搭乘往东的市区公交'],
} as const;

function sentence(text: string) {
  return text[0].toUpperCase() + text.slice(1) + '.';
}

export const secondRound = entries.map(([slug, name, area, kind, address, via, [title, history, feature]]) => {
  const [source, manager, category] = sources[kind];
  const approach = slug === 'mirador-gibralfaro'
    ? ['Head inland uphill from Paseo de Reding toward the castle', 'Sube desde el Paseo de Reding hacia el castillo', '从雷丁大道向内陆上坡，往城堡方向走']
    : direction[area];
  return {
    ...place(
      slug, name, area, source, manager,
      [title[0], sentence(history[0]), `Look for ${feature[0]}.`, `${approach[0]}. Use ${via} for the final approach to ${title[0]}.`, access[category].en, `Look for a clear position to frame ${feature[0]}. Keep the route clear for other visitors.`, `Start at ${address} and look for ${feature[0]}.`],
      [title[1], sentence(history[1]), `Fíjate en ${feature[1]}.`, `${approach[1]}. Usa ${via} para el último tramo hasta ${title[1]}.`, access[category].es, `Busca un encuadre para ${feature[1]}. Deja libre el paso a otros visitantes.`, `Empieza en ${address} y fíjate en ${feature[1]}.`],
      [title[2], `${title[2]}是${history[2]}。`, `留意${feature[2]}。`, `${approach[2]}。接近${title[2]}时经 ${via} 抵达。`, access[category].zh, `找开阔处拍摄${feature[2]}，给其他游客留出通道。`, `从 ${address} 开始，留意${feature[2]}。`],
      `${name}, ${address}`,
    ),
    address,
    duration: duration[category],
  };
});

export const secondRoundQuestions = Object.fromEntries(secondRound.map(({ slug, title }) => [slug, {
  en: `Where should I start at ${title.en}?`,
  es: `¿Dónde empiezo la visita a ${title.es}?`,
  zh: `游览${title.zh}可以从哪里开始？`,
}]));
