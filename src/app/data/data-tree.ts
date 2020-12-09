import { Card } from '../components/common/option-cards/option-cards.component';

export class DataTree{
    //Level 0
    static main:Card[] = [
        { title:"¿Amig_s o novi_s?",content:"¿Quieres saber todo sobre ligue?" ,icon:"/assets/icon/1-amigues.svg", route: '/como-me-siento/amigxs-o-novixs', bgColor:'#FF3366', enabled:true },
        { title:"Curiosa/o",content:"¿Quieres descubrir cosas chidas?", icon:"/assets/icon/curiosx.svg", route: '/como-me-siento/curiosx', bgColor: '#F97F06', enabled:true },
        { title:"No ando al 100",content:"¿Te sientes rara/o?", icon:"/assets/icon/1-No-ando-al-cien.svg", route: '/como-me-siento/noAndoAl100', bgColor: '#1AA086', enabled:true },
        { title:"Ignorada/o",content:"¿Qué puedo hacer?", icon:"/assets/icon/1-Ignorado.svg", route: '/como-me-siento/ignoradx', bgColor: '#1891B2', enabled:true },
        { title:"Participativa/o",content:"Cambia el Mundo", icon:"/assets/icon/1-La-weba.svg", route: '/como-me-siento/participa', bgColor: '#FCC103', enabled:true },
        { title:"Zombi",content:"Sobreviviendo la Covid-19", icon:"/assets/icon/zombi.svg", route: '/como-me-siento/zombi', bgColor: '#42DABF', enabled:true },
    ];

    //Level 1
    static ligando:Card[] = [
        { title:"Cuidando mi cuerpo",content:"",icon:"/assets/icon/cuidando-mi-cuerpo.svg",route: '/como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo', bgColor:'#FF3366',enabled:true },
        { title:"Sexualidad",content:"",icon:"/assets/icon/sexualidad.svg",route: '/como-me-siento/amigxs-o-novixs/sexualidad', bgColor:'#FF3366',enabled:true },
        { title:"Violencia",content:"",icon:"/assets/icon/violencia.svg",route: '/como-me-siento/amigxs-o-novixs/violencia', bgColor:'#FF3366',enabled:true },
        { title:"Nuevas masculinidades",content:"",icon:"/assets/icon/nuevas-masculanidades.svg",route: '/como-me-siento/amigxs-o-novixs/masculinidades', bgColor:'#FF3366',enabled:true },
        { title:"Embarazo",content:"",icon:"/assets/icon/embarazo.svg",route: '/como-me-siento/amigxs-o-novixs/embarazo', bgColor:'#FF3366',enabled:true },
        { title:"Métodos anticonceptivos",content:"",icon:"/assets/icon/metodos-anticonceptivos.svg",route: '/como-me-siento/amigxs-o-novixs/metodos-anticonceptivos', bgColor:'#FF3366',enabled:true },
        //{ title:"Amor y Relaciones",content:"", icon:"/assets/icon/amor-y-relaciones.svg",route: '/como-me-siento/amigxs-o-novixs/amor-yRelaciones', bgColor:'#FF3366',enabled:true },
        //{ title:"Curiosidad",content:"",icon:"/assets/icon/curiosidad.svg",route: '/como-me-siento/amigxs-o-novixs/curiosidad', bgColor:'#FF3366',enabled:true },
        
    ];

    static modoNerd:Card[] = [
        { title:"Tus derechos",content:" ",icon:"/assets/icon/tus-derechos.svg",route: '/como-me-siento/curiosx/tus-derechos', bgColor: '#F97F06',enabled:true },
        { title:"COVID-19",content:" ",icon:"/assets/icon/covid-19.svg",route: '/como-me-siento/curiosx/covid-19', bgColor: '#F97F06',enabled:true },
        { title:"Aprende cosas chidas",content:" ",icon:"/assets/icon/aprende-cosas-chidas.svg",route: '/como-me-siento/curiosx/aprendeCosasChidas', bgColor: '#F97F06',enabled:true },
        { title:"Actividades",content:" ",icon:"/assets/icon/Actividades.svg",route: '/como-me-siento/curiosx/actividades', bgColor: '#F97F06',enabled:true },
        { title:"Habilidades",content:" ",icon:"/assets/icon/Habilidades.svg",route: '/como-me-siento/curiosx/habilidades', bgColor: '#F97F06',enabled:true },
        //{ title:"Derechos Humanos",content:" ",icon:"/assets/icon/Derechos-humanos.svg",route: '/como-me-siento/curiosx/derechosHumanos', bgColor: '#F97F06',enabled:false },
        //{ title:"¿Que pasaría si...?",content:" ",icon:"/assets/icon/que-pasaria-si.svg",route: '/como-me-siento/curiosx/quePasaria', bgColor: '#F97F06',enabled:false }
    ];

    static noAndoAl100:Card[] = [
        //{ title:"Emociones",content:" ",icon:"/assets/icon/emociones.svg",route: '/como-me-siento/noAndoAl100/emociones', bgColor: '#1AA086',enabled:false },
        //{ title:"Algo no anda bien",content:" ",icon:"/assets/icon/algo-no-anda-bien.svg",route: '/como-me-siento/noAndoAl100/algoNoAndaBien', bgColor: '#1AA086',enabled:false },
        //{ title:"Adicciones",content:" ",icon:"/assets/icon/adicciones.svg",route: '/como-me-siento/noAndoAl100/adicciones', bgColor: '#1AA086',enabled:false }
    ];

    static ignoradx:Card[] = [
    ];

    static weba:Card[] = [
        { title:"Generación 2030",content:"", icon:"/assets/icon/generacion-2030.svg",route: '/como-me-siento/participa/generacion-2030', bgColor: '#FCC103',enabled:true },
        { title:"Eventos",content:" ",icon:"/assets/icon/eventos.svg",route: '/como-me-siento/participa/eventos', bgColor: '#FCC103',enabled:true },
        { title:"Emprendimiento",content:" ",icon:"/assets/icon/Emprendimiento.svg",route: '/como-me-siento/participa/emprendimiento', bgColor: '#FCC103',enabled:true },
        { title:"Plan de vida",content:" ",icon:"/assets/icon/Mi-porvenir.svg",route: '/como-me-siento/participa/miPorvenir', bgColor: '#FCC103',enabled:true },
        
    ];

    static zombie:Card[] = [
        { title:"COVID-19",content:"", icon:"/assets/icon/covid-19-2.svg",route: '/como-me-siento/zombi/covid-19', bgColor: '#42DABF',enabled:true },
        { title:"Adicciones",content:" ",icon:"/assets/icon/adicciones.svg",route: '/como-me-siento/zombi/adiccionesZombi', bgColor: '#42DABF',enabled:true },
    ];

    //Level 2
    static cuidandoMiCuerpo:Card[] = [
        { title:"¡Haz valer tus derechos!",content:"",icon:"/assets/icon/haz-valer-tus-derechos.svg",route: '/como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/valer-tus-derechos', bgColor: '#FF3366',enabled:true },
        { title:"Conoce tu cuerpo",content:"",icon:"/assets/icon/conoce-tu-cuerpo.svg",route: '/como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/conoce-tu-cuerpo', bgColor: '#FF3366',enabled:true },
        { title:"Menstruación",content:"",icon:"/assets/icon/Menstruacion.svg",route: '/como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/menstruacion', bgColor: '#FF3366',enabled:true },
        { title:"Mi primera vez",content:"",icon:"/assets/icon/mi-primera-vez.svg",route: '/como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/primera-vez', bgColor: '#FF3366',enabled:true },
        { title:"Infecciones de Transmisión Sexual",content:"",icon:"/assets/icon/infecciones-de-transmision-sexual.svg",route: '/como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/infecciones-transmision-sexual', bgColor: '#FF3366',enabled:true },
        { title:"Métodos anticonceptivos",content:"",icon:"/assets/icon/metodos-anticonceptivos.svg",route: '/como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/metodos-anticonceptivos', bgColor: '#FF3366',enabled:true },
    ];

    static sexualidad:Card[] = [
        { title:"Modo cachondo",content:"",icon:"/assets/icon/modo-cachondo.svg",route: '/como-me-siento/amigxs-o-novixs/sexualidad/modo-cachondo', bgColor: '#FF3366',enabled:true },
        { title:"Diversidades sexuales",content:"",icon:"/assets/icon/diversidades-sexuales.svg",route: '/como-me-siento/amigxs-o-novixs/sexualidad/diversidades-sexuales', bgColor: '#FF3366',enabled:true },
    ];

    static violencia:Card[] = [
        { title:"Violencia digital",content:" ",icon:"/assets/icon/violencia-digital.svg",route: '/como-me-siento/amigxs-o-novixs/violencia/violencia-digital', bgColor:'#FF3366',enabled:true },
        { title:"Violencia de género",content:" ",icon:"/assets/icon/violencia-de-genero.svg",route: '/como-me-siento/amigxs-o-novixs/violencia/violencia-genero', bgColor:'#FF3366',enabled:true },
        { title:"Violencia en relaciones",content:" ",icon:"/assets/icon/violencia-en-la-pareja.svg",route: '/como-me-siento/amigxs-o-novixs/violencia/violencia-pareja', bgColor:'#FF3366',enabled:true },
    ];

    static generacion2030:Card[] = [
        { title:"Yo, agente de cambio",content:" ",icon:"/assets/icon/agente-de-cambio.svg",route: '/como-me-siento/participa/generacion-2030/yo-agente-de-cambio', bgColor:'#FCC103',enabled:true },
        { title:"Aprende",content:" ",icon:"/assets/icon/aprende.svg",route: '/como-me-siento/participa/generacion-2030/aprende', bgColor:'#FCC103', enabled:true },
        //{ title:"Toma acción",content:" ",icon:"/assets/icon/violencia-3.svg",route: '/como-me-siento/participa/generacion-2030/toma-accion', bgColor:'#FCC103',enabled:false },
    ];

    static eventos:Card[] = [
        { title:"Salón de Eventos",content:" ",icon:"/assets/icon/salon-de-eventos-2.svg",route: '/como-me-siento/participa/eventos/salon-de-eventos', bgColor:'#FCC103',enabled:true },
        { title:"Próximos Eventos",content:" ",icon:"/assets/icon/proximos-eventos.svg",route: '/como-me-siento/participa/eventos/proximos-eventos', bgColor:'#FCC103',enabled:true },
        { title:"Por si no lo viste",content:" ",icon:"/assets/icon/salon-de-eventos-2.svg",route: '', bgColor:'#FCC103',enabled:true }
    ];

    static emprendimiento:Card[] = [
        { title:"Salón de Eventos",content:" ",icon:"/assets/icon/violencia.svg",route: '', bgColor:'#FCC103',enabled:true },
        { title:"Próximos Eventos",content:" ",icon:"/assets/icon/violencia.svg",route: '', bgColor:'#FCC103',enabled:true },
        { title:"Por si no lo viste",content:" ",icon:"/assets/icon/violencia.svg",route: '', bgColor:'#FCC103',enabled:true }
    ];

    static miPorvenir:Card[] = [
        { title:"Salón de Eventos",content:" ",icon:"/assets/icon/violencia.svg",route: '', bgColor:'#FCC103',enabled:true },
        { title:"Próximos Eventos",content:" ",icon:"/assets/icon/violencia.svg",route: '', bgColor:'#FCC103',enabled:true },
        { title:"Por si no lo viste",content:" ",icon:"/assets/icon/violencia.svg",route: '', bgColor:'#FCC103',enabled:true }
    ];

    //Level 3

    //agente de cambio...



    


    static laDepre:Card[] = [
        { title:"No puedo superar esto",content:"", icon:"/assets/icon/la-depre.svg",route: '', bgColor: '#42DABF', enabled:false },
        { title:"Que hacer si todo te da igual",content:"",icon:"/assets/icon/la-depre.svg",route: '', bgColor: '#42DABF', enabled:false },
    ];

    static yaNoAguanto:Card[] = [
        { title:"¡Decir que No!",content:"", icon:"/assets/icon/ya-no-aguanto.svg",route: '', bgColor: '#6A30B5',enabled:false },
        { title:"Acoso Sexual",content:" ",icon:"/assets/icon/ya-no-aguanto.svg",route: '', bgColor: '#6A30B5',enabled:false },
        { title:"Acosos: cibernético, labotal, etc",content:"", icon:"/assets/icon/ya-no-aguanto.svg",route: '', bgColor: '#6A30B5',enabled:false },
        { title:"Levanta la voz",content:" ",icon:"/assets/icon/ya-no-aguanto.svg",route: '', bgColor: '#6A30B5',enabled:false },
        { title:"Violencia Digital",content:"", icon:"/assets/icon/ya-no-aguanto.svg",route: '', bgColor: '#6A30B5',enabled:false },
        { title:"Me quiero matar ",content:"Suicidio ",icon:"/assets/icon/ya-no-aguanto.svg",route: '', bgColor: '#6A30B5',enabled:false },
    ];

    static emociones:Card[] = [
        { title:"Siento celos ¿es normal?",content:" ", icon:"/assets/icon/emociones.svg",route: '', bgColor: '#1AA086',enabled:false },
        { title:"Corté con mi pareja, ¿ y ahora que hago?", content:" ",icon:"/assets/icon/emociones.svg",route: '', bgColor: '#1AA086',enabled:false },
        { title:"¿Qué es el deseo sexual?",content:" ", icon:"/assets/icon/emociones.svg",route: '', bgColor: '#1AA086',enabled:false },
        { title:"Autoestima",content:" ",icon:"/assets/icon/emociones.svg",route: '', bgColor: '#1AA086',enabled:false },
        { title:"Autocontrol Emocional(enfrentamientos)",content:" ",icon:"/assets/icon/emociones.svg",route: '', bgColor: '#1AA086',enabled:false },
        { title:"Inteligencia Emocional",content:" ",icon:"/assets/icon/emociones.svg",route: '', bgColor: '#1AA086',enabled:false },
        { title:"No puedo superar esto :(",content:" ",icon:"/assets/icon/emociones.svg",route: '', bgColor: '#1AA086',enabled:false }
        
    ];

    static algoNoAndaBien:Card[] = [
        { title:"No puedo concentrarme, me distraigo mucho",content:" ",icon:"/assets/icon/algo-no-anda-bien.svg",route: '', bgColor: '#1AA086',enabled:false },
        { title:"Me quiero matar (suicidio)",content:" ",icon:"/assets/icon/algo-no-anda-bien.svg",route: '', bgColor: '#1AA086',enabled:false },
        { title:"Inseguridad Personal",content:" ",icon:"/assets/icon/algo-no-anda-bien.svg",route: '', bgColor: '#1AA086',enabled:false },
        { title:"Rendimiento Académico",content:" ",icon:"/assets/icon/algo-no-anda-bien.svg",route: '', bgColor: '#1AA086',enabled:false },
        { title:"Bullying",content:" ",icon:"/assets/icon/algo-no-anda-bien.svg",route: '', bgColor: '#1AA086',enabled:false },
        { title:"A veces me lastimo (autolesiones)",content:" ",icon:"/assets/icon/algo-no-anda-bien.svg",route: '', bgColor: '#1AA086',enabled:false },
        { title:"Anorexia y Bulimia",content:" ",icon:"/assets/icon/algo-no-anda-bien.svg",route: '', bgColor: '#1AA086',enabled:false },
        { title:"Que hacer si todo te da igual",content:" ",icon:"/assets/icon/algo-no-anda-bien.svg",route: '', bgColor: '#1AA086',enabled:false }
       
    ];

    static adicciones:Card[] = [
        { title:"Adicciones sin sustancia",content:" ",icon:"/assets/icon/adicciones.svg",route: '', bgColor: '#1AA086',enabled:false },
        { title:"Adicciones con sustancia",content:" ",icon:"/assets/icon/adicciones.svg",route: '', bgColor: '#1AA086',enabled:false }
    ];

    static amorYRelaciones:Card[] = [
        { title:"¿Qué es el deseo sexual?",content:" ",icon:"/assets/icon/amor-y-relaciones.svg",route: '', bgColor:'#FF3366' },
        { title:"Me gusta alguien de mi mismo sexo (o género)",content:" ",icon:"/assets/icon/amor-y-relaciones.svg",route: '', bgColor:'#FF3366' },
        { title:"Solo quiero un free",content:" ",icon:"/assets/icon/amor-y-relaciones.svg",route: '', bgColor:'#FF3366' },
        { title:"Amistades Sexuales (sex friends, sex buddies)",content:" ",icon:"/assets/icon/amor-y-relaciones.svg",route: '', bgColor:'#FF3366' },
        { title:"Ghosting (revisar)",content:" ",icon:"/assets/icon/amor-y-relaciones.svg",route: '', bgColor:'#FF3366' },
        { title:"Sindrome Sugar Daddy",content:" ",icon:"/assets/icon/amor-y-relaciones.svg",route: '', bgColor:'#FF3366' },
        { title:"Lover Boy",content:" ",icon:"/assets/icon/amor-y-relaciones.svg",route: '', bgColor:'#FF3366' },
        { title:"No me peló (manejo del rechazo)",content:" ",icon:"/assets/icon/amor-y-relaciones.svg",route: '', bgColor:'#FF3366' },
        { title:"Como reconocer una relación tóxica",content:" ",icon:"/assets/icon/amor-y-relaciones.svg",route: '', bgColor:'#FF3366' },
    ];

    static curiosidad:Card[] = [
        { title:"Mi Cuerpo",content:" ",icon:"/assets/icon/curiosidad.svg",route: '/como-me-siento/amigxs-o-novixs/curiosidad/miCuerpo', bgColor:'#FF3366',enabled:true },
        { title:"Sexualidad",content:" ",icon:"/assets/icon/curiosidad.svg",route: '/como-me-siento/amigxs-o-novixs/curiosidad/sexualidad', bgColor:'#FF3366',enabled:true },
        { title:"Sexo",content:" ",icon:"/assets/icon/curiosidad.svg",route: '/como-me-siento/amigxs-o-novixs/curiosidad/sexo', bgColor:'#FF3366',enabled:true }
    ];

    static miCuerpo:Card[] = [
        { title:"Vivir con VIH",content:" ",icon:"/assets/icon/stethoscope.png",route: 'http', bgColor:'#FF3366',enabled:true },
        { title:"¿Qué sucede cuando tienes sexo por primera vez? FEM",content:" ",icon:"/assets/icon/stethoscope.png",route: 'http', bgColor:'#FF3366',enabled:true },
        { title:"La prevención del embarazo en la adolescencia",content:" ",icon:"/assets/icon/stethoscope.png",route: 'http', bgColor:'#FF3366',enabled:true },
        { title:"¿Qué es el deseo sexual?",content:" ",icon:"/assets/icon/stethoscope.png",route: 'http', bgColor:'#FF3366',enabled:true },
        { title:"Órganos genitale femeninos",content:" ",icon:"/assets/icon/stethoscope.png",route: 'http', bgColor:'#FF3366',enabled:true },
        { title:"Órganos genitales masculinos",content:" ",icon:"/assets/icon/stethoscope.png",route: 'http', bgColor:'#FF3366',enabled:true },
        { title:"Disfunción Eréctil",content:" ",icon:"/assets/icon/stethoscope.png",route: 'http', bgColor:'#FF3366',enabled:true },
        { title:"Como saber si estas listo para tener sexo",content:" ",icon:"/assets/icon/stethoscope.png",route: 'http', bgColor:'#FF3366',enabled:true },
        { title:"Menstruación",content:" ",icon:"/assets/icon/stethoscope.png",route: 'http', bgColor:'#FF3366',enabled:true },
        { title:"Respetar tu cuerpo y el de los demas",content:" ",icon:"/assets/icon/stethoscope.png",route: 'http', bgColor:'#FF3366',enabled:true },
        { title:"¿Que sucede cuando tienes sexo por primera vez? MASCy tu ",content:" ",icon:"/assets/icon/stethoscope.png",route: 'http', bgColor:'#FF3366',enabled:true }
    ];

    

    

    static participando:Card[] = [
        { title:"Cine en casa",content:" ",icon:"/assets/icon/participando.svg",route: '', bgColor: '#F97F06',enabled:false }
    ];

    static habilidades:Card[] = [
        { title:"Habilidades socioemocionales para jóvenes",content:" ",icon:"/assets/icon/habilidades.svg",route: '', bgColor: '#F97F06',enabled:false }
    ];


    static derechosHumanos:Card[] = [
        { title:"¿Qué son los derechos humanos?",content:" ",icon:"/assets/icon/Derechos-humanos.svg",route: '', bgColor: '#F97F06',enabled:false }
    ];


    static quePasaria:Card[] = [
        { title:"¿Qué pasaría si los hombres fueran mujeres?",content:" ",icon:"/assets/icon/que-pasaria-si.svg",route: '', bgColor: '#F97F06',enabled:false }
    ];


    

}