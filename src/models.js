const Document = require('sketch/dom').Document;
const Page = require('sketch/dom').Page;
const Artboard = require('sketch/dom').Artboard;
const Style = require('sketch/dom').Style;
const Shape = require('sketch/dom').Shape;
const Group = require('sketch/dom').Group;
const Text = require('sketch/dom').Text;
const Rectangle = require('sketch/dom').Rectangle;

const sketch = require('sketch');
const documentDom = require('sketch/dom').getSelectedDocument();
const document = context.document;
const data = document.documentData();
const currentPage = document.currentPage();
const page = document.selectedPage;
const selection = document.selectedLayers();

const textStylesContainer = data.layerTextStyles();
const stylesContainer = data.layerStyles();


export function newArtboard(rect) {
    const artboard = MSArtboardGroup.alloc().init();
    artboard.frame().setX(rect.x);
    artboard.frame().setY(rect.y);
    artboard.frame().setWidth(rect.width);
    artboard.frame().setHeight(rect.height);
    return artboard;
}

/**
 * // Hex
 * MSColorFromString("#33AE15")
 * MSColorFromString("#333")
 * MSColorFromString("#145515FF")
 *
 * // rgb/rgba
 * MSColorFromString("rgb(255,0,0)")
 * MSColorFromString("rgba(255,0,0,0.5)")
 *
 * // Color keywords
 * MSColorFromString("red")
 * MSColorFromString("blue")
 * MSColorFromString("magenta")
 * MSColorFromString("darkviolet")
 *
 * // hls
 * MSColorFromString("hsl(270, 60%, 50%, .15)")
 * MSColorFromString("hsl(270deg, 60%, 70%)")
 * MSColorFromString("hsl(4.71239rad, 60%, 70%)")
 * MSColorFromString("hsla(240, 100%, 50%, .4)")
 * @export
 * @param {*} color
 * @returns
 */
export function newColorFromString(color) {
    return MSImmutableColor.colorWithSVGString(color).newMutableCounterpart();
}

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

export function newLayerGroup(rect={x:0, y:0, width:100, height:100}) {
    var layerGroup = MSLayerGroup.alloc().initWithFrame(
        CGRectMake(rect.x, rect.y, rect.width, rect.height)
    );
    
    return layerGroup;
}

export function newShape(shapeType, rect) {
    var shape;
    switch (shapeType) {
        case "rectangle":
            shape = MSRectangleShape.alloc().initWithFrame(
                CGRectMake(rect.x, rect.y, rect.width, rect.height)
            );
            break;
        case "oval":
            shape = MSOvalShape.alloc().initWithFrame(
                CGRectMake(rect.x, rect.y, rect.width, rect.height)
            );
            break;
        default:
            break;
    }
    return shape;
}

/**
 *
 * 初始化一个新的图形图层，
 * @export
 * @param {Object} rect var rect = {x: 0, y: 0, width: 100, height: 100}
 * @returns
 */
export function newShapeGroup(shape) {
    const shapeGroup = MSShapeGroup.shapeWithPath(shape);
    shapeGroup.style().addStylePartOfType(0).color = newColorFromString("#000000");
    return shapeGroup;
}

/**
 *
 *
 * @export 根据的图层样式添加SharedStyle
 * @param {Object} layer - MSLayer，如果是文本则会添加文本图层，如果是形状则是样式
 * @returns {Object} MSSharedObject
 */
export function newSharedStyle_fromLayer(layer) {
    if (layer.style().type() != 2) {
        return document.showMessage("这都不是样式");
    }
    if (layer.style().hasTextStyle) {
        return MSSharedStyle.alloc().initWithName_firstInstance(layer.name(), layer.style());
    } else {
        return MSSharedStyle.alloc().initWithName_firstInstance(layer.name(), layer.style());
    }
}

/**
 * 生成新的文本图层
 *
 * @param {String} layerName 图层名称
 * @param {String} content 文本内容
 * @param {Number} fontSize 字号
 * @param {Number} lineHeight
 * @param {Object} color MSColor
 * @param {String} fontName PostscriptName
 * @param
 * @returns
 */
export function initTextLayer(text) {
    var newText = MSTextLayer.new();
    newText.setName(text.layerName);
    newText.setStringValue(text.content);
    newText.setFontSize(text.fontSize);
    newText.setLineHeight(text.lineHeight);
    newText.setTextColor(text.color);
    newText.setFontPostscriptName(text.fontName);
    return newText;
}

export function newTextLayer(textStyle) {
    var textLayer = MSTextLayer.alloc().init();
    textLayer.setStringValue("New Text");
    textLayer.setStyle(textStyle);
    return textLayer;
}


/**
 *
 *
 * @export
 * @param {Object} font
 * @param {Object} color
 * @returns 文本样式
 */
export function newTextStyle(font) {
    const textStyle = MSTextStyle.styleWithAttributes_({
        NSFont: font
    });
    const style = MSStyle.alloc().init();
    style.setTextStyle_(textStyle);
    return style;
}

/**
 * 获取图层的某个属性
 * 通用的属性：id, name, locked, visiable, opacity, x, y, width, height, index
 *
 * @export
 * @param {Object} layer MSLayer 对象
 * @param {String} attr 属性名称
 * @returns
 */
export function getAttribute_fromLayer(attribute, layer) {
    switch (attribute) {
        case "id":
            return layer.objectID();
        case "name":
            return layer.name();
        case "locked":
            return layer.isLocked();
        case "visiable":
            return layer.isVisiable();
        case "opacity":
            return (Math.round(layer.style().contextSettings().opacity() * 100)).toString(10) + "%";
        case "x":
            return layer.frame().x();
        case "y":
            return layer.frame().y();
        case "width":
            return layer.frame().width();
        case "height":
            return layer.frame().height();
        case "index":
            return layer.parentForInsertingLayers().indexOfLayer(layer);
    }
    if (layer instanceof MSShapeGroup) {
        switch (attribute) {
            default:
                break;
        }
    }
    if (layer instanceof MSTextLayer) {
        switch (attribute) {
            default: break;
        }
    }
    if (layer instanceof MSSymbolInstance) {
        switch (attribute) {
            case "master":
                return layer.symbolMaster();
            default:
                break;
        }
    }
    if (layer instanceof MSArtboardGroup) {
        switch (attribute) {
            default: break;
        }
    }
    if (layer instanceof MSPage) {
        switch (attribute) {
            default: break;
        }
    }
    if (layer instanceof MSLayerGroup) {
        switch (attribute) {
            default: break;
        }
    }
}

export function setAttribute_forLayer(attribute, value, layer) {
    switch (attribute) {
        case "name":
            return layer.setName(value);
        case "x":
            return layer.frame().setX(value);
        case "y":
            return layer.frame().setY(value);
        case "width":
            return layer.frame().setWidth(value);
        case "height":
            return layer.frame().setHeight(value);
        case "resizing":
            switch (value) {
                case "top":
                    if (layer.hasFixedEdge('canFixedTop')) {
                        return layer.setFixed_forEdge(true, 32);
                    }
                    return false;
                case "bottom":
                    if (layer.hasFixedEdge('canFixedBottom')) {
                        return layer.setFixed_forEdge(true, 8);
                    }
                    return false;
                case "left":
                    if (layer.hasFixedEdge('canFixedLeft')) {
                        return layer.setFixed_forEdge(true, 4);
                    }
                    return false;
                case "right":
                    if (layer.hasFixedEdge('canFixedRight')) {
                        return layer.setFixed_forEdge(true, 1);
                    }
                    return false;
                case "width":
                    if (layer.hasFixedEdge('canFixedWidth')) {
                        return layer.setFixed_forEdge(true, 2);
                    }
                    return false;
                case "height":
                    if (layer.hasFixedEdge('canFixedHeight')) {
                        return layer.setFixed_forEdge(true, 16);
                    }
                    return false;
                case "clear":
                    return layer.setFixed_forEdge(false, 63);
            }
            break;
    }
    if (layer instanceof MSShapeGroup) {
        switch (attribute) {
            case "color":
                layer.style().removeAllStyleFills();
                layer.style().addStylePartOfType(0).color = value;
                return true;
            default: 
                break;
        }
    }
    if (layer instanceof MSTextLayer) {
        switch (attribute) {
            case "color":
                return layer.setTextColor(value);
            case "lineHeight":
                return layer.setLineHeight(value);
            case "content":
                return layer.setStringValue(value);
            case "fontFamily":
                return layer.setFontPostscriptName(value);
            case "fontSize":
                return layer.setFontSize(value);
            default: break;
        }
    }
    if (layer instanceof MSSymbolInstance) {
        switch (attribute) {
            default:
                break;
        }
    }
    if (layer instanceof MSArtboardGroup) {
        switch (attribute) {
            default: break;
        }
    }
    if (layer instanceof MSPage) {
        switch (attribute) {
            default: break;
        }
    }
    if (layer instanceof MSLayerGroup) {
        switch (attribute) {
            default: break;
        }
    }
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