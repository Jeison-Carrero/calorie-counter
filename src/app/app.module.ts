import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowErrorDirective } from './directives/show-error.directive';
import { LabelMetricsPipe } from './pipes/label-metrics.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowErrorDirective,
    LabelMetricsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LabelMetricsPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
