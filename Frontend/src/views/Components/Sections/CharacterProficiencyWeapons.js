import React from 'react';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

export default function CharacterProficiencyWeapons(props) {
    const statsContainerLeftStyle = {border: '2px darkgrey solid', borderRadius: '10px 0px 0px 10px', paddingLeft: '5px !important', minHeight: '25px'}
    const statsContainerRightStyle = {border: '2px darkgrey solid', borderRadius: '0px 10px 10px 0px', paddingLeft: '5px !important', minHeight: '25px'}
    const subLabelStyle = {color: 'darkgray', fontSize: '12px', fontWeight: 'bold', marginBottom: '0px'};
    const statDetailsContainer = {height: '12vh'};

    const abilityTypes = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom",  "Charisma"];

    let weaponModifier = props.character
        ? props.character.abilityModifiers[`${abilityTypes[props.character.profession.type]}Modifier`]
        : 0;

    const weaponDamage = props.character
        ? `${props.character.profession.weapon.damage}${weaponModifier >= 0 ? "+" : "-"}${weaponModifier}`
        : '';
    return (
        <GridContainer>
            <GridItem xs={6} sm={6} md={6} lg={6}>
                <h4 style={props.labelStyle}>Proficiency (+2)</h4>
            </GridItem>
            <GridItem xs={6} sm={6} md={6} lg={6}>
                <h4 style={props.labelStyle}>Weapons</h4>
            </GridItem>
            <GridItem xs={6} sm={6} md={6} lg={6} style={{...statsContainerLeftStyle}}>
                <h4 style={subLabelStyle}>Weapon Proficiency</h4>
                {
                    props.character
                        ? <span style={{fontSize: '10px'}}>{props.character.profession.weapon.name}</span>
                        : ""
                }
                <h4 style={{...subLabelStyle, ...{marginTop: '10px'}}}>Skill Proficiency</h4>
                {
                    props.character
                        ? <span style={{fontSize: '10px'}}>{props.character.profession.proficiency.name}</span>
                        : ""
                }

            </GridItem>
            <GridItem xs={6} sm={6} md={6} lg={6} style={statsContainerRightStyle}>
                {
                    props.character
                        ? <div>
                          <span style={{fontSize: '14px', fontWeight: 'bolder !important'}}>
                            {props.character.profession.weapon.name}
                          </span>
                          <br />
                          <span
                              style={{fontSize: '14px', paddingLeft: '10px', cursor: 'pointer'}}
                              onClick={() => props.roll('1d20+2', props.character.profession.weapon.name + " To Hit")}
                          >
                            To Hit: <span style={{color: '#9c27b0'}}>+2
                          </span>
                          </span>
                            <span
                                style={{fontSize: '14px', paddingLeft: '10px', cursor: 'pointer'}}
                                onClick={() => props.roll(`${weaponDamage}`, props.character.profession.weapon.name + " Attack")}
                            >
                              Damage: <span style={{color: '#9c27b0'}}>{weaponDamage}
                            </span>
                          </span>
                        </div>
                        : ""
                }

            </GridItem>
        </GridContainer>

    );
}
