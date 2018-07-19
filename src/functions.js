const Document = require('sketch/dom').Document
const Page = require('sketch/dom').Page
const Artboard = require('sketch/dom').Artboard
const Style = require('sketch/dom').Style
const Shape = require('sketch/dom').Shape
const Group = require('sketch/dom').Group
const Text = require('sketch/dom').Text
const Rectangle = require('sketch/dom').Rectangle

const documentDom = require('sketch/dom').getSelectedDocument()
const document = context.document
const currentPage = document.currentPage()
const page = document.selectedPage
const selection = document.selectedLayers


/**
 * @export 根据图层名称获取第一个匹配到的图层
 * @param {String} name - 图层的名称
 * @returns 第一个匹配的图层
 */
export function getLayer_byName(name) {
    var predicate = NSPredicate.predicateWithFormat("name == %@", name)
    return currentPage.children().filteredArrayUsingPredicate(predicate).firstObject()
}

/**
 * @export 根据图层名称获取所有匹配的图层
 * @param {String} name - 图层的名称
 * @returns {Array} __NSSingleObjectArrayI
 */
export function getLayers_byName(name) {
    var predicate = NSPredicate.predicateWithFormat("name == %@", name)
    return currentPage.children().filteredArrayUsingPredicate(predicate)
}

/**
 * @export 添加一个新的文本图层
 * @param {Object} layerGroup - 是包含 TextLayer 的容器 MSLayerGroup，可以是 Group, Artboard, Page
 * @param {Object} text - 是文本对象
 * @param {string} text.name - 图层名称
 * @param {string} text.textValue - 文本内容设置
 * @param {string} text.alignment - 对齐方式，可以使用 Text.Alignment.left 来获得，或者直接使用字符串。可用的数值包括 left, right, center, justified, natural
 * @param {Object} text.color - MSColor
 * @param {string} text.fontFamily - 字体设置，使用 PostscriptName
 * @param {number} text.positionX - 图层的 x 坐标
 * @param {number} text.positionY - 图层的 y 坐标
 * @param {number} text.lineHeight - 文本的行高设置
 * @param {number} text.fontSize - 字号设置
 * @returns {Object} 该文本图层
 */
export function addTextLayer(layerGroup, text) {
    new Text({
        parent: layerGroup,
        text: text.textValue,
        alignment: text.alignment
    })

    var layer = layerGroup.lastLayer()
    layer.name = text.name
    layer.setTextColor(text.color)
    layer.setFontSize(text.fontSize)
    layer.setLineHeight(text.lineHeight)
    layer.setFontPostscriptName(text.fontFamily)
    layer.frame().setX(text.positionX)
    layer.frame().setY(text.positionY)

    return layer
}


/**
 * @export MSColor_转换为_HEX
 * @param {Object} color - MSColor
 * @returns {String} colorValue
 */
export function getHex_fromMSColor(color) {
    return color.immutableModelObject().hexValue()
}


/**
 * @export 获取图层的背景色HEX值
 * @param {Object} layer - MSLayer 对象
 * @returns {String} HEX数值
 */
export function getHex_fromLayer(layer) {
    const color = layer.style().fills()[0].color()
    return getHex_fromMSColor(color)
}

// 计算颜色的明亮程度，公式来自 Material Design Web Components
// 参考：https://github.com/material-components/material-components-web/blob/master/packages/mdc-theme/_functions.scss

/**
 *
 * @export 计算亮度
 * @param {Object} color - MSColor 对象
 * @returns {Number}
 */
export function luminance(color) {
    return 0.2126 * color.red() + 0.7152 * color.green() + 0.0722 * color.blue()
}


/**
 *
 *
 * @export 计算对比度
 * @param {Object} back - MSColor 对象，作为背景色
 * @param {Object} front - MSColor 对象，作为前景色
 * @returns {Number}
 */
export function contrast(back, front) {
    const backLum = luminance(back) + 0.5
    const foreLum = luminance(front) + 0.5
    return Math.max(backLum, foreLum) / Math.min(backLum, foreLum)
}


/**
 *
 *
 * @export 获得亮色还是暗色
 * @param {Object} color - MSColor 对象
 * @returns
 */
export function colorTone(color) {
    const minimumContrast = 3.1

    const lightContrast = contrast(color, MSColor.whiteColor())
    const darkContrast = contrast(color, MSColor.blackColor())

    if (lightContrast < minimumContrast && darkContrast > lightContrast) {
        return "light"
    } else {
        return "dark"
    }
}

/**
 *
 *
 * @export 获取图层背景色
 * @param {Object} layer - MSLayer
 * @returns {Object} MSColor
 */
export function getColor_fromLayer(layer) {
    return layer.style().fills()[0].color()
}