// import { Context } from 'aws-lambda';
import container from '../inversify/container';
import types from '../inversify/types';
import CharactersBusinessManager from "./impl/CharactersBusinessManager";
import RacialMix from "../enums/racialMixEnum";

const charactersBusinessManager = container.get<CharactersBusinessManager>(types.CharactersBusinessManager);

export const createCharacter = async (event: any) => {
  const racialMixValue = RacialMix[parseInt(JSON.parse(event.body).racialMix)];
  const racialMix = RacialMix[racialMixValue as keyof typeof RacialMix];
  const result: any = await charactersBusinessManager.generateCharacter(racialMix);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result),
  };
};


