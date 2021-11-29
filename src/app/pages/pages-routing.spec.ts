import { routes } from './pages-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';

describe('routes', () => {
  it('should contain a route for signup page', () => {
    expect(routes).toContain({ path: 'sign-up', component: SignUpComponent })
  });
});