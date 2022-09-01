import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { CustomPreloadService } from './services/custom-preload.service';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    data: { preload: true },
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule)
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules, // Precarga todos los modulos en la aplicación.
    preloadingStrategy: CustomPreloadService, // Precarga solo los modulos que tengan la propiedad data: { preload: true }
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
