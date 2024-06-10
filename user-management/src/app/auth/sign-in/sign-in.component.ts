import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { StorageService } from 'src/app/services/storage.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService,
    private fb: FormBuilder,
    private storageService: StorageService
  ) {}

  public form: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

submit() {
    if (this.form.invalid) return;
    this.userService.signIn(this.form.value).pipe(
      tap((user: IUser | null) => {
        if (user) {
          this.storageService.setUser(user);
          this.router.navigate([``]);
        } else alert(' user not found');
      })
    ).subscribe();
  }
}
