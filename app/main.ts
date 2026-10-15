import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './src/app.component';
import { HomeComponent } from './src/home.component';
import { AboutComponent } from './src/about.component';
import { ProjectComponent } from './src/project.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(
    [
      { path: '', component: HomeComponent, title: 'Jackeline Costa — Product Designer' },
      { path: 'sobre', component: AboutComponent, title: 'Sobre mim — Jackeline Costa' },
      { path: 'projetos/:slug', component: ProjectComponent }
    ],
    withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
  )]
}).catch((error: unknown) => console.error(error));
