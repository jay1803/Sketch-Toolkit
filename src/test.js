import { newTextLayer, newShapeGroup, newColorFromString, setAttribute_forLayer, newArtboard, newLayerGroup } from "./models";

export function on_test_new_text_layer(context) {
    const document = context.document;
    var text = {
        "layerName": "name",
        "content": "content",
        "fontSize": 14,
        "lineHeight": 20,
        "color": newColorFromString("#000000"),
        "fontName": "Menlo-Regular"
    }
    var newText = newTextLayer(text);
    document.currentPage().addLayer(newText);
    console.log(newText);
}

export function on_test_new_shape_group(context) {
    const document = context.document;
    const rect = {
        x: 0,
        y: 0,
        width: 200,
        height: 200
    };
    var newColor = newColorFromString("#000000");
    var newColorTwo = newColorFromString("#FF0000");
    var newShape = newShapeGroup(rect);
    document.currentPage().addLayer(newShape);
    setAttribute_forLayer("color", newColorTwo, newShape);
}

export function on_test_set_resizing(context) {
    const document = context.document;
    const rect = {
        x: 0,
        y: 0,
        width: 200,
        height: 200
    };
    var artboard = newArtboard(rect);
    document.currentPage().addLayer(artboard);
    var layer = newShapeGroup(rect);
    artboard.addLayer(layer);
    setAttribute_forLayer("resizing", "top", layer);
}

export function on_test_new_artboard(context) {
    const document = context.document;
    const rect = {
        x: 0,
        y: 0,
        width: 200,
        height: 200
    };
    var artboard = newArtboard(rect);
    document.currentPage().addLayer(artboard);
}

export function on_test_new_layer_group(context) {
    const newRect = {
        x: 100,
        y: 100,
        width: 200,
        height: 200
    };

    const document = context.document;
    const layerGroup = newLayerGroup(newRect);
    document.currentPage().addLayer(layerGroup);
    const layer = newShapeGroup();
    layerGroup.addLayer(layer);
    layerGroup.resizeToFitChildrenWithOption(layer.rect);
}

export function on_test_get_all_symbols(context) {
    const document = context.document;
}

export function on_test_mark_symbol_name(context) {
    const document = context.document;
    const selection = context.selection;
    const instance = selection[0];

    console.log(instance.symbolMaster().name());
}