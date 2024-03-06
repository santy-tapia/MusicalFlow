import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public darkMode = false;
  darkModeChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.darkMode);

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.darkModeChange.next(this.darkMode);
  }
  isDarkMode(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      observer.next(this.darkMode);
    });
  }
}