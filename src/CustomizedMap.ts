import { Internship } from "./Internship";
import { Student } from "./Student";
export class CustomizedMap {
  private googleMap: google.maps.Map;
  constructor(divId) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addPin(pinnable: Student | Internship) {
    const mark = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: pinnable.location.latitude,
        lng: pinnable.location.longitude,
      },
    });

    if (pinnable instanceof Student){
        this.message(mark, `Student name: ${pinnable.firstName} ${pinnable.lastName}`)
    } else {
        this.message(mark, `This is ${pinnable.businessName}' internship`)
    }
  }

  private message(marker: google.maps.Marker, message: string): void {
      const infoWindow = new google.maps.InfoWindow({
          content: message, 
      });
      marker.addListener("click", () => {
          infoWindow.open(this.googleMap, marker)
      })
  }
  // addStudentMarker(student: Student) {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: student.location.latitude,
  //       lng: student.location.longitude,
  //     },
  //   });
  // }
  // addInternshipMarker(internship: Internship) {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: internship.location.latitude,
  //       lng: internship.location.longitude,
  //     },
  //   });
  // }
}