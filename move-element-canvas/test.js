

    const canvas = document.querySelector('canvas');
    var context = canvas.getContext("2d");
        canvas.width = innerWidth;
        canvas.height = innerHeight;

        //  the elelments positions an datas

        var fixedSquare = { x: 100, y: 100, size: 200, color: "red" };
        var movingSquare = { x: 900, y: 200, size: 50, color: "blue" };
        // end

        var isdrag = false;


        window.addEventListener('mousedown', dragstart);
        window.addEventListener('mousemove', drag);
        window.addEventListener('mouseup', dragend);























        function dragstart(e) {
            isdrag = true;
            drag(e);
        }


        function drag(e) {
            if (!isdrag) {
                return;
            }


            movingSquare.x = e.offsetX;
            movingSquare.y = e.offsetY;
            
            if (checkCollision()) {
                fixedSquare.color = "green";
                movingSquare.color = 'black';
            } else {
                movingSquare.color = 'blue'
                fixedSquare.color = "red";
            }
            
            draw();                          


        }

        function dragend() {
            isdrag = false
        }



        // move with keyboard


          document.addEventListener("keydown", function (e) {


            if (checkCollision()) {
                fixedSquare.color = "green";
                movingSquare.color = 'black';
            } else {
                movingSquare.color = 'blue'
                fixedSquare.color = "red";
            }

            if (e.key === "ArrowUp") {
               movingSquare.y -= 10;
            } else if (e.key === "ArrowDown") {
                movingSquare.y += 10;
            } else if (e.key === "ArrowLeft") {
                movingSquare.x -= 10;
            } else if (e.key === "ArrowRight") {
                movingSquare.x += 10;
            }
            
            draw();
        });


        // end

        function checkCollision() {
            if (movingSquare.x < fixedSquare.x + fixedSquare.size &&
                movingSquare.x + movingSquare.size > fixedSquare.x &&
                movingSquare.y < fixedSquare.y + fixedSquare.size &&
                movingSquare.y + movingSquare.size > fixedSquare.y) {
                return true;
            } else {    
                return false;
            }
        }


        function draw() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            context.fillStyle = fixedSquare.color;
            context.fillRect(fixedSquare.x, fixedSquare.y, fixedSquare.size, fixedSquare.size);
            
            context.fillStyle = movingSquare.color;
            context.fillRect(movingSquare.x, movingSquare.y, movingSquare.size, movingSquare.size);
        }
        
        draw();
