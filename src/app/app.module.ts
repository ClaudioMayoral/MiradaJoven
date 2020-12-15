import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbLayoutComponent, NbActionsModule, NbMenuModule, NbContextMenuModule, NbSidebarModule, NbSidebarService, NbIconModule, NbCardModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './components/home/home.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FriendlyServicesComponent } from './components/friendly-services/friendly-services.component'
import { OptionCardsComponent } from './components/common/option-cards/option-cards.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OptionsNotesComponent } from './components/common/options-notes/options-notes.component';
import { DeseoSexualComponent } from './articles/20-deseo-sexual/deseo-sexual.component';
import { ArticleComponent } from './components/common/article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VisitCounterComponent } from './components/common/visit-counter/visit-counter.component';
import { AboutusComponent } from './components/BannersContent/aboutus/aboutus.component';
import { CovidComponent } from './components/BannersContent/covid/covid.component';
import { NoticePrivacityComponent } from './components/legal/noticePrivacity/noticePrivacity.component';
import { doc3Component } from './components/doc3/doc3.component';
import { PostsComponent } from './components/posts/posts.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AliadosComponent } from './components/aliados/aliados.component';
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
import { ViolenciaGeneroComponent } from './components/cards/ligando/violencia/violencia-genero/violencia-genero.component';
import { ViolenciaParejaComponent } from './components/cards/ligando/violencia/violencia-pareja/violencia-pareja.component';
import { IncomodxComponent } from './articles/24-incomodx/incomodx.component';
import { OrganosGenitalesFemeninosComponent } from './articles/47-organos-genitales-femeninos/organos-genitales-femeninos.component';
import { QueInfeccionesTransmisionSexualComponent } from './articles/22-infecciones-transmision-sexual/que-son-infecciones-transmision-sexual.component';
import { PeriodoPremenstrualComponent } from './articles/23-periodo-premenstrual/periodo-premenstrual.component';
import { FormasEmbarazoComponent } from './articles/25-formas-producirse-embarazo/formas-embarazo.component';
import { FecundacionComponent } from './articles/27-fecundacion/fecundacion.component';
import { QueHacerItsComponent } from './articles/28-que-hacer-its/que-hacer-its.component';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { CambiosCicloMenstrualComponent } from './articles/34-cambios-durante-ciclo-menstrual/cambios-ciclo-menstrual.component';
import { ConocerTuCuerpoComponent } from './articles/40-conocer-tu-cuerpo/conocer-tu-cuerpo.component';
import { ProcesoPartoComponent } from './articles/42-proceso-de-parto/proceso-parto.component';
import { LaMenstruacionComponent } from './articles/44-menstruacion/la-menstruacion.component';
import { PrevencionEmbarazoAdolescenciaComponent } from './articles/45-prevencion-embarazo-adolescencia/prevencion-embarazo-adolescencia.component';
import { OrganosGenitalesMasculinosComponent } from './articles/48-organos-genitales-masculinos/organos-genitales-masculinos.component';
import { RespetarTuCuerpoComponent } from './articles/50-respetar-tu-cuerpo/respetar-tu-cuerpo.component';
import { ElEmbarazoComponent } from './articles/52-embarazo/el-embarazo.component';
import { UnderConstructionComponent } from './components/common/under-construction/under-construction.component';
import { ResponsiveModule } from 'ngx-responsive'
import { ActividadesComponent } from './components/cards/modoNerd/actividades/actividades.component';
import { AprendeCosasChidasComponent } from './components/cards/modoNerd/aprendeCosasChidas/aprendeCosasChidas.component';
import { MetodosAnticonceptivos2Component } from './components/cards/ligando/cuidando-mi-cuerpo/metodos-anticonceptivos/metodos-anticonceptivos-2.component';
import { CompetitionComponent } from './components/BannersContent/competition/competition.component';
import { SalonEventosComponent } from './components/cards/weba/eventos/salon-de-eventos/salon.eventos.component';
import { ProximosEventosComponent } from './components/cards/weba/eventos/proximos-eventos/proximos.eventos.component';
import { AgenteCambioComponent } from './components/cards/weba/generacion-2030/yo-agente-de-cambio/agente.cambio.component';
import { TomaAccionComponent } from './components/cards/weba/generacion-2030/toma-accion/toma.accion.component';
import { EnfoqueJuventudesComponent } from './articles/enfoque-de-juventudes/enfoque-juventudes.component';
import { AprendeComponent } from './components/cards/weba/generacion-2030/aprende/aprende.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'miradajoven.org' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'info',
  "content": {
    "message": "Este sitio usa las cookies para asegurar que tengas la mejor experiencia.",
    "dismiss": "Aceptar",
    "deny": "Rechazar",
    "link": "Términos y condiciones",
    "href": "/politicas-privacidad",
    "policy": "Cookie Policy"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendlyServicesComponent,
    OptionCardsComponent,
    AyudaComponent,
    LigandoComponent,
    AmorYRelacionComponent,
    CuriosidadesComponent,
    YaNoAguantoComponent,
    EscuchadoComponent,
    WebaComponent,
    AdiccionesComponent,
    AlgoNoAndaBienComponent,
    EmocionesComponent,
    NoAndoAl100Component,
    QuePasariaComponent,
    HabilidadesComponent,
    DerechosHumanosComponent,
    ParticipandoComponent,
    ModoNerdComponent,
    LaDepreComponent,
    ViolenciaComponent,
    MiCuerpoComponent,
    SexualidadComponent,
    SexoComponent,
    OptionsNotesComponent,
    DeseoSexualComponent,
    ArticleComponent,
    VisitCounterComponent,
    AboutusComponent,
    CovidComponent,
    NoticePrivacityComponent,
    doc3Component,
    PostsComponent,
    AliadosComponent,
    ZombieComponent,
    CuidandoMiCuerpo,
    MasculinidadesComponent,
    EmbarazoComponent,
    MetodosAnticonceptivosComponent,
    TusDerechosComponent,
    Covid19Component,
    Generacion2030Component,
    EventosComponent,
    ZombieCovid19Component,
    ConoceTuCuerpoComponent,
    ValerTusDerechosComponent,
    MenstruacionComponent,
    PrimeraVezComponent,
    InfeccionesTransmisionSexualComponent,
    ModoCachondoComponent,
    DiversidadesSexualesComponent,
    ViolenciaDigitalComponent,
    ViolenciaGeneroComponent,
    ViolenciaParejaComponent,
    IncomodxComponent,
    OrganosGenitalesFemeninosComponent,
    QueInfeccionesTransmisionSexualComponent,
    PeriodoPremenstrualComponent,
    FormasEmbarazoComponent,
    FecundacionComponent,
    QueHacerItsComponent,
    CambiosCicloMenstrualComponent,
    ConocerTuCuerpoComponent,
    ProcesoPartoComponent,
    LaMenstruacionComponent,
    PrevencionEmbarazoAdolescenciaComponent,
    OrganosGenitalesMasculinosComponent,
    RespetarTuCuerpoComponent,
    ElEmbarazoComponent,
    UnderConstructionComponent,
    HabilidadesComponent,
    ActividadesComponent,
    AprendeCosasChidasComponent,
    MetodosAnticonceptivos2Component,
    CompetitionComponent,
    SalonEventosComponent,
    ProximosEventosComponent,
    AgenteCambioComponent,
    TomaAccionComponent,
    EnfoqueJuventudesComponent,
    AprendeComponent,
    TraductorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
    NbActionsModule,
    NbCardModule,
    NbSelectModule,
    NbUserModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbEvaIconsModule,
    NbIconModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    InfiniteScrollModule,
   // NgcCookieConsentModule.forRoot(cookieConfig),
    ResponsiveModule.forRoot(),
    //Audio
    NgxAudioPlayerModule,
    //Traductor
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    NbSidebarService,
    HttpClient
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
