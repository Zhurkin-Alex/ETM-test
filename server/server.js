const mongoose = require('mongoose')
const app = require('./app')

const port = 4000
app.listen(port,()=>{
  console.log('>>>>>>>>>>>>');
  console.log(`Server started on port ${port}.`);
  console.log('>>>>>>>>>>>>');

  mongoose.connect(
    `mongodb+srv://Alex:tB9hbppbaKG_vJr@cluster0.5agzc.mongodb.net/todo-reducer?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }, () => {
      console.log('>>>>>>>>>>>>');
      console.log('Connection to databse is uspeshna.');
      console.log('>>>>>>>>>>>>');
    });

})
