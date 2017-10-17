import { NgModule } from '@angular/core';

import {MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatInputModule, MatSelectModule, MatMenuModule, MatSidenavModule, MatListModule, MatIconModule, MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatProgressBarModule, MatRadioModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
    imports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTabsModule,
        MatProgressBarModule,
        MatRadioModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTabsModule,
        MatProgressBarModule,
        MatRadioModule,
        MatProgressSpinnerModule
    ],
})
export class MaterialModule { }