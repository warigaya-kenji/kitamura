FROM amazonlinux:2

RUN yum install -y \
    groff \
    unzip \
    wget \
    zip

RUN curl --silent --location https://rpm.nodesource.com/setup_15.x | bash -
RUN yum -y install nodejs

RUN export

RUN npm -g config set registry https://registry.npmjs.org/ \
    && npm config set maxsockets=10 \
    && npm cache clean --force \
    && npm install -g tslint typescript \
    && npm install -g @vue/cli
