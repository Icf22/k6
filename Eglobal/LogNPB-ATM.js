import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
      { duration: '5s', target: 20 },
      { duration: '10s', target: 10 },
      { duration: '5s', target: 0 },
    ],
    thresholds: {
      http_req_failed: ['rate<10'], // http errors deben de ser menores al 10%, como error debe retornar menos del 10%
      http_req_duration: ['p(95)<0.500'], // 80% de los requests la duración de las peticiones debe ser menos de 200S
    },
  };

export default function () {
    let res = http.get('https://api-manager.egl-cloud.com/api-log/v1/logaut/consulta/atm/camara');

    const body = JSON.stringify({
        username: 'test_' + Date.now(),
        password: 'test',
        fechaTxnIni: "2024-04-29",
        fechaTxnFin: "2024-04-29",
        numPlastico: 5482341208668610,
        emisor: "210002",
        adquirente: null
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    res = http.post('https://api-manager.egl-cloud.com/api-log/v1/logaut/consulta/atm/camara', body, params);
    console.log(res.status);

    // check(res, {
    //     'status is 200': (r) => r.status === 200
    // });
    // sleep(5);
}