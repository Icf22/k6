import http from 'k6/http'
import { sleep, check } from 'k6'

export let options = { //Nos permite importar datos como cantidad de usuarios, duración etc
    VU: 10,
    duration: '5m',
    iterations: 40
}
export default function(){
    http.get('https://jsonplaceholder.typicode.com/posts');
    sleep(1);
}
