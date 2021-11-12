import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectPreviewComponent } from './components/subject-preview/subject-preview.component';
import { StudentPreviewComponent } from './components/student-preview/student-preview.component';

const routes: Routes = [
  {
    path: 'subjects',
    component: SubjectListComponent
  },
  {
    path: 'subjects/:id',
    component: SubjectPreviewComponent
  },
  {
    path: 'students/:id',
    component: StudentPreviewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
