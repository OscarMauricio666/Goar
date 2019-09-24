
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule
        } from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule,
        MatGridListModule
     ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule,
        MatGridListModule
    ],
})
export class MaterialModule {}
