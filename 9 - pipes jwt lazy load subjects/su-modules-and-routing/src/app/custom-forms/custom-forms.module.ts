import { NgModule } from "@angular/core";
import { ActorDirective } from "./actor.directive";
import { MinLengthValidatorDirective } from "./validators/min-length-validator.directive";
import { RequiredValidatorDirective } from "./validators/required-validator.directive";

@NgModule({
    declarations: [
        ActorDirective,
        RequiredValidatorDirective,
        MinLengthValidatorDirective
    ],
    exports: [
        ActorDirective,
        RequiredValidatorDirective,
        MinLengthValidatorDirective
    ]
})
export class CustomForms {

}