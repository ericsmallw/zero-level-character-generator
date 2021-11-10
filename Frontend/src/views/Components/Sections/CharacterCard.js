import React from 'react';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import {StarBorderOutlined} from "@material-ui/icons";
import CharacterRaceOccupation from "./CharacterRaceOccupation";
import CharacterProficiencyWeapons from "./CharacterProficiencyWeapons";
import CharacterOtherDetails from "./CharacterOtherDetails";
import {partition} from 'lodash';

export default function CharacterCard(props) {
  const labelStyle = {fontFamily: "Roboto-slab !important", fontWeight: '700'};
  const textContainerStyle = {border: '3px darkgray solid', borderRadius: '20px', paddingLeft: '10px !important', minHeight: '25px'};
  const statBoxStyle = {display: 'inline-block', border: 'darkgray solid', height: '50px', width: '50px', position: 'relative'};
  const personalityTraits = props.character
      ? props.character.personalityTraits.map((trait, index) => {
          return <h6 key={`trait${index}`}>{trait.description}</h6>
        })
      : "";

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
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <h3 style={labelStyle}>Stats</h3>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <div style={{position: 'absolute'}}>
                  <div style={{...statBoxStyle, borderRightWidth: '2px'}}>

                  </div>
                  <div style={{...statBoxStyle, ...{width: '70px', borderLeftWidth: '1px'}}}>

                  </div>
                  <div style={{...statBoxStyle, ...{borderRadius: '50%', backgroundColor: 'white', right: '28px', height: '70px', width: '70px', top: '10px'}}}>

                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={6} sm={6} md={6} lg={6}>
            <CharacterRaceOccupation labelStyle={labelStyle} character={props.character}/>
            <CharacterProficiencyWeapons labelStyle={labelStyle} character={props.character}/>
          </GridItem>
          <GridItem xs={3} sm={3} md={3} lg={3}>
            <CharacterOtherDetails labelStyle={labelStyle} character={props.character} />
          </GridItem>
        </GridContainer>
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

          </GridItem>
          <GridItem xs={3} sm={3} md={3} lg={3}>
            <h5>Flaws</h5>
          </GridItem>
        </GridContainer>
      </>
  );
}
