import React from 'react';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

export default function CharacterRaceOccupation (props) {
    const statsContainerTopLeftStyle = {border: '2px darkgrey solid', borderRadius: '10px 0px 0px 0px', paddingLeft: '5px !important', minHeight: '25px'}
    const statsContainerBottomLeftStyle = {border: '2px darkgrey solid', borderRadius: '00px 0px 0px 10px', paddingLeft: '5px !important', minHeight: '25px'}
    const statsContainerMiddleStyle = {border: '2px darkgrey solid', paddingLeft: '5px !important', minHeight: '25px'}
    const statsContainerTopRightStyle = {border: '2px darkgrey solid', borderRadius: '0px 10px 0px 0px', paddingLeft: '5px !important', minHeight: '25px'}
    const statsContainerBottomRightStyle = {border: '2px darkgrey solid', borderRadius: '0px 0px 10px 0px', paddingLeft: '5px !important', minHeight: '25px'}
    const subLabelStyle = {color: 'darkgray', fontSize: '12px', fontWeight: 'bold'};
    const statDetailsContainer = {height: '20vh'};

    return (
        <GridContainer>
            <GridItem xs={4} sm={4} md={4} lg={4}>
                <h4 style={props.labelStyle}>Race</h4>
            </GridItem>
            <GridItem xs={2} sm={2} md={2} lg={2}>
                <h4 style={props.labelStyle}>Size</h4>
            </GridItem>
            <GridItem xs={6} sm={6} md={6} lg={6}>
                <h4 style={props.labelStyle}>Occupation</h4>
            </GridItem>
            <GridItem xs={4} sm={4} md={4} lg={4} style={statsContainerTopLeftStyle}>
                {props.character ? props.character.race.name : ""}
            </GridItem>
            <GridItem xs={2} sm={2} md={2} lg={2} style={statsContainerMiddleStyle}>
                {props.character ? (props.character.race.size === 0 ? 'Small' : "Med") : ""}
            </GridItem>
            <GridItem xs={6} sm={6} md={6} lg={6} style={statsContainerTopRightStyle}>
                {props.character ? props.character.profession.name : ""}
            </GridItem>
            <GridItem xs={6} sm={6} md={6} lg={6} style={{...statDetailsContainer, ...statsContainerBottomLeftStyle}}>
                <span style={subLabelStyle}>Racial Traits</span>
                {
                    props.character && props.character.race.racialAbility
                        ? props.character.race.racialAbility.split(", ").map((ability, index) => {
                            return (
                                <div key={`ability${index}`}>
                              <span style={{fontSize: '12px'}}>
                                {ability}
                              </span>
                                </div>
                            );
                        })
                        : ""
                }
            </GridItem>
            <GridItem xs={6} sm={6} md={6} lg={6} style={{...statDetailsContainer, ...statsContainerBottomRightStyle}}>
                <span style={subLabelStyle}>Inventory</span>
                {
                    props.character
                        ? props.character.profession.item.length === 0
                          ? <div>
                              <span style={{fontSize: '12px'}}>
                                {props.character.profession.proficiency.name}
                              </span>
                            </div>
                          : props.character.profession.item.map((item, index) => {
                                return (
                                    <div key={`ability${index}`}>
                                      <span style={{fontSize: '12px'}}>
                                        {item.name}
                                      </span>
                                    </div>
                                );
                            })
                        : ""
                }
                <div>
                  <span style={{fontSize: '12px'}}>
                    {props.character ? props.character.profession.clothes.name + " Clothes" : ""}
                  </span>
                </div>
                <div>
                  <span style={{fontSize: '12px'}}>
                  {props.character ? props.character.coin : ""}
                </span>
                </div>
            </GridItem>
        </GridContainer>
    )
}
