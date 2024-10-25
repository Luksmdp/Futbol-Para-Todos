import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teams-filter',
  templateUrl: './teams-filter.component.html',
  styleUrls: ['./teams-filter.component.css'] 
})
export class TeamsFilterComponent {

  @Output() filterTeams: EventEmitter<string> = new EventEmitter<string>();
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      team: [''] // Campo para ingresar el nombre del equipo
    });
  }

  onSubmit(): void {
    const teamName = this.filterForm.get('team')?.value;
    console.log('Nombre del equipo a filtrar:', teamName); // Verificación
    this.filterTeams.emit(teamName); // Emitir el nombre del equipo al componente padre
}

}
