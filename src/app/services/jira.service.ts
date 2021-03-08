import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JIRAService {

  constructor(private http: HttpClient) {
    console.log('JIRA service listo');
  }

  getQueryJIRA(query: string) {
    const url = `http://localhost:60695/api/Integrador/ApiJIRA?query=${ query }`;
    const headers = new HttpHeaders();
    return this.http.get(url, {headers});
  }

  putQueryJIRA(query: string, data: any) {
    const url = `http://localhost:60695/api/Integrador/ApiJIRAUpdateIssue?id=${ query }&urlDrive=${ data }`;
    const headers = new HttpHeaders();
    return this.http.post(url, null, {headers});
  }

  getQueryDRIVE(query: string) {
    const url = `https://www.googleapis.com/drive/v3/${ query }`;
    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      Authorization: 'Bearer ya29.a0AfH6SMA5gNPsSJP0D7pPsBtp8ENI3WPgYKPxwJ24BCec_JNEjK5wDgbaY31XLKEzUMlIW8uIDeQLWrahm4PCiGS8vFpvBxQoNzS7ehWEUvRm9URN4EfOIefDdCtsQkaqxJ8vMofeP-eWIiJCr3lYtx9996tW0LlYMXKeyw'
    });
    return this.http.get(url, {headers});
  }

  postQueryDRIVE(query: string, id: string) {
    const url = `https://www.googleapis.com/drive/v3/${ query }`;
    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      Authorization: 'Bearer ya29.a0AfH6SMA5gNPsSJP0D7pPsBtp8ENI3WPgYKPxwJ24BCec_JNEjK5wDgbaY31XLKEzUMlIW8uIDeQLWrahm4PCiGS8vFpvBxQoNzS7ehWEUvRm9URN4EfOIefDdCtsQkaqxJ8vMofeP-eWIiJCr3lYtx9996tW0LlYMXKeyw'
    });
    const data = { name: id, mimeType: 'application/vnd.google-apps.folder', parents: ['1LbjKfWkHGEQqHiTZalkoYz-qF2evAwK4'] };
    return this.http.post(url, data, {headers});
  }

  getIssuesDocEmpty() {
    // tslint:disable-next-line: max-line-length
    return this.getQueryJIRA('project = ESTCORE AND status != Closed AND ("Fabrica desarrollo" is EMPTY OR "Fabrica desarrollo" = "Seguros Bolivar") and "URL Documentación" is EMPTY and (status  != "Backlog")');
  }

  getFoldersDirve(){
    // tslint:disable-next-line: max-line-length
    return this.getQueryDRIVE('files?pageSize=500&q="1LbjKfWkHGEQqHiTZalkoYz-qF2evAwK4"+in+parents&key=963935726872-83unp2q9jqb789dvocs27kkrepuqo4fg.apps.googleusercontent.com');
  }

  updateIssue(name: string, id: string) {
    const url = 'https://drive.google.com/drive/u/1/folders/';
    // tslint:disable-next-line: max-line-length
    return this.putQueryJIRA(name, url);
  }

  createFoldersDirve(id: string){
    // tslint:disable-next-line: max-line-length
    return this.postQueryDRIVE('files?key=963935726872-83unp2q9jqb789dvocs27kkrepuqo4fg.apps.googleusercontent.com', id);
  }

}

