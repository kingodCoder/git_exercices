(function(){

    const $ = el => document.querySelector(el);

    let card,width,height,stage,layer,squareBtn,circleBtn,shapeBtn;

    card = $('#card');
    // height = card.offsetHeight;
    height = card.clientHeight;
    // width = card.offsetWidth;
    width = card.clientWidth;

    stage = new Konva.Stage({
        container: 'card',
        width: 400,
        height: 250,
    });
    layer = new Konva.Layer();
    // rect = new  Konva.Rect({
    //     x: 20,
    //     y: 20,
    //     width: 100,
    //     height: 50,
    //     fill: 'red',
    //     stroke: 'black',
    //     strokeWidth: 4,
    // });
    // layer.add(rect);
    stage.add(layer);

    // Meta datas
    // Square
    squareBtn = $('#square');
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

    // Circle
    circleBtn = $('#circle');
    function circle(x,y,r,fill,stroke='white',strokeWidth=0.001){
        return new Konva.Circle({
            x:x,
            y:y,
            radius:r,
            fill:fill,
            stroke:stroke,
            strokeWidth:strokeWidth,
        });
    }

    // Creating a database
    /*const request = window.indexedDB.open('card', 1);

    request.onerror = (event) => {
        console.error('Erreur lors de l\'ouverture de la base de données:', event.target.error);
    };

    request.onsuccess = (event) => {
        const db = event.target.result;

        // Créer un objet de transaction pour effectuer des opérations sur la base de données
        const transaction = db.transaction(['tasks'], 'readwrite');
        const objectStore = transaction.objectStore('tasks');

        // Créer une fonction pour ajouter une tâche
        function addTask(task) {
            const request = objectStore.add(task);
            request.onsuccess = (event) => {
                console.log('Tâche ajoutée avec succès:', event.target.result);
            };
        }

        // Créer une fonction pour récupérer toutes les tâches
        function getAllTasks() {
            const getAllRequest = objectStore.getAll();
            getAllRequest.onsuccess = (event) => {
                const tasks = event.target.result;
                // Afficher les tâches dans l'interface utilisateur
                console.log('Tâches récupérées:', tasks);
            };
        }

        // Exemple d'utilisation :
        addTask({ text: 'Faire les courses', completed: false });
        getAllTasks();
    };*/

    // Adding Shapes
    // Adding rect
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
    circleBtn.addEventListener('click', (e)=>{
        let group = new Konva.Group(),
        c,
        x = Number($('#xcpos').value),
        y = Number($('#ycpos').value),
        cr = Number($('#cr').value),
        cf = $('#cf').value,
        cs = $('#cs').value,
        csw = Number($('#csw').value);
        c = circle(x,y,cr,cf,cs,csw);
        c.draggable('true');
        group.add(c);
        layer.add(group);
    },false);

    // Other shapes
    shape = $('#shape');
})();