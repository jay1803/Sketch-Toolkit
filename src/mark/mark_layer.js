import { newTextLayer, getShapeAttr, newMSColor_fromHEX, getTextAttr } from "../models";
import { getColor_fromLayer, colorTone, getHex_fromLayer, autoTextColor } from "../functions";

function newText(layerName, textContent, layer) {
    return {
        "layerName": layerName,
        "content": textContent,
        "fontSize": 14,
        "lineHeight": 20,
        "color": autoTextColor(layer),
        "fontName": "Menlo-Regular"
    };
}

export function on_layer_name(context) {
    const document = context.document;
    const selection = context.selection;
    if (selection.length < 1) {
        document.showMessage("至少选一个图层");
        return false;
    }
    selection.forEach(layer => {
        var index = getShapeAttr(layer, "index");
        var content;
        if (selection.length - index < 10) {
            content = "0" + (selection.length - index).toString(10);
        } else {
            content = (selection.length - index).toString(10);
        }

        var textLayer = newTextLayer(newText("name", content, layer));
        layer.parentForInsertingLayers().addLayer(textLayer);
        textLayer.frame().setX(getShapeAttr(layer, "x") + 10);
        textLayer.frame().setY(getShapeAttr(layer, "y") + (getShapeAttr(layer, "height") - 20) / 2);
    });
}

export function on_layer_opacity(context) {
    const document = context.document;
    const selection = context.selection;
    if (selection.length < 1) {
        document.showMessage("至少选一个图层");
        return false;
    }
    selection.forEach(layer => {
        if (!(layer instanceof MSShapeGroup)) {
            return false;
        }

        var textLayer = newTextLayer(newText("name", getShapeAttr(layer, "opacity").toString(10)), layer);
        layer.parentForInsertingLayers().addLayer(textLayer);
        textLayer.setTextAlignment(1);
        textLayer.frame().setX(getShapeAttr(layer, "x") + getShapeAttr(layer, "width") - getTextAttr(textLayer, "width") - 10);
        textLayer.frame().setY(getShapeAttr(layer, "y") + (getShapeAttr(layer, "height") - 20) / 2);
    });
}

export function on_color_value(context) {
    const document = context.document;
    const selection = context.selection;
    if (selection.length < 1) {
        document.showMessage("至少选一个图层");
        return false;
    }

    selection.forEach(layer => {
        if (!(layer instanceof MSShapeGroup)) {
            return false;
        }

        var textLayer = newTextLayer(newText("color_value", '#' + getHex_fromLayer(layer)), layer);
        layer.parentForInsertingLayers().addLayer(textLayer);
        textLayer.setTextAlignment(1);
        textLayer.frame().setX(getShapeAttr(layer, "x") + getShapeAttr(layer, "width") - getTextAttr(textLayer, "width") - 10);
        textLayer.frame().setY(getShapeAttr(layer, "y") + (getShapeAttr(layer, "height") - 20) / 2);
    });
}