import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskCComponent } from './task-c/task-c.component';


const appRoutes: Routes = [
  { path: 'enter-task', component: TaskCComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
