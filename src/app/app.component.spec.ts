import { AppComponent } from './app.component';
import {SpectatorRouting, createRoutingFactory} from '@ngneat/spectator'

describe('AppComponent', () => {
  let spectator: SpectatorRouting<AppComponent>;
  const createComponent = createRoutingFactory({
    component: AppComponent,
    params: { productId: '3' },
    data: { title: 'Some title' }
  });

  beforeEach(() => spectator = createComponent());

  it('should display route data title', () => {
    expect(spectator.query('.title')).toHaveText('My path is');
  });

});
