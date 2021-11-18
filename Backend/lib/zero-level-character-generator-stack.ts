import * as cdk from '@aws-cdk/core';
import * as character_service from './character-service'

export class ZeroLevelCharacterGeneratorStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // The code that defines your stack goes here
    new character_service.CharacterService(this, 'Characters');
    // const myFunction = new NodejsFunction(this, 'create-characters', {
    //   memorySize: 1024,
    //   timeout: cdk.Duration.seconds(5),
    //   runtime: lambda.Runtime.NODEJS_10_X,
    //   handler: 'main',
    //   entry: path.join(__dirname, `../app/characters/handler.ts`),
    // });
  }
}
