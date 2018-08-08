import { newTextLayer, newShapeGroup, newColorFromString } from "./models";

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
    console.log("STARTING...");
    const document = context.document;
    const rect = {
        x: 0,
        y: 0,
        width: 200,
        height: 200
    };
    var newColor = newColorFromString("#000000");
    var newShape = newShapeGroup(rect, newColor);
    document.currentPage().addLayer(newShape);
    
    console.log(newShape);
}

export function on_test_set_arrtibutes(context) {
    return;
}