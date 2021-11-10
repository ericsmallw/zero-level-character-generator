import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import React from "react";

export default function CharacterOtherDetails (props) {
  const speedInitAcValStyle = {color: '#9c27b0', fontWeight: 'bold', minHeight: '0', marginBottom: '0', marginTop: '0'};

  return (
      <GridContainer>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <center><h4 style={props.labelStyle}>Init</h4></center>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <center><h4 style={props.labelStyle}>Speed</h4></center>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <center><h4 style={props.labelStyle}>AC</h4></center>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <center>
            <h3 style={speedInitAcValStyle}>
              {props.character
                  ? (props.character.initiative >= 0
                      ? `+${props.character.initiative}`
                      : props.character.initiative)
                  : ""}
            </h3>
          </center>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <center>
            <h3 style={speedInitAcValStyle}>
              {props.character ? props.character.race.speed : ""}
            </h3>
          </center>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <center>
            <h3 style={speedInitAcValStyle}>
              {props.character ? props.character.armorClass : ""}
            </h3>
          </center>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12} style={{marginTop: '30px'}}>
          <center><h2 style={props.labelStyle}>Max HP</h2></center>
          <center>
            <h2 style={speedInitAcValStyle}>
              {props.character ? props.character.hitPoints : ""}
            </h2>
          </center>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12} style={{marginTop: '30px'}}>
          <center><h2 style={props.labelStyle}>Current HP</h2></center>
        </GridItem>
      </GridContainer>
  );
}
