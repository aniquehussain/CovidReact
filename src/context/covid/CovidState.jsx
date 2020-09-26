import React, { useReducer } from 'react';
import CovidContext from './covidContext';
import CovidReducer from './covidReducer';
import axios from 'axios';
import {
    GET_COUNTRY_CASES,
    GET_WORLD_CASES,
    SET_COUNTRY_LIST,
    SET_IP_COUNTRY,
    SET_COUNTRY,
    SET_LOADING
} from '../types';



const CovidState = props => {

    const initialState = {
        country: "Choose...",
        wTotalCases: 0,
        wRecovCases: 0,
        wDeathCases: 0,
        wNewCases: 0,
        cRecovCases: 0,
        cTotalCases: 0,
        cDeathCases: 0,
        cNewCases: 0,

        loading: false,
        iRecovCases: 0,
        iTotalCases: 0,
        iDeathCases: 0,
        iActiveCases: 0,
        countryArray: []
    }

    const [state, dispatch] = useReducer(CovidReducer, initialState);

    //Get country name by IP
    const getData = async () => {

        setLoading();
        const myData = await axios.get('https://ipapi.co/json/');

        dispatch({
            type: SET_IP_COUNTRY,
            payload: myData.data.country_name
        })

    }

    //Country Wise Data 
    const getCountryWiseData = async () => {

        setLoading();
        const liveData = await axios({
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/statistics',
            headers: {
                'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                'x-rapidapi-key': '1fc1a156b8mshb01d5ed20621a31p1602c3jsnab438f067e3a'
            }
        })

        const gotData = liveData.data.response;
        console.log(gotData);
        for (let i = 0; i < gotData.length; i++) {

            if (gotData[i].country === state.country) {

                dispatch({
                    type: GET_COUNTRY_CASES,
                    payload: {
                        totalCases: gotData[i].cases.total,
                        deathCases: gotData[i].deaths.total,
                        recovCases: gotData[i].cases.recovered,
                        newCases: gotData[i].cases.new
                    }
                })

            }

        }
    }


    //HandleChange in Country Wise

    const handleChange = (e) => {

        dispatch({
            type: SET_IP_COUNTRY,
            payload: e.target.value
        })

    }
    // Country List with live data

    const getTimeline = async () => {
        setLoading();
        const myData = await axios({
            "method": "GET",
            "url": "https://covid-193.p.rapidapi.com/statistics",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "1fc1a156b8mshb01d5ed20621a31p1602c3jsnab438f067e3a",
                "useQueryString": true
            }
        });

        let dataArray = myData.data.response;
        dispatch({
            type: SET_COUNTRY_LIST,
            payload: dataArray
        })

    };

    //GET World Cases

    const searchWorldCases = async () => {

        setLoading();

        const worldCases = await axios({
            "method": "GET",
            "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "1fc1a156b8mshb01d5ed20621a31p1602c3jsnab438f067e3a",
                "useQueryString": true
            }
        })
        const { total_cases, total_deaths, total_recovered, new_cases } = worldCases.data;

        dispatch({
            type: GET_WORLD_CASES,
            payload: {
                totalCases: total_cases,
                deathCases: total_deaths,
                recovCases: total_recovered,
                newCases: new_cases
            }
        })
    }

    //Search India Cases

    const searchIndiaCases = async () => {

        setLoading();

        const indiaCases = await axios({
            "method": "GET",
            "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "1fc1a156b8mshb01d5ed20621a31p1602c3jsnab438f067e3a",
                "useQueryString": true
            }, "params": {
                "country": "india"
            }
        });
        console.log(indiaCases);
        const { active_cases, total_cases, total_deaths, total_recovered } = indiaCases.data.latest_stat_by_country[0];

        dispatch({
            type: SET_COUNTRY,
            payload: {
                totalCases: total_cases,
                deathCases: total_deaths,
                recovCases: total_recovered,
                activeCases: active_cases
            }
        })

    }

    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <CovidContext.Provider value={{
            country: state.country,
            deathCases: state.cDeathCases,
            newCases: state.cNewCases,
            totalCases: state.cTotalCases,
            recoveredCases: state.cRecovCases,
            loading: state.loading,
            getData,
            handleChange,
            getCountryWiseData,
            getTimeline,
            countryList: state.countryArray,
            searchWorldCases,
            totalWorldCases: state.wTotalCases,
            worldDeathCases: state.wDeathCases,
            worldRecoveredCases: state.wRecovCases,
            worldNewCases: state.wNewCases,
            searchIndiaCases,
            indiaRecovCases: state.iRecovCases,
            indiaTotalCases: state.iTotalCases,
            indiaDeathCases: state.iDeathCases,
            indiaActiveCases: state.iActiveCases,


        }}>
            { props.children}
        </CovidContext.Provider >
    )


}
export default CovidState;