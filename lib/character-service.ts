import * as core from "@aws-cdk/core";
import * as apigateway from "@aws-cdk/aws-apigateway";
import * as lambda from "@aws-cdk/aws-lambda";

export class CharacterService extends core.Construct {
    constructor(scope: core.Construct, id: string) {
        super(scope, id);

        const handler = new lambda.Function(this, "CharacterHandler", {
            runtime: lambda.Runtime.NODEJS_14_X,
            code: new lambda.AssetCode("app"),
            handler: "characters/handler.createCharacter",
        });

        const api = new apigateway.RestApi(this, "characters-api", {
            restApiName: "Characters Service",
            description: "This service creates characters.",
        });

        const getWidgetsIntegration = new apigateway.LambdaIntegration(handler, {
            requestTemplates: { "application/json": '{ "statusCode": "200" }' },
        });

        const createCharacterResource = api.root.addResource('characters');
        createCharacterResource.addMethod("POST", getWidgetsIntegration);
    }
}
