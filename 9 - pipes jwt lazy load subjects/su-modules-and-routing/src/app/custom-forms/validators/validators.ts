import { InjectionToken } from "@angular/core";

// Injection tokens: https://angular.io/api/core/InjectionToken#basic-examples
// In most cases we want to inject an instance of a class. 
// Sometimes we need to inject numbers, booleans, strings or arrays.
// In those cases we can specify a injection token with which we can register such
// "non class instantiated" values.
export const SU_VALIDATORS = new InjectionToken('Custom Validators');
