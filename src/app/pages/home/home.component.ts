import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  shouldDisplayNewAppointmentModal: boolean = false
  appointmentsList = [
    {
      specialty: "Cardiologia",
      professional: "Dr. Caio Carlos Ferreira",
      date: "01/01/1920",
      hour: "13:30"
    },
    {
      specialty: "Cardiologia",
      professional: "Dr. Caio Carlos Ferreira",
      date: "01/01/1920",
      hour: "13:30"
    },
    {
      specialty: "Cardiologia",
      professional: "Dr. Caio Carlos Ferreira",
      date: "01/01/1920",
      hour: "13:30"
    },
    {
      specialty: "Cardiologia",
      professional: "Dr. Caio Carlos Ferreira",
      date: "01/01/1920",
      hour: "13:30"
    },
    {
      specialty: "Cardiologia",
      professional: "Dr. Caio Carlos Ferreira",
      date: "01/01/1920",
      hour: "13:30"
    },
    {
      specialty: "Cardiologia",
      professional: "Dr. Caio Carlos Ferreira",
      date: "01/01/1920",
      hour: "13:30"
    },
    {
      specialty: "Cardiologia",
      professional: "Dr. Caio Carlos Ferreira",
      date: "01/01/1920",
      hour: "13:30"
    },
    {
      specialty: "Cardiologia",
      professional: "Dr. Caio Carlos Ferreira",
      date: "01/01/1920",
      hour: "13:30"
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleShouldDisplayNewAppointmentModal(){
    this.shouldDisplayNewAppointmentModal = !this.shouldDisplayNewAppointmentModal
  }

  navigateToLogin(){
    this.router.navigate(['login'])
  }

}
