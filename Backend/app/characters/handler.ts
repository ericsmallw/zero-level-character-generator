// import { Context } from 'aws-lambda';
import container from '../inversify/container';
import types from '../inversify/types';
import CharactersBusinessManager from "./impl/CharactersBusinessManager";
import RacialMix from "../enums/racialMixEnum";
import SexEnums from "../enums/sexEnums";

const charactersBusinessManager = container.get<CharactersBusinessManager>(types.CharactersBusinessManager);

export const createCharacter = async (event: any) => {
  const racialMixValue = event.queryStringParameters && event.queryStringParameters.racialMix
      ? RacialMix[parseInt(event.queryStringParameters.racialMix)]
      : 0;
  const racialMix = RacialMix[racialMixValue as keyof typeof RacialMix];

  const sexValue = event.queryStringParameters && event.queryStringParameters.sex ? RacialMix[parseInt(event.queryStringParameters)] : 2;
  const sex = SexEnums[sexValue as keyof typeof SexEnums];

  const result: any = await charactersBusinessManager.generateCharacter(racialMix, sex);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result),
  };
};


