import type { entries } from "./second-round-data";
import type { Localized } from "./types";

type Guide = {
  history: Localized;
  observation: Localized;
  route: Localized;
  access: Localized;
  photo: Localized;
  furtherReading?: string;
};

export const visitDetails: Record<(typeof entries)[number][0], Guide> = {
  "iglesia-cristo-salud": {
    history: {
      en: "The Jesuits took over the former San Sebastián site in 1573. The city later transferred its image of Santo Cristo to the church after the nautical college left in 1849.",
      es: "Los jesuitas recibieron el antiguo recinto de San Sebastián en 1573. El Ayuntamiento trasladó al templo la imagen del Santo Cristo tras la marcha del Colegio Náutico en 1849.",
      zh: "1573 年，耶稣会接手原圣塞巴斯蒂安院址。1849 年航海学院迁离后，市政府将健康圣基督像移入教堂。",
    },
    observation: {
      en: "From the edge of the rotunda, follow the painted bands from the altarpieces up to the dome. The scenes of martyrdom form a single program across the circular space.",
      es: "Desde el borde de la rotonda, sigue las franjas pintadas desde los retablos hasta la cúpula. Las escenas de martirio forman un programa que abarca todo el espacio circular.",
      zh: "在圆厅边缘抬头，从祭坛装饰一路看到穹顶的彩绘。殉道题材贯穿整个圆形空间。",
    },
    route: {
      en: "From the beach, take Paseo del Parque to Plaza de la Marina, walk up Calle Larios to Plaza de la Constitución, then turn into Calle Compañía. Look for the church next to the former college buildings.",
      es: "Desde la playa, sigue el Paseo del Parque hasta la Plaza de la Marina. Sube por calle Larios hasta la Plaza de la Constitución y entra en calle Compañía. El templo está junto a las dependencias del antiguo colegio.",
      zh: "从海滩经公园大道到滨海广场，沿拉里奥斯街走至宪法广场，再转入孔帕尼亚街。教堂紧邻旧学院建筑。",
    },
    access: {
      en: "Check the diocesan listing for access. If the doors are shut, step back toward the square to see how the church fits into the corner of the former Jesuit block.",
      es: "Consulta la ficha diocesana para entrar. Si está cerrado, retrocede hacia la plaza para ver cómo encaja la iglesia en la esquina de la antigua manzana jesuita.",
      zh: "室内开放请查教区资料。门关着时退到广场，从街角看教堂如何嵌入原耶稣会建筑群。",
    },
    photo: {
      en: "If interior photography is permitted, include the rim of the dome in the frame to show how it sits above the round nave.",
      es: "Si se permite fotografiar dentro, incluye el arranque de la cúpula para mostrar cómo cubre la nave circular.",
      zh: "如果允许室内摄影，把穹顶的边缘也拍进去，能看出它与圆厅的关系。",
    },
    furtherReading: "https://www.iaph.es/web/canales/proyectosantocristo/iglesiasantocristo/index.html",
  },
  "capilla-del-puerto": {
    history: {
      en: "The chapel was built on the eastern quay in 1732, when the working port was still expanding. It now stands amid the pedestrian waterfront of Muelle Uno.",
      es: "La capilla se levantó en 1732 en el muelle de levante, cuando el puerto comercial aún se ampliaba. Hoy queda en el paseo peatonal de Muelle Uno.",
      zh: "礼拜堂建于 1732 年，当时商港仍在拓展东码头。如今它位于一码头的滨水步行区。",
    },
    observation: {
      en: "Compare the chapel’s compact stone frontage with the long, open quayside. The framed doorway is the easiest detail to read at walking pace.",
      es: "Compara la portada de piedra, de escala reducida, con la larga explanada del muelle. El marco de la puerta es el detalle que mejor se distingue al pasar.",
      zh: "将尺度小巧的石质立面和开阔的码头对照着看，门框是经过时最容易辨认的细节。",
    },
    route: {
      en: "Walk west along the beach promenade to Paseo de la Farola and cross toward the marina. Follow Muelle Uno on the quay side toward the colourful Pompidou cube.",
      es: "Camina hacia el oeste por el paseo de la playa hasta el Paseo de la Farola y cruza hacia la dársena. Sigue Muelle Uno por el lado del agua en dirección al cubo del Pompidou.",
      zh: "从海滩沿步道向西走至灯塔大道，过街到港池一边，再沿一码头亲水侧朝蓬皮杜彩色立方体走。",
    },
    access: {
      en: "The quay is the starting point for an exterior visit. Ask Muelle Uno about any event or indoor access before planning the walk around the chapel.",
      es: "El paseo del muelle es el punto de partida para ver el exterior. Pregunta a Muelle Uno por actividades o acceso interior si la capilla es el motivo de tu visita.",
      zh: "外观从码头步道即可观看。若特地为礼拜堂前来，先向一码头查询活动和室内开放安排。",
    },
    photo: {
      en: "Use the pedestrian side opposite the doorway and include a strip of quay to show the building’s port setting.",
      es: "Encuadra desde el lado peatonal frente a la puerta e incluye una franja del muelle para situar el edificio.",
      zh: "从门对面的步行区取景，留一段码头入镜，交代礼拜堂的港口环境。",
    },
    furtherReading: "https://static.malaga.es/malaga/subidas/archivos/5/7/arc_295175.pdf",
  },
  "mirador-gibralfaro": {
    history: {
      en: "The lookout sits on the flank of the hill beneath Gibralfaro Castle. The castle’s position above the Alcazaba and the harbour made the hill part of Málaga’s defensive system.",
      es: "El mirador se asienta en la ladera bajo el castillo de Gibralfaro. La posición del castillo sobre la Alcazaba y el puerto incorporaba el monte al sistema defensivo de Málaga.",
      zh: "观景台位于希布拉尔法罗城堡下方。城堡俯瞰阿尔卡萨瓦堡和港口，这座山因此成为马拉加防御体系的一环。",
    },
    observation: {
      en: "Read the view in layers. La Malagueta’s circular bullring is in the foreground, then come the port basins and the coastline extending beyond them.",
      es: "Lee el panorama por planos. La plaza de toros circular de La Malagueta queda delante, seguida de las dársenas y la línea de costa al fondo.",
      zh: "按远近辨认地标。前景是马拉盖塔圆形斗牛场，后面是港池，再往外是延伸的海岸线。",
    },
    route: {
      en: "From La Malagueta, head to the Alcazaba side of Paseo del Parque, pick up Paseo de Don Juan Temboury and follow the signed uphill path toward Gibralfaro.",
      es: "Desde La Malagueta, ve al lado de la Alcazaba del Paseo del Parque, toma el Paseo de Don Juan Temboury y sigue la subida señalizada hacia Gibralfaro.",
      zh: "从马拉盖塔走到公园大道靠阿尔卡萨瓦堡的一端，经唐胡安·滕布里步道，按路牌上坡前往希布拉尔法罗。",
    },
    access: {
      en: "The ascent is steep. The EMT 35 takes you toward the castle if you want to avoid the main climb. Check the route map and bear in mind that the public overlook and the ticketed castle entrance are separate stops.",
      es: "La subida es pronunciada. El autobús 35 de EMT llega a la zona del castillo y permite evitar el tramo más empinado. Consulta su plano y ten en cuenta que el mirador público y la entrada de pago al castillo son paradas distintas.",
      zh: "步道坡陡。可乘 EMT 35 路到城堡一带，避开主要爬坡段。先查线路图，公共观景台和收费的城堡入口是两处不同的停靠点。",
    },
    photo: {
      en: "A wider frame from the public railing gives the bullring room in the foreground and keeps the shape of the harbour visible.",
      es: "Un encuadre amplio desde la barandilla pública deja sitio para la plaza de toros y conserva la forma del puerto.",
      zh: "从公共栏杆处取宽景，既能把斗牛场放进前景，也能保留港池轮廓。",
    },
    furtherReading: "https://alcazabaygibralfaro.malaga.eu/es/donde-estamos/",
  },
  "parque-huelin": {
    history: {
      en: "Huelin grew as a working district on Málaga’s industrial west side. The park gives that dense neighbourhood a public green space near the water.",
      es: "Huelin creció como barrio obrero en el oeste industrial de Málaga. El parque ofrece un espacio verde público cerca del mar en un barrio de trama densa.",
      zh: "韦林曾是马拉加西部工业区的工人社区。如今这座公园为建筑密集的街区提供了靠近海边的公共绿地。",
    },
    observation: {
      en: "Walk around the lake and turn back toward the older industrial skyline. The chimneys in this part of the city are useful landmarks for spotting how the neighbourhood has changed.",
      es: "Rodea el lago y vuelve la vista hacia el antiguo paisaje industrial. Las chimeneas de esta parte de Málaga ayudan a apreciar cuánto ha cambiado el barrio.",
      zh: "沿湖绕一圈，再转身看旧工业区的天际线。这一带留存的烟囱有助于理解街区的变化。",
    },
    route: {
      en: "From the beach, pass along Paseo del Parque and the Alameda, then head south through Soho toward the river mouth. Cross into the west waterfront and follow Paseo Marítimo Antonio Machado to Calle Princesa.",
      es: "Desde la playa, recorre el Paseo del Parque y la Alameda y baja por el Soho hacia la desembocadura. Cruza hacia el litoral oeste y sigue el Paseo Marítimo Antonio Machado hasta calle Princesa.",
      zh: "从海滩经公园大道和阿拉梅达，穿过苏荷向河口走。过河后进入西岸滨海步道，沿安东尼奥·马查多大道走到普林塞萨街。",
    },
    access: {
      en: "Calle Princesa is a useful starting point on foot. For a shorter approach, check the Metro connections to Princesa–Huelin and continue on local streets to the park.",
      es: "Calle Princesa es una buena referencia si vas a pie. Para acortar, consulta el metro hasta Princesa–Huelin y sigue por el barrio hasta el parque.",
      zh: "步行可用普林塞萨街作定位。想少走一段，可查地铁至 Princesa–Huelin 站，再穿过街区到公园。",
    },
    photo: {
      en: "Try the end of the lake for a reflection of the trees, then walk to the edge of the park for a view back toward the old industrial structures.",
      es: "Prueba primero desde un extremo del lago para captar el reflejo de los árboles. Después, acércate al borde del parque para mirar hacia los vestigios industriales.",
      zh: "在湖的一端拍树木倒影，再走到公园边缘，回望旧工业建筑。",
    },
  },
  "jardines-picasso": {
    history: {
      en: "The city opened these gardens in 1981 to mark a century since Picasso’s birth. The site is on the Alameda’s western extension, an approach to the city very different from Picasso’s birthplace at Plaza de la Merced.",
      es: "La ciudad inauguró estos jardines en 1981, por el centenario del nacimiento de Picasso. Están en la prolongación occidental de la Alameda, en un entorno muy distinto al de su casa natal en la Plaza de la Merced.",
      zh: "市政府于 1981 年开放这座花园，纪念毕加索诞辰百年。花园位于阿拉梅达大道西侧延长线，与他出生的梅塞德广场环境迥异。",
    },
    observation: {
      en: "Compare the spread of the Moreton Bay fig with the forms of Miguel Berrocal’s sculpture. The tree is easy to find when you follow the main garden paths away from the avenue.",
      es: "Compara la copa de la higuera de Moreton con las formas de la escultura de Miguel Berrocal. Es fácil encontrar el árbol siguiendo los caminos principales que se apartan de la avenida.",
      zh: "将摩顿湾榕树舒展的树冠与米格尔·贝罗卡尔的雕塑相对照。沿主步道往远离大道的一侧走，很容易找到这棵树。",
    },
    route: {
      en: "From La Malagueta take Paseo del Parque and Alameda Principal, cross the Guadalmedina at Puente de Tetuán and continue west along Avenida de Andalucía toward Puente de las Américas.",
      es: "Desde La Malagueta, sigue el Paseo del Parque y la Alameda Principal, cruza el Guadalmedina por el Puente de Tetuán y continúa por la Avenida de Andalucía hacia el Puente de las Américas.",
      zh: "从马拉盖塔经公园大道和阿拉梅达主大道，在得土安桥跨过瓜达尔梅迪纳河，再沿安达卢西亚大道向西走向美洲桥。",
    },
    access: {
      en: "Use the entrances and marked crossings along Avenida de Andalucía. If the garden is a quick stop, a short circuit from the avenue is enough to see the shaded interior.",
      es: "Usa las entradas y los pasos señalizados de la Avenida de Andalucía. Si haces una parada breve, una vuelta desde la avenida basta para recorrer la zona de sombra.",
      zh: "从安达卢西亚大道一带的公园入口进入，过街走斑马线。若只作短停，从大道进去绕一小圈即可走到树荫深处。",
    },
    photo: {
      en: "Frame the fig from the path so the branches and trunk sit in the same view. A separate, closer view works better for the sculpture.",
      es: "Encuadra la higuera desde el camino para reunir el tronco y las ramas. Para la escultura, busca un encuadre separado y más cercano.",
      zh: "从步道把榕树的树干和枝条拍进同一张照片。雕塑适合另取一张近景。",
    },
  },
  "parque-del-oeste": {
    history: {
      en: "Opened in 1992, the park gave the Carretera de Cádiz district a large public green space. Its layout makes the ponds and outdoor art part of a neighbourhood walk.",
      es: "El parque abrió en 1992 y dotó al distrito de Carretera de Cádiz de una gran zona verde. Su trazado integra los estanques y el arte al aire libre en un paseo de barrio.",
      zh: "公园于 1992 年开放，为加的斯公路区增加了一大片公共绿地。水池和户外艺术是居民日常散步路线的一部分。",
    },
    observation: {
      en: "Take one of the pond paths and look for the fantastic figures by Stefan von Reiswitz along the circuit. Seen across the water, the silhouettes are easier to pick out.",
      es: "Toma uno de los caminos de los estanques y busca en el recorrido las figuras fantásticas de Stefan von Reiswitz. Sus siluetas se distinguen mejor desde la orilla opuesta.",
      zh: "走水池旁的小径，沿环线找施特凡·冯·赖斯维茨创作的奇想雕塑。隔水看更能辨认它们的轮廓。",
    },
    route: {
      en: "For the longer walk from La Malagueta, cross the Guadalmedina into the western waterfront and follow Paseo Marítimo Antonio Machado and Antonio Banderas. Turn inland toward Calle Realenga de San Luis.",
      es: "Para ir a pie desde La Malagueta, cruza el Guadalmedina hacia el litoral oeste y sigue los paseos de Antonio Machado y Antonio Banderas. Gira hacia el interior en dirección a calle Realenga de San Luis.",
      zh: "从马拉盖塔步行过去，可过瓜达尔梅迪纳河进入西部滨海区，沿安东尼奥·马查多和安东尼奥·班德拉斯步道走，再转往内陆的雷亚伦加·德·圣路易斯街。",
    },
    access: {
      en: "Check the gates for opening information. To shorten the walk, look up a Metro trip to La Luz–La Paz and use local crossings for the final approach.",
      es: "Consulta los avisos de las puertas. Para acortar el trayecto, mira la opción de metro hasta La Luz–La Paz y usa los pasos de peatones en el tramo final.",
      zh: "在公园门口查看开放公告。想减少步行距离，可查询到 La Luz–La Paz 站的地铁，最后一段从街区人行横道走。",
    },
    photo: {
      en: "Photograph a sculpture from the opposite bank to show the pond around it, then look for its details as you complete the loop.",
      es: "Fotografía una escultura desde la otra orilla para mostrar su relación con el estanque. Al completar la vuelta podrás ver sus detalles de cerca.",
      zh: "从对岸拍雕塑与池水的关系，绕到近处再看细节。",
    },
    furtherReading: "https://videoactas.malaga.eu/actas/session/downloadItem/8a8148c49372b03f0194d100ef270504",
  },
  "parque-san-miguel": {
    history: {
      en: "The park adjoins historic San Miguel Cemetery, whose funerary architecture belongs to the story of nineteenth-century Málaga. The planted public park and the cemetery have their own visits.",
      es: "El parque está junto al Cementerio Histórico de San Miguel, cuya arquitectura funeraria forma parte de la historia de la Málaga del siglo XIX. El recinto funerario y el parque público se visitan por separado.",
      zh: "公园毗邻圣米格尔历史墓园，墓园的建筑见证了 19 世纪马拉加的历史。公共绿地和墓园各有自己的参观入口。",
    },
    observation: {
      en: "Begin with the paths between lawns and planting beds. From the edge, notice how the cemetery enclosure bounds one side of the open green space.",
      es: "Empieza por los caminos entre céspedes y parterres. Desde el borde se ve cómo el recinto del cementerio delimita parte de la zona verde.",
      zh: "先走草坪和花坛之间的步道，再到公园边缘看墓园围墙如何界定这片绿地。",
    },
    route: {
      en: "From the beach, go inland via Paseo de Reding and Calle Victoria to Plaza de la Victoria. Continue north via Calle Cristo de la Epidemia, then follow local streets toward Calle Albéniz.",
      es: "Desde la playa, entra por el Paseo de Reding y calle Victoria hasta la Plaza de la Victoria. Sigue al norte por Cristo de la Epidemia y toma las calles de barrio hacia Albéniz.",
      zh: "从海滩经雷丁大道和胜利街向内陆走到胜利广场。再沿疫病基督街向北，经社区街道到阿尔贝尼斯街。",
    },
    access: {
      en: "Use Calle Albéniz as the park approach. Check the city park and cemetery listings separately if you plan to enter both. An EMT journey to the Fuente Olletas area reduces the uphill walking.",
      es: "Usa calle Albéniz para acercarte al parque. Si quieres entrar también al cementerio, consulta ambas fichas municipales. Un autobús de EMT hacia Fuente Olletas reduce el tramo a pie cuesta arriba.",
      zh: "以阿尔贝尼斯街作为公园的进场方向。如果也想进墓园，分别查市政的两处开放资料。可乘 EMT 公交到 Fuente Olletas 一带，减少上坡步程。",
    },
    photo: {
      en: "Use the public paths to photograph the planting and curves of the walkways. Give the cemetery gates room when people are coming and going.",
      es: "Fotografía las plantaciones y las curvas de los senderos desde los caminos públicos. Deja espacio ante las puertas del cementerio cuando haya tránsito.",
      zh: "在公共小路上拍绿化和步道曲线。墓园门口有人进出时留出空间。",
    },
  },
  "iglesia-santiago": {
    history: {
      en: "Santiago is one of the city’s early Christian parishes after the late fifteenth-century conquest. Picasso was baptised here, a short walk from the house where he was born.",
      es: "Santiago es una de las primeras parroquias de la ciudad tras la conquista de finales del siglo XV. Aquí bautizaron a Picasso, a pocos pasos de su casa natal.",
      zh: "圣雅各伯堂是 15 世纪末征服马拉加后设立的早期堂区之一。毕加索在这里受洗，离他的出生地只有几步路。",
    },
    observation: {
      en: "Look up at the brickwork on the Mudéjar tower before entering. Its regular geometric patterns make a useful comparison with the ornament inside.",
      es: "Antes de entrar, mira la labor de ladrillo de la torre mudéjar. Sus motivos geométricos contrastan con la ornamentación interior.",
      zh: "进门前抬头看穆德哈尔塔楼上的砖饰。规则的几何图案可与堂内装饰对照。",
    },
    route: {
      en: "From Paseo del Parque, turn inland by the Alcazaba and Roman Theatre. Continue along Calle Alcazabilla to Calle Granada and approach the church from that corner.",
      es: "Desde el Paseo del Parque, gira hacia la Alcazaba y el Teatro Romano. Sigue por Alcazabilla hasta calle Granada y acércate al templo desde esa esquina.",
      zh: "从公园大道转往阿尔卡萨瓦堡和罗马剧场，沿阿尔卡萨比利亚街走到格拉纳达街，再从街角走向教堂。",
    },
    access: {
      en: "Check the parish opening and worship times. Plaza de la Merced and the Casa Natal are handy next stops if the church is closed.",
      es: "Consulta las horas de apertura y culto. Si está cerrada, la Plaza de la Merced y la Casa Natal quedan muy cerca para continuar el paseo.",
      zh: "查询堂区开放和礼拜时间。若教堂关闭，可接着走到近旁的梅塞德广场和毕加索故居。",
    },
    photo: {
      en: "Use the opposite side of Calle Granada to frame the tower’s upper section, leaving room for people in the narrow street.",
      es: "Desde el lado opuesto de calle Granada, encuadra la parte alta de la torre y deja paso en la calle estrecha.",
      zh: "从格拉纳达街对侧拍塔楼上部，在窄街上给行人留出通道。",
    },
    furtherReading: "https://diocesismalaga.es/parroquias/6/santiago-apostol-malaga",
  },
  "iglesia-san-juan": {
    history: {
      en: "San Juan stands in the street network inherited from medieval Málaga. The city’s visitor information links the lateral tower entrance to rebuilding after the earthquake of 1680.",
      es: "San Juan se sitúa en la trama heredada de la Málaga medieval. La ficha municipal vincula la torre pórtico lateral con las obras posteriores al terremoto de 1680.",
      zh: "圣胡安堂位于马拉加留存至今的中世纪街网。市政资料把侧面的门塔与 1680 年地震后的重建联系起来。",
    },
    observation: {
      en: "Follow the base of the tower down to the side entrance. Its position explains why the approach feels like turning into a neighbourhood doorway instead of crossing a large forecourt.",
      es: "Sigue visualmente el pie de la torre hasta la entrada lateral. Su posición explica por qué se llega como a una puerta de barrio entre calles estrechas.",
      zh: "顺着塔身往下看，可找到侧门。它就开在窄街边，走近时像是来到一处街坊门廊。",
    },
    route: {
      en: "From Plaza de la Marina, head toward the market district along the Alameda and Puerta del Mar. Turn through Plaza de Félix Sáenz to Calle San Juan and follow the tower above the lane.",
      es: "Desde la Plaza de la Marina, ve hacia la zona del mercado por la Alameda y Puerta del Mar. Pasa por la Plaza de Félix Sáenz y entra por calle San Juan, guiándote por la torre.",
      zh: "从滨海广场经阿拉梅达大道和海门街走向市场区，过费利克斯·萨恩斯广场后转入圣胡安街，沿街找塔楼。",
    },
    access: {
      en: "Check the parish calendar for an interior visit. The return via Calle Nueva puts you back at Plaza de la Constitución if the side entrance is shut.",
      es: "Consulta el calendario parroquial para entrar. Si el acceso lateral está cerrado, puedes volver por calle Nueva a la Plaza de la Constitución.",
      zh: "想入内先查堂区日历。侧门关闭时，可经新街返回宪法广场。",
    },
    photo: {
      en: "For a street-level view, aim up from the wider end of the lane where you have room to stop.",
      es: "Para una vista desde la calle, apunta hacia arriba desde el extremo más ancho, donde hay espacio para detenerte.",
      zh: "从街巷较宽、能停步的一端往上拍，带出建筑和窄街的关系。",
    },
    furtherReading: "https://www.malaga.eu/la-ciudad/instalaciones-y-espacios/detalle-de-la-instalacion/?id=1196",
  },
  "iglesia-martires": {
    history: {
      en: "The parish honours Ciriaco and Paula, Málaga’s patron martyrs. Its successive refurbishments and connections with procession brotherhoods show how a historic parish still fits into the city’s religious life.",
      es: "La parroquia está dedicada a Ciriaco y Paula, mártires patronos de Málaga. Sus reformas y sus vínculos con las cofradías muestran la continuidad del templo en la vida religiosa de la ciudad.",
      zh: "堂区纪念马拉加的主保殉道者西里亚科与保拉。教堂屡经修缮，与圣周兄弟会的联系延续至今。",
    },
    observation: {
      en: "Start in the middle of the little square to see the façade, then look from the opening toward Calle Santa Lucía. The narrow streets make the square feel larger than it is.",
      es: "Empieza en el centro de la placita para ver la fachada y mira luego desde la entrada de calle Santa Lucía. Las calles estrechas hacen que la plaza parezca más amplia.",
      zh: "先在小广场中央看教堂正面，再从圣卢西亚街口回望。周围街道狭窄，衬得广场格外开阔。",
    },
    route: {
      en: "Walk from Paseo del Parque to Calle Larios and Plaza de la Constitución. Take Calle Granada briefly, then turn into Calle Santa Lucía and continue to Plaza de los Mártires.",
      es: "Desde el Paseo del Parque, ve por calle Larios hasta la Plaza de la Constitución. Recorre un tramo de calle Granada, gira por Santa Lucía y sigue hasta la Plaza de los Mártires.",
      zh: "从公园大道经拉里奥斯街到宪法广场，短走一段格拉纳达街后转入圣卢西亚街，到殉道者广场。",
    },
    access: {
      en: "During Holy Week, allow time for street closures and crowds around the church. Confirm interior access with the parish on the day.",
      es: "En Semana Santa, cuenta con cortes y aglomeraciones alrededor del templo. Confirma con la parroquia si se puede entrar ese día.",
      zh: "圣周期间，教堂附近可能封路和拥挤，预留绕行时间。当天向堂区确认能否进堂。",
    },
    photo: {
      en: "Frame the church from across the square when the doors are clear, with the paving leading into the foreground.",
      es: "Encuadra desde el otro lado de la plaza cuando las puertas estén despejadas y usa el pavimento como primer plano.",
      zh: "正门前人少时，从广场对面拍，把铺地留在前景。",
    },
    furtherReading: "https://www.malaga.eu/la-ciudad/instalaciones-y-espacios/detalle-de-la-instalacion/?id=1194",
  },
  "iglesia-san-felipe-neri": {
    history: {
      en: "The Diocese records San Felipe Neri’s establishment as a parish in 1841, initially dependent on Los Mártires. The name Santa Cruz y San Felipe Neri remains in the parish directory.",
      es: "La diócesis sitúa en 1841 la erección de San Felipe Neri como parroquia, inicialmente filial de los Mártires. En el directorio conserva el nombre de Santa Cruz y San Felipe Neri.",
      zh: "据教区记载，圣斐理伯内利堂于 1841 年成为堂区，起初隶属圣殉道者堂。教区名录仍以圣十字与圣斐理伯内利为其全名。",
    },
    observation: {
      en: "Pause in the square, then look back from Calle Gaona. The two angles show how the frontage closes the small space and how the surrounding streets meet it.",
      es: "Detente en la plaza y vuelve a mirar desde calle Gaona. Ambos ángulos muestran cómo la fachada remata el pequeño espacio y cómo desembocan en él las calles.",
      zh: "先在小广场停步，再从高纳街回看。两个角度能看清立面如何界定广场，以及巷道如何汇入。",
    },
    route: {
      en: "From the beach, go past the Roman Theatre toward Plaza de la Merced, then cross toward Teatro Cervantes. Use the lanes behind the theatre to reach Calle Gaona and Plaza de San Felipe Neri.",
      es: "Desde la playa, pasa por el Teatro Romano hacia la Plaza de la Merced y sigue hacia el Teatro Cervantes. Toma las calles de detrás del teatro hasta Gaona y la Plaza de San Felipe Neri.",
      zh: "从海滩经过罗马剧场到梅塞德广场，再向塞万提斯剧院走。经剧院背后的街巷抵达高纳街和圣斐理伯内利广场。",
    },
    access: {
      en: "Look up the parish schedule. If the interior is closed, pair the exterior with the Museo del Vidrio y Cristal in the same neighbourhood and check its own visitor arrangements.",
      es: "Consulta el horario parroquial. Si el interior está cerrado, combina el exterior con el Museo del Vidrio y Cristal, en el mismo barrio, y comprueba sus condiciones de visita.",
      zh: "先查堂区时间。教堂关闭时，可把外观短停与同一街区的玻璃与水晶博物馆搭配，另查博物馆开放安排。",
    },
    photo: {
      en: "From the far side of the square, include one of the lanes in the frame to show how little space opens in front of the church.",
      es: "Desde el extremo opuesto de la plaza, incluye una de las calles en el encuadre para mostrar la escala del espacio ante el templo.",
      zh: "在广场对面取景，让一条进场巷道入画，表现教堂门前空间的尺度。",
    },
    furtherReading: "https://diocesismalaga.es/monumentos-diocesanos/2012012504/malaga-parroquia-san-felipe-neri/",
  },
  "iglesia-sagrado-corazon": {
    history: {
      en: "This Jesuit church belongs to a much later building phase than nearby Santo Cristo de la Salud. Its early twentieth-century Neo-Gothic design gives the two churches very different silhouettes.",
      es: "Este templo jesuita pertenece a una etapa mucho más tardía que el cercano Santo Cristo de la Salud. Su diseño neogótico de principios del siglo XX les da siluetas muy distintas.",
      zh: "这座耶稣会教堂比附近的健康圣基督堂晚得多。20 世纪初的新哥特设计让两座教堂呈现不同的轮廓。",
    },
    observation: {
      en: "From Plaza de San Ignacio, look up from the pointed entrance arches to the two spires. The vertical lines stand out against the low-rise streets around the square.",
      es: "Desde la Plaza de San Ignacio, alza la vista desde los arcos apuntados hasta las dos agujas. Las líneas verticales destacan sobre las calles de menor altura que rodean la plaza.",
      zh: "在圣依纳爵广场从尖拱入口向上看双尖塔。直向线条在四周低矮街巷的衬托下分外突出。",
    },
    route: {
      en: "From the beach, walk through Plaza de la Marina to Calle Larios and Plaza de la Constitución. Take Calle Compañía past the Carmen Thyssen area and turn toward Plaza de San Ignacio.",
      es: "Desde la playa, pasa por la Plaza de la Marina, calle Larios y la Plaza de la Constitución. Sigue por Compañía junto al entorno del Carmen Thyssen y gira hacia la Plaza de San Ignacio.",
      zh: "从海滩经滨海广场、拉里奥斯街到宪法广场。沿孔帕尼亚街经过卡门·蒂森博物馆一带，转入圣依纳爵广场。",
    },
    access: {
      en: "Check the Diocese for the church’s own opening times. Its doors are separate from the nearby museum, so make separate arrangements if visiting both interiors.",
      es: "Consulta los horarios propios del templo en la diócesis. El museo cercano tiene un acceso independiente, así que organiza por separado ambas visitas.",
      zh: "在教区网站查教堂开放时间。附近博物馆另有独立入口，两处都想进的话要分别安排行程。",
    },
    photo: {
      en: "Take a vertical frame from the far side of the plaza to keep the two spires and the entrance in one image.",
      es: "Encuadra en vertical desde el otro lado de la plaza para reunir las dos agujas y la entrada en una imagen.",
      zh: "从广场对侧竖拍，把入口和两座尖塔放在同一张照片里。",
    },
    furtherReading: "https://diocesismalaga.es/parroquias/251/sagrado-corazon-de-jesus-malaga",
  },
  "iglesia-san-lazaro": {
    history: {
      en: "San Lázaro is an old parish in the Victoria district. Its site is associated with a historic hospital, a reminder that the district grew around institutions as well as streets and homes.",
      es: "San Lázaro es una parroquia antigua del barrio de la Victoria. Su emplazamiento se vincula a un hospital histórico, testimonio del papel de estas instituciones en el crecimiento del barrio.",
      zh: "圣拉匝禄堂是胜利区的老堂区。这里与一座历史医院有关，也说明这一街区曾围绕公共机构逐渐发展。",
    },
    observation: {
      en: "Face the church from Plaza de la Victoria and compare its modest frontage with the scale of the traffic junction. The small church is easy to walk past if you are looking farther up the hill.",
      es: "Mira la iglesia desde la Plaza de la Victoria y compara su fachada modesta con la escala del cruce. Es fácil pasar de largo si vas mirando hacia la parte alta del barrio.",
      zh: "从胜利广场看，朴素的教堂门面和宽大的交通路口形成对比。若一路抬头望坡顶，很容易错过这座小教堂。",
    },
    route: {
      en: "From La Malagueta, reach the Roman Theatre by Paseo del Parque and continue to Plaza de la Merced. Follow Calle Victoria uphill to Plaza de la Victoria, where the church faces the square.",
      es: "Desde La Malagueta, llega al Teatro Romano por el Paseo del Parque y continúa a la Plaza de la Merced. Sube por calle Victoria hasta la Plaza de la Victoria, frente a la que se abre el templo.",
      zh: "从马拉盖塔经公园大道走到罗马剧场，再到梅塞德广场。沿胜利街上坡到胜利广场，教堂朝向广场。",
    },
    access: {
      en: "Use marked crossings at the busy junction. For the interior check the parish listing, and if the climb is an issue, look for an EMT route to the Plaza de la Victoria area.",
      es: "Usa los pasos señalizados en el cruce. Para entrar, consulta la ficha parroquial. Si la cuesta supone un problema, busca una línea de EMT hacia la zona de Plaza de la Victoria.",
      zh: "繁忙路口走斑马线。入内请查堂区资料。若不方便上坡，可查前往胜利广场一带的 EMT 公交。",
    },
    photo: {
      en: "Photograph from the public square and keep a little of its open space in the frame to show the church’s neighbourhood scale.",
      es: "Fotografía desde la plaza pública e incluye algo de su espacio abierto para mostrar la escala de la iglesia en el barrio.",
      zh: "从公共广场拍，留一点开敞空间入画，表现教堂和街区的尺度关系。",
    },
    furtherReading: "https://diocesismalaga.es/parroquias/5/san-lazaro-malaga",
  },
  "palacio-episcopal": {
    history: {
      en: "The Episcopal Palace’s Baroque frontage and the cathedral face each other across Plaza del Obispo. Diocesan art exhibitions have used the palace, an ecclesiastical complex with rooms that open according to the programme.",
      es: "La portada barroca del Palacio Episcopal y la catedral se miran a ambos lados de la Plaza del Obispo. El conjunto eclesiástico ha albergado exposiciones diocesanas y sus salas abren según la programación.",
      zh: "主教宫巴洛克门面与主教座堂隔着主教广场相对。主教宫曾举办教区艺术展，展厅按当期安排开放。",
    },
    observation: {
      en: "Pick out the different colours of the stone around the doorway and look up to the niche above it. Then turn around to see how the cathedral dominates the same small space.",
      es: "Distingue los colores de la piedra alrededor de la entrada y levanta la vista hasta la hornacina. Después, date la vuelta para ver cómo la catedral domina ese mismo espacio.",
      zh: "先辨认门廊周围不同颜色的石材，再抬头看上方壁龛。转过身，就能看到主教座堂如何占据广场另一面。",
    },
    route: {
      en: "Leave the beach along Paseo del Parque and head inland via Calle Molina Lario. Follow the cathedral wall to Plaza del Obispo, with the palace directly opposite the cathedral façade.",
      es: "Sal de la playa por el Paseo del Parque y entra al centro por Molina Lario. Sigue el muro de la catedral hasta la Plaza del Obispo. El palacio queda frente a la fachada catedralicia.",
      zh: "从海滩沿公园大道走，转入莫利纳·拉里奥街。顺着主教座堂的外墙走到主教广场，主教宫就在座堂正面相对的一侧。",
    },
    access: {
      en: "The exterior is visible from the square whenever the public approach is open. Check the current exhibition or diocesan listing for the entrance to the rooms and any admission requirements.",
      es: "El exterior se ve desde la plaza cuando el acceso público está abierto. Consulta la exposición vigente o el anuncio diocesano para localizar la entrada a las salas y conocer las condiciones.",
      zh: "公共广场开放时可以直接看外观。想进展厅，先查当期展览或教区公告上的入口和入场要求。",
    },
    photo: {
      en: "From the cathedral side, keep the camera level and frame the doorway and upper niche together.",
      es: "Desde el lado de la catedral, mantén la cámara nivelada y reúne la puerta y la hornacina en el mismo encuadre.",
      zh: "从座堂一侧取景，尽量保持相机水平，把门廊和上方壁龛拍在同一框里。",
    },
    furtherReading: "https://www.juntadeandalucia.es/cultura/agendaculturaldeandalucia/espacios/ars-malaga-palacio-episcopal",
  },
  "pasaje-chinitas": {
    history: {
      en: "The former Café de Chinitas gave this route a place in Málaga’s musical memory. Museum research has also used the passage to explore how the buildings and streets around Plaza de la Constitución changed.",
      es: "El antiguo Café de Chinitas dio al pasaje un lugar en la memoria musical malagueña. El museo también lo ha estudiado para explicar los cambios del entorno de la Plaza de la Constitución.",
      zh: "昔日的奇尼塔斯咖啡馆让这条通道成为马拉加音乐记忆的一部分。博物馆也以此为例，展示宪法广场周边建筑和街道的变化。",
    },
    observation: {
      en: "See how quickly the light changes when you leave the open square. Pause beyond the entrance and look back to see how the passage frames the square.",
      es: "Observa cómo cambia la luz al salir de la plaza abierta. Una vez dentro, vuelve la vista para ver cómo el pasaje enmarca la plaza.",
      zh: "离开开阔的广场时，留意光线变化之快。进巷后回头看，小巷把广场框成了一幅画。",
    },
    route: {
      en: "From La Malagueta, follow Paseo del Parque to Plaza de la Marina, then Calle Larios to Plaza de la Constitución. Look for the signed passage among the ground-floor entrances around the square.",
      es: "Desde La Malagueta, sigue el Paseo del Parque hasta la Plaza de la Marina y sube por Larios hasta la Plaza de la Constitución. Busca el rótulo del pasaje entre los accesos de la plaza.",
      zh: "从马拉盖塔经公园大道到滨海广场，再沿拉里奥斯街前往宪法广场。沿广场边的门面找巷道标识。",
    },
    access: {
      en: "Start on the square side. Give way in the narrow passage and pause back in the square when pedestrians are coming through.",
      es: "Empieza por el lado de la plaza. Cede el paso en el tramo estrecho y detente de nuevo en la plaza si hay tránsito.",
      zh: "从广场一侧进入。窄处先让人通过，人多时回到广场再停留。",
    },
    photo: {
      en: "From the square, use the entrance as a frame for the quieter lane beyond.",
      es: "Desde la plaza, utiliza la entrada como marco para la calle más tranquila al fondo.",
      zh: "站在广场上，以巷口为框取景，拍进里面较安静的街道。",
    },
    furtherReading: "https://www.museosdeandalucia.es/web/museodemalaga/actualidad/-/asset_publisher/SxfJV5dJvqKr/content/exposicion-tempo-16?inheritRedirect=true",
  },
  "plaza-felix-saenz": {
    history: {
      en: "Formerly called Plaza de la Alhóndiga, the square took Félix Sáenz’s name after the area’s commercial identity became linked to his department store. The surviving frontage still marks that association.",
      es: "Antes llamada Plaza de la Alhóndiga, la plaza tomó el nombre de Félix Sáenz tras quedar vinculada comercialmente a sus almacenes. La fachada conservada aún recuerda esa relación.",
      zh: "广场旧称粮仓广场，后来因周边商业与费利克斯·萨恩斯的百货商店相连而得名。保留下来的立面见证了这一渊源。",
    },
    observation: {
      en: "Look up beyond the ground floor at the curving corner of the old store. Walk a few steps toward Calle Nueva and see how the building addresses several converging streets.",
      es: "Mira por encima de la planta baja hacia la esquina curva de los antiguos almacenes. Acércate a calle Nueva para ver cómo el edificio se abre a varias calles que confluyen en la plaza.",
      zh: "越过底层店面，抬头看原百货大楼的弧形转角。向新街走几步，便能看出建筑如何面向多条汇入广场的街道。",
    },
    route: {
      en: "Walk down Paseo del Parque, cross Plaza de la Marina and use the Alameda to reach Puerta del Mar. The square is at the meeting of that street with Calle San Juan, Calle Nueva and Calle Sagasta.",
      es: "Recorre el Paseo del Parque, cruza la Plaza de la Marina y sigue por la Alameda hasta Puerta del Mar. La plaza está en su encuentro con San Juan, Nueva y Sagasta.",
      zh: "经公园大道穿过滨海广场，沿阿拉梅达走到海门街。海门街与圣胡安街、新街和萨加斯塔街汇合处就是广场。",
    },
    access: {
      en: "This is a short exterior stop. It fits between the Atarazanas market area and the Calle Nueva route into the old town.",
      es: "Es una parada exterior breve. Encaja entre el entorno del mercado de Atarazanas y la entrada al casco antiguo por calle Nueva.",
      zh: "适合短暂停留看外观，可安排在阿塔拉萨纳斯市场一带和经新街进入老城的途中。",
    },
    photo: {
      en: "Stand on the opposite edge of the square, where the curved corner can be seen without standing beside shop entrances.",
      es: "Ponte en el extremo opuesto de la plaza para ver la esquina curva sin detenerte junto a las puertas de los comercios.",
      zh: "从广场对面拍弧形转角，避免挡在店门旁。",
    },
    furtherReading: "https://archivo.historico.uma.es/historico/index.php/almacenes-felix-saenz-plaza-de-felix-saenz-malaga-espana/term/relatedAuthorities",
  },
  "alameda-principal": {
    history: {
      en: "The Alameda developed as a promenade at the southern edge of the old town. Historic addresses such as the Municipal Archive show the boulevard’s role as a prestigious address as the city expanded.",
      es: "La Alameda se desarrolló como paseo en el borde meridional del casco antiguo. Inmuebles históricos como la sede del Archivo Municipal muestran la importancia que ganó esta dirección al crecer la ciudad.",
      zh: "阿拉梅达最初发展为老城南缘的散步大道。市档案馆等历史建筑说明，随着城市扩张，这里成为重要街区。",
    },
    observation: {
      en: "Look from the ficus canopy down to the building fronts. The shaded central corridor and the traffic lanes give different impressions of the same boulevard.",
      es: "Baja la vista desde las copas de los ficus hasta las fachadas. El eje central sombreado y los carriles de circulación dan dos perspectivas distintas del mismo paseo.",
      zh: "从榕树冠看到两侧建筑立面。树荫下的中轴与外侧车道，呈现同一条大道的不同面貌。",
    },
    route: {
      en: "Follow Paseo del Parque west from La Malagueta to Plaza de la Marina. From there, enter the Alameda and continue straight toward the Guadalmedina and Puente de Tetuán.",
      es: "Sigue el Paseo del Parque hacia el oeste desde La Malagueta hasta la Plaza de la Marina. Entra desde allí en la Alameda y continúa recto hacia el Guadalmedina y el Puente de Tetuán.",
      zh: "从马拉盖塔沿公园大道向西到滨海广场，接上阿拉梅达，直走便到瓜达尔梅迪纳河与得土安桥。",
    },
    access: {
      en: "Use the marked crossings to change sides. Alameda Principal is also a useful place to check EMT connections before continuing to the west coast.",
      es: "Usa los pasos señalizados para cambiar de acera. La Alameda Principal también sirve para consultar enlaces de EMT antes de continuar hacia el litoral oeste.",
      zh: "换边请走有标识的人行横道。若继续向西海岸走，也可在阿拉梅达主大道查看 EMT 巴士接驳。",
    },
    photo: {
      en: "Use the shaded pedestrian alignment to frame the trees receding toward the river.",
      es: "Desde el eje peatonal sombreado, encuadra la alineación de árboles que se pierde hacia el río.",
      zh: "在林荫步行轴上取景，让两排树延伸到河边方向。",
    },
    furtherReading: "https://archivomunicipal.malaga.eu/es/el-archivo/el-edificio/",
  },
  "plaza-de-la-marina": {
    history: {
      en: "The square links the centre, the old promenade and the port. Jaime Fernández Pimentel’s El Cenachero commemorates the traditional seller who carried fish in baskets.",
      es: "La plaza enlaza el centro, el paseo histórico y el puerto. El Cenachero, de Jaime Fernández Pimentel, recuerda al vendedor tradicional que llevaba el pescado en cestas.",
      zh: "广场连接市中心、历史大道与港口。海梅·费尔南德斯·皮门特尔创作的鱼贩雕像纪念用鱼篓挑卖鲜鱼的传统行当。",
    },
    observation: {
      en: "Find the baskets on the sculpture and then look along the pedestrian axis toward the docks. The two views put an old trade and today’s waterfront in the same stop.",
      es: "Identifica los cenachos de la escultura y mira después por el eje peatonal hacia los muelles. Las dos vistas reúnen un antiguo oficio y el puerto actual en la misma parada.",
      zh: "先辨认雕像手上的鱼篓，再沿人行轴朝码头望去。一次短停便能把旧时行业与今日港区放在一起看。",
    },
    route: {
      en: "From the beach, follow Paseo del Parque west until Calle Larios and Alameda Principal meet it. Use the marked crossings at that junction to reach the square.",
      es: "Desde la playa, sigue el Paseo del Parque hacia el oeste hasta su encuentro con Larios y la Alameda Principal. Usa los pasos señalizados del cruce para llegar a la plaza.",
      zh: "从海滩沿公园大道向西走到拉里奥斯街和阿拉梅达主大道的交汇处，经人行横道进入广场。",
    },
    access: {
      en: "Use the square to choose your next leg. The Larios side leads into the old town, and the port side connects with the pedestrian waterfront.",
      es: "Usa la plaza para decidir el siguiente tramo. Por Larios se entra en el casco antiguo y por el lado del puerto se llega al paseo peatonal.",
      zh: "可在广场决定接下来的路线。拉里奥斯街一侧通往老城，港口一侧接亲水步道。",
    },
    photo: {
      en: "Photograph the Cenachero from an angle that shows both baskets, then step toward the port side for a wider scene.",
      es: "Fotografía al Cenachero desde un ángulo que muestre las dos cestas y acércate después al lado del puerto para una vista más amplia.",
      zh: "选一个能拍到两只鱼篓的角度，再移到靠港的一侧拍广角。",
    },
  },
  "mercado-salamanca": {
    history: {
      en: "Daniel Rubio designed this covered market for the El Molinillo neighbourhood. Its Neo-Mudéjar exterior is part of its protected architectural character, while the indoor stalls still serve local shoppers.",
      es: "Daniel Rubio proyectó el mercado cubierto para el barrio de El Molinillo. Su exterior neomudéjar forma parte del valor arquitectónico protegido y sus puestos siguen atendiendo a los vecinos.",
      zh: "丹尼尔·鲁维奥为磨坊街区设计了这座室内市场。受保护的新穆德哈尔风格外观与至今服务居民的摊位并存。",
    },
    observation: {
      en: "Walk along the street frontage to see the brick patterns around the entrances. Inside, pause to get your bearings and then follow the aisle with the active stalls.",
      es: "Recorre la fachada para ver los dibujos del ladrillo alrededor de las entradas. Dentro, oriéntate al llegar y sigue el pasillo donde estén abiertos los puestos.",
      zh: "先沿街看入口周围的砖饰。进场后确认方向，沿摊位正在营业的通道走。",
    },
    route: {
      en: "From the beach, head past the Roman Theatre to Plaza de la Merced. Continue through the San Felipe Neri area toward El Molinillo and finish at the San Bartolomé side of the market.",
      es: "Desde la playa, pasa por el Teatro Romano hasta la Plaza de la Merced. Cruza el entorno de San Felipe Neri hacia El Molinillo y llega al mercado por el lado de San Bartolomé.",
      zh: "从海滩经罗马剧场到梅塞德广场，穿过圣斐理伯内利一带前往磨坊街区，从圣巴托洛梅街一侧靠近市场。",
    },
    access: {
      en: "Plan for the morning and consult the municipal listing for trading days. If you only have time for the outside, the façade is easy to see from the opposite pavement.",
      es: "Ve por la mañana y consulta la ficha municipal para saber los días de actividad. Si solo puedes ver el exterior, la fachada se distingue bien desde la acera de enfrente.",
      zh: "尽量早上去，先看市政市场资料上的营业日。若只看外观，在对面人行道上就能看清立面。",
    },
    photo: {
      en: "Photograph the brickwork from outdoors. Ask each vendor before photographing their stall and keep the aisle clear.",
      es: "Fotografía el ladrillo desde la calle. Antes de sacar un puesto, pregunta al vendedor y deja libre el pasillo.",
      zh: "砖饰可从街上拍。拍摊位前先问摊主，并让出通道。",
    },
    furtherReading: "https://mercadosmunicipalesyviapublica.malaga.eu/mercados-municipales/mercados-municipales/sgnoticia/Mercado-de-Salamanca/",
  },
  "museo-semana-santa": {
    history: {
      en: "The brotherhoods’ museum brings together sculpture, painting and metalwork associated with Málaga’s Easter processions. The setting is the historic San Julián complex.",
      es: "El museo de las cofradías reúne escultura, pintura y orfebrería vinculadas a las procesiones malagueñas. Se encuentra en el conjunto histórico de San Julián.",
      zh: "兄弟会博物馆位于圣胡利安历史建筑群内，汇集与马拉加圣周游行有关的雕塑、绘画和金银工艺。",
    },
    observation: {
      en: "Read the labels for the brotherhood and use of each object. Looking first at one piece of metalwork and then at a figure helps make sense of the different roles they play in a procession.",
      es: "Lee en las cartelas la cofradía y el uso de cada pieza. Comparar una obra de orfebrería con una imagen ayuda a entender sus distintas funciones en una procesión.",
      zh: "看展签了解文物所属的兄弟会及用途。先看一件金属工艺品，再看一尊造像，有助于理解它们在游行中的不同作用。",
    },
    route: {
      en: "Walk from the beach to Plaza de la Constitución via Paseo del Parque and Calle Larios. Continue toward Plaza de los Mártires and follow the lanes toward Calle Muro de San Julián.",
      es: "Desde la playa, llega a la Plaza de la Constitución por el Paseo del Parque y Larios. Sigue hacia la Plaza de los Mártires y toma las calles que llevan a Muro de San Julián.",
      zh: "从海滩经公园大道和拉里奥斯街到宪法广场，继续往殉道者广场，再沿街巷走向圣胡利安墙街。",
    },
    access: {
      en: "Check with the Agrupación de Cofradías for current opening and the visitor door, especially around Holy Week. Allow for detours on procession days.",
      es: "Confirma con la Agrupación de Cofradías el horario y la puerta de acceso, sobre todo en Semana Santa. Los días de procesión, cuenta con desvíos.",
      zh: "向圣周兄弟会联合会确认开放和访客入口，尤其在圣周前后。游行日预留绕行时间。",
    },
    photo: {
      en: "Check the gallery’s photo rules before using a camera. The approach along Muro de San Julián is a street-level subject if photography indoors is restricted.",
      es: "Consulta las normas de fotografía de las salas. Si hay restricciones, el entorno de Muro de San Julián ofrece un motivo desde la calle.",
      zh: "入内拍照前先看展厅规则。如果室内有摄影限制，可沿圣胡利安墙街取街景。",
    },
    furtherReading: "https://www.malaga.eu/la-ciudad/instalaciones-y-espacios/detalle-de-la-instalacion/?id=1933",
  },
  "oxo-museo": {
    history: {
      en: "OXO treats video games as a history of design and technology. Its permanent visit lets you compare generations of games with the hardware people used to play them.",
      es: "OXO presenta el videojuego como una historia del diseño y la tecnología. Su recorrido permanente permite comparar generaciones de juegos y los equipos con que se jugaban.",
      zh: "OXO 从设计和技术的角度呈现电子游戏历史。常设展可让人对比不同年代的游戏与玩家曾使用的设备。",
    },
    observation: {
      en: "At a playable station, look at the controller layout and the on-screen instructions before starting. Try a device from a different generation to see what changed in the way players interact.",
      es: "En un puesto jugable, fíjate en la disposición de los mandos y en las instrucciones de pantalla antes de empezar. Prueba después otra generación para ver cómo cambió la interacción.",
      zh: "试玩前先观察控制器按键和屏幕指令，再体验另一个年代的设备，对比玩家与游戏互动方式的变化。",
    },
    route: {
      en: "From the beach, go by Paseo del Parque and head inland past the cathedral via Calle Molina Lario. Continue into the lanes toward Plaza del Siglo for the museum.",
      es: "Desde la playa, toma el Paseo del Parque y entra por Molina Lario junto a la catedral. Sigue por el casco antiguo hacia la Plaza del Siglo, donde está el museo.",
      zh: "从海滩经公园大道，沿莫利纳·拉里奥街经过主教座堂进入老城，再沿街巷找到世纪广场的博物馆。",
    },
    access: {
      en: "Check the ticket calendar for the time slot you want. If you are visiting with others, allow enough time for each person to try a few stations without rushing.",
      es: "Consulta el calendario de entradas para elegir franja. Si vas acompañado, reserva tiempo para que todos puedan probar varios puestos con calma.",
      zh: "在票务日历上查想去的时段。结伴参观时多预留一些时间，方便每个人轮流试玩几种设备。",
    },
    photo: {
      en: "Ask about photography before recording displays, and leave room for anyone using a controller.",
      es: "Pregunta por las normas antes de grabar las pantallas y deja espacio a quien esté usando un mando.",
      zh: "拍摄屏幕前先询问规则，给正在使用手柄的人留出空间。",
    },
    furtherReading: "https://oxomuseomalaga.com/",
  },
  "museo-imaginacion": {
    history: {
      en: "The museum on Calle Martínez Campos in Soho is built around interactive optical effects. Visitor position is part of the exhibit, which changes what a room or image seems to contain.",
      es: "El museo de calle Martínez Campos, en el Soho, gira en torno a efectos ópticos interactivos. La posición del visitante forma parte de la exposición y cambia la percepción del espacio o de una imagen.",
      zh: "苏荷区马丁内斯·坎波斯街上的这座博物馆以互动视觉错觉为主题。观众的站位本身就是展品的一部分，换个位置便会改变对空间和图像的感知。",
    },
    observation: {
      en: "Try the marked position first. Then take a step sideways or ask a companion to swap places, so you can see how the installation uses scale and perspective.",
      es: "Prueba primero desde la posición marcada. Da después un paso lateral o cambia de lugar con tu acompañante para entender cómo el montaje utiliza la escala y la perspectiva.",
      zh: "先在标示的位置看，再侧移一步，或和同行者交换位置，感受装置如何利用尺度和透视。",
    },
    route: {
      en: "Follow Paseo del Parque from La Malagueta to Plaza de la Marina. Head into Soho on the port side of Alameda Principal and follow Calle Martínez Campos to number 13.",
      es: "Desde La Malagueta, sigue el Paseo del Parque hasta la Plaza de la Marina. Entra al Soho por el lado portuario de la Alameda Principal y busca el número 13 de Martínez Campos.",
      zh: "从马拉盖塔经公园大道到滨海广场，从阿拉梅达大道靠港的一侧进入苏荷，再到马丁内斯·坎波斯街 13 号。",
    },
    access: {
      en: "Check the schedule and ticket arrangements before coming. The central location makes it simple to combine the visit with a stroll through Soho after the indoor stop.",
      es: "Comprueba los horarios y las entradas antes de acudir. Desde esta ubicación puedes continuar con un paseo por el Soho después de la visita interior.",
      zh: "出发前查看开放和购票安排。场馆位于苏荷中心，参观后可就近逛苏荷街区。",
    },
    photo: {
      en: "For perspective photographs, check the camera marks or instructions first. Agree on positions with your companion so you can take the picture without holding up the next group.",
      es: "Para las fotos de perspectiva, busca primero las marcas o indicaciones. Ponte de acuerdo con tu acompañante para sacar la foto sin hacer esperar al siguiente grupo.",
      zh: "拍透视照片时先找相机站位或说明。和同伴提前商量位置，以免下一组等太久。",
    },
  },
  "coleccion-museo-ruso": {
    history: {
      en: "The collection opened in Málaga in 2015 in Tabacalera, the former tobacco factory. The reused industrial complex gives the exhibitions a very different setting from the old town’s museums.",
      es: "La Colección abrió en Málaga en 2015, en la antigua fábrica de tabacos, Tabacalera. Su marco industrial rehabilitado contrasta con el de los museos del casco antiguo.",
      zh: "收藏馆于 2015 年在马拉加旧烟草工厂开馆。改造后的厂区与老城博物馆的展陈环境很不一样。",
    },
    observation: {
      en: "Start by looking at the buildings and courtyard before going into the galleries. Inside, read the current exhibition introduction so you know how the show has been organised.",
      es: "Antes de entrar en las salas, observa los edificios y el patio. Dentro, lee la introducción de la exposición actual para entender cómo se ha organizado.",
      zh: "进展厅前先观察厂房和庭院。进馆后读当期展览导言，了解策展布局再看作品。",
    },
    route: {
      en: "From La Malagueta, cross into the west waterfront and follow Paseo Marítimo Antonio Machado toward Huelin. Turn inland to Tabacalera on Avenida de Sor Teresa Prat and look for the collection’s signed entrance.",
      es: "Desde La Malagueta, cruza hacia el litoral oeste y sigue el Paseo Marítimo Antonio Machado hacia Huelin. Gira al interior hacia Tabacalera en la avenida de Sor Teresa Prat y busca la entrada señalizada.",
      zh: "从马拉盖塔过河到西部滨海区，沿安东尼奥·马查多步道向韦林走。转向内陆的索尔·特雷莎·普拉特大道，按标识找到旧烟厂内的展馆入口。",
    },
    access: {
      en: "Look up the current exhibition and whether an activity requires its own booking. Metro service to Princesa–Huelin can shorten the trip, with a walk through the neighbourhood to Tabacalera.",
      es: "Consulta la exposición vigente y si alguna actividad exige reserva propia. El metro hasta Princesa–Huelin puede acortar el trayecto, con un tramo por el barrio hasta Tabacalera.",
      zh: "先查当期展览，以及活动是否要另行预约。可搭地铁至 Princesa–Huelin，再步行穿过街区到旧烟厂。",
    },
    photo: {
      en: "The repeated openings of the factory buildings give the courtyard a strong rhythm. Check exhibition-specific photography rules inside.",
      es: "Los huecos repetidos de las naves dan ritmo al patio. Dentro, consulta las normas de fotografía de cada exposición.",
      zh: "厂房重复排列的门窗为庭院带来节奏感。室内拍摄请查看当期展览规则。",
    },
    furtherReading: "https://www.malaga.eu/la-ciudad/instalaciones-y-espacios/detalle-de-la-instalacion/?id=8008",
  },
  "la-termica": {
    history: {
      en: "The Diputación de Málaga opened La Térmica in January 2013 as a centre for contemporary culture. The former civic-centre site now gives exhibitions, workshops and talks a shared address.",
      es: "La Diputación de Málaga abrió La Térmica en enero de 2013 como centro de cultura contemporánea. El antiguo Centro Cívico reúne hoy exposiciones, talleres y charlas.",
      zh: "马拉加省政府于 2013 年 1 月创立这座当代文化中心。原市民中心如今承办展览、工作坊和讲座。",
    },
    observation: {
      en: "Read the programme before choosing which rooms to visit. Look also at the regionalist building as you pass through, especially how the corridors connect different parts of the old complex.",
      es: "Lee la programación antes de elegir las salas. Fíjate también en el edificio regionalista y en cómo los corredores conectan distintas partes del antiguo conjunto.",
      zh: "先读活动日程，再挑展厅。穿行时也可留意地方主义风格的建筑，以及走廊如何把旧建筑群各部分连在一起。",
    },
    route: {
      en: "For a long waterfront walk, cross the river from Soho and follow the western promenades past Huelin toward Misericordia. Turn inland to Avenida de los Guindos and find number 48.",
      es: "Para un paseo largo, cruza el río desde el Soho y sigue los paseos del oeste, pasando Huelin en dirección a la Misericordia. Gira hacia el interior por la avenida de los Guindos hasta el número 48.",
      zh: "想走长线，可从苏荷过河，经西部滨海步道过韦林，往米塞里科尔迪亚走，再转向内陆的洛斯金多斯大道 48 号。",
    },
    access: {
      en: "For a shorter approach, check EMT or Metro options to the western district. Check the date, room and registration for the specific event on the official programme before heading to the site.",
      es: "Para acortar, consulta opciones de EMT o metro hacia el distrito oeste. Comprueba en la agenda oficial la fecha, sala e inscripción de la actividad que te interesa.",
      zh: "想少走一段，可查往西区的 EMT 公交或地铁。出发前根据官方日程确认活动日期、房间和报名要求。",
    },
    photo: {
      en: "Photograph the building from the public approach. Ask the organisers about photography or video during the event itself.",
      es: "Fotografía el edificio desde el acceso público. Pregunta a la organización si se permite sacar fotos o grabar durante la actividad.",
      zh: "建筑外观可从公共入口拍摄。活动现场能否拍照或录像，请询问组织方。",
    },
    furtherReading: "https://latermicamalaga.com/book/",
  },
  "jardin-botanico-concepcion": {
    history: {
      en: "Created in 1855 by the Loring family, the garden brought subtropical plants into a landscaped estate on the northern edge of Málaga. The city acquired it in 1990 and opened it for public visits after restoration.",
      es: "Creado en 1855 por la familia Loring, el jardín aclimató plantas subtropicales en una finca paisajística al norte de Málaga. El Ayuntamiento lo adquirió en 1990 y lo abrió al público tras su acondicionamiento.",
      zh: "洛林家族于 1855 年在马拉加北部风景庄园创立花园，引入亚热带植物。市政府 1990 年收购花园，经整修后向公众开放。",
    },
    observation: {
      en: "Start in the historic core and look for giant trees, mature palms, water features and the wisteria pergola near the house. The narrow paths and changes in level are part of the original landscape design.",
      es: "Empieza por el núcleo histórico y busca los grandes árboles, las palmeras adultas, el agua y la pérgola de glicinias cercana a la casa. Las sendas estrechas y los desniveles forman parte del diseño paisajista.",
      zh: "先走历史核心区，寻找大树、老棕榈、水景和宅邸附近的紫藤廊架。窄径和高差都是早期景观设计的一部分。",
    },
    route: {
      en: "From La Malagueta, the garden is an inland outing. Head toward Alameda Principal for a northbound EMT connection, check the stop recommended by the garden and use the signed pedestrian approach to Camino del Jardín Botánico, 3.",
      es: "Desde La Malagueta, el jardín queda hacia el interior. Ve a la Alameda Principal para enlazar con EMT hacia el norte, consulta la parada recomendada por el jardín y sigue el acceso peatonal señalizado a Camino del Jardín Botánico, 3.",
      zh: "花园在马拉盖塔的内陆方向。从阿拉梅达主大道查往北的 EMT 接驳，核对植物园建议下车站，再按步行标识去植物园路 3 号。",
    },
    access: {
      en: "Check the seasonal hours and ticket desk information first. Use the map at the entrance to choose a route that suits your walking pace and the amount of climbing you want to do.",
      es: "Consulta el horario de temporada y la información de taquilla. Usa el plano de la entrada para elegir un recorrido acorde con tu ritmo y con el desnivel que quieras hacer.",
      zh: "先查季节开放时间和售票处信息。到入口后看导览图，按自己的步速和能接受的坡度来选路线。",
    },
    photo: {
      en: "Try a frame that shows a path beside water under the canopy. Stay on the marked paths around the historic planting.",
      es: "Busca un encuadre que reúna sendero, agua y copas. En torno a las plantaciones históricas, permanece en los caminos señalizados.",
      zh: "可拍一张把水边小径和上方树冠一起收入的照片。历史种植区请走标示步道。",
    },
    furtherReading: "https://laconcepcion.malaga.eu/es/visitanos/",
  },
  "playa-el-dedo": {
    history: {
      en: "El Dedo is also called El Chanquete. The city describes it as a roughly 550-metre beach at the eastern side of El Palo, where seafood restaurants face the shore.",
      es: "El Dedo también se llama El Chanquete. La ficha municipal lo describe como una playa de unos 550 metros en el extremo oriental de El Palo, con restaurantes marineros junto a la orilla.",
      zh: "埃尔德多也叫埃尔钱克特。市政资料称海滩约长 550 米，位于埃尔帕洛东侧，海鲜餐馆面对海岸。",
    },
    observation: {
      en: "Look for the point where the dense line of El Palo’s seafront streets gives way to the longer stretch of sand. The Paseo del Chanquete is the best reference for this change.",
      es: "Fíjate en el punto donde las calles densas del frente de El Palo dan paso a una franja de arena más larga. El Paseo del Chanquete sirve de referencia para ese cambio.",
      zh: "留意埃尔帕洛密集的滨海街巷从哪里过渡到更长的沙滩。钱克特滨海步道是辨认这段变化的地标。",
    },
    route: {
      en: "Start east along La Caleta, then continue through Pedregalejo and El Palo using the coastal promenades. At the east end of El Palo, follow the signs toward Paseo Marítimo del Chanquete.",
      es: "Sal hacia el este por La Caleta y sigue los paseos costeros de Pedregalejo y El Palo. En el extremo oriental de El Palo, continúa hacia el Paseo Marítimo del Chanquete.",
      zh: "向东经拉卡莱塔，再走佩德雷加莱霍和埃尔帕洛的滨海步道。从埃尔帕洛东端按路牌继续到钱克特滨海步道。",
    },
    access: {
      en: "For a shorter trip, take an eastbound EMT bus toward El Palo and walk from the neighbourhood to the seafront. Check the beach listing for flagged swimming conditions and seasonal facilities.",
      es: "Para acortar, toma un autobús de EMT hacia El Palo y baja desde el barrio al paseo. Consulta la ficha de la playa para conocer las banderas y servicios de temporada.",
      zh: "想少走可搭往埃尔帕洛方向的 EMT 公交，从街区走到海滨。游泳条件和季节服务以市政海滩资料和现场旗帜为准。",
    },
    photo: {
      en: "For a broad shoreline photograph, face back toward El Palo from the eastern end of the promenade.",
      es: "Para una panorámica de la orilla, mira hacia El Palo desde el extremo oriental del paseo.",
      zh: "从步道东端朝埃尔帕洛方向回拍，可看到更完整的岸线。",
    },
  },
  "playa-el-candado": {
    history: {
      en: "The small beach takes its name from the neighbouring residential development, built in the 1960s. It marks the transition from the denser El Palo waterfront to the quieter east-coast path.",
      es: "La pequeña playa toma el nombre de la urbanización vecina, construida en los años sesenta. Marca el paso del frente más urbano de El Palo al paseo más tranquilo del este.",
      zh: "这片小海滩得名于邻近的 20 世纪 60 年代住宅区。这里也是从埃尔帕洛密集海滨过渡到较安静东岸步道的节点。",
    },
    observation: {
      en: "From the public footway, notice the marina breakwater and the short line of beach tucked beside it. The next section of coast opens again in the direction of Peñón del Cuervo.",
      es: "Desde el paseo público, mira el espigón del puerto deportivo y la corta franja de playa a su lado. Hacia el Peñón del Cuervo vuelve a abrirse la costa.",
      zh: "从公共步道看游艇港的防波堤及其旁边短短一段海滩。再向乌鸦岩走，海岸会重新开阔。",
    },
    route: {
      en: "Follow La Caleta, Pedregalejo and El Palo eastward to El Dedo, then continue toward the El Candado marina on the public pedestrian approach.",
      es: "Sigue hacia el este por La Caleta, Pedregalejo y El Palo hasta El Dedo. Continúa hacia el puerto deportivo de El Candado por el acceso peatonal público.",
      zh: "一路向东，经拉卡莱塔、佩德雷加莱霍和埃尔帕洛走到埃尔德多，再沿公共人行通道前往埃尔坎达多游艇港。",
    },
    access: {
      en: "Look for the signed public beach approach beside the marina and treat club entrances as separate. For transport, consult EMT for stops on the El Palo–El Candado side before the final walk.",
      es: "Busca el acceso público señalizado junto al puerto deportivo. Las entradas del club son independientes. Para llegar, consulta las paradas de EMT entre El Palo y El Candado antes del tramo a pie.",
      zh: "沿游艇港找标示的公共海滩入口，俱乐部另有入口。搭公交可先查埃尔帕洛至埃尔坎达多一带的 EMT 站点，再走最后一段。",
    },
    photo: {
      en: "Shoot from the public shore side to show the beach curving back toward the marina.",
      es: "Fotografía desde el lado público de la orilla para captar la curva de la playa hacia el puerto deportivo.",
      zh: "从公共海岸一侧拍，把海滩弧线和游艇港一起收入画面。",
    },
  },
  "playa-penon-cuervo": {
    history: {
      en: "The beach takes its name from the rocky formation that divides the shore in two. The city’s eastern coastal itinerary links this stretch with the El Candado marina and La Araña.",
      es: "La playa toma su nombre de la formación rocosa que divide la orilla en dos. El itinerario litoral municipal enlaza este tramo con el puerto de El Candado y La Araña.",
      zh: "海滩因将岸线一分为二的岩体得名。市政东岸路线把这一段与埃尔坎达多游艇港和拉阿拉尼亚连起来。",
    },
    observation: {
      en: "Look at the rock from both sides if the public paths are open. From one side it interrupts the shoreline, and from the other it reads as a peninsula projecting into the water.",
      es: "Si los caminos públicos están abiertos, mira la roca desde ambos lados. Desde uno corta la orilla y desde el otro se distingue como un promontorio que se adentra en el agua.",
      zh: "公共步道开放时，可从两边分别看岩体。从一侧望，它截断沙滩；从另一侧看，则像一座伸入海面的岬角。",
    },
    route: {
      en: "From La Malagueta, follow the eastbound promenades through El Palo and El Dedo. Beyond El Candado, continue on the signposted Paseo Litoral toward La Araña and use the marked beach approach.",
      es: "Desde La Malagueta, sigue los paseos hacia el este por El Palo y El Dedo. Pasado El Candado, continúa por el Paseo Litoral señalizado hacia La Araña y usa el acceso indicado a la playa.",
      zh: "从马拉盖塔沿步道向东，经埃尔帕洛和埃尔德多。过埃尔坎达多后沿有路标的滨海步道向拉阿拉尼亚走，再从标示的入口下到海滩。",
    },
    access: {
      en: "Check the city beach page and any path detours before the longer walk. On site, pick the side with the approach you want before going down to the sand.",
      es: "Consulta la ficha municipal y los posibles desvíos del paseo antes de la caminata. Al llegar, elige el lado que te convenga antes de bajar a la arena.",
      zh: "长途步行前查市政海滩资料和步道改道信息。到达后先选想去的那一侧，再从相应入口下到沙滩。",
    },
    photo: {
      en: "Photograph from a public path or the beach to show the rock splitting the bay. There is enough separation for a clear view without climbing the outcrop.",
      es: "Fotografía desde el paseo o la arena para mostrar cómo la roca divide la ensenada. Desde allí hay distancia suficiente para verla entera.",
      zh: "从公共步道或沙滩拍摄，便能表现岩体如何分隔海湾，也有足够距离拍全岩体。",
    },
    furtherReading: "https://medioambiente.malaga.eu/bioeduca/biodiversidad/itinerarios-ambientales/paseo-litoral/",
  },
  "playa-la-arana": {
    history: {
      en: "La Araña is the easternmost coastal neighbourhood in the municipality. Its shore is close to the prehistoric archaeological sites that document much earlier settlement of this coastline.",
      es: "La Araña es el barrio litoral más oriental del municipio. Cerca de su playa se encuentran los yacimientos prehistóricos que documentan la ocupación más antigua de esta costa.",
      zh: "拉阿拉尼亚是马拉加市最东面的滨海街区。海滩附近的史前遗址记录了这段海岸更早的人类活动。",
    },
    observation: {
      en: "Look at the shoreline from the neighbourhood access and notice the rocky sections between stretches of beach. The nearby archaeological sites require their own arrangements if you want to add a visit.",
      es: "Observa la orilla desde el acceso del barrio y distingue las zonas rocosas entre los tramos de playa. Si quieres añadir los yacimientos, consulta sus condiciones de visita por separado.",
      zh: "从街区入口看海岸线，留意各段沙滩之间的岩石地带。如果想加游附近考古遗址，需另查参观安排。",
    },
    route: {
      en: "For the coastal walk, continue east from Peñón del Cuervo on the marked path and follow the signed route into La Araña. The beach approach comes through the neighbourhood near Escritor Aguirre García.",
      es: "Para llegar por la costa, continúa hacia el este desde el Peñón del Cuervo por el itinerario señalizado y entra en La Araña. El acceso a la playa pasa por el barrio cerca de Escritor Aguirre García.",
      zh: "从乌鸦岩继续沿有标识的海滨路线向东，走进拉阿拉尼亚街区。靠近埃斯克里托·阿吉雷·加西亚街有到海滩的入口。",
    },
    access: {
      en: "This is a longer trip from La Malagueta. Check current bus stops along Carretera de Almería and look up the city beach page before planning to swim.",
      es: "Es un trayecto largo desde La Malagueta. Comprueba las paradas de autobús de la carretera de Almería y consulta la ficha municipal antes de planear el baño.",
      zh: "从马拉盖塔出发路程较长。可先查阿尔梅里亚公路沿线的公交站点，打算下水也要查市政海滩资料。",
    },
    photo: {
      en: "From the shore, use the rocky edges to show how the narrower beach fits into this stretch of coast.",
      es: "Desde la orilla, usa los bordes rocosos para mostrar cómo encaja la playa estrecha en este tramo litoral.",
      zh: "在岸边让岩石入景，表现狭长沙滩如何嵌在这一段海岸中。",
    },
    furtherReading: "https://www.malaga.eu/la-ciudad/playas/la-arana/index.html",
  },
  "playa-sacaba": {
    history: {
      en: "Sacaba occupies the seafront between Misericordia and the Guadalhorce mouth. The city describes the area behind it as a former industrial zone in transition.",
      es: "Sacaba ocupa la franja entre la Misericordia y la desembocadura del Guadalhorce. El Ayuntamiento describe el entorno como una antigua zona industrial en transformación.",
      zh: "萨卡巴位于米塞里科尔迪亚海滩和瓜达尔奥尔塞河口之间。市政资料记载，海滩背后是正在转型的旧工业区。",
    },
    observation: {
      en: "Follow the shoreline toward the river end and compare it with the longer urban frontage of Misericordia. Look for the place where the built seafront gives way to the open river-mouth landscape.",
      es: "Sigue la orilla hacia el río y compárala con el frente urbano más largo de la Misericordia. Fíjate en la transición de la fachada urbana al paisaje abierto de la desembocadura.",
      zh: "朝河口走，与米塞里科尔迪亚较长的城市海滨对照着看。留意建筑连续的滨海地带在哪里转为开阔的河口景观。",
    },
    route: {
      en: "From La Malagueta, cross the Guadalmedina and follow the western promenades, first Antonio Machado and then Antonio Banderas. Continue past Misericordia toward the Sacaba frontage.",
      es: "Desde La Malagueta, cruza el Guadalmedina y sigue los paseos del oeste, primero Antonio Machado y después Antonio Banderas. Pasa la Misericordia y continúa hacia Sacaba.",
      zh: "从马拉盖塔过瓜达尔梅迪纳河，依次走西岸的安东尼奥·马查多和安东尼奥·班德拉斯步道，经过米塞里科尔迪亚后继续到萨卡巴。",
    },
    access: {
      en: "Take local transit toward the western seafront if you prefer a shorter walk. Check the city listing for the beach’s seasonal services and the signs on site before going into the water.",
      es: "Usa el transporte urbano hacia el litoral oeste si prefieres caminar menos. Consulta los servicios de temporada en la ficha municipal y revisa la señalización antes de entrar al agua.",
      zh: "若想少走，可搭市区交通到西部海滨，再走最后一段。季节性服务请看市政资料，下水前看现场标识。",
    },
    photo: {
      en: "Face along the coast from the promenade to catch the change from Misericordia’s built frontage to the open sky near the mouth.",
      es: "Desde el paseo, fotografía a lo largo de la costa para captar el paso del frente construido de la Misericordia al horizonte abierto junto al río.",
      zh: "从步道沿岸取景，拍出米塞里科尔迪亚的建筑立面向河口开阔天际线过渡的景象。",
    },
    furtherReading: "https://www.malaga.eu/la-ciudad/playas/sacaba/index.html",
  },
  "puente-tetuan": {
    history: {
      en: "A bridge opened here in 1860 to carry traffic across the Guadalmedina. The crossing still joins Alameda Principal with the western extension toward Avenida de Andalucía.",
      es: "En este punto se inauguró un puente en 1860 para cruzar el Guadalmedina. El paso sigue uniendo la Alameda Principal con su prolongación hacia la Avenida de Andalucía.",
      zh: "1860 年，这里启用了一座跨瓜达尔梅迪纳河的桥。今天这处跨河通道仍连接阿拉梅达主大道和向西的安达卢西亚大道。",
    },
    observation: {
      en: "Look upstream from the bridge to see the straight river corridor through the city. Then turn west to read how the roadway continues into the broad Avenida de Andalucía.",
      es: "Mira aguas arriba desde el puente para seguir el corredor recto del río por la ciudad. Después, gira al oeste para ver cómo la vía continúa por la amplia Avenida de Andalucía.",
      zh: "从桥上向上游看河道笔直穿城，再向西看车道如何衔接宽阔的安达卢西亚大道。",
    },
    route: {
      en: "Take Paseo del Parque from La Malagueta, cross Plaza de la Marina and follow Alameda Principal west. The bridge is at the river end of the avenue.",
      es: "Desde La Malagueta, sigue el Paseo del Parque, cruza la Plaza de la Marina y recorre la Alameda Principal hacia el oeste. El puente está donde la avenida se encuentra con el río.",
      zh: "从马拉盖塔经公园大道穿过滨海广场，沿阿拉梅达主大道向西。走到大道和河道交会处就是桥。",
    },
    access: {
      en: "Stay on the bridge pavement and use marked crossings at either end. For a near-continuous walk, carry on west toward Jardines de Picasso or turn back toward the Alameda bus stops.",
      es: "Usa la acera del puente y los pasos señalizados de los extremos. Puedes continuar hacia los Jardines de Picasso o volver hacia las paradas de autobús de la Alameda.",
      zh: "走桥面人行道，在两端走标示的人行横道。可继续向西到毕加索花园，也可折回阿拉梅达大道的公交站。",
    },
    photo: {
      en: "From the pedestrian side, frame the channel and its retaining walls together to show the scale of the river crossing.",
      es: "Desde la acera, encuadra el cauce y sus muros para mostrar la escala del cruce.",
      zh: "从人行道拍下河槽和两侧挡墙，表现跨河通道的尺度。",
    },
    furtherReading: "https://www.flickr.com/photos/archivofotograficomalaga/8642647100",
  },
};
