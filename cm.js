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
    layer.add(rect);
    stage.add(layer);

    // Meta datas
    // Square
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

    // Little Database
    // Ouvrir une base de données nommée 'tasks'
    const request = window.indexedDB.open('card', 1);

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
    };

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
        group.add(sq);
        layer.add(group);
    },false);


    circle = $('#circle');
    shape = $('#shape');
})();