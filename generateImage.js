const { createCanvas, loadImage } = require('canvas');

async function generateImage(jsonData) {
    // Carregar a imagem de fundo primeiro para obter suas dimensões
    const bgImage = await loadImage($('jsonData.backgroundImage'));

    // Definir o tamanho do canvas com base no tamanho da imagem de fundo
    const width = bgImage.width;
    const height = bgImage.height;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Limpar o canvas
    ctx.clearRect(0, 0, width, height);

    // Desenhar a imagem de fundo
    ctx.drawImage(bgImage, 0, 0, width, height);

    // Desenhar o texto
    if (jsonData.text) {
        const text = jsonData.text;
        ctx.font = `${text.fontSize} ${text.fontFamily}`;
        ctx.fillStyle = text.color;
        ctx.fillText(text.content, parseInt(text.position.left), parseInt(text.position.top));
    }

    // Desenhar a imagem de perfil
    if (jsonData.profileImage) {
        const profileImage = await loadImage(jsonData.profileImage.src);
        ctx.drawImage(profileImage, parseInt(jsonData.profileImage.position.left), parseInt(jsonData.profileImage.position.top), 100, 100);
    }

    // Converter para Buffer de imagem
    const buffer = canvas.toBuffer('image/png');

    return buffer;
}

// Pega o JSON vindo do nó anterior no fluxo do n8n
const jsonData = $('jsonData');  // O JSON completo vindo do nó anterior

return generateImage(jsonData)
  .then(buffer => {
    return {
      binary: {
        data: {
          mimeType: 'image/png',
          fileName: 'generated-image.png',
          data: buffer.toString('base64'),
        },
      },
    };
  })
  .catch(err => {
    return { error: err.message };
  });
