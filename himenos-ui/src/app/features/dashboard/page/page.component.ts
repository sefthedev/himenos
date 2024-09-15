import {Component, inject, OnInit} from '@angular/core';
import {QuillEditorComponent, QuillModule} from "ngx-quill";
import {FormsModule} from "@angular/forms";
import {NotebookService} from "@app/core/services/notebook.service";

@Component({
  selector: 'kady-page',
  standalone: true,
  imports: [FormsModule, QuillEditorComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent implements OnInit {
  notebookService = inject(NotebookService)


  editorContent: string = "";
  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{'header': 1}, {'header': 2}],               // custom button values
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
      [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
      [{'direction': 'rtl'}],                         // text direction

      [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
      [{'header': [1, 2, 3, 4, 5, 6, false]}],

      [{'color': []}, {'background': []}],          // dropdown with defaults from theme
      [{'font': []}],
      [{'align': []}],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  ngOnInit(): void {
    this.loadFile('document.html');
  }

  saveFile(): void {
    this.notebookService.saveFile('document.html', this.editorContent)
      .subscribe({
        next: response => {
          console.log('File saved successfully');
        },
        error: error => {
          console.error('Error saving file', error);
        }
      });
  }

  loadFile(filename: string): void {
    this.notebookService.loadFile(filename)
      .subscribe({
        next: (data) => this.editorContent = data,
        error: (error) => console.error('Error loading file', error),
        complete: () => console.info('Load file request completed')
      });
  }
}
