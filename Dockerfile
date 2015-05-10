FROM mhart/alpine-iojs-base
COPY . /jcpst
EXPOSE 3000
CMD [ "iojs", "/jcpst/bin/www" ]
