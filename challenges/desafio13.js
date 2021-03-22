db.trips.aggregate([
  { $match: { startTime: {
    $regex: /"10/03/2016"/,
  } } },
]);
