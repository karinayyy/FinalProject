const express = require('express')

const PORT = process.env.PORT || 5000
const app = express()
app.listen(PORT, () => {
    console.log('Server hes been started on port 5000')
})