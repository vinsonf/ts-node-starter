import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeUsersTablePipe } from './pipe-users-table.pipe';



@NgModule({
    declarations: [PipeUsersTablePipe],
    exports: [
        PipeUsersTablePipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipeModule { }
