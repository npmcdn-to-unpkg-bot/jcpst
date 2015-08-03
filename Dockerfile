FROM mhart/alpine-iojs-base
COPY . /public
EXPOSE 8080
CMD [ "./node_modules/http-server/bin/http-server" ]

