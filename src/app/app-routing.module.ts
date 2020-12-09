import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FriendlyServicesComponent } from './components/friendly-services/friendly-services.component';
import { LigandoComponent } from './components/cards/ligando/ligando.component';
import { AmorYRelacionComponent } from './components/cards/amor-yrelacion/amor-yrelacion.component';
import { CuriosidadesComponent } from './components/cards/ligando/curiosidades/curiosidades.component';
import { SexoComponent } from './components/cards/ligando/curiosidades/sexo/sexo.component';
import { SexualidadComponent } from './components/cards/ligando/sexualidad/sexualidad.component';
import { MiCuerpoComponent } from './components/cards/ligando/curiosidades/miCuerpo/miCuerpo.component';
import { ViolenciaComponent } from './components/cards/ligando/violencia/violencia.component';
import { LaDepreComponent } from './components/cards/laDepre/laDepre.component';
import { ModoNerdComponent } from './components/cards/modoNerd/modoNerd.component';
import { ParticipandoComponent } from './components/cards/participando/participando.component';
import { HabilidadesComponent } from './components/cards/habilidades/habilidades.component';
import { DerechosHumanosComponent } from './components/cards/derechosHumanos/derechosHumanos.component';
import { QuePasariaComponent } from './components/cards/quePasaria/quePasaria.component';
import { NoAndoAl100Component } from './components/cards/noAndoAl100/noAndoAl100.component';
import { EmocionesComponent } from './components/cards/noAndoAl100/emociones/emociones.component';
import { AlgoNoAndaBienComponent } from './components/cards/noAndoAl100/algoNoAndaBien/algoNoAndaBien.component';
import { AdiccionesComponent } from './components/cards/noAndoAl100/adicciones/adicciones.component';
import { WebaComponent } from './components/cards/weba/weba.component';
import { EscuchadoComponent } from './components/cards/escuchado/escuchado.component';
import { YaNoAguantoComponent } from './components/cards/yaNoAguanto/yaNoAguanto.component';
import { AyudaComponent } from './components/cards/ayuda/ayuda.component';
import { DeseoSexualComponent } from './articles/20-deseo-sexual/deseo-sexual.component';
import { AboutusComponent } from './components/BannersContent/aboutus/aboutus.component';
import { NoticePrivacityComponent } from './components/legal/noticePrivacity/noticePrivacity.component';
import { doc3Component } from './components/doc3/doc3.component';
import { ZombieComponent } from './components/cards/zombie/zombie.component';
import { CuidandoMiCuerpo } from './components/cards/ligando/cuidando-mi-cuerpo/cuidando-mi-cuerpo.component';
import { MasculinidadesComponent } from './components/cards/ligando/masculinidades/masculinidades.component';
import { EmbarazoComponent } from './components/cards/ligando/embarazo/embarazo.component';
import { MetodosAnticonceptivosComponent } from './components/cards/ligando/metodos-anticonceptivos/metodos-anticonceptivos.component';
import { TusDerechosComponent } from './components/cards/modoNerd/tus-derechos/tus-derechos.component';
import { Covid19Component } from './components/cards/modoNerd/covid-19/covid-19.component';
import { Generacion2030Component } from './components/cards/weba/generacion-2030/generacion-2030.component';
import { EventosComponent } from './components/cards/weba/eventos/eventos.component';
import { ZombieCovid19Component } from './components/cards/zombie/zombie-covid-19/zombie-covid-19.component';
import { ConoceTuCuerpoComponent } from './components/cards/ligando/cuidando-mi-cuerpo/conoce-tu-cuerpo/conoce-tu-cuerpo.component';
import { ValerTusDerechosComponent } from './components/cards/ligando/cuidando-mi-cuerpo/valer-tus-derechos/valer-tus-derechos.component';
import { MenstruacionComponent } from './components/cards/ligando/cuidando-mi-cuerpo/menstruacion/menstruacion.component';
import { PrimeraVezComponent } from './components/cards/ligando/cuidando-mi-cuerpo/primera-vez/primera-vez.component';
import { InfeccionesTransmisionSexualComponent } from './components/cards/ligando/cuidando-mi-cuerpo/infecciones-transmision-sexual/infecciones-transmision-sexual.component';
import { ModoCachondoComponent } from './components/cards/ligando/sexualidad/modo-cachondo/modo-cachondo.component';
import { DiversidadesSexualesComponent } from './components/cards/ligando/sexualidad/diversidades-sexuales/diversidades-sexuales.component';
import { ViolenciaDigitalComponent } from './components/cards/ligando/violencia/violencia-digital/violencia-digital.component';
import { ViolenciaParejaComponent } from './components/cards/ligando/violencia/violencia-pareja/violencia-pareja.component';
import { ViolenciaGeneroComponent } from './components/cards/ligando/violencia/violencia-genero/violencia-genero.component';
import { IncomodxComponent } from './articles/24-incomodx/incomodx.component';
import { OrganosGenitalesFemeninosComponent } from './articles/47-organos-genitales-femeninos/organos-genitales-femeninos.component';
import { QueInfeccionesTransmisionSexualComponent } from './articles/22-infecciones-transmision-sexual/que-son-infecciones-transmision-sexual.component';
import { PeriodoPremenstrualComponent } from './articles/23-periodo-premenstrual/periodo-premenstrual.component';
import { FormasEmbarazoComponent } from './articles/25-formas-producirse-embarazo/formas-embarazo.component';
import { FecundacionComponent } from './articles/27-fecundacion/fecundacion.component';
import { QueHacerItsComponent } from './articles/28-que-hacer-its/que-hacer-its.component';
import { CambiosCicloMenstrualComponent } from './articles/34-cambios-durante-ciclo-menstrual/cambios-ciclo-menstrual.component';
import { ConocerTuCuerpoComponent } from './articles/40-conocer-tu-cuerpo/conocer-tu-cuerpo.component';
import { ProcesoPartoComponent } from './articles/42-proceso-de-parto/proceso-parto.component';
import { LaMenstruacionComponent } from './articles/44-menstruacion/la-menstruacion.component';
import { PrevencionEmbarazoAdolescenciaComponent } from './articles/45-prevencion-embarazo-adolescencia/prevencion-embarazo-adolescencia.component';
import { OrganosGenitalesMasculinosComponent } from './articles/48-organos-genitales-masculinos/organos-genitales-masculinos.component';
import { RespetarTuCuerpoComponent } from './articles/50-respetar-tu-cuerpo/respetar-tu-cuerpo.component';
import { ElEmbarazoComponent } from './articles/52-embarazo/el-embarazo.component';
import { UnderConstructionComponent } from './components/common/under-construction/under-construction.component';
import { ActividadesComponent } from './components/cards/modoNerd/actividades/actividades.component';
import { AprendeCosasChidasComponent } from './components/cards/modoNerd/aprendeCosasChidas/aprendeCosasChidas.component';
import { MetodosAnticonceptivos2Component } from './components/cards/ligando/cuidando-mi-cuerpo/metodos-anticonceptivos/metodos-anticonceptivos-2.component';
import { AliadosComponent } from './components/aliados/aliados.component';
import { CompetitionComponent } from './components/BannersContent/competition/competition.component';
import { SalonEventosComponent } from './components/cards/weba/eventos/salon-de-eventos/salon.eventos.component';
import { ProximosEventosComponent } from './components/cards/weba/eventos/proximos-eventos/proximos.eventos.component';
import { AgenteCambioComponent } from './components/cards/weba/generacion-2030/yo-agente-de-cambio/agente.cambio.component';
import { TomaAccionComponent } from './components/cards/weba/generacion-2030/toma-accion/toma.accion.component';
import { EnfoqueJuventudesComponent } from './articles/enfoque-de-juventudes/enfoque-juventudes.component';
import { AprendeComponent } from './components/cards/weba/generacion-2030/aprende/aprende.component';

const routes: Routes = [
  // Articulos (Contenido)
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/primera-vez/deseo-sexual', component:DeseoSexualComponent, pathMatch: 'full' },
  { path: 'como-me-siento/amigxs-o-novixs/sexualidad/modo-cachondo/deseo-sexual', component:DeseoSexualComponent, pathMatch: 'full' },
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/infecciones-transmision-sexual/que-son-its', component:QueInfeccionesTransmisionSexualComponent, pathMatch: 'full' },
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/infecciones-transmision-sexual/que-hacer-its', component:QueHacerItsComponent, pathMatch: 'full' },
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/conoce-tu-cuerpo/organos-genitales-femeninos', component:OrganosGenitalesFemeninosComponent, pathMatch: 'full' },
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/conoce-tu-cuerpo/organos-genitales-masculinos', component:OrganosGenitalesMasculinosComponent, pathMatch: 'full' },
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/conoce-tu-cuerpo/conocer-tu-cuerpo', component:ConocerTuCuerpoComponent, pathMatch: 'full' },
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/menstruacion/periodo-premenstrual', component:PeriodoPremenstrualComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/menstruacion/cambios-ciclo-menstrual', component:CambiosCicloMenstrualComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/menstruacion/la-menstruacion', component:LaMenstruacionComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/violencia/violencia-pareja/decir-no', component:IncomodxComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/violencia/violencia-pareja/respetar-tu-cuerpo', component:RespetarTuCuerpoComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/embarazo/formas-embarazo', component:FormasEmbarazoComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/embarazo/fecundacion', component:FecundacionComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/embarazo/proceso-parto', component:ProcesoPartoComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/embarazo/el-embarazo', component:ElEmbarazoComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/embarazo/prevencion-embarazo-adolescencia', component:PrevencionEmbarazoAdolescenciaComponent, pathMatch: 'full'},
  
  // Routing Ligando
  { path: 'como-me-siento/amigxs-o-novixs', component: LigandoComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo', component:CuidandoMiCuerpo, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/sexualidad', component:SexualidadComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/violencia', component:ViolenciaComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/masculinidades', component:MasculinidadesComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/embarazo', component:EmbarazoComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/metodos-anticonceptivos', component:MetodosAnticonceptivosComponent, pathMatch: 'full'},

  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/valer-tus-derechos', component:ValerTusDerechosComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/conoce-tu-cuerpo', component:ConoceTuCuerpoComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/menstruacion', component:MenstruacionComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/primera-vez', component:PrimeraVezComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/infecciones-transmision-sexual', component:InfeccionesTransmisionSexualComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/metodos-anticonceptivos', component:MetodosAnticonceptivos2Component, pathMatch: 'full'},

  { path: 'como-me-siento/amigxs-o-novixs/sexualidad', component:SexualidadComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/sexualidad/modo-cachondo', component:ModoCachondoComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/sexualidad/diversidades-sexuales', component:DiversidadesSexualesComponent, pathMatch: 'full'},
  
  { path: 'como-me-siento/amigxs-o-novixs/violencia/violencia-digital', component:ViolenciaDigitalComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/violencia/violencia-pareja', component:ViolenciaParejaComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/violencia/violencia-genero', component:ViolenciaGeneroComponent, pathMatch: 'full'},

  


  { path: 'como-me-siento/amigxs-o-novixs/curiosidad', component:CuriosidadesComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/curiosidad/sexo', component:SexoComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/amor-yRelaciones', component:AmorYRelacionComponent, pathMatch: 'full'},
  { path: 'como-me-siento/amigxs-o-novixs/curiosidad/miCuerpo', component:MiCuerpoComponent, pathMatch: 'full'},

  // Routing Curioso
  { path: 'como-me-siento/curiosx',component:ModoNerdComponent, pathMatch: 'full'},
  { path: 'como-me-siento/curiosx/tus-derechos',component:TusDerechosComponent, pathMatch: 'full'},
  { path: 'como-me-siento/curiosx/covid-19',component:Covid19Component, pathMatch: 'full'},
  { path: 'como-me-siento/curiosx/actividades',component:ActividadesComponent, pathMatch: 'full'},
  { path: 'como-me-siento/curiosx/habilidades',component:HabilidadesComponent, pathMatch: 'full'},
  { path: 'como-me-siento/curiosx/aprendeCosasChidas',component:AprendeCosasChidasComponent, pathMatch: 'full'},

  { path: 'como-me-siento/curiosx/participando',component:ParticipandoComponent, pathMatch: 'full'},
  { path: 'como-me-siento/curiosx/habilidades',component:HabilidadesComponent, pathMatch: 'full'},
  { path: 'como-me-siento/curiosx/derechosHumanos',component:DerechosHumanosComponent, pathMatch: 'full'},
  { path: 'como-me-siento/curiosx/quePasaria',component:QuePasariaComponent, pathMatch: 'full'},

  // Routing No me siento al 100
  { path: 'como-me-siento/noAndoAl100',component:NoAndoAl100Component, pathMatch: 'full'},
  { path: 'como-me-siento/noAndoAl100/emociones',component:EmocionesComponent, pathMatch: 'full'},
  { path: 'como-me-siento/noAndoAl100/algoNoAndaBien',component:AlgoNoAndaBienComponent, pathMatch: 'full'},
  { path: 'como-me-siento/noAndoAl100/adicciones',component:AdiccionesComponent, pathMatch: 'full'},

  // Routing Escuchado
  { path: 'como-me-siento/ignoradx',component:EscuchadoComponent, pathMatch: 'full'},

  // Routing Participa
  { path: 'como-me-siento/participa',component:WebaComponent, pathMatch: 'full'},
  { path: 'como-me-siento/participa/generacion-2030',component:Generacion2030Component, pathMatch: 'full'},
  { path: 'como-me-siento/participa/eventos',component:EventosComponent, pathMatch: 'full'},
  { path: 'como-me-siento/participa/eventos/salon-de-eventos',component:SalonEventosComponent, pathMatch: 'full'},
  { path: 'como-me-siento/participa/eventos/proximos-eventos',component:ProximosEventosComponent, pathMatch: 'full'},
  { path: 'como-me-siento/participa/generacion-2030/yo-agente-de-cambio',component:AgenteCambioComponent, pathMatch: 'full'},
  { path: 'como-me-siento/participa/generacion-2030/yo-agente-de-cambio/que-es-el-enfoque-de-juventudes',component:EnfoqueJuventudesComponent, pathMatch: 'full'},
  { path: 'como-me-siento/participa/generacion-2030/aprende',component:AprendeComponent, pathMatch: 'full'},
  { path: 'como-me-siento/participa/generacion-2030/toma-accion',component:TomaAccionComponent, pathMatch: 'full'},

  // Routing zombie
  { path: 'como-me-siento/zombi',component:ZombieComponent, pathMatch: 'full'},
  { path: 'como-me-siento/zombi/covid-19',component:ZombieCovid19Component, pathMatch: 'full'},
  
  // Routing la Depre
  { path: 'como-me-siento/laDepre',component:LaDepreComponent, pathMatch: 'full'},

  

  

  
  
  // Routing Ya no Aguanto
  { path: 'como-me-siento/yaNoAguanto',component:YaNoAguantoComponent, pathMatch: 'full'},
  // Routing ayuda
  { path: 'como-me-siento/ayuda',component:AyudaComponent, pathMatch: 'full'},
   

  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', 
    component:HomeComponent,
    data: {
      title: 'Inicio',
      description: 'Mirada Joven es un proyecto comunicativo que nació de la necesidad de informar a jóvenes y adolescentes sobre su bienestar, salud y derechos, especialmente sobre su salud sexual y reproductiva'
    }
  },
  {
    path: 'servicios-amigables',
    component: FriendlyServicesComponent,
    data: {
      title: 'Servicios amigables',
      description: 'Un servicio de salud amigable ofrece una serie de servicios preventivos para las y los adolescentes y jóvenes como tú'
    }
  },
  {
    path: 'acerca-nosotros',
    component: AboutusComponent,
    data: {
      title: 'Acerca de nosotros',
      description: 'Mirada Joven es un proyecto comunicativo que nació de la necesidad de informar a jóvenes y adolescentes sobre su bienestar, salud y derechos, especialmente sobre su salud sexual y reproductiva'
    }
  },
  /**{
    path: 'covid',
    component:CovidComponent,
    data:{
      title: 'Covid-19',
      description: 'Una mirada a la pandemia'
    }
  },
  **/
 {
    path: 'concurso',
    component:CompetitionComponent
  },
  {
    path: 'politicas-privacidad',
    component:NoticePrivacityComponent,
    data: {
      title: 'Política de privacidad',
      description: 'Mirada Joven es un proyecto en cocreación que cuenta con el aporte técnico, supervisión y apoyo de diferentes organismos estatales, internacionales y sector privado en México'
    }
  },
  {
    path: '1doc3',
    component:doc3Component,
    data:{
      title:'Acercate a nosotros',
      description: 'Aquí puedes hacer tus preguntas sobre salud, de forma anónima y gratuita'
    }
  },
  /**{
    path: 'posts/:slug',
    component: PostsComponent,
    resolve:{entries:PostsResolver},
    pathMatch: 'full'
  },
  **/
  {
    path: 'aliados',
    component: AliadosComponent,
    data: {
      title: 'Nuestros aliados',
      description: 'Nuestros aliados'
    }
  },
  {
    path: 'under-construction',
    component:UnderConstructionComponent,
    data:{
      title: 'En construcción',
      description: ''
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
