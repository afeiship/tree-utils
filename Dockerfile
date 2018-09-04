FROM alpine:latest
MAINTAINER 1290657123@qq.com
RUN if [ $(wget -qO- ipinfo.io/country) == CN ]; then echo "http://mirrors.aliyun.com/alpine/latest-stable/main/" > /etc/apk/repositories ;fi \
    && apk add --no-cache py-pip \
    && pip install shadowsocks \
    && apk --no-cache del build-base \
    && rm -rf /var/cache/apk/* ~/.cache /tmp/libsodium
ENTRYPOINT ["/usr/bin/ssserver"]