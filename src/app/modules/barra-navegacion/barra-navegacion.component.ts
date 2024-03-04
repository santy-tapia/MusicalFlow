import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BootstrapOptions } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { NgModule } from '@angular/core';
import { ThemeService } from '../../servicio/theme.service'
import { ThemebuttonComponent } from '../themebutton/themebutton.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NgClass } from '@angular/common';
@Component({
    selector: 'app-barra-navegacion',
    standalone: true,
    imports: [RouterLink, MenubarModule, ThemebuttonComponent, CommonModule],
    templateUrl: './barra-navegacion.component.html',
    styles: ``
})
export class BarraNavegacionComponent {
background: any = "#163102";
items: MenuItem[] | undefined;

constructor(private themeService: ThemeService) {

}

toggleDarkMode() {
    this.themeService.toggleDarkMode();
}
get theme() {
    return this.themeService.darkMode ? 'dark-theme' : 'light-theme';
}
  ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                routerLink: 'home',
            },
            {
                label: 'Recent',
                icon: 'pi pi-fw pi-star',
                routerLink: 'recent',

            },
            {
                label: 'Busqueda',
                icon: 'pi pi-fw pi-search',
                routerLink: 'busqueda'
            },
        ];
    }
}
