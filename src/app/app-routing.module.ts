import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PriceListComponent} from './components/price-list/price-list.component';
import {PriceCalculatorComponent} from './components/price-calculator/price-calculator.component';
import {NotFoundComponent} from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'price-list',
    component: PriceListComponent
  },
  {
    path: 'calculator',
    component: PriceCalculatorComponent
  },
  {
    path: '',
    redirectTo: 'price-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
