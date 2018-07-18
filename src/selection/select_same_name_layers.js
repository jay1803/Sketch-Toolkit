// import "../base.js"

const sketch = require('sketch/dom')

export function on_same_name_layers (context) {
    const document = sketch.fromNative(context.document)

    const selectedLayers = document.selectedLayers
    const selectedCount = selectedLayers.length

    if (selectedCount === 1) {
        console.log("Started!")
        selectedLayers.forEach(selectedLayer => {
            const layers = document.getLayersNamed(selectedLayer.name)
            layers.forEach(layer => {
                layer.selected = true
            })
        })
    } else if (selectedCount > 1) {
        console.log("You're selected too many layers.")
    } else {
        console.log("Please select only one layer.")
    }
}