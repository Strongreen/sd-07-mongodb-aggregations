db.air_airlines.aggregate([

  { $lookup: {
    from: "air_routes",
    localField: "airline",
    foreignField: "airline.id",
    as: "rotas",
  } },
]).pretty();

db.air.alliances.aggregate([
  { $unwind: "$airlines" },
  { $lookup: {
    from: "air_airlines",
    localField: "airlines",
    foreignField: "name",
    as: "rotas",
  } },
]);
