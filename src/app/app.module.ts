import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { CartPage } from '../pages/cart/cart';
import { CartDetailsPage} from '../pages/cart-details/cart-details';
import { CartService} from '../cart.service';
import { AboutPage} from "../pages/about/about";
import { CheckoutPage} from "../pages/checkout/checkout";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CartPage,
    CartDetailsPage,
    AboutPage,
    CheckoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CartPage,
    CartDetailsPage,
    AboutPage,
    CheckoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CartService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
