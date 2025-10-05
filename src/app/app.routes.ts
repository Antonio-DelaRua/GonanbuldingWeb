import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
      { path: '', component: Home }, // Ruta por defecto (localhost:4200)
      { path: 'home', component: Home }, // También accesible por /home
        // Aquí puedes agregar más rutas después
      { path: 'contacto', component: ContactComponent },
      { path: '**', redirectTo: '' } // Redirección para rutas no encontradas
];
