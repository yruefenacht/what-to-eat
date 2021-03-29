import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MenuService } from '../services/menu.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { requireImageFormat } from '../directives/image-validator.directive';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.scss']
})
export class AddMenuComponent implements OnInit {

  menuform: FormGroup;
  loading = false;
  isEditing = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly tagList: string[] = ['Vegan', 'Vegetarisch', 'Gesund', 'Beliebt', 'Rohkost', 'Grill', 'Backen'];

  constructor(
    private menuService: MenuService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.menuform = this.formBuilder.group({
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

    const menuId = this.route.snapshot.paramMap.get('id');
    if (menuId) {
      this.isEditing = true;
      this.menuService.getMenuById(menuId).subscribe(menu => {
        this.menuform.patchValue({
          title: menu.title,
          image: menu.image,
          duration: menu.duration,
          ingredients: menu.ingredients,
          tags: menu.tags
        });
      });
    }
  }

  submitHandler(): void {
    const formValue = this.menuform.value;
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
