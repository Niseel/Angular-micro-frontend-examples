import { Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

export const routes: Routes = [
    {
        path: 'cards',
        component: WebComponentWrapper,
        data: {
            // the 4 properties below are part of the WebComponentWrapperOptions type
            type: 'module',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: './my-card',
            elementName: 'my-mfe-element',

            // Inputs to the WebComponentWrapper are set by populating the props input
            // property.
            //
            // This works as a way to pass input to the component because the bindToComponentInputs option is set to true below
            // For more info see:
            // - https://angular.io/api/router/ExtraOptions
            // - https://angularindepth.com/posts/1519/router-data-as-components-inputs-in-angular-v16
            // - https://www.freecodecamp.org/news/use-input-for-angular-route-parameters/
            // - https://itnext.io/bind-route-info-to-component-inputs-new-router-feature-1d747e559dc4
            props: {
                inputText: 'test input value from dev platform',
                inputUserId: 1
            },
        } as WebComponentWrapperOptions // this cast is to get strict type checking on the minimum required properties for the WebComponentWrapper component
    },
];
