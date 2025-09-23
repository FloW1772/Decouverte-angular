import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';  // import the exported symbol App
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

export default bootstrap;
