import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'util';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    public transform(value, keys: string, term: string) {

        if (!term) return value;
        let val = (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
        if (val && val.length > 0)
            return val;

        //without key
        let res = value.filter(it => {
            if (isString(it))
                return it.toLowerCase().includes(term);
        });
        return res;

    }

}