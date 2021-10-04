const Record = require("../models/record");

/**
 * @description fetch data from database
 * @param {Request} req
 * @param {Response} res
 */
const fetchData = async (req, res) => {
    const { startDate, endDate, minCount, maxCount } = req.body;

    try {
        const recordDatas = await getRecords(startDate, endDate, minCount, maxCount);
        const recordMapper = recordDatas.map(rd => {
            return {
                "key": rd.key,
                "createdAt": rd.createdAt.toISOString(),
                "totalCount": rd.totalCount
            }
        })

        res.status(200).json({
            code: 0,
            msg: 'Success',
            records: recordMapper
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message
        });
    }
}

/**
 * @description get all records with aggregate from database
 * @param startDate
 * @param endDate
 * @param minCount
 * @param maxCount
 */
const getRecords = async (startDate, endDate, minCount, maxCount) => await Record.aggregate([
    { $project: { "_id" : 0, key : 1, createdAt: 1, totalCount: {$sum: "$counts"} } },
    { $match: {
        $and: [
            {totalCount: {$gt: minCount, $lt: maxCount}},
            {createdAt: {$gte: new Date(startDate), $lte: new Date(endDate)}}
        ]}
    }
]);

module.exports = {
    fetchData
}
