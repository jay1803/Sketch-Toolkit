import { newTextLayer, newShapeGroup, newColorFromString, setAttribute_forLayer, newArtboard, newLayerGroup, newFont, newTextStyle, newShape } from "./models";

export function on_test_new_text_layer(context) {
    const document = context.document;
    var font = newFont("PingFang SC");
    var color = newColorFromString("#000000");
    var textStyle = newTextStyle(font, color);
    var text = newTextLayer(textStyle);
    document.currentPage().addLayer(text);
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

function square(rect) {
    for (var x = rect.x; x < rect.width; x += (rect.width / 2)) {
        var shapeRect = {
            x: x,
            y: y,
            width: rect.width / 2,
            height: rect.height / 2,
        };
        var shape = newShape('rectangle', shapeRect);
        if (shapeRect.x == rect.x && shapeRect.y == rect.y) {
            shape.removeCurvePointAtIndex(1);
        }
    }
}

export function on_test_generate_shapes(context) {
    const document = context.document;
    const page = document.currentPage();
    const rect = {
        x: 0,
        y: 0,
        width: 400,
        height: 400
    };
    var artboard = newArtboard(rect);
    page.addLayer(artboard);
    var shapeRect = {
        x: 0,
        y: 0,
        width: 100,
        height: 100
    };
    for (var y = shapeRect.y; y < rect.height; y += shapeRect.height) {
        for (var x = shapeRect.x; x < rect.width; x += shapeRect.width) {
            shapeRect.x = x;
            shapeRect.y = y;
            var shape1 = newShape('rectangle', shapeRect);
            shape1.removeCurvePointAtIndex(1);
            var shape2 = newShape('rectangle', shapeRect);
            shape2.removeCurvePointAtIndex(3);
            var layer1 = newShapeGroup(shape1);
            var layer2 = newShapeGroup(shape2);
            artboard.addLayer(layer1);
            artboard.addLayer(layer2);
        }
        shapeRect.x = 0;
    }
}