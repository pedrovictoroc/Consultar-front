import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button-white-background',
  templateUrl: './white-background.component.html',
  styleUrls: ['./white-background.component.scss']
})
export class WhiteBackgroundComponent implements OnInit {

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
