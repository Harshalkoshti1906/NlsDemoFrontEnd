import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS   } from '@angular/common/http';
import { AuthenticationService } from "./_service/authentication.service";
import { SystemapiService } from "./_service/systemapi.service";
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';
import { MasterComponent } from './master/master.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    MovieCatalogComponent,
    MasterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    AuthenticationService,
    SystemapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
