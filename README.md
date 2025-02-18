# 🎁 Amigo Secreto - Aplicación Web

## 📌 Descripción

Esta aplicación web permite gestionar y sortear un **Amigo Secreto** de manera fácil y rápida. Los usuarios pueden agregar nombres a una lista y, con un solo clic, realizar un sorteo aleatorio para asignar un amigo secreto a cada participante.  

## 🚀 Funcionalidades

- Agregar amigos a la lista evitando duplicados.  
- Mostrar los amigos ingresados en pantalla.  
- Realizar un sorteo aleatorio de amigos.  
- Mostrar el resultado en tiempo real.  

## 🛠️ Tecnologías utilizadas

- **HTML5** → Estructura de la aplicación.  
- **CSS3** → Diseño y estilos visuales.  
- **JavaScript (ES6)** → Lógica para agregar amigos y sortear.  

---

## 📝 Instalación y uso

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```
2. Accede a la carpeta del proyecto:
   ```bash
   cd amigo-secreto
   ```
3. Abre el archivo `index.html` en tu navegador o utiliza **Live Server** para visualizarlo en tiempo real.

---

## 🎯 Cómo funciona

### **Agregar amigos**
1. Ingresa un nombre en el campo de texto.  
2. Haz clic en **"Añadir"**.  
3. El nombre aparecerá en la lista de amigos.  

### **Realizar sorteo**
1. Asegúrate de haber agregado al menos un nombre.  
2. Haz clic en **"Sortear amigo"**.  
3. El resultado se mostrará en la pantalla.  

---

## 📚 Código principal (`app.js`)

```js
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  if (amigos.includes(nombreAmigo)) {
    alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
    return;
  }

  amigos.push(nombreAmigo);
  inputAmigo.value = "";
  actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<strong>Amigo sorteado: ${amigoSorteado}</strong>`;
}
```

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar el código, corregir errores o añadir nuevas funciones, haz un *fork* del repositorio y envía un *pull request*.  

---

## 📚 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.  

📌 **Autor:** **Renzo Echevarría**  
👉 *Ingeniero Mecánico y Desarrollador Web*  

