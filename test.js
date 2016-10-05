// http://stackoverflow.com/questions/35040978/babel-unexpected-token-import-when-running-mocha-tests

import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import bsdmReducer from 'bsdm/src/reducers/index';
// const bsDmReducer = require("bsdm/src/reducers/index");

import { baNewSign } from 'bsdm/src/bsDmActions';
// const baNewSign = require("bsdm/src/bsDmActions");

console.log("start test");

let store = createStore(bsdmReducer, applyMiddleware(thunk));

const mediaObject1 = {path: '/testFiles/image1.jpg', mediaType: "image"};
console.log("mediaObject1");
console.log(mediaObject1);

const contentItem1 = { id: "", name: "ItemName1", type: "media", media: mediaObject1 };
console.log("contentItem1");
console.log(contentItem1);

store.dispatch(baNewSign('TestSign', "v1920x1080x60p"));

let state = store.getState();
console.log("state:");
console.log(state);
