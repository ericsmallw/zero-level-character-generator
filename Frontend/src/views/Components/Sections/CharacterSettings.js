import React, {useEffect, useState} from "react";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import Button from "../../../components/CustomButtons/Button";
import {Select, TextField} from "@material-ui/core";
import {Delete, PersonAdd, PictureAsPdf, Save, SaveAlt} from "@material-ui/icons";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import html2canvas from "html2canvas";
import Pagination from '@mui/material/Pagination';
import {MenuItem} from "@mui/material";


const useStyles = makeStyles(styles);

export default function CharacterSettings(props) {
    const classes = useStyles();

    const [racialMix, setRacialMix] = useState(0);
    const [sex, setSex] = useState(2);
    const [minAge, setMinAge] = useState(18);
    const [maxAge, setMaxAge] = useState(60);
    const [page, setPage] = useState(1);
    const [character, setCharacter] = useState();
    const [characters, setCharacters] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [characterIndex, setCharacterIndex] = useState(-1);

    useEffect(() => {
        const localCharactersString = localStorage.getItem('characters');
        if (localCharactersString) {
            const localCharacters = JSON.parse(localCharactersString);
            const chars = [];
            localCharacters.forEach(char => {
                char = JSON.parse(char)
                char.savedLocally = true;
                console.log(char);
                chars.push(char);
            });

            loadCharacters(chars);
        }
    }, []);

    const url = 'https://7871p5aik2.execute-api.us-east-1.amazonaws.com/prod/';

    const openFile = ($event) => {
        const input = $event.target;
        const reader = new FileReader();
        reader.onload = () => {
            const json = JSON.parse(reader.result);
            loadCharacter(json);
        }
        reader.readAsText(input.files[0]);
    }

    const importCharacterButton = <GridItem xs={3} sm={3} md={3} lg={3} style={{marginTop: '20px'}}>
        <input type='file' id="characterJson" style={{visibility: 'hidden'}} onChange={openFile}/>
        <Button
            color="primary"
            round size='lg'
            style={{margin: 'auto', display: 'block'}}
            onClick={() => {
                const element = document.getElementById('characterJson');
                element.click();
            }}
        >
            <PersonAdd className={classes.icons} /> Load Character
        </Button>
    </GridItem>;

    const createButton = <GridItem xs={3} sm={3} md={3} lg={3} style={{marginTop: '20px'}}>
      <Button
          color="primary"
          round size='lg'
          style={{margin: 'auto', display: 'block'}}
          onClick={() => createCharacter()}
      >
        <PersonAdd className={classes.icons} /> Create Character
      </Button>
    </GridItem>;

    const exportButton = character
        ? <GridItem xs={3} sm={3} md={3} lg={3} style={{marginTop: '20px'}}>
            <Button
                color="primary"
                round size='lg'
                style={{margin: 'auto', display: 'block'}}
                onClick={() => exportPdf()}
            >
                <PictureAsPdf className={classes.icons} /> Save Character Sheet
            </Button>

        </GridItem>
        : "";

    const saveButton = character
        ? <GridItem xs={3} sm={3} md={3} lg={3} style={{marginTop: '20px'}}>
            <Button
                color="primary"
                round size='lg'
                style={{margin: 'auto', display: 'block'}}
                onClick={() => saveCharacterData()}
            >
                <Save className={classes.icons} /> Save Character Data
            </Button>

        </GridItem>
        : "";

    const saveLocallyButton = character
        ? <GridItem xs={3} sm={3} md={3} lg={3} style={{marginTop: '20px'}}>
            <Button
                color="primary"
                round size='lg'
                style={{margin: 'auto', display: 'block'}}
                onClick={() => saveCharacterLocally()}
                disabled={character.savedLocally}
            >
                <SaveAlt className={classes.icons} /> Save Character Locally
            </Button>

        </GridItem>
        : "";

    const deleteButton = character
        ? <GridItem xs={3} sm={3} md={3} lg={3} style={{marginTop: '20px'}}>
          <Button
              color="primary"
              round size='lg'
              style={{margin: 'auto', display: 'block'}}
              onClick={() => deleteCharacter()}
          >
            <Delete className={classes.icons} /> Delete Character
          </Button>

        </GridItem>
        : "";

    const createCharacter = async () => {
        try {
            const newCharacter = await axios.post(url, {racialMix, sex, minAge, maxAge});
            let charactersCopy = characters.slice();
            charactersCopy.unshift(newCharacter.data);
            setCharacters(charactersCopy);
            setCharacter(newCharacter.data);
            setCharacterName(newCharacter.data.name);
            setCharacterIndex(0);
            setPage(1);
        } catch (error) {
            console.error(error);
        }
    };

    const loadCharacter = (character) => {
        let charactersCopy = characters.slice();
        charactersCopy.unshift(character);
        setCharacters(charactersCopy);
        setCharacter(character);
        setCharacterName(character.name);
        setCharacterIndex(0);
        setPage(1);
    }

    const loadCharacters = (chars) => {
        setCharacters(chars);
        setCharacter(chars[0]);
        setCharacterName(chars[0].name);
        setPlayerName(localStorage.getItem('playerName'));
        setCharacterIndex(0);
        setPage(1);
    }

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

    const saveCharacterData = () => {
        const characterJson = JSON.stringify(character);
        const data = new Blob([characterJson], {type: 'application/json'});

        const dataUrl = window.URL.createObjectURL(data);
        let element = document.createElement("a");
        element.setAttribute('download', `${character.name}.json`);
        element.setAttribute(`href`, dataUrl);
        element.click();
        element.remove();
    }

    const saveCharacterLocally = () => {
        const characterCopy = {...{}, ...character};
        characterCopy.savedLocally = true;
        const characterJson = JSON.stringify(character);
        setCharacter(characterCopy);

        const localCharactersString = localStorage.getItem('characters');
        if(!localCharactersString) {
            localStorage.setItem('characters', JSON.stringify([characterJson]));
        } else {
            localStorage.setItem('playerName', playerName);
            const localCharacters = JSON.parse(localCharactersString);
            localCharacters.push(characterJson);
            localStorage.setItem('characters', JSON.stringify(localCharacters));
        }

    }

    const changePage = (event, value) => {
      setCharacterIndex(value - 1);
      const char = characters[value - 1];
      setCharacter(char);
      setCharacterName(char.name);
      setPage(value);
    }

    const deleteCharacter = () => {
      let charactersCopy = characters.slice();
      charactersCopy.splice(characterIndex, 1);
      setCharacters(charactersCopy);

      if (characterIndex === charactersCopy.length) {
        setCharacter(charactersCopy[charactersCopy.length - 1]);
        setCharacterIndex(charactersCopy.length - 1);
        setPage(charactersCopy.length);
      } else if (characterIndex === 0 && charactersCopy.length === 1) {
        setCharacterIndex(-1);
        setCharacter(null);
      } else {
        setCharacterIndex(characterIndex);
        setCharacter(charactersCopy[characterIndex]);
      }
    }

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                {importCharacterButton}
                <div className={classes.title}>
                    <h2>Character Settings</h2>
                    <GridContainer>
                        <GridItem xs={2} sm={2} md={2} lg={2}>
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
                                    <h3>Character Name</h3>
                                    <TextField
                                        label='Character Name'
                                        value={characterName}
                                        onChange={(event) => {
                                            setCharacterName(event.target.value)
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
                                        <Select
                                            id="racialMix"
                                            value={racialMix}
                                            label="Racial Mix"
                                            onChange={(event) => setRacialMix(event.target.value)}
                                        >
                                            <MenuItem value={0}>Default</MenuItem>
                                            <MenuItem value={1}>High Fantasy</MenuItem>
                                            <MenuItem value={2}>Human Dominated</MenuItem>
                                            <MenuItem value={3}>Human</MenuItem>
                                            <MenuItem value={4}>Halfling</MenuItem>
                                            <MenuItem value={5}>Gnome</MenuItem>
                                            <MenuItem value={6}>Tiefling</MenuItem>
                                            <MenuItem value={7}>Elf</MenuItem>
                                            <MenuItem value={8}>Half-Elf</MenuItem>
                                            <MenuItem value={9}>Half-Orc</MenuItem>
                                            <MenuItem value={10}>Dragonborn</MenuItem>
                                            <MenuItem value={11}>Dwarf</MenuItem>
                                        </Select>
                                    </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12} lg={12}>
                                    <h3>Age Range</h3>
                                    <TextField
                                        label='Min Age'
                                        type='number'
                                        value={minAge}
                                        onChange={(event) => {
                                            setMinAge(parseInt(event.target.value))
                                        }}
                                    />
                                    <br />
                                    <br />
                                    <TextField
                                        label='Max Age'
                                        type='number'
                                        value={maxAge}
                                        onChange={(event) => {
                                            setMaxAge(parseInt(event.target.value));
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <GridItem
                            id={'character-card'}
                            xs={10} sm={10} md={10} lg={10}
                            style={{
                                border: "5px black solid",
                                borderRadius: '15px',
                                width: '100%'
                            }}
                        >
                            <CharacterCard character={character} playerName={playerName} characterName={characterName}/>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={3} sm={3} md={3} lg={3} />
                      <GridItem xs={9} sm={9} md={9} lg={9} style={{marginTop: '5px', marginBottom: '5px'}}>
                        <center>
                          <Pagination
                              count={characters.length}
                              color="secondary"
                              page={page}
                              onChange={changePage}
                          />
                        </center>
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      {createButton}
                      {exportButton}
                      {saveButton}
                      {saveLocallyButton}
                      {deleteButton}
                    </GridContainer>
                </div>
            </div>
        </div>
    )
}
