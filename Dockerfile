# Dockerfile
# This Dockerfile assumes that the Angular application has already been compiled to the dist/ folder of the project's root.

FROM nginx:1.13

# Copy the compiled app into nginx's static files folder
COPY dist/ /usr/share/nginx/html

# Copy the local nginx config file to the default config file used by nginx
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
