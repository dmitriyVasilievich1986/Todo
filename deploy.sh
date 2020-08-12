docker build -t dj-docker-to-heroku -f Dockerfile .

heroku container:push web -a my-dj-docker


heroku container:release web -a my-dj-docker

heroku run python manage.py migrate -a my-dj-docker
