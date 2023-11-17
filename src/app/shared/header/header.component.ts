import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('menuitem') menuitem!: ElementRef<any>;
  @ViewChild('mobilemenu') mobilemenu!: ElementRef<any>;
  
  hideshow() {
    if (this.menuitem.nativeElement.classList.contains('hidden')) {
      this.menuitem.nativeElement.classList.remove('hidden');
    } else {
      this.menuitem.nativeElement.classList.add('hidden');
    }
  }
  hideshowMenu(){
    if (this.mobilemenu.nativeElement.classList.contains('hidden')) {
      this.mobilemenu.nativeElement.classList.remove('hidden');
    } else {
      this.mobilemenu.nativeElement.classList.add('hidden');
    }
  }
}
