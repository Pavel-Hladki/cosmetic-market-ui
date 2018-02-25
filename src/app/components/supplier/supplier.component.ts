import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsBaseClass} from '../shared/classes/reactive-forms.base.class';

declare var $: any;

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent extends ReactiveFormsBaseClass implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    super({
      name: '',
      category: '',
      price: '',
      description: ''
    }, {
      name: {
        required: 'Name is required.'
      },
      category: {
        required: 'Category is required.'
      },
      price: {
        required: 'Price is required.'
      },
      description: {
        required: 'Description is required.'
      }
    });
  }

  ngOnInit() {
    this.createProductForm();
  }

  private createProductForm(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    this.productForm.valueChanges.subscribe(data => this.onValueChanged(this.productForm, data));
    this.onValueChanged(this.productForm);
  }

  onAddNewProduct() {
    if (!this.productForm.valid) {
      alert('Login data is invalid, please check it.');
      return;
    }
    const formObject = this.productForm.value;
    console.log(formObject);
  }

  onCreateForm() {
    $('#addProduct').modal('show');
  }
}
