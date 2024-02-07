import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  downloadPdf(): void {
    // Replace 'path-to-your-pdf.pdf' with the actual URL of your PDF file
    const pdfUrl = 'assets/The Expert Opinion (Panel Book)..pdf';

    // Create a link element
    const link = document.createElement('a');
    link.setAttribute('href', pdfUrl);

    // Set the download attribute with the desired filename
    link.setAttribute('download', 'The Expert Opinion (Panel Book)..pdf');

    // Hide the link
    link.style.display = 'none';

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click on the link to initiate the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
  }
}
