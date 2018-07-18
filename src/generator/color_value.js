const sketch = require('sketch/dom')
const Text = require('sketch/dom').Text

function generate_color(layer) {
    if (layer.type == 'Shape') {
        const colorValue = layer.style.fills[0].color.toUpperCase().slice(0, 7)
        const frameX = layer.frame.x
        const frameY = layer.frame.y
        const frameW = layer.frame.width
        const frameH = layer.frame.height

        const text = new Text({
            parent: layer.parent,
            text: colorValue,
            alignment: Text.Alignment.right,
            frame: {
                x: frameX + 8,
                y: frameY + 11,
                width: frameW - 16,
                height: frameH,
            }
        })
        text.name = 'color_value'
        text.systemFontSize = 14
    }
}

export function on_color_value(context) {
    const document = sketch.fromNative(context.document)
    const page = document.selectedPage
    if (page.layers[0].type == 'Artboard') {
        var layers = page.layers[0].layers
    } else {
        var layers = page.layers
    }
    for (var index in layers) {
        const layer = layers[index]
        if (layer.type === String(sketch.Types.Shape)) {
            generate_color(layer)
        }
    }
}