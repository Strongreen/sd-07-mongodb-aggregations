db.trips.aggregate([
    {
        $group: {
            _id: "$usertype"
        },        
        duracaoMedia: { $avg : {
            $subtract: [
                {$millisecond : "$stopTime.$date"},
                {$millisecond : "$startTime.$date"}
            ]
         }}
    }
]);