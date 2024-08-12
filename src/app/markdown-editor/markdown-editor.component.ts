import { Component } from '@angular/core';
import { marked } from 'marked'; // Importar 'marked'

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.css']
})
export class MarkdownEditorComponent {
  markdownText: string = ''; 
  htmlContent: string = '';
  showPreview: boolean = false;

  updatePreview() {
    this.htmlContent = marked(this.markdownText); // Usar 'marked'
  }

  togglePreview() {
    this.showPreview = !this.showPreview;
    if (this.showPreview) {
      this.updatePreview();
    }
  }
}
