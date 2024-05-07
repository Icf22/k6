import http from 'k6/http';
import { check} from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '40s', target: 10 },
    { duration: '20s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors deben de ser menores al 1%, como error debe retornar menos del 1%
    http_req_duration: ['p(95)<200'], // 95% de los requests la duración de las peticiones debe ser menos de 200S
  },
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/1/');
  check(res, { 'status was 200': (r) => r.status == 200 });
}