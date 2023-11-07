import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivationRoutingModule } from './motivation-routing.module';
import { MotivationComponent } from './motivation.component';
import { ComponentsModule } from "../components/components.module";


@NgModule({
    declarations: [
        MotivationComponent,
    ],
    imports: [
        CommonModule,
        MotivationRoutingModule,
        ComponentsModule
    ]
})
export class MotivationModule { }
