FROM nginx

WORKDIR /app

COPY package*.json ./

COPY *.env ./src

COPY ./src ./scr

RUN apt-get update && apt-get install -y gnupg2

RUN  apt install curl -y

RUN curl -fsSL https://deb.nodesource.com/setup_16.x 

RUN  apt-get install -y nodejs npm

# RUN npm run build

# COPY /build /usr/share/nginx/html

EXPOSE 80

RUN node -v
# ENV NODE_ENV="production"

# CMD ["npm run build", "./agendamento"]