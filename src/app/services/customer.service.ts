import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignUpInput } from '../models';
import { Utility } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  public signUp(signUpInput: SignUpInput): Promise<any> {
    return this.httpClient.post(environment.apiUrl + '/users', signUpInput, Utility.options)
      .toPromise().then(result => result).catch(result => result);
  }
}
