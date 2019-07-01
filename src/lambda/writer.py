import boto3
from random import randint
import json

def lambda_handler(event, context):

    dynamodb = boto3.client('dynamodb')
    rideId = 'ride-{0:07d}'.format(randint(0, 9999999))

    tableResponse = dynamodb.put_item(
        TableName='Rides',
        Item={'RideId':{'S':rideId}},
        ReturnItemCollectionMetrics='SIZE',
        ReturnValues='ALL_OLD',
        ReturnConsumedCapacity='TOTAL' )

    httpResponse = {}
    httpResponse['isBase64Encoded'] = False
    httpResponse['headers'] = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' }
    httpResponse['statusCode'] = 200
    httpResponse['multiValueHeaders'] = {}
    #httpResponse['body'] = json.dumps(tableResponse, sort_keys=True,indent=4, separators=(',', ': '))
    
    if tableResponse['ResponseMetadata']['HTTPStatusCode'] == 200:
        httpResponse['body'] = '{ "message": "Item ' + rideId + ' created"}'

    '''
    dynamodb.get_item(
        TableName='Rides',
        Key={'RideId':{'S':rideId}})
    '''
    
    return httpResponse


