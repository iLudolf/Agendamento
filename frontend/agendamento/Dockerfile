
FROM node:14-alpine AS build
 
WORKDIR /usr/app
 
COPY package*.json ./
 
RUN npm install
 
COPY . . 
 
RUN echo 'REACT_APP_API ="VAR_URL_API"' > .env.production && \
    npm run build

FROM nginx:1.17.6-alpine
ENV URL_API="http://localhost.org"
COPY --from=build /usr/app/build/ /usr/share/nginx/html/
# COPY entrypoint.sh /usr/local/bin/

EXPOSE 80

# ENTRYPOINT [ "/usr/local/bin/entrypoint.sh" ]
CMD [ "nginx", "-g", "daemon off;"]


## Documentação
# https://somatorio.org/pt-br/post/docker_react_multi_ambiente/