import plans from './visit-plans.json';
import profiles from './visit-profiles.json';
import type { Area } from './types';
import type { Locale } from '../topic-types';

const stays = {
  harbor: ['La Malagueta puts the quay and civic gardens within walking distance. Around Plaza de la Marina you are better placed for the old town and city buses after the waterfront walk.', 'La Malagueta permite llegar a pie al muelle y a los jardines. Cerca de la plaza de la Marina tendrás más cerca el casco antiguo y los autobuses para después del paseo.', '住马拉盖塔方便步行往返码头与市政花园；住滨海广场一带则更方便步行接老城，或在港边游览后换乘公交。'],
  center: ['The historic centre suits an early visit before the lanes fill up. La Malagueta suits a beach afternoon; allow for the return walk through Paseo del Parque.', 'El centro histórico facilita la llegada temprana antes de que se llenen las calles. La Malagueta conviene para una tarde de playa; reserva la vuelta por el Paseo del Parque.', '住历史中心便于早到，避开窄巷较繁忙的时段；住马拉盖塔则可接午后海滩行程，回程要留出走公园大道的时间。'],
  north: ['Around Plaza de la Merced you can reach the northern neighbourhoods without first crossing the old town. Around Alameda Principal, buses are handier for longer journeys. Check the return stop before an uphill or out-of-town visit.', 'Desde la plaza de la Merced se llega a los barrios del norte sin cruzar primero el casco antiguo. La Alameda Principal facilita enlaces más largos en autobús. Comprueba la parada de regreso antes de subir o salir del centro.', '以梅尔塞德广场为住宿地，前往北部街区不必先穿老城；林荫大道附近更方便转乘较长路程的公交。上坡或出城前先记好回程车站。'],
  east: ['Pedregalejo or El Palo makes an early seafront walk easy. Staying at La Malagueta puts museums and the centre closer, but adds a longer eastbound journey and a return by bus or taxi.', 'Pedregalejo o El Palo facilitan el paseo temprano por el litoral. Desde La Malagueta quedan más cerca los museos y el centro, pero tendrás un tramo más largo al este y vuelta en autobús o taxi.', '住佩德雷加莱霍或埃尔帕洛更适合清晨海岸步行；马拉盖塔靠近市中心与博物馆，往东岸路程更长，晚间回程宜先查公交或出租车。'],
  west: ['Huelin works for the western promenade and museums around Tabacalera. Soho is a better base for combining the port with the centre; cross the Guadalmedina or use city transport for the return.', 'Huelin conviene para el paseo oeste y los museos de Tabacalera. Soho facilita combinar puerto y casco histórico; para volver cruza el Guadalmedina o utiliza transporte urbano.', '韦林适合西岸步道及烟草厂园区博物馆；若想兼逛港口与老城可住苏荷，游完西区需过瓜达尔梅迪纳河或乘车返回。'],
} satisfies Record<Area,string[]>;
export function planFor(slug:string,area:Area,locale:Locale) {
  const plan=plans[slug as keyof typeof plans];
  const profile=profiles[plan.kind as keyof typeof profiles][locale];
  let {hours,fee}=profile;
  if(slug==='museo-picasso-malaga') {
    hours={en:'Daily from 10:00. Closing is 18:00 November–February, 20:00 July–August and 19:00 in the intervening months. Last entry is 30 minutes before closing; holiday exceptions apply.',es:'Abre a las 10:00. Cierra a las 18:00 de noviembre a febrero, a las 20:00 en julio y agosto y a las 19:00 los otros meses. Último acceso media hora antes; consulta festivos.',zh:'每日10:00开门。11月至2月18:00闭馆，7至8月20:00闭馆，其余月份19:00闭馆。闭馆前半小时停止入场，节日另查公告。'}[locale];
    fee={en:'Standard €13, reduced €11. Free on Sundays during the last two opening hours, subject to capacity.',es:'Entrada general 13 €, reducida 11 €. Acceso gratuito los domingos en las dos últimas horas de apertura, sujeto a aforo.',zh:'普通票13欧元，优惠票11欧元。周日闭馆前两小时可免费入场，视剩余名额而定。'}[locale];
  }
  const official:Record<string,string>={'museo-picasso-malaga':'https://www.museopicassomalaga.org/visita','alcazaba-malaga':'https://alcazabaygibralfaro.malaga.eu/','teatro-romano-malaga':'https://www.juntadeandalucia.es/organismos/culturapatrimoniohistoricoydeporte/servicios/directorio-instituciones/detalle/2595.html'};
  return {...plan,type:profile.type,hours,fee,walk:plan.walk[locale],stay:stays[area][{en:0,es:1,zh:2}[locale]],official:official[slug]};
}
