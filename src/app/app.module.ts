import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule ({
    imports: [
        MatSlideToggleModule,
        BrowserModule,
        BrowserAnimationsModule,
        
    ]
})
class AppModule {}