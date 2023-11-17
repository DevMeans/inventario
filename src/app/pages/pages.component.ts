import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  pagina:string=''
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Suscribirse al evento NavigationEnd para detectar cambios en la ruta
    this.pagina=this.router.url.slice(1) || 'Inicio'
    this.router.events  
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        console.log('Ruta actual:', event.url);
        this.pagina=event.url.slice(1)
        console.log(this.pagina)
        // Aquí puedes realizar acciones adicionales basadas en la nueva ruta
      });
  }
}
