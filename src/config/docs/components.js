
module.exports = {
    components:{
        schemas:{
            RecordRequestDTO:{
                type:'object',
                properties:{
                    startDate:{
                        type:'Date',
                        description:"Data start time",
                        example:"2016-01-26"
                    },
                    endDate:{
                        type:'Date',
                        description:"Data end time",
                        example:"2018-02-02"
                    },
                    minCount:{
                        type:"number",
                        description:"Data min count",
                        example:"2700"
                    },
                    maxCount: {
                        type:'number',
                        description:"Data max count",
                        example:"3000"
                    }
                }
            },
            Record:{
                type:'object',
                properties:{
                    key:{
                        type:'string',
                        description:"Record identification string",
                        example:"ibfRLaFT"
                    },
                    value:{
                        type:'string',
                        description:"Record's value",
                        example:59
                    },
                    createdAt:{
                        type:"createdAt",
                        description:"Record's create time",
                        example:"2016-12-25T16:43:27.909Z"
                    },
                    counts: {
                        type:'Array',
                        description:"Record's count",
                        example:"[59, 65]"
                    }
                }
            },
            Error:{
                type:'object',
                properties:{
                    message:{
                        type:'string'
                    },
                    code:{
                        type:'string'
                    }
                }
            }
        }
    }
}
