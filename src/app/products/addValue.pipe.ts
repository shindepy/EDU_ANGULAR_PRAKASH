import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'AddValue'
})

export class AddValuePipe implements PipeTransform {
    transform(value: number): number {
        if (value <200) {
            value = value + 200;
        }
        return value;
    }
}
