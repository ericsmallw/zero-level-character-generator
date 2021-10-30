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

  const sexValue = body.sex
      ? SexEnums[parseInt(body.sex)]
      : 2;
  const sex = SexEnums[sexValue as keyof typeof SexEnums];
  console.log(`min age: ${body.minAge}`);
  const minAge = parseInt(body.minAge);
  console.log(`parsed min age: ${minAge}`);

  const result: any = await charactersBusinessManager.generateCharacter(
      racialMix,
      sex,
      parseInt(event.body.minAge),
      parseInt(event.body.maxAge)
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


