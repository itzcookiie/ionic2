import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { UserDetailComponent } from '../user-detail/user-detail.component';


const routes: Routes = [
  {
        path: '', 
        component: Tab2Page,
  },
          {
            path: 'detail',
            component: UserDetailComponent
          }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
