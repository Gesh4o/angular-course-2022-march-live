import { Directive, ElementRef, HostListener, Inject, OnInit } from "@angular/core";
import { SU_VALIDATORS } from "./validators/validators";

// Some wrapper around the form control.
export interface NgControl {
    value: string | number;
}

// Simple validator interface that will help all validators to have the same contract.
export interface NgValidator {
    validate(control: NgControl): { [key: string]: any } | null;
}

// This directive simulates the orginal 'NgModel' directive.
// This is just for illustrative purposes only.
@Directive({
    selector: 'input[ngActor]',
    exportAs: 'ngActor' // Important if we want to use it as template variable.
})
export class ActorDirective implements OnInit {
    // Source object that will contain erros.
    errors: { [key: string]: any } = {};

    // Privite field with public getter, so the value cannot be set from outside.
    private _touched: boolean = false;

    get touched(): boolean {
        return this._touched;
    }

    get invalid() {
        return Object.keys(this.errors).length > 0;
    }

    get valid() {
        return !this.invalid;
    }

    private _value!: any;

    get value(): any {
        return this._value;
    }


    // We pass @Inject(SU_VALIDATORS) so can inject all validators attached to input.
    //    @Inject() is used mainly with injection tokens.
    constructor(@Inject(SU_VALIDATORS) private validators: NgValidator[],
        private elementRef: ElementRef) {
    }

    ngOnInit(): void {
        // There is no real input change but let's make sure that 
        // control valid state is properly initialized.
        this.handleInputChange(this.elementRef.nativeElement.value);
    }

    // Upon change of the input - run all validators attached as attributes to the current element.
    @HostListener('input', ['$event.target.value'])
    handleInputChange(newValue: string | number): void {
        this._value = newValue;

        this.errors = {};
        const validators = this.validators || [];
        for (const validator of validators) {
            // Due to the 'NgValidator' interface we are sure that we can call `validate`
            // method which will either return a map-like object with errors or null.
            Object.assign(this.errors, validator.validate({ value: newValue }));
        }
    }

    // When user navigates away mark control as 'touched'.
    @HostListener('focusout')
    handleFocusOut() {
        this._touched = true;
    }
}