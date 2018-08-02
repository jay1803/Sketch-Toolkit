import { newTextLayer, getShapeAttr, getTextAttr } from "../models";
import { getHex_fromLayer, autoTextColor } from "../functions";

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

export function mark_layer_name(context) {
    const document = context.document;
    const selection = context.selection;
    if (selection.length < 1) {
        document.showMessage("至少选一个图层");
        return false;
    }
    selection.forEach(layer => {
        var textLayer = newTextLayer(newText("name", layer.name(), layer));
        if (layer.parentForInsertingLayers() instanceof MSLayerGroup) {
            layer.parentForInsertingLayers().parentForInsertingLayers().addLayer(textLayer);
        } else {
            layer.parentForInsertingLayers().addLayer(textLayer);
        }
        console.log(layer.frame());
        textLayer.frame().setX(getShapeAttr(layer, "x") + 10);
        textLayer.frame().setY(getShapeAttr(layer, "y") + (getShapeAttr(layer, "height") - 20) / 2);
    });
}

export function mark_layer_opacity(context) {
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

        var textLayer = newTextLayer(newText("name", getShapeAttr(layer, "opacity").toString(10), layer));
        if (layer.parentForInsertingLayers() instanceof MSLayerGroup) {
            layer.parentForInsertingLayers().parentForInsertingLayers().addLayer(textLayer);
        } else {
            layer.parentForInsertingLayers().addLayer(textLayer);
        }
        textLayer.setTextAlignment(1);
        textLayer.frame().setX(getShapeAttr(layer, "x") + getShapeAttr(layer, "width") - getTextAttr(textLayer, "width") - 10);
        textLayer.frame().setY(getShapeAttr(layer, "y") + (getShapeAttr(layer, "height") - 20) / 2);
    });
}

export function mark_layer_color_value(context) {
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

        var textLayer = newTextLayer(newText("color_value", '#' + getHex_fromLayer(layer), layer));
        if (layer.parentForInsertingLayers() instanceof MSLayerGroup) {
            layer.parentForInsertingLayers().parentForInsertingLayers().addLayer(textLayer);
        } else {
            layer.parentForInsertingLayers().addLayer(textLayer);
        }
        textLayer.setTextAlignment(1);
        textLayer.frame().setX(getShapeAttr(layer, "x") + getShapeAttr(layer, "width") - getTextAttr(textLayer, "width") - 10);
        textLayer.frame().setY(getShapeAttr(layer, "y") + (getShapeAttr(layer, "height") - 20) / 2);
    });
}