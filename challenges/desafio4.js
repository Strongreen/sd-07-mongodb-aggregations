/** @format */

db.movies.aggregate(
  { $addFields: { title_split: { $split: ["$title", " "] } } },
  { $match: { title_split: { $size: 1 } } },
  { $sort: { titulo: 1 } },
);
