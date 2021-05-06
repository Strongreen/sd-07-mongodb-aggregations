db.air_airlines.findOne()
db.air_alliances.findOne()
db.air_routes.findOne()
db.trips.findOne()

db.air_routes.find(
  {airplane: "747"}
);

db.air_routes.aggregate([
  {$match: {
    airplane: {$in: ["747", "380"] }
  }}
])
