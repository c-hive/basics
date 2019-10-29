# syntax=docker/dockerfile:experimental

FROM ruby:2.6.3

COPY Gemfile ./

RUN --mount=type=cache,target=/usr/local/bundle bundle check || bundle install
