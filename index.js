const app = require('./app');
const port = process.env.PORT || 3700;

app.listen(port,()=>{
    console.log('server connected in port', port);
})