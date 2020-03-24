FROM node:12-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
EXPOSE 1883 3000
COPY . .
CMD npm start