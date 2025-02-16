import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ChatbotComponent} from "./chatbot/chatbot.component";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {NgForOf} from "@angular/common";

@NgModule({
  declarations: [
    // other components
    ChatbotComponent
  ],
  imports: [
    // other modules
    HttpClientModule,
    FormsModule,
    NgForOf
  ],
  providers: [],
  exports: [
    ChatbotComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
