import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menuform',
  templateUrl: './menuform.component.html',
  styleUrls: ['./menuform.component.scss']
})
export class MenuformComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('')
  });

  constructor(private menuService: MenuService) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.menuService.insertMenu({
      title: this.form.value.title,
      image: '',
      ingredients: [],
      duration: 0,
      tags: []
    })
    .then(res => {
      this.form.reset();
    })
    .catch(e => {
      console.log(e);
    });
  }

}
