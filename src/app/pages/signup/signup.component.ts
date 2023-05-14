import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public user = {
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
  }

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.password == null){
      alert('Nombre de usuario es requerido')
      return;
    }
    this.userService.addUsuario(this.user).subscribe((data)=>{
      console.log(data);
    },(error) =>{
      console.log(error);
    })
  }
}
