import http from 'k6/http'
import { check, sleep } from 'k6';


 export const options = {
  stages: [
    { duration: '40s', target: 4 },
    { duration: '1m20s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};
export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
  //This check is going to verify that every single request returns the status 200. If not, the report will tell you.
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(10);
}