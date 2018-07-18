const Document = require('sketch/dom').Document
const Page = require('sketch/dom').Page
const Artboard = require('sketch/dom').Artboard
const Shape = require('sketch/dom').Shape
const Group = require('sketch/dom').Group
const Text = require('sketch/dom').Text
const Rectangle = require('sketch/dom').Rectangle

const document = require('sketch/dom').getSelectedDocument()
const page = document.selectedPage
const selection = document.selectedLayers
var layer = document.getLayerWithID(layerId)
var layers = document.getLayersNamed(name)
var symbols = document.getSymbols()