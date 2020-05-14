import { Injectable, EventEmitter } from '@angular/core';
import { Lead } from '../models/lead.model';
import { AppServiceUrls } from './service.urls';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LeadsService {

    // public onLeadAdded: EventEmitter<Lead> = new EventEmitter<Lead>();
    // public onLeadDeleted: EventEmitter<string> = new EventEmitter<string>();
    // public onLeadCommunicationUpdated: EventEmitter<string> = new EventEmitter<string>();

    constructor(private httpClient: HttpClient) {
    }

    public getLeads(locationString?: string): Observable<Lead[]> {
        let params = null;
        if (locationString) {
            params = { location_string: locationString };
        }

        return this.httpClient.get<Lead[]>(AppServiceUrls.getUrl('GET_LEAD_URL'),
            this.getRequestOptions(params));
    }

    public saveLead(lead: Lead) {
        const headers = this.buildHeaders();
        return this.httpClient.post(AppServiceUrls.getUrl('ADD_LEAD_URL'), lead, { headers });
    }

    public markLead(leadId: number, communication: string) {

        return this.httpClient.put(AppServiceUrls.getUrl('MARK_LEAD_URL') + leadId, { communication },
            this.getRequestOptions(null));
    }

    public deleteLead(leadId: number) {
        const headers = this.buildHeaders();
        return this.httpClient.delete(AppServiceUrls.getUrl('DELETE_LEAD_URL') + leadId + '/', { headers });
    }

    private getRequestOptions(params: {}) {
        return {
            headers: this.buildHeaders(),
            params
        };
    }

    private buildHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json'
        });
    }
}
