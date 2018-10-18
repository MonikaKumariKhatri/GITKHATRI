import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule} from 'ng2-carouselamos';
import {SlideshowModule} from 'ng-simple-slideshow';
import { SliderModule } from 'angular-image-slider';

import {HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component'
import {AuthService} from './auth.service';
import {AuthGuard } from './auth.guard';
import { MenuComponent } from './menu/menu.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarriageComponent } from './marriage/marriage.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { SocialComponent } from './social/social.component';
import { PersonalEventsComponent } from './personal-events/personal-events.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { ReligiousComponent } from './religious/religious.component';
import { PartiesComponent } from './parties/parties.component';
import { ServicesOthersComponent } from './services-others/services-others.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CateringComponent } from './catering/catering.component';
import { TransportComponent } from './transport/transport.component';
import { DecorationComponent } from './decoration/decoration.component';
import { ParlourComponent } from './parlour/parlour.component';
import { PhotographyComponent } from './photography/photography.component';
import { FacilitiesOtherComponent } from './facilities-other/facilities-other.component';
import { ViewPhotosComponent } from './view-photos/view-photos.component';
import { ReviewsComponent } from './reviews/reviews.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const routes:Routes = [
  {
  path:'',
  component : HomeComponent
  },
  {
  path:'login',
  component : LoginComponent
  },
  {
  path:'admin',
  component : AdminComponent,
  canActivate : [AuthGuard]
  },
  {
  path:'aboutus',
  component : AboutusComponent
  },
  {
  path:'contactus',
  component : ContactusComponent
  },
  {
  path:'marriage',
  component : MarriageComponent
  },
  {
  path:'birthday',
  component : BirthdayComponent
  },
  {
  path:'social',
  component : SocialComponent
  },
  {
  path:'personalevents',
  component : PersonalEventsComponent
  },
  {
  path:'festivals',
  component : FestivalsComponent
  },
  {
  path:'anniversary',
  component : AnniversaryComponent
  },
  {
  path:'religious',
  component : ReligiousComponent
  },
  {
  path:'corporate',
  component : PartiesComponent
  },
  {
  path:'s_others',
  component : ServicesOthersComponent
  },
  {
  path:'rooms',
  component : RoomsComponent
  },
  {
  path:'catering',
  component : CateringComponent
  },
  {
  path:'transport',
  component : TransportComponent
  },
  {
  path:'decorations',
  component : DecorationComponent
  },
  {
  path:'parlour',
  component : ParlourComponent
  },
  {
  path:'photography',
  component : PhotographyComponent
},
  {
  path : 'reviews',
  component : ReviewsComponent
},
{
  path : 'photos',
  component : ViewPhotosComponent
},
  {
  path: 'f_others',
  component : FacilitiesOtherComponent
  }
];

@NgModule({
  declarations: [
    AppComponent, LoginComponent, AdminComponent, HomeComponent, ContactusComponent, AboutusComponent
,MenuComponent, MarriageComponent, BirthdayComponent, SocialComponent, PersonalEventsComponent, FestivalsComponent, AnniversaryComponent, ReligiousComponent, PartiesComponent, ServicesOthersComponent, RoomsComponent, CateringComponent, TransportComponent, DecorationComponent, ParlourComponent, PhotographyComponent, FacilitiesOtherComponent, ViewPhotosComponent, ReviewsComponent  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule,
    Ng2CarouselamosModule,
    SlideshowModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
