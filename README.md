Guest-Image-Toggle V1
===========


Script para permitir a los visitantes del foro, ver las iamgenes en posts aunque no esten registrados. Es en compliance
con Google (particularmente AdSense) debido a que no se ejerce control estricto sobre imagenes +18.

Esta version usa jQuery para wrapear las imagenes ya que el foro simplmenete inserta el tag <img> sin ningun pariente.
- Comprueba si jQuery ya ha sido cargado, en caso de que no, lo intenta cargar.
- Llama a toggleImagenes(); que parsea todas las imagenes dentro de los posts, y añade un boton para mostrar cada una de ellas.
