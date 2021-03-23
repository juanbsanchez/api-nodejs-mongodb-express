import '@babel/polyfill';

import app from '../server';

async function main(){
    await app.listen(3000);
    console.log('server on port:', 3000);
}

main();