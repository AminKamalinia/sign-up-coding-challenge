import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CustomerService } from 'src/app/services';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers: [CustomerService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the border color of first name, if it is empty', () => {
    component.firstName = '';
    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.css('#firstName'));
    fixture.debugElement.query(By.css('.btn')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(debugElement.classes['is-invalid']).toBeTruthy();
  });

  it('should change the border color of last name, if it is empty', () => {
    component.lastName = '';
    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.css('#lastName'));
    fixture.debugElement.query(By.css('.btn')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(debugElement.classes['is-invalid']).toBeTruthy();
  });

  it('should change the border color of email, if it is invalid', () => {
    component.email = '';
    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.css('#email'));
    fixture.debugElement.query(By.css('.btn')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(debugElement.classes['is-invalid']).toBeTruthy();
  });

  it('should change the border color of password, if it is empty', () => {
    component.password = '';
    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.css('#password'));
    fixture.debugElement.query(By.css('.btn')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(debugElement.classes['is-invalid']).toBeTruthy();
  });

  it('should return true, if all of firstName, lastName, email, password are valid', () => {
    component.firstName = 'Test';
    component.lastName = 'Test';
    component.email = 'test@test.test';
    component.password = 'qweASDzxc';

    expect(component.validation()).toBeTruthy();
  });

  it('should return true, if any of firstName, lastName, email, password is invalid', () => {
    component.firstName = '';
    component.lastName = 'Test';
    component.email = 'test@test.test';
    component.password = 'qweASDzxc';
    expect(component.validation()).toBeFalsy();

    component.firstName = 'Test';
    component.lastName = '';
    component.email = 'test@test.test';
    component.password = 'qweASDzxc';
    expect(component.validation()).toBeFalsy();

    component.firstName = 'Test';
    component.lastName = 'Test';
    component.email = '';
    component.password = 'qweASDzxc';
    expect(component.validation()).toBeFalsy();

    component.firstName = 'Test';
    component.lastName = 'Test';
    component.email = 'test@test.test';
    component.password = '';
    expect(component.validation()).toBeFalsy();
  });
});