import { Directive, Input } from "@angular/core";

import { NgControl, NgValidator } from "../actor.directive";
import { SU_VALIDATORS } from "./validators";

// This directive mimics the original 'MinLengthValidator' directive.
@Directive({
    selector: 'input[ngActor][ngMinLength]',
    providers: [
        {
            // Register the directive as a validator.
            provide: SU_VALIDATORS,

            // The above provider (SU_VALIDATORS) represents an array. Append this validator to it.
            multi: true,

            // When somebody asks for 'SU_VALIDATORS' give him any exising instance you can find.
            // See that we have an '@Input() ngMinLength' if we were to use `useClass: MinLengthValidatorDirective`
            // then we would lose w/e value we had in this input. This is why is better to use `useExisting`.
            // See docs: https://angular.io/guide/form-validation#adding-custom-validators-to-template-driven-forms
            useExisting: MinLengthValidatorDirective
        }
    ]
})
export class MinLengthValidatorDirective implements NgValidator {
    @Input() ngMinLength?: number | null;

    validate(control: NgControl): { [key: string]: any; } | null {
        if (!control.value) {
            return null;
        }

        if (Number.isNaN(this.ngMinLength) || !Number.isSafeInteger(this.ngMinLength)) {
            return null;
        }

        const value = control.value.toString();
        if (value.length < this.ngMinLength!) {
            return {
                'ngMinLength': {
                    required: this.ngMinLength!,
                    actual: value.length
                }
            }
        }

        return null;
    }
}