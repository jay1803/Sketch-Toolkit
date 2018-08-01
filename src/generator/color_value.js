import { getHex_fromLayer, getColor_fromLayer, colorTone, addTextLayer, getAllShapeLayers } from '../functions';

function generateColorValue_fromLayer(layer) {
    if (!(layer instanceof MSShapeGroup)) {
        return false
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

    return addTextLayer(layer.parentForInsertingLayers(), newText)
}

export function on_color_value(context) {
    const document = context.document
    const page = document.currentPage()
    var layerList = getAllShapeLayers(page)
    layerList.forEach(function(layer) {
        generateColorValue_fromLayer(layer)
    })
}