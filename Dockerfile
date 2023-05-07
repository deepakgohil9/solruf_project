FROM node:16

WORKDIR /app
COPY . .
RUN npm install
RUN npx tsc
EXPOSE 3000
CMD [ "node", "build/app.js" ]
