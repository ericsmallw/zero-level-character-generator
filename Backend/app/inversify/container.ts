import { Container } from 'inversify';
import types from './types';
import ICharactersBusinessManager from '../characters/interfaces/ICharactersBusinessManager';
import ICharactersDataManager from '../characters/interfaces/ICharactersDataManager';
import CharactersDataManager from '../characters/impl/CharactersDataManager';
import CharactersDataObject from '../characters/impl/CharactersDataObject';
import ICharactersDataObject from '../characters/interfaces/ICharactersDataObject';
import CharactersBusinessManager from '../characters/impl/CharactersBusinessManager';
import NamesDataManager from '../names/impl/NamesDataManager';
import INamesDataManager from '../names/interfaces/INamesDataManager';
import NamesDataObject from '../names/impl/NamesDataObject';
import INamesDataObject from '../names/interfaces/INamesDataObject';
import NamesBusinessManager from '../names/impl/NamesBusinessManager';
import INamesBusinessManager from '../names/interfaces/INamesBusinessManager';
import IProfessionsDataManager from "../professions/interfaces/IProfessionsDataManager";
import ProfessionsDataObject from "../professions/impl/ProfessionsDataObject";
import ProfessionsDataManager from "../professions/impl/ProfessionsDataManager";
import IProfessionsDataObject from "../professions/interfaces/IProfessionsDataObject";

const container = new Container();

container.bind<ICharactersBusinessManager>(types.CharactersBusinessManager).to(CharactersBusinessManager);
container.bind<ICharactersDataManager>(types.CharactersDataManager).to(CharactersDataManager);
container.bind<ICharactersDataObject>(types.CharactersDataObject).to(CharactersDataObject);

container.bind<INamesBusinessManager>(types.NamesBusinessManager).to(NamesBusinessManager);
container.bind<INamesDataManager>(types.NamesDataManager).to(NamesDataManager);
container.bind<INamesDataObject>(types.NamesDataObject).to(NamesDataObject);

container.bind<IProfessionsDataManager>(types.ProfessionsDataManager).to(ProfessionsDataManager);
container.bind<IProfessionsDataObject>(types.ProfessionsDataObject).to(ProfessionsDataObject);

export default container;
