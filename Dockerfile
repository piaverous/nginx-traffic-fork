FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
EXPOSE 443
ENTRYPOINT [ "nginx" ]
CMD ["-g", "daemon off;"]
