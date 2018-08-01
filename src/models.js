const Document = require('sketch/dom').Document;
const Page = require('sketch/dom').Page;
const Artboard = require('sketch/dom').Artboard;
const Style = require('sketch/dom').Style;
const Shape = require('sketch/dom').Shape;
const Group = require('sketch/dom').Group;
const Text = require('sketch/dom').Text;
const Rectangle = require('sketch/dom').Rectangle;

const documentDom = require('sketch/dom').getSelectedDocument();
const document = context.document;
const data = document.documentData();
const currentPage = document.currentPage();
const page = document.selectedPage;
const selection = document.selectedLayers();

const textStylesContainer = data.layerTextStyles();
const stylesContainer = data.layerStyles();



/**
 * 生成一个 NSFont 对象
 *
 * @export
 * @param {String} fontName
 * @param {Number} fontSize
 * @returns NSFont Object
 */
export function newFont(fontName, fontSize) {
    return NSFont.fontWithName_size_(fontName, fontSize);
}

/**
 * 根据 RGB 和 不透明度 来生成 MSColor 对象
 *
 * @export
 * @param {Number} red
 * @param {Number} green
 * @param {Number} blue
 * @param {Number} opacity
 * @returns MSColor
 */
export function newColorWithRGBA(red, green, blue, opacity) {
    return MSColor.colorWithRed_green_blue_alpha(red / 255, green / 255, blue / 255, opacity);
}

/**
 *
 *
 * @export 将HEX转换为RGB数值
 * @param {String} hex - 颜色 HEX 数值
 * @returns
 */
export function getRGB_fromHEX(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16)
    } : null;
}


/**
 *
 *
 * @export 以HEX数值生成MSColor
 * @param {*} hex
 * @returns
 */
export function newMSColor_fromHEX(hex) {
    var color = getRGB_fromHEX(hex);
    return MSColor.colorWithRed_green_blue_alpha(color.red / 255, color.green / 255, color.blue / 255, 1);
}

/**
 *
 *
 * @export
 * @param {Object} NSColor
 * @param {Object} NSFont
 * @returns 文本样式
 */
export function newTextStyle(NSColor, NSFont) {
    const textStyle = MSTextStyle.styleWithAttributes_({
        NSColor: NSColor,
        NSFont: NSFont
    });
    const style = MSStyle.alloc().init();
    style.setTextStyle_(textStyle);
    return style;
}


/**
 * 获取图层的某个属性
 *
 * @export
 * @param {Object} layer - MSLayer 对象
 * @param {String} attr - id, name, locked, visiable, opacity, x, y, width, height
 * @returns
 */
export function getLayerAttr(layer, attr) {
    if (!(layer instanceof MSShapeGroup)) {
        return false;
    }
    switch (attr) {
        case "id":
            return layer.objectID();
        case "name":
            return layer.name();
        case "locked":
            return layer.isLocked();
        case "visiable":
            return layer.isVisiable();
        case "opacity":
            return layer.style().fills()[0].interfaceOpacity() * 100;
        case "x":
            return layer.frame().x();
        case "y":
            return layer.frame().y();
        case "width":
            return layer.frame().width();
        case "height":
            return layer.frame().height();
        default:
            break;
    }
}