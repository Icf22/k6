import http from 'k6/http';

export const options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors deben de ser menores al 1%, como error debe retornar menos del 1%
    http_req_duration: ['p(95)<200'], // 95% de los requests la duración de las peticiones debe ser menos de 200S
  },
};

export default function () {
  http.get('https://test-api.k6.io/public/crocodiles/1/');
}