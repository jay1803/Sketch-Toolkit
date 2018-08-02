import { getShapeAttr } from "./models";


export function set_layer_index_name(context) {
    const document = context.document;
    const selection = context.selection;
    if (selection.length < 1) {
        document.showMessage("至少选一个图层");
        return false;
    }
    selection.forEach(layer => {
        var index = getShapeAttr(layer, "index");
        var content;
        if (layer.parentForInsertingLayers().containedLayersCount() - index < 10) {
            content = "0" + (layer.parentForInsertingLayers().containedLayersCount() - index).toString(10);
        } else {
            content = (layer.parentForInsertingLayers().containedLayersCount() - index).toString(10);
        }

        layer.setName(content);
    });
}