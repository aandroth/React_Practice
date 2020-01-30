import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const HOST_URL = "http://localhost:5000/";

export const downloadImageSrcFromFile = (id) => {
    console.log(HOST_URL + "pic/" + id);
    return HOST_URL + "pic/" + id;
}

export const downloadTextFromFile = async (id) => {
    console.log(HOST_URL + "text/" + id);
    let text = await callBackendAPI(HOST_URL + "text/" + id);
    console.log("text: "+text);
    return text;
}

async function callBackendAPI(url) {

    console.log("Fetching from DB with url " + url);

    try {
        return axios.get(url)
            .then(function (res) {
                console.log("res: ");
                console.log(res);
                console.log("data: ");
                console.log(res.data);
                return res.data;
            })
            .catch(function (err) {
                console.log("Error: " + err);
            })
    } catch (error) {
        console.log("Error:");
        console.error(error)
    }
};
async function loadEntityFromDB() {//urlAppend, id = 0) => {

    let urlStr = '';
    //if (id > 0)
    //urlStr = HOST_URL + urlAppend;
    //else
    //urlStr = HOST_URL + urlAppend;

    let result;
    return await this.callBackendAPI(urlStr)
        .then(function (data) {
            console.log("Loading " + urlStr);
            result = data;
            console.log(result);
            return data;
        })
    return result;
};