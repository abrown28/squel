const squel = require('./dist/squel').useFlavour('mssql');

let table_name = 'Products';
let fields = {
    id: 1, 
    name: 'product 1'
};
const insert = squel.insert()
  .into(table_name)
  .setFields(fields);

console.log(`${insert.toString()};`);

console.log(
    squel.select({
        autoQuoteTableNames: true, 
        autoQuoteFieldNames: true, 
        autoQuoteAliasNames: true
    })
        .from("students")
        .right_join("jailed", "j", "j.student_id = students.id")
        .field('test', 'TheTest')
        .toString()
);