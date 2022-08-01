import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/components.js";

import Tavern from "assets/img/art-kate-fox-katrin-joshua.jpg";
import CharacterSettings from "./Sections/CharacterSettings";

const useStyles = makeStyles(styles);


export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        brand="Zero Level"
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={Tavern}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  Zero Level Character Generator
                </h1>
                <h2 className={classes.subtitle}>
                  Create a commoner and hope they survive the meat grinder of
                  the hero&apos;s life.
                </h2>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <CharacterSettings />
      </div>
      <Footer />
    </div>
  );
}
