import { selectLayer, getAllLayers, getAllSameTypeLayers } from "./functions";



export function select_namesake_layers(context) {
    const document = context.document;
    const selection = context.selection;

    if (selection.length < 1) {
        document.showMessage("至少选一个图层");
        return false;
    }
    
    const layerList = getAllLayers(document.currentPage());
    selection.forEach(selectedLayer => {
        layerList.forEach(layer => {
            if ((layer.name() + "") == (selectedLayer.name() + "")) {
                selectLayer(layer);
            }
        });
    });
}

export function select_namesake_and_homogeneous_layers(context) {
    const document = context.document;
    const selection = context.selection;

    if (selection.length < 1) {
        document.showMessage("至少选一个图层");
        return false;
    }
    const layerList = getAllSameTypeLayers(document.currentPage(), selectedLayer.class());
    selection.forEach(selectedLayer => {
        layerList.forEach(layer => {
            if ((layer.name() + "") == (selectedLayer.name() + "")) {
                selectLayer(layer);
            }
        });
    });
}