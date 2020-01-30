import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { assert } from 'assert';

function test() {

    describe('Array', function () {
        describe('#indexOf()', function () {
            it('should return -1 when the value is not present', function () {
                assert.equal(-1, [1, 2, 3].indexOf(4));
            });
        });
    });



    return (
        < Router basename="/myapp1/build" >
            <div>
                Mocha Tests served here!
            </div>
        </Router >
    );
}

export default test;
