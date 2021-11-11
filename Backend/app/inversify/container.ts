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

import IPersonalityTraitsDataManager from "../personality-traits/interfaces/IPersonalityTraitsDataManager";
import IPersonalityTraitsDataObject from "../personality-traits/interfaces/IPersonalityTraitsDataObject";
import PersonalityTraitsDataObject from "../personality-traits/impl/PersonalityTraitsDataObject";
import PersonalityTraitsDataManager from "../personality-traits/impl/PersonalityTraitsDataManager";
import IIdealDataManager from "../ideals/interfaces/IIdealDataManager";
import IdealDataManager from "../ideals/impl/IdealDataManager";
import IdealDataObject from "../ideals/impl/IdealDataObject";
import IIdealDataObject from "../ideals/interfaces/IIdealDataObject";
import IBondsDataManager from "../bonds/interfaces/IBondsDataManager";
import BondsDataManager from "../bonds/impl/BondsDataManager";
import BondsDataObject from "../bonds/impl/BondsDataObject";
import IBondsDataObject from "../bonds/interfaces/IBondsDataObject";
import IFlawsDataObject from "../flaws/interfaces/IFlawsDataObject";
import IFlawsDataManager from "../flaws/interfaces/IFlawsDataManager";
import FlawsDataManager from "../flaws/impl/FlawsDataManager";
import FlawsDataObject from "../flaws/impl/FlawsDataObject";

const container = new Container();

container.bind<ICharactersBusinessManager>(types.CharactersBusinessManager).to(CharactersBusinessManager);
container.bind<ICharactersDataManager>(types.CharactersDataManager).to(CharactersDataManager);
container.bind<ICharactersDataObject>(types.CharactersDataObject).to(CharactersDataObject);

container.bind<INamesBusinessManager>(types.NamesBusinessManager).to(NamesBusinessManager);
container.bind<INamesDataManager>(types.NamesDataManager).to(NamesDataManager);
container.bind<INamesDataObject>(types.NamesDataObject).to(NamesDataObject);

container.bind<IProfessionsDataManager>(types.ProfessionsDataManager).to(ProfessionsDataManager);
container.bind<IProfessionsDataObject>(types.ProfessionsDataObject).to(ProfessionsDataObject);

container.bind<IPersonalityTraitsDataManager>(types.PersonalityTraitsDataManager).to(PersonalityTraitsDataManager);
container.bind<IPersonalityTraitsDataObject>(types.PersonalityTraitsDataObject).to(PersonalityTraitsDataObject);

container.bind<IIdealDataManager>(types.IdealDataManager).to(IdealDataManager);
container.bind<IIdealDataObject>(types.IdealDataObject).to(IdealDataObject);

container.bind<IBondsDataManager>(types.BondsDataManager).to(BondsDataManager);
container.bind<IBondsDataObject>(types.BondsDataObject).to(BondsDataObject);

container.bind<IFlawsDataManager>(types.FlawsDataManager).to(FlawsDataManager);
container.bind<IFlawsDataObject>(types.FlawsDataObject).to(FlawsDataObject);


export default container;
