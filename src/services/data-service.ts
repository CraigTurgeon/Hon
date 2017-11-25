import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

    constructor(private http: Http){}
    
    submitQuestion(url, data) {
        return this.http.post(url, data)
            .map(res => res.json())
            .catch(err => {
                return Observable.of(err.json());
            });
    }

    getQuestions(url) {
        return Observable.of([{"id": 1, "question": "This is question 1", "labels": ["realtor"]}]);
        // return this.http.get(url)
        //     .map(res => res.json())
        //     .catch(err => {
        //         return Observable.of(err.json());
        //     });
    }

    submitAnswer(url, data) {
        return this.http.post(url, data)
            .map(res => res.json())
            .catch(err => {
                return Observable.of(err.json());
            });
    }

    login(url, data) {
        return this.http.post(url, data)
            .map(res => res.json())
            .catch(err => {
                return Observable.of(err.json());
            });
    }

    register(url, data) {
        return this.http.post(url, data)
        .map(res => res.json())
        .catch(err => {
            return Observable.of(err.json());
        });
    }

}
