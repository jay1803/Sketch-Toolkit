import { getLayers_byName, selectLayer } from "../functions";



export function select_same_name_layers_on_page (context) {
    const document = context.document;
    const selection = context.selection;

    if (selection.length < 1) {
        document.showMessage("至少选一个图层")
        return false;
    }

    selection.forEach(layer => {
        var layerList = getLayers_byName(layer.name());
        layerList.forEach(layer => {
            selectLayer(layer);
        });
    });
}