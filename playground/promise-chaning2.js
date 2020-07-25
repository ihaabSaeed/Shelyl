require('../src/db/mongoose')
const Task = require('../src/models/task')
const { count } = require('../src/models/task')
// Task.findByIdAndDelete().then((task)=>{
//     console.log(task)
//     return task.countDocuments({completed:false})

// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })
const deleteTaskAndCount = async (id) =>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed :false})
    return count
}
deleteTaskAndCount('').then((count)=>{
    console.log(count)
}).catch((e)=>{
 console.log(e)
})