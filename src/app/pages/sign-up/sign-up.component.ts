import { Component, OnInit } from '@angular/core';
import { SignUpInput } from 'src/app/models';
import { CustomerService } from 'src/app/services';
import { Utility } from 'src/app/shared';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;

  public firstNameIsInvalid: boolean;
  public lastNameIsInvalid: boolean;
  public emailIsInvalid: boolean;
  public passwordIsInvalid: boolean;

  constructor(private customerService: CustomerService) {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';

    this.firstNameIsInvalid = false;
    this.lastNameIsInvalid = false;
    this.emailIsInvalid = false;
    this.passwordIsInvalid = false;
  }

  ngOnInit(): void {
  }


  public signUp(): void {
    if (this.validation() == true) {
      const signUpInput = new SignUpInput();
      signUpInput.email = this.email;
      signUpInput.firstName = this.firstName.trim();
      signUpInput.lastName = this.lastName.trim();
      signUpInput.password = Utility.sha1(this.password);

      this.customerService.signUp(signUpInput).then(result => {
      });
    }
  }

  public validation(): boolean {
    let isValid = true;
    this.resetValidation();

    if (this.firstName.trim() == '') {
      isValid = false;
      this.firstNameIsInvalid = true;
    }


    if (this.lastName.trim() == '') {
      isValid = false;
      this.lastNameIsInvalid = true;
    }


    if (Utility.validateEmail(this.email.trim()) == false) {
      isValid = false;
      this.emailIsInvalid = true;
    }

    if (Utility.validatePassword(this.password, this.firstName, this.lastName) == false) {
      isValid = false;
      this.passwordIsInvalid = true;
    }
    return isValid;
  }

  private resetValidation(): void {
    this.firstNameIsInvalid = false;
    this.lastNameIsInvalid = false;
    this.emailIsInvalid = false;
    this.passwordIsInvalid = false;
  }
}
