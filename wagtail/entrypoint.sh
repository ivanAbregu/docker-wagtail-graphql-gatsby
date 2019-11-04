#!/bin/sh
set -e
./manage.py makemigrations
./manage.py migrate
# gunicorn web.wsgi:application --bind 0.0.0.0:8000 --workers 3
./manage.py runserver 0:8000