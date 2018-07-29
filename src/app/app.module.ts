import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbButtonsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
