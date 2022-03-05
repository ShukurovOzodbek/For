// cycle
for (let i = 1 ; i <= 5; i++){
        document.write(`${('*'.repeat(i))}  <br>`)
}
for (let i = 5; i >= 1; i--) {
  let s = '';
  
  for (let j = 0; j < i; j++) {
    s += '*';
  }
  
  document.write(`${s}<br>`);
}
// 2 
for(let j = 1; j <= 5; j++ ) {
    document.write(`
        ${ String(j) + String(j) + String(j) }
    `)
} 
