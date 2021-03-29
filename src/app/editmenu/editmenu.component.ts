import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.scss']
})
export class EditmenuComponent implements OnInit {

  menuForm: FormGroup;
  loading = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly tagList: string[] = ['Vegan', 'Vegetarisch', 'Gesund', 'Beliebt', 'Rohkost', 'Grill', 'Backen'];

  constructor(
    private menuService: MenuService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.menuForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z äöüÄÖÜ]*$')
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
      this.menuService.getMenuById(menuId).subscribe(menu => {
        this.menuForm.patchValue({
          title: menu.title,
          duration: menu.duration,
          ingredients: menu.ingredients,
          tags: menu.tags
        });
      });
    }
  }

  submitHandler(): void {
    const formValue = this.menuForm.value;
  }

  get title(): AbstractControl {
    return this.menuForm.get('title');
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
