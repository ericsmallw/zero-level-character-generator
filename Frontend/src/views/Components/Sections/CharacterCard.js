import React from 'react';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import {StarBorderOutlined} from "@material-ui/icons";
import CharacterRaceOccupation from "./CharacterRaceOccupation";

export default function CharacterCard(props) {
  const labelStyle = {fontFamily: "Roboto-slab !important", fontWeight: '700'};
  const textContainerStyle = {border: '3px darkgray solid', borderRadius: '20px', paddingLeft: '10px !important', minHeight: '25px'};
  const statsContainerLeftStyle = {border: '2px darkgrey solid', borderRadius: '10px 0px 0px 10px', paddingLeft: '5px !important', minHeight: '25px'}
  const statsContainerRightStyle = {border: '2px darkgrey solid', borderRadius: '0px 10px 10px 0px', paddingLeft: '5px !important', minHeight: '25px'}
  const subLabelStyle = {color: 'darkgray', fontSize: '12px', fontWeight: 'bold', marginBottom: '0px'};
  const statDetailsContainer = {height: '12vh'};
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
                <span style={{marginLeft: '10px'}}>{props.character ? props.character.name : ''}</span>
              </div>
            </div>
          </GridItem>
          <GridItem xs={4} sm={4} md={4} lg={4}>
            <div style={{width: '100%'}}>
              <center><h4 style={labelStyle}>Inspiration</h4></center>
              <GridContainer>
                {
                  [...Array(4).keys()].map(count => (
                      <GridItem xs={3} sm={3} md={3} lg={3} key={`star${count}`}>
                        <center><StarBorderOutlined fontSize="large" style={{color: '#9c27b0'}}/></center>
                      </GridItem>
                  ))
                }
              </GridContainer>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={3} sm={3} md={3} lg={3}>
          </GridItem>
          <GridItem xs={6} sm={6} md={6} lg={6}>
            <CharacterRaceOccupation labelStyle={labelStyle} character={props.character}/>
            <GridContainer>
              <GridItem xs={6} sm={6} md={6} lg={6}>
                <h4 style={labelStyle}>Proficiency (+2)</h4>
              </GridItem>
              <GridItem xs={6} sm={6} md={6} lg={6}>
                <h4 style={labelStyle}>Weapons</h4>
              </GridItem>
              <GridItem xs={6} sm={6} md={6} lg={6} style={{...statsContainerLeftStyle,...statDetailsContainer}}>
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
                <br />

              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={3} sm={3} md={3} lg={3}>

          </GridItem>
        </GridContainer>
      </>
  );
}
