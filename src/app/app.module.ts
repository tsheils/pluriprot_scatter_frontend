import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScatterMenuComponent} from './scatter-plot/scatter-menu/scatter-menu.component';
import {ScatterPlotComponent} from './scatter-plot/scatter-plot.component';
import {createCustomElement} from '@angular/elements';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule,
  MatSidenavModule, MatToolbarModule
} from '@angular/material';
import {MatRippleModule} from '@angular/material/core';
import {FooterComponent} from './footer/footer.component';
import {HhsBannerComponent} from './hhs-banner/hhs-banner.component';
import {SctlNavbarComponent} from './sctl-navbar/sctl-navbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ScatterMenuComponent,
    ScatterPlotComponent,
    SctlNavbarComponent,
    HhsBannerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    MatRippleModule,
    MatMenuModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
