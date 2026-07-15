// use("session1");
// db.student.insertOne({
//     name: "John",
//     age: 24,
//     city: "Pune",
// });
// db.student.insertOne({
//     name: "Amy",
//     age: 22,
//     city: "Ahmedabad",
// });
// db.student.insertOne({
//     name: "Jack",
//     age: 28,
//     city: "Hyderabad",
// });
// db.student.insertOne({
//     name: "Henry",
//     age: 30,
//     city: "Mumbai",
// });
// db.student.findOne({ name: "Henry" });
// db.student.updateOne({ age: 46 },{
//     $set: {
//         name: "Rome",
//         city: "LA",
//     }
// })
// db.student.deleteMany({});

//* Aggregation : It is a framework used to process, transform, and analyze, data from one or more documents. It works like a pipeline where documents pass through multiple stages, and each stage performs an operation on the data.

//! Aggregation Pipeline
//? Collection
//?     |
//? Stage 1 ($match)  --  filter documents
//?     |
//? Stage 2 ($group)  --  group documents
//?     |
//? Stage 3 ($project)  --  select or modify some fields
//?     |
//? Stage 4 ($sort)  --  sort documents
//?     |
//? Final Result

// db.student.find({ name: "John" });

// db.student.aggregate([
//     {
//         $match: {
//             name: "Amy",
//         }
//     }
// ])  //? filter documents

// db.student.aggregate([
//     {
//         $project: {
//             name: 1,
//             _id: 0,
//         }
//     }
// ])  //? select specific fields


// db.student.aggregate([
//     {
//         $sort: {
//             age:-1,
//         }
//     }
// ])  //? sort documents (1 = ascending) ( -1 = descending)


// db.student.aggregate([
//     {
//         $count: "TotalDocuments"
//     }
// ])  //? counts the total documents


// db.student.aggregate([
//     {
//         $match: {
//             name: "Amy",
//         }
//     },
//     {
//         $group: {
//             $sum: {
//                 $multiply: ["hp","mp"]
//             }
//         }
//     },
//     {
//         $sort: {
//             age: 1,
//         }
//     },
//     {
//         $count: "TotalDocuments"
//     }

// ])



//* Aggregation practice on Dummy Data

//?--------------------------------------------
// db.orders.aggregate([
//     {
//         $group: {
//             _id: "$category",
//             totalSize: {$sum: "$amount"}
//         }
//     }
// ])
//?--------------------------------------------

// db.employees.aggregate([
//   {
//     $group: {
//       _id: "$department",
//       avgSalary: {$avg: "$salary"},
//     },
//   },
// ]);
//?--------------------------------------------

// db.employees.aggregate([
//   {
//     $group: {
//       _id: "$department",
//       totalEmployees: { $sum: 1 },
//     },
//   },
// ]);
//?--------------------------------------------

// db.orders.aggregate([
//     {
//         $match: {category: "Electronics"}
//     },
//     {
//         $group: {_id: "$customer", total: {$sum: "$amount"}}
//     },
//     {
//         $sort: {total: -1}
//     }
// ]);
//?--------------------------------------------

// db.employees.aggregate([
//     {
//         $match: {
//             salary: {$gt: 50000}
//         }
//     },
//     {
//         $limit: 2
//     }
// ]);
//?--------------------------------------------

// db.orders.aggregate([
//     {
//         $group: {
//             _id: "$category",
//             totalSize: { $sum: "$amount" },
//             avgAmount: { $avg: "$amount" },
//             maxSale: { $max: "$amount" },
//             minSale: { $min: "$amount" },
//             count: {$sum: 1}
//         }
//     },
//     {
//         $out: "updatedOrders"
//     }
// ])


//! $out: "updatedOrders"
//? create a new collection with the aggregated data. Replaces the old data with the one if present

//! $merge: "updatedOrders"
//? the same as $out but, it does not replace the old data. Instead, it add the new data and keep the old ones intact.
