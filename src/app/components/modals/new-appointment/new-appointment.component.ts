import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-appointment-modal',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss']
})
export class NewAppointmentComponent implements OnInit {

  @Output()
  modalClose = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalClose.emit()
  }

  handleAppointment(){
    this.closeModal()
  }

}
