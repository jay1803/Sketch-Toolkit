import { newTextLayer, getShapeAttr, getTextAttr, getAttribute_fromLayer } from "../models";
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
        layer.parentForInsertingLayers().addLayer(textLayer);
        textLayer.frame().setX(getAttribute_fromLayer("x", layer) + 10);
        textLayer.frame().setY(getAttribute_fromLayer("y", layer) + (getAttribute_fromLayer("height", layer) - 20) / 2);
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

        var textLayer = newTextLayer(newText("name", getAttribute_fromLayer("opacity", layer).toString(10), layer));
        layer.parentForInsertingLayers().addLayer(textLayer);
        textLayer.setTextAlignment(1);
        textLayer.frame().setX(getAttribute_fromLayer("x", layer) + getAttribute_fromLayer("width", layer) - getAttribute_fromLayer("width", textLayer) - 10);
        textLayer.frame().setY(getAttribute_fromLayer("y", layer) + (getAttribute_fromLayer("height", layer) - 20) / 2);
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
        layer.parentForInsertingLayers().addLayer(textLayer);
        textLayer.setTextAlignment(1);
        textLayer.frame().setX(getAttribute_fromLayer("x", layer) + getAttribute_fromLayer("width", layer) - getAttribute_fromLayer("width", textLayer) - 10);
        textLayer.frame().setY(getAttribute_fromLayer("y", layer) + (getAttribute_fromLayer("height", layer) - 20) / 2);
    });
}