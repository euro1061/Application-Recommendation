FROM node:16-buster-slim as build_stage
WORKDIR /project
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build_stage /project/build /usr/share/nginx/html
