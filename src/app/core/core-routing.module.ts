import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenInterceptorService } from './auth/token-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: 'admin',
    // loadChildren: '../admin/admin.module#AdminModule'
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'public',
    loadChildren: () => import('../public/public.module').then(m => m.PublicModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    TokenInterceptorService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class CoreRoutingModule { }
