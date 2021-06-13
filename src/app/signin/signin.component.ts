import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../@services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: any;
  constructor(
    private fb:FormBuilder,
    private authService : AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    debugger;
    this.authService.SignOut().then((res) => {
      console.log(res);
    });
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit(){
    if (this.form.valid) {
      const user = this.form.value;
      this.authService.SignIn(user.email, user.password).then((res) => {
        setTimeout(() => {
          this.router.navigate(['/products']);
        }, 100);
      });
    } else {
      alert('Form invalid');
    }
  }
}