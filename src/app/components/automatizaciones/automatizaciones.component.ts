import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automatizaciones',
  templateUrl: './automatizaciones.component.html'
})
export class AutomatizacionesComponent implements OnInit {

  Menu1 = true;
  Menu2 = false;
  claseCambio1 = 'nav-link active';
  claseCambio2 = 'nav-link';
  loading: boolean = true;

  constructor() {
    this.loading = false;
  }

  ngOnInit(): void {
  }

  cambiaPanel(id: string) {
    if (id === '1') {
      this.claseCambio1 = 'nav-link active';
      this.claseCambio2 = 'nav-link';
      this.Menu1 = true;
      this.Menu2 = false;
    } else if (id === '2') {
      this.claseCambio2 = 'nav-link active';
      this.claseCambio1 = 'nav-link';
      this.Menu1 = false;
      this.Menu2 = true;
    }
  }
}
