import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private _snackBar:MatSnackBar
    ) {}
  notificar(mensagem:string){
    this._snackBar.open(mensagem,"Ok",{
      duration: 2000,
      verticalPosition:"top",
      horizontalPosition:"center"
    });
  }
}
