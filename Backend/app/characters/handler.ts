// import { Context } from 'aws-lambda';
import container from '../inversify/container';
import types from '../inversify/types';
import CharactersBusinessManager from "./impl/CharactersBusinessManager";
import RacialMix from "../enums/racialMixEnum";
import SexEnums from "../enums/sexEnums";

const charactersBusinessManager = container.get<CharactersBusinessManager>(types.CharactersBusinessManager);

export const createCharacter = async (event: any) => {
  const body = JSON.parse(event.body);
  const racialMixValue = body.racialMix
      ? RacialMix[parseInt(body.racialMix)]
      : 0;
  const racialMix = RacialMix[racialMixValue as keyof typeof RacialMix];
  const sexValue = body.sex;
  const sex = SexEnums[sexValue as keyof typeof SexEnums];

  const minAge = body.minAge;
  const maxAge = body.maxAge;
  const result: any = await charactersBusinessManager.generateCharacter(
      racialMix,
      sex,
      minAge,
      maxAge
  );

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(result),
  };
};


