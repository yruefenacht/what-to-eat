import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MenuService } from '../services/menu.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { requireImageFormat } from '../directives/imagevalidator.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.scss']
})
export class AddMenuComponent implements OnInit {

  menuForm: FormGroup;
  loading = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly tagList: string[] = ['Vegan', 'Vegetarisch', 'Gesund', 'Beliebt', 'Rohkost', 'Grill', 'Backen'];

  constructor(
    private menuService: MenuService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.menuForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z äöüÄÖÜ]*$')
      ]],
      image: [null, [
        Validators.required,
        requireImageFormat(['image/jpeg', 'image/png'])
      ]],
      duration: [null, [
        Validators.required,
        Validators.maxLength(3),
        Validators.min(5),
        Validators.max(999)
      ]],
      ingredients: [[]],
      tags: [[]],
    });
  }

  submitHandler(): void {
    const formValue = this.menuForm.value;
    this.loading = true;
    this.menuService.uploadMenu(formValue, () => {
      this.loading = false;
      this.router.navigate(['']);
    });
  }

  addIngredient(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.menuForm.value.ingredients.push(value);
    }
    if (input) {
      input.value = '';
    }
  }

  removeIngredient(ingredient: string): void {
    const values = this.menuForm.value.ingredients.filter(v => v !== ingredient);
    this.menuForm.value.ingredients = values;
  }

  get title(): AbstractControl {
    return this.menuForm.get('title');
  }

  get image(): AbstractControl {
    return this.menuForm.get('image');
  }

  get ingredients(): AbstractControl {
    return this.menuForm.get('ingredients');
  }

  get duration(): AbstractControl {
    return this.menuForm.get('duration');
  }

  get tags(): AbstractControl {
    return this.menuForm.get('tags');
  }

}
