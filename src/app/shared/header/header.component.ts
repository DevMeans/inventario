import { Component, ElementRef, ViewChild, OnInit,AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('menuitem') menuitem!: ElementRef<any>;
  @ViewChild('mobilemenu') mobilemenu!: ElementRef<any>;
  @ViewChild('navlink') navlink!: ElementRef<any>;
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    console.log(this.router.url);
    if (this.router.url === '/') {
      this.navlink.nativeElement.classList.add('bg-indigo-600');
    } else {
      this.navlink.nativeElement.classList.remove('bg-indigo-600');
    }

    this.router.events  
    .pipe(
      filter(
        (event): event is NavigationEnd => event instanceof NavigationEnd
      )
    )
    .subscribe((event: NavigationEnd) => {
      if (this.router.url === '/') {
        this.navlink.nativeElement.classList.add('bg-indigo-600');
      } else {
        this.navlink.nativeElement.classList.remove('bg-indigo-600');
      }
      // Aquí puedes realizar acciones adicionales basadas en la nueva ruta
    });
  }
  hideshow() {
    if (this.menuitem.nativeElement.classList.contains('hidden')) {
      this.menuitem.nativeElement.classList.remove('hidden');
    } else {
      this.menuitem.nativeElement.classList.add('hidden');
    }
  }
  hideshowMenu() {
    if (this.mobilemenu.nativeElement.classList.contains('hidden')) {
      this.mobilemenu.nativeElement.classList.remove('hidden');
    } else {
      this.mobilemenu.nativeElement.classList.add('hidden');
    }
  }
}
