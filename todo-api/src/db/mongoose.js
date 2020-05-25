const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/task-api', {
   useNewUrlParser: true, 
   useCreateIndex: true,
   useFindAndModify: false
})


