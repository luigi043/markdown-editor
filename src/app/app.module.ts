import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

import { AppComponent } from './app.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component'; // Caminho para o componente

@NgModule({
  declarations: [
    AppComponent,
    MarkdownEditorComponent // Declarar o componente
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
