import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CndvListComponent } from './cndv-list/cndv-list.component';
import { CreateCndvComponent } from './create-cndv/create-cndv.component';
import { FormsModule } from '@angular/forms';
import { UpdateCndvComponent } from './update-cndv/update-cndv.component';

@NgModule({
  declarations: [
    AppComponent,
    CndvListComponent,
    CreateCndvComponent,
    UpdateCndvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
