module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "severity-8857",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-mernticketapp-8857-severity:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8013",
                    "protocol": "tcp",
                    "hostPort": "8013"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@mernticketapp.local:27017/mernticketapp_8857?authSource=admin"},{"name":"MONGO_DOMAIN","value":"mernticketapp.local"},{"name":"CAMUNDAPOD_URL","value":"http://mernticketapp.local:8080"},{"name":"SECURITYURL","value":"http://mernticketapp.local:8003"},{"name":"AUTHPROXYURL","value":"http://mernticketapp.local:8001"},{"name":"ADMINURL","value":"http://mernticketapp.local:8004"},{"name":"CAMUNDAURL","value":"http://mernticketapp.local:8002"},{"name":"GCAMURL","value":"http://mernticketapp.local:8007"},{"name":"APIGATEWAY","value":"http://mernticketapp.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "mernticketapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/mernticketapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "types-8857",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-mernticketapp-8857-types:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8014",
                    "protocol": "tcp",
                    "hostPort": "8014"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@mernticketapp.local:27017/mernticketapp_8857?authSource=admin"},{"name":"MONGO_DOMAIN","value":"mernticketapp.local"},{"name":"CAMUNDAPOD_URL","value":"http://mernticketapp.local:8080"},{"name":"SECURITYURL","value":"http://mernticketapp.local:8003"},{"name":"AUTHPROXYURL","value":"http://mernticketapp.local:8001"},{"name":"ADMINURL","value":"http://mernticketapp.local:8004"},{"name":"CAMUNDAURL","value":"http://mernticketapp.local:8002"},{"name":"GCAMURL","value":"http://mernticketapp.local:8007"},{"name":"APIGATEWAY","value":"http://mernticketapp.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "mernticketapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/mernticketapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "tickets-8857",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-mernticketapp-8857-tickets:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8015",
                    "protocol": "tcp",
                    "hostPort": "8015"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@mernticketapp.local:27017/mernticketapp_8857?authSource=admin"},{"name":"MONGO_DOMAIN","value":"mernticketapp.local"},{"name":"CAMUNDAPOD_URL","value":"http://mernticketapp.local:8080"},{"name":"SECURITYURL","value":"http://mernticketapp.local:8003"},{"name":"AUTHPROXYURL","value":"http://mernticketapp.local:8001"},{"name":"ADMINURL","value":"http://mernticketapp.local:8004"},{"name":"CAMUNDAURL","value":"http://mernticketapp.local:8002"},{"name":"GCAMURL","value":"http://mernticketapp.local:8007"},{"name":"APIGATEWAY","value":"http://mernticketapp.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "mernticketapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/mernticketapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "mernticketapp",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "mernticketapp0",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
