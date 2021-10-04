module.exports = {
    post:{
        tags: ['Record operation'],
        description: "Fetch all records by parameters",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/RecordRequestDTO'
                    }
                }
            }
        },
        responses:{
            '200':{
                description: "Fetch Records successfully"
            },
            '500':{
                description: "Errors throw"
            }
        }
    }
}
