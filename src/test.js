import { newTextLayer, newShapeGroup, newColorFromString, setAttribute_forLayer, newArtboard, newLayerGroup, newFont, newTextStyle, newShape, initTextLayer, getAttribute_fromLayer } from "./models";
import { getHex_fromLayer, autoTextColor } from "./functions";

export function on_test_new_text_layer(context) {
    const document = context.document;
    var font = newFont("PingFang SC");
    var color = newColorFromString("#000000");
    var textStyle = newTextStyle(font, color);
    console.log(textStyle);
    var newText = newTextLayer(textStyle);
    console.log(newText);
    document.currentPage().addLayer(newText);
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

function one_square(rect, points) {
    var shape1 = newShape('rectangle', rect);
    var shape2 = newShape('rectangle', rect);
    shape1.removeCurvePointAtIndex(points[0]);
    shape2.removeCurvePointAtIndex(points[1]);
}

function fourSquare(rect) {
    const newRect = {
        x: rect.x,
        y: rect.y,
        width: rect.width / 2,
        height: rect.height / 2
    };
    for (var i = 0; i < 4; i += 1) {
        if (i % 2 == 0) {
            one_square(newRect, [1, 3]);
        } else {
            one_square(newRect, [0, 2]);
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

export function on_test_layout_shapes(context) {
    const document = context.document;
    const page = document.currentPage();
    var rect = {x: 0, y: 0, width: 200, height: 100};
    for (var row = 0; row < 10; row += 1) {
        for (var column = 0; column < 10; column += 1) {
            var index = row * 10 + (9 - column);
            var layer = page.layerAtIndex(index);
            if (layer.frame().constrainProportions()) {
                layer.frame().setConstrainProportions(false);
            }
            if (column < 5) {
                rect.y = row * 300;
                rect.x = column * 200;
            } else {
                rect.y = row * 300 + 100;
                rect.x = (column - 5) * 200;
            }
            setAttribute_forLayer("width", rect.width, layer);
            setAttribute_forLayer("height", rect.height, layer);
            setAttribute_forLayer("x", rect.x, layer);
            setAttribute_forLayer("y", rect.y, layer);
            if (column < 9) {
                setAttribute_forLayer("name", "0" + (column + 1).toString(), layer);
            } else {
                setAttribute_forLayer("name", "10", layer);
            }
        }
    }
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
    const layers = page.layers();
    layers.forEach(layer => {
        if (!(layer instanceof MSShapeGroup)) {
            return false;
        }

        var textLayer = initTextLayer(newText("color_value", '#' + getHex_fromLayer(layer), layer));
        layer.parentForInsertingLayers().addLayer(textLayer);
        textLayer.setTextAlignment(0);
        textLayer.frame().setX(getAttribute_fromLayer("x", layer) + 20);
        textLayer.frame().setY(getAttribute_fromLayer("y", layer) + 60);
    });
}