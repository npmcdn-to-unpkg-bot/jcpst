FROM mhart/alpine-iojs
COPY . .
EXPOSE 8080
CMD [ "npm" "start" ]

