FROM python:3.6-slim-stretch as base

ENV PIP_DISABLE_PIP_VERSION_CHECK on
# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE 1
# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED 1


FROM base as dependencies

RUN python -m venv /opt/venv
# Make sure we use the virtualenv:
ENV PATH="/opt/venv/bin:$PATH"

COPY .requirements.txt ./

RUN pip install -U pip
RUN pip install -r requirements.txt


FROM base as final

# copy installed deps from dependencies image
COPY --from=dependencies /opt/venv /opt/venv
# Make sure we use the virtualenv:
ENV PATH="/opt/venv/bin:$PATH"

EXPOSE 8000
WORKDIR /app
COPY . /app/

CMD ["python", "manage.py", "runserver"]