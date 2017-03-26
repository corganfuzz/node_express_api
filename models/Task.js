
var db = require ('../dbConnection');
var Task = {
    getAllTasks: function (callback) {
        return db.query("Select * from task", callback);
    },
    getTaskbyId: function (id, callback) {
        return db.query("select * from task where Id=?", [id], callback);
    },
    addTask: function (Task, callback) {
        return db.query("Insert into task values(?,?,?)", [Task.Id, Task.Title, Task.Status], callback);
    },
    deleteTask: function (id, callback) {
        return db.query("delete from task where Id=?",[id], callback);
    },
    updateTask: function (id, Task, callback) {
        return db.query("update task set Title=?,Status=? where Id=?", [Task.Title, Task.Status, id], callback );
    },
    deleteAll: function (item, callback) {
        var delarr=[];
        for (i=0; i<item.length; i++) {
            delarr[i] = item[i].Id;
        }
        return db.query("delete from task where Id in (?)", [delarr], callback);
    }
};
module.exports = Task;
