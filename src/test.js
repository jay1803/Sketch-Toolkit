import { newTextLayer, newMSColor_fromHEX } from "./models";

export function on_test_new_text_layer(context) {
    const document = context.document;
    var text = {
        "layerName": "name",
        "content": "content",
        "fontSize": 14,
        "lineHeight": 20,
        "color": newMSColor_fromHEX("#000000"),
        "fontName": "Menlo-Regular"
    }
    var newText = newTextLayer(text);
    document.currentPage().addLayer(newText)
    console.log(newText)
}