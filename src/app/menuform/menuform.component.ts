import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { requireImageFormat } from '../directives/imagevalidator.directive';
import { MenuForm } from '../models/menuform.model';

@Component({
  selector: 'app-menuform',
  templateUrl: './menuform.component.html',
  styleUrls: ['./menuform.component.scss']
})
export class MenuformComponent implements OnInit {

  @Input() menu?: MenuForm;
  @Input() hasImage: boolean;
  @Input() submitButtonText: string;
  @Output() submitEvent = new EventEmitter<MenuForm>();
  menuForm: FormGroup;
  ingredientList: string[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly tagList: string[] = ['Vegan', 'Vegetarisch', 'Gesund', 'Beliebt', 'Rohkost', 'Grill', 'Backen'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.menuForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z äöüÄÖÜ]*$')
      ]],
      ingredients: [null, [
        Validators.required
      ]],
      duration: [null, [
        Validators.required,
        Validators.maxLength(3),
        Validators.min(5),
        Validators.max(999)
      ]],
      tags: [[]],
    });

    if (this.hasImage) {
      this.menuForm.addControl('image',
        new FormControl(null, [
          Validators.required,
          requireImageFormat(['image/jpeg', 'image/png'])
        ])
      );
    }

    if (this.menu) {
      this.ingredientList = this.menu.ingredients;
      this.menuForm.patchValue({
        title: this.menu.title,
        duration: this.menu.duration,
        ingredients: this.menu.ingredients,
        tags: this.menu.tags
      });
    }
  }

  submitHandler(): void {
    const formValue = this.menuForm.value;
    this.submitEvent.emit(formValue);
  }

  addIngredient(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.ingredientList.push(value);
      this.ingredients.setValue(this.ingredientList);
    }
    if (input) {
      input.value = '';
    }
  }

  removeIngredient(ingredient: string): void {
    const index = this.ingredientList.indexOf(ingredient);
    if (index >= 0) {
      this.ingredientList.splice(index, 1);
      this.ingredients.setValue(this.ingredientList);
    }
  }

  get title(): AbstractControl {
    return this.menuForm.get('title');
  }

  get image(): AbstractControl {
    return this.hasImage ? this.menuForm.get('image') : null;
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