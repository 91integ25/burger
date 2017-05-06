var connection = require("./connection");

function questionMarks(num){
	//counts number of values and returns the same amount of question marks in string
	var arr = [];
	for(var i = 0 ; i < num; i++){
		arr.push("?");
	}
	return arr.toString();
}
function objToSql(ob){
	var arr = [];
	//checks the object we are passing for key and returns a stringified version of the key + the value;
	for (var key in ob){
		if(Object.hasOwnProperty.call(ob,key)){
			arr.push(key += "=" + ob[key]);
		}
	}
	return arr.toString();
}

var orm = {
all: function(tableInput,cb){
	var queryString = "select * from " + tableInput + ";";
	connection.query(queryString,function(err,result){
		if(err){
			throw err;
		}
		cb(result);
	})
},
update: function(table,objColVals,condition,cb){
	var queryString = "UPDATE " + table;
	queryString += " SET ";
	queryString += objToSql(objColVals);
	queryString += " WHERE ";
	queryString += condition;
	console.log(queryString)
	connection.query(queryString,function(err,result){
		if(err){
			throw err;
		}
		cb(result)
	});
},
create: function(table,cols,vals,cb){
	var queryString = "INSERT INTO " + table;
	queryString += " (";
	queryString += cols.toString();
	queryString += ") ";
	queryString += "VALUES (";
	queryString += questionMarks(vals.length);
	queryString += ") ";
	console.log(queryString);
	connection.query(queryString,vals,function(err,result){
		if(err){
			throw err;
		}
		cb(result);
	});
}
};
//"udate burgers set "
module.exports = orm;