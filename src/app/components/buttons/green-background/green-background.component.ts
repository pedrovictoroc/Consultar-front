import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button-green-background',
  templateUrl: './green-background.component.html',
  styleUrls: ['./green-background.component.scss']
})
export class GreenBackgroundComponent implements OnInit {


  @Input('textContent')
  buttonTextContent: string = ""

  @Input('type')
  type: string = "button"

  @Input('form')
  form: string = ""

  @Output('pressed')
  buttonPressedEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleButtonPressed(){
    this.buttonPressedEvent.emit()
  }

}
