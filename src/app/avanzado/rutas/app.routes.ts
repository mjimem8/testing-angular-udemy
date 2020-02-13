import { HospitalComponent } from '../../intermedio2/hospital/hospital.component';
import { MedicoComponent } from 'src/app/intermedio2/medico/medico.component';
import { IncrementadorComponent } from '../../intermedio2/incremetador/incrementador.component';
import { Routes } from '@angular/router';

export const RUTAS: Routes = [

    {path: 'hospital', component: HospitalComponent},
    {path: 'medico/:id', component: MedicoComponent},
    {path: '**', component: IncrementadorComponent},

];