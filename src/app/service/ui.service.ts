import { Injectable } from '@angular/core';
import { Observable, Subjeet} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask:boolean = false;
  private subjet = new Subject<any>(); 

  constructor() { }

  toggleAddTask():void{
   
    this.showAddTask = !this.showAddTask;
    this.subjet.nex(this.showAddTask);
      }
      onToggle():Observable<any>{
        return this.subjet.asObservable();
      }
}
