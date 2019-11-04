FROM python:3
MAINTAINER Ivan Abregu
ENV PYTHONUNBUFFERED 1

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN pip install -r /app/requirements.txt
RUN pip install gunicorn
