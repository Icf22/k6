import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 1,
    duration: '30s',
    http_req_failed: ['rate<0.00'],
}

export default function () {
    http.get('https://api-manager.egl-cloud.com/api-log/v1/logaut/consulta/afiliacion/volumetria');
    sleep(1);
}