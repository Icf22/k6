import http from 'k6/http';
import { check } from 'k6';


export const options = {
    stages: [
      { duration: '30s', target: 20 },
      { duration: '40s', target: 30 },
      { duration: '30s', target: 0 },
    ],
};

export default function () {

    const body = JSON.stringify({
          fechaTxn:"2023-11-27",
          importe:"716.34",
          numPlastico:"4004431002412067",
          numAfiliacion:"",
          numAutorizacion:"",
          rrn:"333122000881",
          adquirente:"229011"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    http.post('https://api-manager.egl-cloud.com/api-log/v1/logaut/consulta/pdf/atm/camara', body, params);
}