import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router} from '@angular/router';
import { Buffer} from 'Buffer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resultado:string = "";
  estadologin:boolean=false;
  token:any;
  loginForm = new FormGroup({
    username : new FormControl('',[Validators.required]),
    clave : new FormControl('',[Validators.required]),
  })
  
  


  constructor(protected loginService: LoginService, protected router:Router) { }

  ngOnInit(): void {
  }

  ingresar()
  {
    this.loginService.login(this.loginForm.value).subscribe(
      (res:any) =>{
        
        if(res.error == false)
        {
          console.log(res.token);
          this.token =  Buffer.from(res.token).toString('base64');          
          localStorage.setItem('token',this.token);
          this.router.navigate(["/usuarios"]);
        }
        else
        {
          
          this.estadologin = true;
          this.resultado = res.mensaje; 
          console.log(res.mensaje);
        }
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

}
