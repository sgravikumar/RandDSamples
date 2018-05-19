import { PLATFORM } from "aurelia-pal";
export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  configureRouter(config,router){

    config.title ="Aurelia shopping cart";
    config.map([
      {
        route: '', 
        name:'home', 
        moduleId: PLATFORM.moduleName('./features/general/home/home'),
        title: 'Home'
    }
    ]);
  }
}
