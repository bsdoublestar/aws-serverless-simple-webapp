import os

def resource_handler(event, context):
  print(event)
  try:
    #target_bucket = event['ResourceProperties']['TargetBucket']
    lambda_src = os.getcwd()
    print(lambda_src)

  except Exception as err:
    send_error(event, err)
  return event