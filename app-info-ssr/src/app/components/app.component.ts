import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./styles/app.component.scss']
})
export class AppComponent {
    constructor(private _router: Router) {
    }

    public redirect(page: string): void {
        switch (page) {
            case 'main':
                this._router.navigate(['main']);
                break;
            case 'about':
                this._router.navigateByUrl('/about');
                break;
            case 'goblin':
                this._router.navigateByUrl('/goblin');
                break;
            case 'story':
                this._router.navigateByUrl('/story');
                break;
        }
    }
}
