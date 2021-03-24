import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menuform',
  templateUrl: './menuform.component.html',
  styleUrls: ['./menuform.component.scss']
})
export class MenuformComponent implements OnInit {

  menuform: FormGroup;
  loading = false;
  success = false;

  constructor(private menuService: MenuService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.menuform = this.formBuilder.group({
      title: ['', [
        Validators.required
      ]],
      image: ['', [
        Validators.required
      ]],
      ingredients: [[], [
        Validators.required
      ]],
      duration: [null, [
        Validators.required,
        Validators.maxLength(3),
        Validators.min(5),
        Validators.max(999)
      ]],
      tags: []
    });

    this.menuform.valueChanges.subscribe(console.log);
  }

  get title(): AbstractControl {
    return this.menuform.get('title');
  }

  get image(): AbstractControl {
    return this.menuform.get('image');
  }

  get ingredients(): AbstractControl {
    return this.menuform.get('ingredients');
  }

  get duration(): AbstractControl {
    return this.menuform.get('duration');
  }

  get tags(): AbstractControl {
    return this.menuform.get('tags');
  }

  async submitHandler(): Promise<void> {

    this.loading = true;

    const formValue = this.menuform.value;

    try {
      await this.menuService.insertMenu(formValue);
      this.success = true;
    } catch (err) {
      console.log(err);
    }

    this.loading = false;
  }

}
