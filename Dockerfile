# Usa una imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente (como index.js, etc.)
COPY . .

# Expone el puerto 3000 para que Docker pueda acceder a él
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
