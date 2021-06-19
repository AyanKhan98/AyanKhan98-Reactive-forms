import{AbstractControl } from "@angular/forms"

export function passWordValidator(control: AbstractControl): {[key: string]:boolean} | null
{
    const password=control.get('password');
    const confirmPassword=control.get('confirmPassword');
    if(password.pristine || confirmPassword.pristine)
    {
        return null;
    }
    return password && confirmPassword && password != confirmPassword ?
    {'misMatch': true} : null;
}
