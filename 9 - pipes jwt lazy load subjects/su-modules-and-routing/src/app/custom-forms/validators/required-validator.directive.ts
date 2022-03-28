import { Directive } from "@angular/core";

import { NgControl, NgValidator } from "../actor.directive";
import { SU_VALIDATORS } from "./validators";

// This directive mimics the original 'RequiredValidator' directive.
@Directive({
    selector: 'input[ngActor][ngRequired]',
    providers: [
        {
            // Register the directive as a validator.
            provide: SU_VALIDATORS,
            
            // The above provider (SU_VALIDATORS) represents an array. Append this validator to it.
            multi: true,

            // When somebody asks for 'SU_VALIDATORS' give him any exising instance you can find.
            // See the docs on why 'useExisting' is better: https://angular.io/guide/form-validation#adding-custom-validators-to-template-driven-forms
            useExisting: RequiredValidatorDirective
        }
    ]
})
export class RequiredValidatorDirective implements NgValidator {

    validate(control: NgControl): { [key: string]: any; } | null {
        if (!control.value) {
            return { 'ngRequired': true };
        }

        return null;
    }
}