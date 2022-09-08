const cors = require('cors')
const express = require('express')
const jsforceAjaxProxy = require('jsforce-ajax-proxy');
const app = express()

app.use(cors())
app.use(express.json());

const port = process.env.PORT || 8000

app.all('/proxy/?*', jsforceAjaxProxy());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})