import React from "react";
import { useState } from "react";
import "./Radiobutton.css";
var traversal = require("traverse");

const Radiobutton = ({ question, response }) => {
  function traverse(jsonObj) {
    if (jsonObj !== null && typeof jsonObj == "object") {
      Object.entries(jsonObj).forEach(([key, value]) => {
        // key is either an array index or object key
        console.log(value);
        traverse(value);
      });
    } else {
      // jsonObj is a number or string
    }
  }

  var leaves = traversal(response).reduce(function (acc, x) {
    // if (this.isLeaf) acc.push(x);
    return acc;
  }, []);

  return (
    <>
      <div className="question-container">
        <h1>{question}</h1>
      </div>
      {/* {JSON.stringify(response)} */}
      {/* { traverse(response) } */}

      {/* {response.map((res, index) => {
        return (
          <div className="radio-container">
            <input type="radio" id="hello" name="" value="" checked />
            
          </div>
        );
      })} */}

      {leaves}
    </>
  );
};

export default Radiobutton;
