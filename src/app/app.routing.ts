import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
const appRoutes: Routes = [
    { path : '' , component : TestComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

