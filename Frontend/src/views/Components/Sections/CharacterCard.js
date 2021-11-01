import React from 'react';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import {StarBorderOutlined} from "@material-ui/icons";
import CharacterRaceOccupation from "./CharacterRaceOccupation";
import CharacterProficiencyWeapons from "./CharacterProficiencyWeapons";

export default function CharacterCard(props) {
  const labelStyle = {fontFamily: "Roboto-slab !important", fontWeight: '700'};
  const textContainerStyle = {border: '3px darkgray solid', borderRadius: '20px', paddingLeft: '10px !important', minHeight: '25px'};

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
            <CharacterProficiencyWeapons labelStyle={labelStyle} character={props.character}/>
          </GridItem>
          <GridItem xs={3} sm={3} md={3} lg={3}>

          </GridItem>
        </GridContainer>
      </>
  );
}
