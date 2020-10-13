// $eq para los campos con un valor igual al especificado
db.autos.find({"edad":   {$eq: 20 } }).pretty()