// import { Context } from 'aws-lambda';
import container from '../inversify/container';
import types from '../inversify/types';
import CharactersBusinessManager from "./impl/CharactersBusinessManager";
import RacialMix from "../enums/racialMixEnum";
import SexEnums from "../enums/sexEnums";

const charactersBusinessManager = container.get<CharactersBusinessManager>(types.CharactersBusinessManager);

export const createCharacter = async (event: any) => {
  const racialMixValue = event.body.racialMix
      ? RacialMix[parseInt(event.body.racialMix)]
      : 0;
  const racialMix = RacialMix[racialMixValue as keyof typeof RacialMix];
  const sexValue = event.body.sex
      ? SexEnums[parseInt(event.body.sex)]
      : 2;
  const sex = SexEnums[sexValue as keyof typeof SexEnums];

  const result: any = await charactersBusinessManager.generateCharacter(racialMix, sex);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(result),
  };
};


