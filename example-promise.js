function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (!isNaN(parseInt(a)) && !isNaN(parseInt(b))) {
      resolve(a+b);
    } else {
      reject('Not integers');
    }
  })
}

addPromise(3, 5).then(function(resp){
  console.log(resp);
}, function(resp) {
  console.log(resp);
})

addPromise(3, 'b').then(function(resp){
  console.log(resp);
}, function(resp) {
  console.log(resp);
})
