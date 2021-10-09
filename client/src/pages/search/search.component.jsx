import React, { useState, useEffect } from 'react'
import { TextField, Typography, Select, MenuItem, FormControl, InputLabel, Button } from '@material-ui/core'
import axios from "axios"

import useStyles from "./search.styles";
import CustomCard from '../../components/card/CustomCard.component';
import { useHistory } from 'react-router';

const Search = () => {
    const history = useHistory()
    const classes = useStyles();
    const [movie, setMovie] = useState(null)
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("2021")
    const [type, setType] = useState("movie")
    const [logged, setLogged] = useState(localStorage.getItem('isLogged'))

    const logout = () => {
        localStorage.removeItem('isLogged')
        setLogged(false)
    }

    useEffect(() => {
        
        const getMovie = async (title, year, type) => {

            const config = {
                headers: {
                    "Content-type": "application/json",
                    Authorization: logged
                }
            }
            const { data } = await axios.get(`http://localhost:5000/${title}/${year}/${type}`, config)
            
            setMovie(data)
        }

        getMovie(title, year, type)
    }, [title, year, type])
    
    useEffect(() => {
        if (!logged) {
            history.push("/")
        }
    }, [history, logged]);

    return (
        <>
            <Button color="primary" onClick={logout}>Logout</Button>
            <div className={classes.content}>
                <Typography variant="h1" color="primary">Search</Typography>
                
                {
                    movie && movie.Response === "True" ? (
                        <CustomCard poster={movie.Poster} plot={movie.Plot} country={movie.Country} title={movie.Title}/>
                    ) : (
                        <Typography variant="body2" color="primary">
                            Search for a movie
                        </Typography>
                    )
                }
                
                <TextField 
                    id="Title" 
                    label="Title" 
                    variant="outlined" 
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.textField}
                    InputProps={{
                        className: classes.input
                    }}
                />
                <FormControl variant="outlined">
                    <InputLabel id="label" className={classes.label}>Year</InputLabel>
                    <Select
                        labelId="year"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        label="Year"
                        className={classes.select}
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                            },
                        }}
                        >
                        <MenuItem value={"2021"}>2021</MenuItem>
                        <MenuItem value={"2020"}>2020</MenuItem>
                        <MenuItem value={"2019"}>2019</MenuItem>
                        <MenuItem value={"2018"}>2018</MenuItem>
                        <MenuItem value={"2017"}>2017</MenuItem>
                        <MenuItem value={"2016"}>2016</MenuItem>
                        <MenuItem value={"2015"}>2015</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined">
                    <InputLabel id="label" className={classes.label}>Type</InputLabel>
                    <Select
                        labelId="type"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        label="Type"
                        className={classes.select}
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                            },
                        }}
                        >
                        <MenuItem value={"movie"}>movie</MenuItem>
                        <MenuItem value={"series"}>series</MenuItem>
                        <MenuItem value={"episode"}>episode</MenuItem>
                    </Select>
                </FormControl>
               
            </div>
        </>
    )
}

export default Search
