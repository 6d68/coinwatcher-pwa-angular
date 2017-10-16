import { NgModule } from '@angular/core';

import {MdAutocompleteModule, MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdInputModule, MdSelectModule, MdMenuModule, MdSidenavModule, MdListModule, MdIconModule, MdSlideToggleModule, MdSnackBarModule, MdTabsModule, MdProgressBarModule, MdRadioModule, MdProgressSpinnerModule } from '@angular/material';

@NgModule({
    imports: [
        MdAutocompleteModule,
        MdButtonModule,
        MdCheckboxModule,
        MdToolbarModule,
        MdCardModule,
        MdInputModule,
        MdSelectModule,
        MdMenuModule,
        MdSidenavModule,
        MdListModule,
        MdIconModule,
        MdSlideToggleModule,
        MdSnackBarModule,
        MdTabsModule,
        MdProgressBarModule,
        MdRadioModule,
        MdProgressSpinnerModule
    ],
    exports: [
        MdButtonModule,
        MdCheckboxModule,
        MdToolbarModule,
        MdCardModule,
        MdInputModule,
        MdSelectModule,
        MdMenuModule,
        MdSidenavModule,
        MdListModule,
        MdIconModule,
        MdSlideToggleModule,
        MdSnackBarModule,
        MdTabsModule,
        MdProgressBarModule,
        MdRadioModule,
        MdProgressSpinnerModule
    ],
})
export class MaterialModule { }