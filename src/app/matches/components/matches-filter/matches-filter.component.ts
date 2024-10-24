import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-matches-filter',
  templateUrl: './matches-filter.component.html',
  styleUrls: ['./matches-filter.component.css']
})
export class MatchesFilterComponent implements OnInit {
  filterForm: FormGroup;
  countries: string[] = ['Argentina', 'Brazil', 'Spain', 'Italy', 'France'];

  @Output() filterEvent = new EventEmitter<{ date: string, country: string }>();

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      date: [''],
      country: ['']
    });
  }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      date: [''],
      country: ['Argentina']
    });
  }

  onSubmit() {
    const filterData = this.filterForm.value;
    this.filterEvent.emit(filterData);
  }
}
