import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { AuthGuard } from '../auth/auth.guard'


const routes: Routes = [
  { 
    path: 'detail/:detailId',
    component: UserDetailComponent ,
    canActivate: [UserDetailComponent] 
  },
  {
        path: '', 
        component: Tab2Page,
        canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserDetailComponent]
})
export class Tab2PageRoutingModule {}
