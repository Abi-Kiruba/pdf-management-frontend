import { Component } from '@angular/core';
import { PdfService } from '../services/pdf.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  user: string = '';
  selectedFile!: File;

  constructor(private pdfService: PdfService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload(event: Event) {
    event.preventDefault();
    if (!this.user || !this.selectedFile) return;

    const formData = new FormData();
    formData.append('pdf', this.selectedFile);
    formData.append('user', this.user);

    this.pdfService.uploadPdf(formData).subscribe({
      next: (res) => alert('Upload successful'),
      error: (err) => alert('Upload failed')
    });
  }
}
