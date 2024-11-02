(function(){

    const $ = el => document.querySelector(el);

    let width,height,stage,layer,rect,squareBtn,circle,shape;

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
    rect.draggable('true');
    layer.add(rect);
    stage.add(layer);

    // Little database

    // Adding Shapes

    // Adding rect
    squareBtn = $('#launch-square');
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
    squareBtn.addEventListener('click', (e)=>{
        let group = new Konva.Group(),
        sq,
        x = Number($('#xpos').value),
        y = Number($('#ypos').value),
        w = Number($('#sw').value),
        h = Number($('#sh').value),
        f = $('#fs').value,
        s = $('#ss').value,
        sw = Number($('#ssw').value);
        sq = square(x,y,w,h,f,s,sw);
        sq.draggable('true');
        group.add(sq);
        layer.add(group);
    },false);

    // Adding circle
    circle = $('#circle');
    function circle(x,y,radius,fill,stroke='white',strokeWidth=0.001){
        return new Konva.Rect({
            x:x,
            y:y,
            radius:radius,
            fill:fill,
            stroke:stroke,
            strokeWidth:strokeWidth,
        });
    }
    circle.addEventListener('click', (e)=>{
        let group = new Konva.Group(),
        c,
        x = Number($('#xcpos').value),
        y = Number($('#ycpos').value),
        cr = Number($('#cr').value),
        cf = $('#fc').value,
        cs = $('#cs').value,
        csw = Number($('#csw').value);
        c = square(x,y,r,f,s,sw);
        c.draggable('true');
        group.add(c);
        layer.add(group);
    },false);

    //Other shapes
    shape = $('#shape');
})();