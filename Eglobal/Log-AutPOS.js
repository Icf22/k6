import http from 'k6/http';
import { check } from 'k6';

export default function () {

    const body = JSON.stringify({
        fechaTxnIni: "2022-11-12",
        fechaTxnFin: "2022-11-18",
        numPlastico: "5420150482513169",
        emisor: null,
        adquirente: "220012"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    http.post('https://api-manager.egl-cloud.com/api-log/v1/logaut/consulta/pos/adq', body, params);
}