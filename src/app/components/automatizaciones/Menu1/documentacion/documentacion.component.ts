import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JIRAService } from '../../../../services/jira.service';

type NewType = any;

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html'
})
export class DocumentacionComponent implements OnInit {

  array: any = [];
  flag: Number = 0;
  loading: boolean;
  constructor(private router: ActivatedRoute, private jira: JIRAService) {
    this.CargaJIRASinDocumentacion();
   }

  ngOnInit(): void {
  }

  CargaJIRASinDocumentacion() {
    this.loading = true;
    this.jira.getIssuesDocEmpty().subscribe(data => {
      const tareas = JSON.parse(data);
      this.array = tareas.issues;
      this.loading = false;
    });
  }

  GestionaCaso(id: string) {
    this.loading = true;
    this.jira.getFoldersDirve().subscribe(data => {
      for ( let i = 0; i < data.files.length; i++) {
        if (id === data.files[i].name) {
          // Actualiza unicamente JIRA
          this.jira.updateIssue(data.files[i].name, data.files[i].id).subscribe(data => {
            alert('Tarea creada en DRIVE y actualizada en JIRA ' + data.files[i].name);
            console.log('Actualizado unicamente en JIRA');
            this.flag = 1;
            this.loading = false;
            this.CargaJIRASinDocumentacion();
          },
          error => {
            console.log();
            alert(error.message);
            this.CargaJIRASinDocumentacion();
          });
        }
        if (i === data.files.length - 1 && this.flag === 0)
        {
          // Crea en DRIVE y actualiza en JIRA
          this.jira.createFoldersDirve(id).subscribe(data => {
            this.jira.updateIssue(id, data.id).subscribe(data => {
              alert('Tarea creada en DRIVE y actualizada en JIRA');
              console.log('Creado en DRIVE y actualizado en JIRA ' + id);
              this.loading = false;
              this.CargaJIRASinDocumentacion();
            },
            error => {
              console.log();
              alert(error.message);
              this.CargaJIRASinDocumentacion();
            });
          },
          error => {
            console.log();
            alert(error.message);
            this.CargaJIRASinDocumentacion();
          });
        }
      }
    },
    error => {
      console.log();
      alert(error.message);
      this.CargaJIRASinDocumentacion();
    });
  }
}
