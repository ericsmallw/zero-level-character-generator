import React, {useRef, useState} from "react";
import ReactDOM from "react-dom";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import Favorite from "@material-ui/icons/Favorite";
import Button from "../../../components/CustomButtons/Button";
import CustomInput from "../../../components/CustomInput/CustomInput";
import {Input, TextField} from "@material-ui/core";
import {PersonAdd, PictureAsPdf} from "@material-ui/icons";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const useStyles = makeStyles(styles);

export default function CharacterSettings(props) {
    const classes = useStyles();

    const [racialMix, setRacialMix] = useState(0);
    const [sex, setSex] = useState(2);
    const [minAge, setMinAge] = useState(18);
    const [maxAge, setMaxAge] = useState(60);
    const [age, setAge] = useState(0);
    const [character, setCharacter] = useState();
    const [playerName, setPlayerName] = useState('');

    const url = 'https://7871p5aik2.execute-api.us-east-1.amazonaws.com/prod/';

    const exportButton = character
        ? <GridItem xs={4} sm={4} md={4} lg={4} style={{marginTop: '20px'}}>
            <Button
                color="primary"
                round size='lg'
                style={{margin: 'auto', display: 'block'}}
                onClick={() => exportPdf()}
            >
                <PictureAsPdf className={classes.icons} /> Save As Pdf
            </Button>

        </GridItem>
        : "";

    const createCharacter = async () => {
        try {
            const newCharacter = await axios.post(url, {racialMix, sex, minAge, maxAge});
            console.log(newCharacter.data.age);
            setCharacter(newCharacter.data);
        } catch (error) {
            console.error(error);
        }
    };

    const exportPdf = () => {
        html2canvas(document.querySelector('#character-card'))
            .then(canvas => {

                const imgData = canvas
                    .toDataURL('image/png')
                    .replace("image/png", "image/octet-stream");

                let element = document.createElement("a");
                element.setAttribute('download', `${character.name}.png`);
                element.setAttribute(`href`, imgData);
                element.click();
                element.remove();
            });
    };

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h2>Character Settings</h2>
                    <GridContainer>
                        <GridItem xs={3} sm={3} md={3} lg={3}>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12} lg={12}>
                                    <h3>Player Name</h3>
                                    <TextField
                                        label='Player Name'
                                        value={playerName}
                                        onChange={(event) => {
                                            setPlayerName(event.target.value)
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12} lg={12}>
                                    <div
                                        className={
                                            classes.checkboxAndRadio +
                                            " " +
                                            classes.checkboxAndRadioHorizontal
                                        }
                                    >
                                        <h3>Sex</h3>
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    checked={sex === 0}
                                                    onChange={() => setSex(0)}
                                                    value="0"
                                                    name="Male"
                                                    aria-label="Male"
                                                    icon={
                                                        <FiberManualRecord className={classes.radioUnchecked} />
                                                    }
                                                    checkedIcon={
                                                        <FiberManualRecord className={classes.radioChecked} />
                                                    }
                                                    classes={{
                                                        checked: classes.radio,
                                                        root: classes.radioRoot,
                                                    }}
                                                />
                                            }
                                            classes={{
                                                label: classes.label,
                                                root: classes.labelRoot,
                                            }}
                                            label="Male"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    checked={sex === 1}
                                                    onChange={() => setSex(1)}
                                                    value="1"
                                                    name="Female"
                                                    aria-label="Female"
                                                    icon={
                                                        <FiberManualRecord className={classes.radioUnchecked} />
                                                    }
                                                    checkedIcon={
                                                        <FiberManualRecord className={classes.radioChecked} />
                                                    }
                                                    classes={{
                                                        checked: classes.radio,
                                                        root: classes.radioRoot,
                                                    }}
                                                />
                                            }
                                            classes={{
                                                label: classes.label,
                                                root: classes.labelRoot,
                                            }}
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    checked={sex === 2}
                                                    onChange={() => setSex(2)}
                                                    value="2"
                                                    name="Either"
                                                    aria-label="Either"
                                                    icon={
                                                        <FiberManualRecord className={classes.radioUnchecked} />
                                                    }
                                                    checkedIcon={
                                                        <FiberManualRecord className={classes.radioChecked} />
                                                    }
                                                    classes={{
                                                        checked: classes.radio,
                                                        root: classes.radioRoot,
                                                    }}
                                                />
                                            }
                                            classes={{
                                                label: classes.label,
                                                root: classes.labelRoot,
                                            }}
                                            label="Either"
                                        />
                                    </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12} lg={12}>
                                    <div
                                        className={
                                            classes.checkboxAndRadio
                                        }
                                    >
                                        <h3>Racial Mix</h3>
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    checked={racialMix === 0}
                                                    onChange={() => setRacialMix(0)}
                                                    value="0"
                                                    name="Default"
                                                    aria-label="Default"
                                                    icon={
                                                        <FiberManualRecord className={classes.radioUnchecked} />
                                                    }
                                                    checkedIcon={
                                                        <FiberManualRecord className={classes.radioChecked} />
                                                    }
                                                    classes={{
                                                        checked: classes.radio,
                                                        root: classes.radioRoot,
                                                    }}
                                                />
                                            }
                                            classes={{
                                                label: classes.label,
                                                root: classes.labelRoot,
                                            }}
                                            label="Default"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    checked={racialMix === 1}
                                                    onChange={() => setRacialMix(1)}
                                                    value="1"
                                                    name="High Fantasy"
                                                    aria-label="High Fantasy"
                                                    icon={
                                                        <FiberManualRecord className={classes.radioUnchecked} />
                                                    }
                                                    checkedIcon={
                                                        <FiberManualRecord className={classes.radioChecked} />
                                                    }
                                                    classes={{
                                                        checked: classes.radio,
                                                        root: classes.radioRoot,
                                                    }}
                                                />
                                            }
                                            classes={{
                                                label: classes.label,
                                                root: classes.labelRoot,
                                            }}
                                            label="High Fantasy"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    checked={racialMix === 2}
                                                    onChange={() => setRacialMix(2)}
                                                    value="2"
                                                    name="HumanDominated"
                                                    aria-label="Human Dominated"
                                                    icon={
                                                        <FiberManualRecord className={classes.radioUnchecked} />
                                                    }
                                                    checkedIcon={
                                                        <FiberManualRecord className={classes.radioChecked} />
                                                    }
                                                    classes={{
                                                        checked: classes.radio,
                                                        root: classes.radioRoot,
                                                    }}
                                                />
                                            }
                                            classes={{
                                                label: classes.label,
                                                root: classes.labelRoot,
                                            }}
                                            label="Human"
                                        />
                                    </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12} lg={12}>
                                    <h3>Age Range</h3>
                                    <TextField
                                        label='Min Age'
                                        type='number'
                                        value={minAge}
                                        onChange={(event) => {
                                            setMinAge(event.target.value)
                                        }}
                                    />
                                    <br />
                                    <br />
                                    <TextField
                                        label='Max Age'
                                        type='number'
                                        value={maxAge}
                                        onChange={(event) => {
                                            setMaxAge(event.target.value)
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12} lg={12}>
                                    <h3>setAge</h3>
                                    <TextField
                                        label='Age'
                                        type='number'
                                        value={age}
                                        onChange={(event) => {
                                            setAge(event.target.value)
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <GridItem
                            id={'character-card'}
                            xs={9} sm={9} md={9} lg={9}
                            style={{
                                border: "5px black solid",
                                borderRadius: '15px',
                                width: '100%'
                            }}
                        >
                            <CharacterCard character={character} playerName={playerName}/>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={4} sm={4} md={4} lg={4} style={{marginTop: '20px'}}>
                            <Button
                                color="primary"
                                round size='lg'
                                style={{margin: 'auto', display: 'block'}}
                                onClick={() => createCharacter()}
                            >
                                <PersonAdd className={classes.icons} /> Create Character
                            </Button>
                        </GridItem>
                        {exportButton}
                    </GridContainer>
                </div>
            </div>
        </div>
    )
}
