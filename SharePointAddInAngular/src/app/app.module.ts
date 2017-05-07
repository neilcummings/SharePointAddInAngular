import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        {
            provide: APP_BASE_HREF, useValue: '/'
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}