import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

//Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { CarDetailComponent } from './car-detail.component';
//import { CarFormComponent } from './car-form.component';
import { CarsListComponent } from './cars-list.component';

import { CarService } from './car.service';

import { CarsRouting } from './cars.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        CarsRouting
    ],
    declarations: [
        CarDetailComponent,
        CarsListComponent
    ],
    providers: [
        CarService
    ]
})

export class CarModule {}