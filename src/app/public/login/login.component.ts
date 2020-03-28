import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnectorService } from 'src/app/core/auth/connector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private connectorService: ConnectorService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.connectorService.login(this.loginForm.value)
        .subscribe(data => {
          localStorage.setItem('auth', data.token);
          console.log(data);
          this.router.navigate(['/admin/movie']);
        });
    }
  }