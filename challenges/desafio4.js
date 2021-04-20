const challengeFour = [
  {
    $addFields: {
<<<<<<< HEAD
      title_split: { $split: ["$title", " "] },
=======
      title_split: { $split: ["$title", " "] },
>>>>>>> f1dfd789aded572edfdd1f5c4224ff3ed96f9c95
    },
  },
  {
    $match: {
      title_split: { $size: 1 },
    },
  },
  {
    $sort: {
      title: 1,
    },
  },
  {
    $project: {
      title_split: 1,
      _id: 0,
    },
  },
];

db.movies.aggregate(challengeFour);
