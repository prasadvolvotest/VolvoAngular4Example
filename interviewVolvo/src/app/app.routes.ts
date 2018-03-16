import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './users/user.component';
import { ViewComponent } from './viewUser/view.component';

const APP_ROUTES: Routes = [

   { path: '', component: UserComponent },
   { path: 'view/:eid', component: ViewComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
