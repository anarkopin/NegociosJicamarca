FROM python:3.10.11-alpine3.17

WORKDIR /app

RUN apk update \
    && apk add --no-cache gcc musl-dev postgresql-dev python3-dev libffi-dev \
    && pip install --upgrade pip

COPY ./requirements.txt ./ 

RUN pip install -r requirements.txt


RUN apk add --no-cache bash
COPY ./ ./

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000", "--reload"]
