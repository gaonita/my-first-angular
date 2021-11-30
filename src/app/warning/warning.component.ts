import { Component} from "@angular/core";

@Component({
  selector:'app-warning',
  templateUrl:'./warning.component.html',
  styles:[`
  p{
    padding: 20px;
    color: red;
    background-color: mistyrose;
    border: solid 1px red;
  }
  `]
})

export class WarningComponent{

}
