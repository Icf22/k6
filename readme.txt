
COMANDS:
k6 run --http-debug script.js

k6 run --http-debug="full" script.js


k6 login cloud --token  number_token


k6 cloud frist_scrit.js

l6 run first_script.js -o cloud

k6 run script.js --vus 1 --duration 10s --iterations 1
k6 run script.js -v 1 -d 10s -i 1

//Ejecuta comandos y te regresa el Body y más información
k6 run --http-debug="full" LogNPB-ATM.js


Configure k6 to allow insecure request:
k6 run script.js --insecure-skip-tls-verify

Export Results:
l6 run script.js --out json=results.json


