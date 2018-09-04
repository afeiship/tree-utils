# docker-jenkins
> Docker for jenkins.

## get-start:
```shell
cd ~
mkdir github
cd github
git clone https://github.com/afeiship/docker-jenkins.git
cd docker-jenkins
docker-compose up -d
```

## password:
```conf
小版本标签及 Dockerfile
2.19.2
安装软件：Jenkins 2.19.2、vim、openjdk-8-jdk、git、curl、unzip
Jenkins 插件：pipeline、git、svn、role strategy plugin
初始帐号密码：jenkins/jenkins，请注意修改密码。
创建服务时，注意添加 8080 和 50000 端口映射。
```

## demo url:
```conf
http://www.dev.com:8897/
```

## resources:
+ https://www.jianshu.com/p/33896fdaad77
+ https://blog.csdn.net/mmd0308/article/details/77206563?locationNum=6&fps=1