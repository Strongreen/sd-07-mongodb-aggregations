db.movies.aggregate([
    { 
      $match: {
          cast: { $exists: true },
          countries: { $eq: "USA" },
          "tomatoes.viewer.rating": { $gte: 3 },
      } 
    }, 
    { $addFields: {
        num_favs: { $size: { $setIntersection: [["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"],"$cast"] } }
    }},
    {
      $sort: {
        "tomatoes.viewer.rating": -1,
        num_favs: -1,
        title: -1,
      },
    },
    { $skip: 24 },
    { $limit: 1 },
    {
      $project: {
        title: 1,
        _id: 0,
      }
    },
])
