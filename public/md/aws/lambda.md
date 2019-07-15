# AWS Lambda
* Function hosting service

* Configure function
  * languages : Java 8, NodeJS, Node.js 4.3, Python 2.7

```
def lambda_handler(event, context):
    # TODO implement
    return 'Hello from Lambda'
```

## How to
* Name, Description, Runtime
* Input Code or upload .ZIP
* Handler : lambda_function.lambda_handler
* Role
* Memory 128MB+
* Timeout 3sec+
* VPC

## Trigger
* API Gateway -> Lambda

