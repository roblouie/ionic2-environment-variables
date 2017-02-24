import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnvVariables } from '../../app/environment-variables/environment-variables.token';

@Component({
  selector: 'page-home',
  template: `
  <ion-header>
    <ion-navbar color="primary">
      <ion-title>
        Environment Variables
      </ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content padding>

        <ion-list>
          <ion-item>
            <h2>Ionic Environment</h2>
            <p>{{envVariables.ionicEnvName}}</p>
          </ion-item>
          <ion-item>
            <h2>Endpoint</h2>
            <p>{{envVariables.apiEndpoint}}</p>
          </ion-item>
          <ion-item>
            <h2>Environment Name</h2>
            <p>{{envVariables.environmentName}}</p>
          </ion-item>
        </ion-list>

        <p>This example shows how to check both IONIC_ENV and NODE_ENV, but in a real app choose one and stick with it. Using
        both is confusing and is only done here for demonstration.</p>
        <p>Check out webpack.config.js to see how to get NODE_ENV and default it to 'development'. Then see environment-variables.token.ts
        to see how I check both.</p>
        <p>To see the prod variables listed, start ionic with 'ionic serve -prod'. To see the dev variables listed start Ionic with just 'ionic serve'.
        To see the qa variables listed, set your NODE_ENV to qa then run 'ionic serve', or use the helper script in package.json and just do 'npm run ionic:serve:qa'</p>


  </ion-content>`
})
export class HomePage {

  constructor(public navCtrl: NavController, @Inject(EnvVariables) public envVariables) {}

}
