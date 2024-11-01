(function(){

    const $ = el => document.querySelector(el);

    let width,height,stage,layer,rect;
    width = window.innerWidth;
    height = window.innerHeight;
    stage = new Konva.Stage({
        container: 'card',
        width: 400,
        height: 250,
    });
    layer = new Konva.Layer();
    rect = new  Konva.Rect({
        x: 20,
        y: 20,
        width: 100,
        height: 50,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
    });
    layer.add(rect);
    stage.add(layer);
})();