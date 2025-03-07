import { Component, VERSION } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ModuleFederationToolsModule, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ModuleFederationToolsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    public readonly version: string = VERSION.full;
    public message: string = "";
    public page?: number;
  
    public constructor() {}
  
    public readonly mfe1WebComponentOptions: WebComponentWrapperOptions = {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      type: 'module',
      exposedModule: './my-card',
      elementName: 'my-mfe-element',
    };
  
    public mfe1WebComponentProps: { [key: string]: unknown } = {
      inputText: 'Default Input Shell',
      inputUserId: 1
    };
  
    public readonly mfe1WebComponentEvents: { [key: string]: (event: Event) => void } = {
      'message-sent': (event: Event) => {
        this.message = (event as CustomEvent).detail;
      },
    };

    public preparePage() {
      this.page = this.randomIntFromInterval(1, 10);
      
      this.mfe1WebComponentProps = {
        ...this.mfe1WebComponentProps,
        inputUserId: this.page
      }
    }

    private randomIntFromInterval(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    // // The routerActivateHandler method is being used to subscribe to the outputs
    // // from the MyStandaloneComponent when it's loaded into the router-outlet.
    // //
    // // This is not the usual way to subscribe to outputs from angular components.
    // // The two most common ways are:
    // // 1) on the HTML the parent component subscribes to the child component outputs.
    // // 2) use an Angular service to pass data around.
    // //
    // // The second approach is what would normally be used for a situation where the
    // // component is loaded using Angular routing. However, in order of keeping this
    // // code demo short, we aren't doing this in.
    // //
    // // As a workaround, to be able to subscribe to the outputs from the MyStandaloneComponent
    // // when using the WebComponentWrapper we are using the activate event from the router-outlet.
    // //
    // // Based on the idea from https://chinedujude.medium.com/angular-emit-event-through-router-outlet-53b55fbd1f28
    // //
    // public routerActivateHandler(component: any): void {
    //   if(component instanceof WebComponentWrapper) {
    //     // outputs on the WebComponentWrapper are exposed by its events property
    //     component.events = {
    //       'message-sent': (event: Event) => {
    //         this.message = (event as CustomEvent).detail;
    //       },
    //     };
    //   }
    // }
  }
