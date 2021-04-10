import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function requireImageFormat(formats: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const valid = formats.includes(control.value.files[0].type);
    return !valid ? { imageFormat: true } : null;
  };
}
