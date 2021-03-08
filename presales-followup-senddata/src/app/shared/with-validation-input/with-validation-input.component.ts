import { FormControl, Validators } from '@angular/forms';
import { Component, ContentChild, Input, OnInit } from "@angular/core";
import { InputRefDirective } from "../input-ref.directive";

type ValidationErrors = {
  [index: string]: string
};

@Component({
  selector: 'app-with-validation-input',
  templateUrl: './with-validation-input.component.html',
  styleUrls: ['./with-validation-input.component.scss']
})
export class WithValidationInputComponent implements OnInit {

  @Input() label: string;
  @Input() validations: ValidationErrors;
  @Input() info: string;

  @ContentChild(InputRefDirective) input: InputRefDirective;

  directiveControl: FormControl;
  constructor() { }

  get isError() {
    return this.input.hasError;
  }

  get errorMessages() {
    const errors = this.input.errors;
    const messages = [];
    const keys = Object.keys(this.validations);

    keys.forEach(key => {
      if (errors[key]) {
        messages.push(this.validations[key]);
      }
    });
    return messages;
  }

  ngOnInit(): void {
    this.directiveControl = new FormControl(null, Validators.required)
  }

}
