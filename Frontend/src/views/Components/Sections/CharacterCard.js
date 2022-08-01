import React, {useState} from 'react';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import {StarBorderOutlined, Star} from "@material-ui/icons";
import CharacterRaceOccupation from "./CharacterRaceOccupation";
import CharacterProficiencyWeapons from "./CharacterProficiencyWeapons";
import CharacterOtherDetails from "./CharacterOtherDetails";
import {partition} from 'lodash';

export default function CharacterCard(props) {
  const [isInspired, setIsInspired] = useState(false);
  const labelStyle = {fontFamily: "Roboto-slab !important", fontWeight: '700'};
  const textContainerStyle = {border: '3px darkgray solid', borderRadius: '20px', paddingLeft: '10px !important', minHeight: '25px'};
  const statBoxStyle = {display: 'inline-block', border: 'darkgray solid', height: '50px', width: '50px', };
  const personalityTraits = props.character
      ? props.character.personalityTraits.map((trait, index) => {
          return <h6 key={`trait${index}`}>{trait.description}</h6>
        })
      : "";

  let stats = [];
  let skills = [];
  if(props.character) {
    const charismaStatKeys = Object.keys(props.character.abilityModifiers).filter(key => key.toLowerCase().indexOf("charisma") >= 0);
    const strengthStatKeys = Object.keys(props.character.abilityModifiers).filter(key => key.toLowerCase().indexOf("strength") >= 0);
    const wisdomStatKeys = Object.keys(props.character.abilityModifiers).filter(key => key.toLowerCase().indexOf("wisdom") >= 0);
    const constitutionStatKeys = Object.keys(props.character.abilityModifiers).filter(key => key.toLowerCase().indexOf("constitution") >= 0);
    const intelligenceStatKeys = Object.keys(props.character.abilityModifiers).filter(key => key.toLowerCase().indexOf("intelligence") >= 0);
    const dexterityStatKeys = Object.keys(props.character.abilityModifiers).filter(key => key.toLowerCase().indexOf("dexterity") >= 0);

    stats.push(strengthStatKeys.map(key => props.character.abilityModifiers[key]));
    stats[stats.length - 1].push('Strength');
    stats.push(dexterityStatKeys.map(key => props.character.abilityModifiers[key]));
    stats[stats.length - 1].push('Dexterity');
    stats.push(constitutionStatKeys.map(key => props.character.abilityModifiers[key]));
    stats[stats.length - 1].push('Constitution');
    stats.push(intelligenceStatKeys.map(key => props.character.abilityModifiers[key]));
    stats[stats.length - 1].push('Intelligence');
    stats.push(wisdomStatKeys.map(key => props.character.abilityModifiers[key]));
    stats[stats.length - 1].push('Wisdom');
    stats.push(charismaStatKeys.map(key => props.character.abilityModifiers[key]));
    stats[stats.length - 1].push('Charisma');

    skills = props.character.skills;
  }

  const roll = (value, description = 'Test') => {
    props.rollDice(value, description);
  }

  return (
      <>
        <GridContainer>
          <GridItem xs={4} sm={4} md={4} lg={4}>
                <div style={{width: '100%'}}>
                  <h4 style={labelStyle}>Player Name</h4>
                  <div style={textContainerStyle}>
                      <span style={{marginLeft: '10px'}}>
                          {props.playerName}
                      </span>
                  </div>
                </div>
            </GridItem>
          <GridItem xs={4} sm={4} md={4} lg={4}>
            <div
                style={{width: '100%'}}
            >
              <h4 style={labelStyle}>Character Name</h4>
              <div style={textContainerStyle}>
                <span style={{marginLeft: '10px'}}>{props.characterName || ''}</span>
              </div>
            </div>
          </GridItem>
          <GridItem xs={4} sm={4} md={4} lg={4}>
            <div style={{width: '100%'}}>
              <center><h4 style={labelStyle}>Inspiration</h4></center>
              <GridContainer>
                <GridItem xs={3} sm={12} md={12} lg={12}>
                  <center>
                    {
                      isInspired
                          ? <Star onClick={() => setIsInspired(false)} fontSize="large" style={{color: '#9c27b0', cursor: 'pointer'}}/>
                          : <StarBorderOutlined onClick={() => setIsInspired(true)} fontSize="large" style={{color: '#9c27b0', cursor: 'pointer'}}/>
                    }
                  </center>
                </GridItem>
              </GridContainer>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={3} sm={3} md={3} lg={3}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <h3 style={{...labelStyle, ...{color: 'black'}}}>Stats</h3>
              </GridItem>
              {
                stats.map((stat, index) => {
                  return <GridItem
                      key={`stat${index}`}
                      xs={12} sm={12} md={12} lg={12}
                      style={{marginBottom: '10px', cursor: 'pointer'}}
                      onClick={() => {
                        const rollString = stat[2] >= 0 ? `1d20+${stat[2]}` : `1d20${stat[2]}`;
                        roll(rollString, stat[3]);
                      }}
                  >
                    <div style={{}}>
                      <div style={{...statBoxStyle, borderRightWidth: '2px', top: ((76 * index) - 29).toString() + 'px'}}>
                        <center>{stat[0]}</center>
                      </div>
                      <div style={{...statBoxStyle, ...{width: '70px', borderLeftWidth: '1px'}}}>
                        <span style={{paddingLeft: '10px'}}>{stat[1]}</span>
                      </div>
                      <div
                          style={{
                            ...statBoxStyle,
                            ...{
                              border: '',
                              right: '28px',
                              width: '70px',
                            }}}
                      >
                        <span  style={{paddingLeft: '20px', color: '#9c27b0', fontSize: '20px'}}>{stat[2] >= 0 ? `+${stat[2]}` : stat[2]}</span>
                      </div>
                    </div>
                  </GridItem>
                })
              }

            </GridContainer>
          </GridItem>
          <GridItem xs={6} sm={6} md={6} lg={6}>
            <CharacterRaceOccupation labelStyle={labelStyle} character={props.character}/>
            <CharacterProficiencyWeapons labelStyle={labelStyle} character={props.character} roll={roll}/>
          </GridItem>
          <GridItem xs={3} sm={3} md={3} lg={3}>
            <CharacterOtherDetails labelStyle={labelStyle} character={props.character} roll={roll} />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={3} sm={3} md={3} lg={3}>

          </GridItem>
          <GridItem xs={9} sm={9} md={9} lg={9}>
            {
              Object.keys(skills).map((key, index) => {
                const modifier = props.character.skills[key].value >= 0
                    ? `+${props.character.skills[key].value}`
                    : props.character.skills[key].value;

                return <div
                    key={"skill" + index}
                    style={{
                      display: 'inline-block',
                      fontSize: '10px',
                      cursor: 'pointer'
                    }}
                    onClick={() => roll(`1d20${modifier}`, props.character.skills[key].name)}
                >
                  {
                    props.character.skills[key].isProficient
                        ? <span style={{color: '#9c27b0', marginRight: '3px'}}>*</span>
                        : ""
                  }
                  <span style={{marginRight: '10px'}}>{props.character.skills[key].name}</span>
                  <span style={{marginRight: '25px', color: props.character.skills[key].isProficient ? '#9c27b0' : ''}}>
                    {modifier}
                  </span>
                </div>
              })
            }
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={3} sm={3} md={3} lg={3}>

          </GridItem>
          <GridItem xs={9} sm={9} md={9} lg={9}>
            <GridContainer>
              <GridItem xs={3} sm={3} md={3} lg={3}>
                <h5>Personality Traits</h5>
                {personalityTraits}
              </GridItem>
              <GridItem xs={3} sm={3} md={3} lg={3}>
                <h5>Ideals</h5>
                {props.character ? <h6>{props.character.ideal.description}</h6> : ""}
              </GridItem>
              <GridItem xs={3} sm={3} md={3} lg={3}>
                <h5>Bonds</h5>
                {props.character ? <h6>{props.character.bond.description}</h6> : ""}
              </GridItem>
              <GridItem xs={3} sm={3} md={3} lg={3}>
                <h5>Flaws</h5>
                {props.character ? <h6>{props.character.flaw.description}</h6> : ""}
              </GridItem>
              <GridItem xs={3} sm={3} md={3} lg={3}>
                <h5>Talent</h5>
                {props.character ? <h6>{props.character.talent}</h6> : ""}
              </GridItem>
              <GridItem xs={3} sm={3} md={3} lg={3}>
                <h5>Mannerism</h5>
                {props.character ? <h6>{props.character.mannerism}</h6> : ""}
              </GridItem>
            </GridContainer>
          </GridItem>


        </GridContainer>
      </>
  );
}
