import { getHex_fromLayer, getColor_fromLayer, colorTone, addTextLayer } from '../functions';

const sketch = require('sketch')

function generateColorValue_fromLayer(parent, layer) {
    // console.log(layer.defaultName())
    if (layer.defaultName() != 'Rectangle') {
        return 'not shape'
    }
    const colorValue = getHex_fromLayer(layer)
    const frameX = layer.frame().x()
    const frameY = layer.frame().y()
    const frameW = layer.frame().width()
    const frameH = layer.frame().height()
    var textColor = MSColor.blackColor()
    if (colorTone(getColor_fromLayer(layer)) == 'dark') {
        textColor = MSColor.whiteColor()
    }

    var newText = {
        'name': 'color_value',
        'alignment': 'right',
        'color': textColor,
        'fontFamily': 'Menlo-Regular',
        'positionX': frameX + frameW - 68,
        'positionY': frameY + frameH / 2 - 10,
        'lineHeight': 20,
        'fontSize': 14,
        'textValue': '#' + colorValue
    }
    // console.log(newText)
    return addTextLayer(parent, newText)
}

export function on_color_value(context) {
    const document = context.document
    const page = document.currentPage()
    var layers = page.layers()
    // console.log('开始生产...')
    if (layers[0].defaultName() === sketch.Types.Artboard) {
        layers = page.layers[0].layers()
    }
    // console.log(layers)
    // console.log(layers.length)

    for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        // console.log(layer.defaultName())
        if (layer.defaultName() == 'Rectangle') {
            generateColorValue_fromLayer(page, layer)
        }
    }
}