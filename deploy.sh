#!/bin/sh
source /home/dev/.zshrc

git pull;

SRC=./www
DEST=/home/dev/local/tomcat/webapps/ROOT/

cp -rf $SRC/* $DEST

cd $DEST

npm install

pm2 restart all
