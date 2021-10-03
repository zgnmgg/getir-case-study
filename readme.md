# getir-case-study
REST API for Getir Case Study

This API with a single endpoint (record) fetches the data MongoDB and return the results.

## Build project
```
git clone https://github.com/zgnmgg/getir-case-study.git
cd getir-case-study
npm install
npm run dev
```

## Test project
```
npm run test
```

## Docker Build

```
docker build . -t getir-case-study
```

## Swagger UI

```
http://localhost:3000/api-docs
https://ozgung-getir-case-study.herokuapp.com/api-docs
```

# Heroku URL

```
https://ozgung-getir-case-study.herokuapp.com/api-docs
```

### Service Info

## Fetch Record [/api/records] [POST]

+ startDate (required, string)
+ endDate (required, string)
+ minCount (required, number)
+ maxCount (required, number)

+ Request (application/json;charset=utf-8)

    + Body

          {
                "startDate": "2016-01-26",
                "endDate": "2018-02-02",
                "minCount": 2700,
                "maxCount": 3000
          }

+ Response 200 (application/json;charset=utf-8)

    + Body

            {
               code": 0,
               "msg": "Success",
               "records": [{
                   "key": "ibfRLaFT",
                    "createdAt": "2016-12-25T16:43:27.909Z",
                    "totalCount": 2892
               },
                ...
            }
