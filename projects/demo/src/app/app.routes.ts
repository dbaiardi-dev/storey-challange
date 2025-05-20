import { Routes } from '@angular/router';
import { TypographyDemoComponent } from './demo-pages/typography/typography-demo.component';
import { CardDemoComponent } from './demo-pages/card/card-demo.component';
import { TagDemoComponent } from './demo-pages/tag/tag-demo.component';
import { SuppliesSelectorDemoComponent } from './demo-pages/supplies-selector/supplies-selector-demo.component';
import { StoreyChallengeComponent } from './pages/storey-challenge/storey-challenge.component';
export const routes: Routes = [
  { path: '', redirectTo: 'storey-challenge', pathMatch: 'full' },
  { path: 'typography', component: TypographyDemoComponent },
  { path: 'card', component: CardDemoComponent },
  { path: 'tag', component: TagDemoComponent },
  { path: 'supplies-selector', component: SuppliesSelectorDemoComponent },
  { path: 'storey-challenge', component: StoreyChallengeComponent },
];