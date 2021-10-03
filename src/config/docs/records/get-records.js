module.exports = {
    post:{
        tags: ['Record operation'],
        description: "Fetch all records by parameters",
        operationId: "deleteTodo",
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
                description: "Todo created successfully"
            },
            '500':{
                message: ""
            }
        }
    }
}
