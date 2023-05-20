import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    exports:[
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule
    ]
    
})

export class MaterialModule{}