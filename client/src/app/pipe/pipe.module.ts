import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeUsersTablePipe } from './pipe-users-table.pipe';
import { PipeTruncateTextPipe } from './pipe-truncate-text.pipe';



@NgModule({
    declarations: [PipeUsersTablePipe, PipeTruncateTextPipe],
    exports: [
        PipeUsersTablePipe,
        PipeTruncateTextPipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipeModule { }
