import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JIRAService {

  constructor(private http: HttpClient) {
    console.log('JIRA service listoes');
  }

  getQuery(query: string) {
    const url = `http://jira.segurosbolivar.com/rest/api/2/search?jql=${query}`;
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Basic ' + btoa('1076622744:David10.,'));
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    return this.http.get(url, {headers});
  }

  getMyIssues() {
    return this.getQuery('assignee = currentUser() and (status != Backlog  and status  != "Backlog Priorizado" and status  != Done)');
  }

}

