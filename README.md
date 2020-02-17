# docker-shadowsocks
> Docker for shadowsocks.

## get-start
```shell
cd ~
mkdir github
cd github
git clone https://github.com/afeiship/docker-shadowsocks.git
cd docker-shadowsocks
docker-compose up -d
```

## up/down/rmi
```shell
sudo docker ps
sudo docker images
sudo docker-compose down 
sudo docker-compose up -d
sudo docker-compose down && docker-compose up -d
```

## check if started
```shell
sudo lsof -i -P -n | grep 8388
```

## free-shadowsocks:
+ https://free-ss.site/