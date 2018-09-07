import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'cr-add-invoice-container',
  templateUrl: './add-invoice-container.component.html',
  styleUrls: ['./add-invoice-container.component.scss']
})
export class AddInvoiceContainerComponent implements OnInit {
  projectDetailsFormGroup: FormGroup;
  rideDetailsFormGroup: FormGroup;
  invoiceFormGroup: FormGroup;

  projectDetails: ProjectDetail[] = [
    {teamName: 'DatahubRe', managerName: 'Sudeep Roy'}
  ];

  shiftDetails: ShiftDetail[] = [
    {id: 1, shiftName: '1st'},
    {id: 2, shiftName: '2nd'},
    {id: 3, shiftName: 'General'},
    {id: 3, shiftName: 'Night'}
  ];

  invoiceTypes: InvoiceType[] = [
    {id: 1, name: 'Daily'},
    {id: 2, name: 'Weekly'},
    {id: 3, name: 'Monthly'}
  ];

  cabServices: CabService[] = [
    {id: 1, name: 'Ola'},
    {id: 2, name: 'Uber'},
    {id: 3, name: 'Zoom Car'},
    {id: 4, name: 'Drizy'},
    {id: 5, name: 'Other'}
  ];

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {
    this.projectDetailsFormValidator();
    this.rideDetailsFormValidator();
    this.invoiceFormValidator();

    
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      //alert('File uploaded successfully');
    };
  }

  projectDetailsFormValidator() {
    this.projectDetailsFormGroup = this._formBuilder.group({
      // teamName: ['', Validators.required],
      // managerName: ['', Validators.required],
      shift: ['', Validators.required]
    });
  }

  rideDetailsFormValidator() {
    this.rideDetailsFormGroup = this._formBuilder.group({
      rideDate: ['', Validators.required],
      invoiceType: ['', Validators.required],
      cabService: ['', Validators.required],
      rideNumber: ['', Validators.required],
      rideComment: ''
    });
  }

  invoiceFormValidator() {
    this.invoiceFormGroup = this._formBuilder.group({
      invoiceUpload: ['', Validators.required]
    });
  }

  openfileDialog() {
    console.log('open file dialog method');
    const invoiceUpload = document.getElementById('invoiceUpload') as HTMLInputElement;
    invoiceUpload.click();
    this.uploader.uploadAll();
  }

  onFileChange(invoiceFile) {
    console.log(invoiceFile.target.value);
  }

}

export interface ProjectDetail {
  teamName: string;
  managerName: string;
}

export interface ShiftDetail {
  id: number;
  shiftName: string;
}

export interface InvoiceType {
  id: number;
  name: string;
}

export interface CabService {
  id: number;
  name: string;
}
