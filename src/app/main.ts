import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}
bootstrap().then(() => {
  document.querySelector('.preloader').remove();
});
