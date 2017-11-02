#!/bin/bash

sudo rm -rf /home/cp/fe
cd /home/cp
sudo git clone -o master /home/git/repositories/fe.git
cd /home/fe_bk
sudo chown -R fe:fe /home/cp/fe
cp -a /home/cp/fe/* /home/fe_bk
#sudo service nginx restart
#echo "Update done!"
