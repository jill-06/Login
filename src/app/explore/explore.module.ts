import { NgModule } from '@angular/core';
import { ExploreComponent } from './explore.component';
import { MoviesComponent } from './movies/movies.component';
import { FilterComponent } from './filter/filter.component';
import { RouterModule, Routes } from '@angular/router';

const exploreRoutes: Routes = [
  {
    path: '',
    component: ExploreComponent,
    children: [
      { path: 'movies', component: MoviesComponent },
      { path: 'filter', component: FilterComponent },
    ],
  },
];

@NgModule({
  declarations: [ExploreComponent, MoviesComponent, FilterComponent],
  imports: [ RouterModule.forChild(exploreRoutes)],
})
export class ExploreModule {}







