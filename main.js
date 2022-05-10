const fs = require('fs');

fs.readFile('numero.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(fib(data));
});

function fib(num_ingreso){
    if (num_ingreso == 0){
        return 0;
    }
    else if (num_ingreso == 1){
        return 1;
    }
    if (num_ingreso > 1){
        return fib(num_ingreso - 1) + fib(num_ingreso - 2);

    }

}
