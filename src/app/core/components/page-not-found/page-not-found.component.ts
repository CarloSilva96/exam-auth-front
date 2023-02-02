import {Component} from '@angular/core';

@Component({
  selector: 'page-not-found',
  template: `
  <mat-card>
    <mat-card-title>404: Page not Found</mat-card-title>
    <mat-card-content>
      PAGE NOT FOUND
    </mat-card-content>
    <mat-card-actions>
      <button mat-raised-button color="accent" [routerLink]="['/home']" >
        Voltar para o início
      </button>
    </mat-card-actions>
  </mat-card>
  `,
  styles: [`
    :host {
      text-align: center;
    }
  `
  ]
})

export class PageNotFoundComponent {
}
