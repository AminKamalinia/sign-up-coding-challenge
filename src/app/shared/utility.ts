import { HttpHeaders } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

export class Utility {

    public static get options() {
        const header = new HttpHeaders({ 'Content-Type': 'application/json' });
        return { headers: header };
    }

    public static validateEmail(email: string): boolean {
        const regexp = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
        return regexp.test(email);
    }

    public static validatePassword(password: string, firstName: string, lastName: string): boolean {
        const regexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])[a-zA-Zd]{8,}$");
        return regexp.test(password) && !password.toLowerCase().includes(firstName.toLowerCase() || lastName.toLowerCase());
    }

    public static sha1(password: string): string {
        return CryptoJS.SHA1(CryptoJS.enc.Utf8.parse(password)).toString();
    }
}