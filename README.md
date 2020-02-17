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

# 如果无效：
sudo docker-compose up -d
```

## meet ubuntu
```shell
sudo snap install docker
sudo snap start docker
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