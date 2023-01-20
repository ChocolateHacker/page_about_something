import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { RouterModule, RouterOutlet, Routes } from "@angular/router";
import { MainComponent } from "./pages/main-page/main.component";
import { AboutComponent } from "./pages/about-page/about.component";
import { GoblinComponent } from "./pages/goblin-page/goblin.component";
import { StoryComponent } from "./pages/story-page/story.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main'
    },
    {
        path: 'main',
        component: MainComponent,
    },
    {
        path: 'goblin',
        component: GoblinComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'story',
        component: StoryComponent,
    }
];

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        GoblinComponent,
        AboutComponent,
        StoryComponent
    ],
    imports: [
        BrowserModule,
        RouterOutlet,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
