(function(){

    const $ = el => document.querySelector(el);

    let width,height,stage,layer,rect,square,circle,shape;

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

    // Adding Shapes
    // Adding rect
    square = $('#launch-square');
    function square(x,y,width,height,fill,stroke='white',strokeWidth=0.001){
        return new Konva.Rect({
            x:x,
            y:y,
            width:width,
            height:height,
            fill:fill,
            stroke:stroke,
            strokeWidth:strokeWidth,
        });
    }
    square.addEventListener('click', (e)=>{
        p = e.currentTarget;
        // layer.add(square());
        alert(p);
    },false);


    circle = $('#circle');
    shape = $('#shape');
})();