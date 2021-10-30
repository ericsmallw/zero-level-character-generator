import React from 'react';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import {StarBorderOutlined} from "@material-ui/icons";

export default function CharacterCard(props) {
  const labelStyle = {fontFamily: "Roboto-slab !important", fontWeight: '700'};
  const textContainerStyle = {border: '3px darkgray solid', borderRadius: '20px', paddingLeft: '10px', minHeight: '25px'};
  const statsContainerStyle = {border: '2px darkgrey solid', borderRadius: '10px', minHeight: '25px'}
  return (
      <>
        <GridContainer>
          <GridItem xs={4} sm={4} md={4} lg={4}>
                <div style={{width: '100%'}}>
                  <h4 style={labelStyle}>Player Name</h4>
                  <div style={textContainerStyle}>
                      <span>
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
                      <span>
                          {props.character ? props.character.name : ''}
                      </span>
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

            <GridContainer>
              <GridItem xs={3} sm={3} md={3} lg={3}>
                <h4 style={labelStyle}>Race</h4>
              </GridItem>
              <GridItem xs={2} sm={2} md={2} lg={2}>
                <h4 style={labelStyle}>Size</h4>
              </GridItem>
              <GridItem xs={7} sm={7} md={7} lg={7}>
                <h4 style={labelStyle}>Occupation</h4>
              </GridItem>
              <GridItem xs={3} sm={3} md={3} lg={3} style={statsContainerStyle}>
                {props.character ? props.character.race.name : ""}
              </GridItem>
              <GridItem xs={2} sm={2} md={2} lg={2} style={statsContainerStyle}>
                {props.character ? (props.character.race.size === 0 ? 'Small' : "Med") : ""}
              </GridItem>
              <GridItem xs={7} sm={7} md={7} lg={7} style={statsContainerStyle}>
                {props.character ? props.character.profession.name : ""}
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={3} sm={3} md={3} lg={3}>

          </GridItem>
        </GridContainer>
      </>
  );
}
