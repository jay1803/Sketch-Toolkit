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

//sketchtool ~/Library/Application\ Support/com.bohemiancoding.sketch3/Plugins/plugin.sketchplugin "" --without-activating

const text_aligns = [Text.Alignment.left, Text.Alignment.center, Text.Alignment.right]

function generator(page, text){
    new Text({
        parent: text.parent,
        text: text.textValue,
        alignment: text.alignment,
        style: {
            fills: [{
                color: text.color,
                fillType: Style.FillType.Color
            }],
            borders: []
        }
    })

    var layer = page.lastLayer()
    // console.log(layer)
    layer.name = text.name
    layer.setFontSize(text.fontSize)
    layer.setLineHeight(text.lineHeight)
    layer.setFontPostscriptName(text.fontFamily)
    layer.frame().setX(text.positionX)
    layer.frame().setY(text.positionY)

    return layer
}

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
    // console.log(positionX, positionY, layer.frame().height(), layer.frame().width())
    var shape = page.lastLayer()
    shape.frame().setX(-100)
    shape.frame().setY(-100)
    shape.frame().setWidth(lastLayer.frame().x() + lastLayer.frame().width() + 200)
    shape.frame().setHeight(lastLayer.frame().y() + lastLayer.frame().height() + 200)
    page.moveLayerIndex_toIndex(page.layers().length - 1, 0)
    shape.setIsLocked(1)
}

function initSharedStyle_fromLayer(layer) {
    // console.log(layer.style().type())
    if (layer.style().type() != 2) {
        return document.showMessage("这都不是样式")
    }
    if (layer.style().hasTextStyle) {
        // console.log("FOUND TEXTSTYLE")
        return MSSharedStyle.alloc().initWithName_firstInstance(layer.name(), layer.style())
    } else {
        return MSSharedStyle.alloc().initWithName_firstInstance(layer.name(), layer.style())
    }
}

function addSharedStyle_fromLayer(context, style){
    const document = context.document
    const data = document.documentData()
    const textStylesContainer = data.layerTextStyles()
    const stylesContainer = data.layerStyles()
    if (style.type() != 3) {
        // console.log("啥都没有添加")
        return document.showMessage("需要的是 MSSharedStyle")
    }
    // console.log("找了样式")
    if (style.value().hasTextStyle) {
        // console.log("正在添加文本样式")
        textStylesContainer.addSharedObject(style)
    } else {
        // console.log("正在添加图形样式")
        stylesContainer.addSharedObject(style)
    }
}

var positionX = 0
var positionY = 0

export function on_typography_scale(context) {
    const document = context.document
    // console.log(document)
    const pages = document.pages()
    var page = pages[0]
    // console.log(page)

    document.showMessage("正在生成...")

    for (var text_theme in text_styles) {
        for (var text_size in text_sizes) {
            for (var text_style in text_styles[text_theme]) {
                for (var text_align in text_aligns) {
                    var newText = {
                        'name': text_theme + "-" + text_style + "/" + text_size + "/" + text_aligns[text_align],
                        'parent': page,
                        'alignment': text_aligns[text_align],
                        'color': text_styles[text_theme][text_style],
                        'fontFamily': 'PingFangSC-Regular',
                        'positionX': positionX,
                        'positionY': positionY,
                        'lineHeight': text_sizes[text_size] * 1.5,
                        'fontSize': text_sizes[text_size],
                        'textValue': '文本标签'
                    }
                    var layer = generator(page, newText)
                    var newStyle = initSharedStyle_fromLayer(layer)
                    // console.log(newStyle.value().hasTextStyle())
                    // console.log(newStyle.type())
                    addSharedStyle_fromLayer(context, newStyle)

                    positionX = layer.frame().x() + layer.frame().width() + 40
                    // console.log(layer.frame().width())
                    // console.log(positionX)
                    // break
                }
                // break
            }
            // break
            positionX = 0
            positionY = layer.frame().y() + layer.frame().height() + 40
        }
        // break
        // console.log(positionX, positionY)
    }
    background(page, layer)
}