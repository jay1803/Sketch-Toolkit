import { addTextLayer, addSharedStyle_fromStyle, isLayerExist, getLayer_byName, isSharedTextStyleExist, updateSharedStyle_fromLayer, hasSharedStyle } from '../functions';
import { newSharedStyle_fromLayer, newColorFromString } from '../models';

const Text = require('sketch/dom').Text
const Style = require('sketch/dom').Style
const Shape = require('sketch/dom').Shape

const text_styles = {
    "dark": {
        "default": "#2B2F33",
        "primary": "#1A1E21",
        "warning": "#FAA000",
        "danger": "#F44434",
        "success": "#42A046",
        "link": "#2380C2"
    },
    "light": {
        "default": "#FFFFFF",
        "primary": "#ECF1F5",
        "warning": "#FCCE26",
        "danger": "#FE6752",
        "success": "#65BB68",
        "link": "#299AE6"
    }
}
const text_sizes = {
    "caption": 11,
    "body": 13,
    "subtitle": 14,
    "title": 16,
    "h6": 18,
    "h5": 24,
    "h4": 32,
    "h3": 44,
    "h2": 60,
    "h1": 96
}

const text_aligns = [Text.Alignment.left, Text.Alignment.center, Text.Alignment.right]

function background(page, lastLayer) {
    new Shape({
        name: 'background',
        parent: page,
        style: {
            fills: [{
                color: '#9E9E9E',
                fillType: Style.FillType.Color
            }],
            borders: []
        }
    })

    var shape = page.lastLayer()
    shape.frame().setX(-100)
    shape.frame().setY(-100)
    shape.frame().setWidth(lastLayer.frame().x() + lastLayer.frame().width() + 200)
    shape.frame().setHeight(lastLayer.frame().y() + lastLayer.frame().height() + 200)
    page.moveLayerIndex_toIndex(page.layers().length - 1, 0)
    shape.setIsLocked(1)
}

var positionX = 0
var positionY = 0

export function on_typography_scale(context) {
    const document = context.document
    const page = document.currentPage()

    document.showMessage("正在生成...")

    for (var text_theme in text_styles) {
        for (var text_size in text_sizes) {
            for (var text_style in text_styles[text_theme]) {
                for (var text_align in text_aligns) {
                    var colorValue = text_styles[text_theme][text_style]
                    var color = newColorFromString(colorValue)
                    var newText = {
                        'name': text_theme + "-" + text_style + "/" + text_size + "/" + text_aligns[text_align],
                        'alignment': text_aligns[text_align],
                        'color': color,
                        'fontFamily': 'PingFangSC-Regular',
                        'positionX': positionX,
                        'positionY': positionY,
                        'lineHeight': text_sizes[text_size] * 1.5,
                        'fontSize': text_sizes[text_size],
                        'textValue': '文本标签'
                    }
                    var layer
                    if (isLayerExist(newText.name)) {
                        layer = getLayer_byName(newText.name)
                        if (hasSharedStyle(layer) && isSharedTextStyleExist(newText.name)){
                            updateSharedStyle_fromLayer(layer)
                        }
                    } else {
                        layer = addTextLayer(page, newText)
                        const newStyle = newSharedStyle_fromLayer(layer)
                        addSharedStyle_fromStyle(newStyle)
                    }
                    positionX = layer.frame().x() + layer.frame().width() + 40
                }
            }
            positionX = 0
            positionY = layer.frame().y() + layer.frame().height() + 40
        }
    }
    background(page, layer)
}