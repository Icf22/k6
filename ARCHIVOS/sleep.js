//simular comportamiento del usuario en un front, para simular comportamiento humano
import { sleep, check } from 'k6'
import http from 'k6/http'

export default function(){
    let url = "https://httpbin.test.k6.io/post"
    let response = http.post(url, "Prueba")

    check(response,{
        'Respuesta de la solicitud':(r)=>r.body.includes("Prueba"),
    })
     sleep(5);
}