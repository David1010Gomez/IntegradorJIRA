import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JIRAService } from '../../services/jira.service';

@Component({
  selector: 'app-automatizaciones',
  templateUrl: './automatizaciones.component.html'
})
export class AutomatizacionesComponent implements OnInit {

  Menu1 = true;
  claseCambio1 = 'nav-link active';
  claseCambio2 = 'nav-link';

  constructor(private router: ActivatedRoute, private jira: JIRAService) {
    this.jira.getMyIssues().subscribe(data => {
      console.log(data);
    });
   }

  ngOnInit(): void {
  }

  cambiaPanel(id: string) {
    if (id === '1') {
      this.claseCambio1 = 'nav-link active';
      this.claseCambio2 = 'nav-link';
      this.Menu1 = true;
    } else if (id === '2') {
      this.claseCambio2 = 'nav-link active';
      this.claseCambio1 = 'nav-link';
      this.Menu1 = false;
    }
  }

}
