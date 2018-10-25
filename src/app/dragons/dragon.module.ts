import { NgModule } from '@angular/core';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { DragonDetailComponent } from './dragon-detail/dragon-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-space-pipe';
import { RouterModule } from '@angular/router';
import { DragonDetailGuard } from './dragon-detail/dragon-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { DragonCreateComponent } from './dragon-create/dragon-create.component';
import { DragonForm } from './dragon-form/dragon-form.component';

import { AuthGuard } from '../auth/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'dragons', component: DragonListComponent, canActivate: [AuthGuard]},
      { path: 'dragons/create', component: DragonCreateComponent, canActivate: [AuthGuard]},
      { path: 'dragons/:slug', component: DragonDetailComponent, canActivate: [AuthGuard] },
    ]),
    SharedModule
  ],
  declarations: [
    DragonListComponent,
    DragonDetailComponent,
    ConvertToSpacesPipe,
    DragonCreateComponent,
    DragonForm
  ]
})

export class DragonModule { }
