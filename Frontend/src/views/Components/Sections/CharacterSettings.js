import React, {useState} from "react";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import Button from "../../../components/CustomButtons/Button";
import {TextField} from "@material-ui/core";
import {Delete, PersonAdd, PictureAsPdf, Save} from "@material-ui/icons";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import html2canvas from "html2canvas";
import Pagination from '@mui/material/Pagination';


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
    const [characterIndex, setCharacterIndex] = useState(-1);

    const url = 'https://7871p5aik2.execute-api.us-east-1.amazonaws.com/prod/';

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
            setPage(1);
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

    const changePage = (event, value) => {
      setCharacterIndex(value - 1);
      setCharacter(characters[value - 1]);
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
      } else if (characterIndex.length === 0) {
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
                                            label="Human Dominated"
                                        />
                                      <FormControlLabel
                                          control={
                                            <Radio
                                                checked={racialMix === 3}
                                                onChange={() => setRacialMix(3)}
                                                value="3"
                                                name="Human"
                                                aria-label="Human"
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
                                      <FormControlLabel
                                          control={
                                            <Radio
                                                checked={racialMix === 4}
                                                onChange={() => setRacialMix(4)}
                                                value="4"
                                                name="Halfling"
                                                aria-label="Halfling"
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
                                          label="Halfling"
                                      />
                                      <FormControlLabel
                                          control={
                                            <Radio
                                                checked={racialMix === 5}
                                                onChange={() => setRacialMix(5)}
                                                value="5"
                                                name="Gnome"
                                                aria-label="Gnome"
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
                                          label="Gnome"
                                      />
                                      <FormControlLabel
                                          control={
                                            <Radio
                                                checked={racialMix === 6}
                                                onChange={() => setRacialMix(6)}
                                                value="6"
                                                name="Tiefling"
                                                aria-label="Tiefling"
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
                                          label="Tiefling"
                                      />
                                      <FormControlLabel
                                          control={
                                            <Radio
                                                checked={racialMix === 7}
                                                onChange={() => setRacialMix(7)}
                                                value="7"
                                                name="Elf"
                                                aria-label="Elf"
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
                                          label="Elf"
                                      />
                                      <FormControlLabel
                                          control={
                                            <Radio
                                                checked={racialMix === 8}
                                                onChange={() => setRacialMix(8)}
                                                value="8"
                                                name="Half-Elf"
                                                aria-label="Half-Elf"
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
                                          label="Half-Elf"
                                      />
                                      <FormControlLabel
                                          control={
                                            <Radio
                                                checked={racialMix === 9}
                                                onChange={() => setRacialMix(9)}
                                                value="9"
                                                name="Half-Orc"
                                                aria-label="Half-Orc"
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
                                          label="Half-Orc"
                                      />
                                      <FormControlLabel
                                          control={
                                            <Radio
                                                checked={racialMix === 10}
                                                onChange={() => setRacialMix(10)}
                                                value="10"
                                                name="Dragonborn"
                                                aria-label="Dragonborn"
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
                                          label="Dragonborn"
                                      />
                                      <FormControlLabel
                                          control={
                                            <Radio
                                                checked={racialMix === 11}
                                                onChange={() => setRacialMix(11)}
                                                value="11"
                                                name="Dwarf"
                                                aria-label="Dwarf"
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
                                          label="Dwarf"
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
                      {deleteButton}
                    </GridContainer>
                </div>
            </div>
        </div>
    )
}
