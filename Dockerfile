FROM node:18
WORKDIR /app
COPY package.json server.js ./
COPY public/ ./public/
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node", "server.js"]
