<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Editor de Imagem</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .editor {
      position: relative;
      width: 600px;
      height: 400px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }
    #backgroundImage {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    .draggable {
      position: absolute;
      cursor: move;
      z-index: 2;
    }
    #textElement {
      font-size: 24px;
      color: black;
    }
    .controls {
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <h2>Editor de Imagem</h2>

  <div class="editor" id="editor">
    <canvas id="canvas" width="600" height="400" style="display: none;"></canvas>
    <img id="backgroundImage" src="" alt="Background">
    <div class="draggable" id="textElement">Texto Editável</div>
    <img src="" id="profileImage" class="draggable" width="100" height="100" alt="Foto de Perfil">
  </div>

  <div class="controls">
    <label for="bgUpload">Alterar Imagem de Fundo:</label>
    <input type="file" id="bgUpload" accept="image/*"><br>

    <label for="textInput">Alterar Texto:</label>
    <input type="text" id="textInput" value="Texto Editável"><br>

    <label for="textColor">Cor do Texto:</label>
    <input type="color" id="textColor" value="#000000"><br>

    <label for="profileUpload">Alterar Foto de Perfil:</label>
    <input type="file" id="profileUpload" accept="image/*"><br>

    <button id="generateBase64">Gerar Base64</button>
  </div>

  <script>
    // Função para permitir arrastar os elementos
    function makeDraggable(element) {
      element.onmousedown = function(event) {
        let shiftX = event.clientX - element.getBoundingClientRect().left;
        let shiftY = event.clientY - element.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
          element.style.left = pageX - shiftX + 'px';
          element.style.top = pageY - shiftY + 'px';
        }

        moveAt(event.pageX, event.pageY);

        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        element.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          element.onmouseup = null;
        };
      };

      element.ondragstart = function() {
        return false;
      };
    }

    // Iniciar elementos como arrastáveis
    const textElement = document.getElementById('textElement');
    const profileImage = document.getElementById('profileImage');
    makeDraggable(textElement);
    makeDraggable(profileImage);

    // Alterar imagem de fundo
    document.getElementById('bgUpload').addEventListener('change', function(e) {
      const reader = new FileReader();
      reader.onload = function(event) {
        document.getElementById('backgroundImage').src = event.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    });

    // Alterar texto e cor do texto
    document.getElementById('textInput').addEventListener('input', function(e) {
      textElement.textContent = e.target.value;
    });
    document.getElementById('textColor').addEventListener('input', function(e) {
      textElement.style.color = e.target.value;
    });

    // Alterar foto de perfil
    document.getElementById('profileUpload').addEventListener('change', function(e) {
      const reader = new FileReader();
      reader.onload = function(event) {
        document.getElementById('profileImage').src = event.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    });

    // Função para gerar base64
    document.getElementById('generateBase64').addEventListener('click', function() {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      const bgImage = document.getElementById('backgroundImage');
      const profileImg = document.getElementById('profileImage');

      // Desenhar imagem de fundo
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (bgImage.src) {
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
      }

      // Desenhar texto
      const textRect = textElement.getBoundingClientRect();
      ctx.font = `${textElement.style.fontSize} Arial`;
      ctx.fillStyle = textElement.style.color;
      ctx.fillText(textElement.textContent, textRect.left - canvas.offsetLeft, textRect.top - canvas.offsetTop + 24);

      // Desenhar imagem de perfil
      const profileRect = profileImg.getBoundingClientRect();
      if (profileImg.src) {
        ctx.drawImage(profileImg, profileRect.left - canvas.offsetLeft, profileRect.top - canvas.offsetTop, 100, 100);
      }

      // Converter para base64
      const base64 = canvas.toDataURL();
      console.log(base64);
      alert('Imagem convertida para Base64. Veja o console para o resultado.');
    });
  </script>

</body>
</html>
