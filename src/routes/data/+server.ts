// @ts-nocheck
import {json} from '@sveltejs/kit';


 export function GET(){

    let list = {
        l1: 1,
        l2: 2,
        l3: 3,
        l4: 4,
        l5: 5,
        l6: 6,
        l7:7,
        l8:8,
        l9: 9,
        l0: 0,
        m:'*',
        d: '/',
        a: '+',
        s: '-',
    }


    
     return json(list);

}