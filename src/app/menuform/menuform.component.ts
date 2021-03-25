import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MenuService } from '../services/menu.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-menuform',
  templateUrl: './menuform.component.html',
  styleUrls: ['./menuform.component.scss']
})
export class MenuformComponent implements OnInit {

  menuform: FormGroup;
  loading = false;
  success = false;
  uploadedImageURL: string;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly tagList: string[] = ['Vegan', 'Vegetarisch', 'Gesund', 'Beliebt', 'Rohkost', 'Grill', 'Backen'];

  constructor(
    private menuService: MenuService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.menuform = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      image: [null, [
        Validators.required
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

  async submitHandler(): Promise<void> {
    this.loading = true;
    const formValue = this.menuform.value;
    try {
      await this.menuService.uploadMenu(formValue);
      this.success = true;
      console.log('success');
    } catch (err) {
      console.log(err);
    }
    this.loading = false;
  }

  addIngredient(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.menuform.value.ingredients.push(value);
    }
    if (input) {
      input.value = '';
    }
  }

  removeIngredient(ingredient: string): void {
    const values = this.menuform.value.ingredients.filter(v => v !== ingredient);
    this.menuform.value.ingredients = values;
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

}
