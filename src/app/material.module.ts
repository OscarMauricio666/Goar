
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatCardModule
        } from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule,
        MatGridListModule,
        MatCardModule
     ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule,
        MatGridListModule,
        MatCardModule
    ],
})
export class MaterialModule {}
