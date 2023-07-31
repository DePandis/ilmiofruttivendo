import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'https://your-api-url/users'; // Replace with your actual API endpoint

    constructor(private http: HttpClient) { }

    getUser(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }

    updateUser(user: User): Observable<User> {
        const url = `${this.apiUrl}/${user.id}`; // Assuming the user object has an 'id' property
        return this.http.put<User>(url, user);
    }
}
