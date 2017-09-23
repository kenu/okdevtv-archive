# Security

## Process
* Check login trials
  * `last | more`
  * `tail -300f /var/log/secure`

* Check hacked file update time
  * use `git` which easily shows modified file
  * use log monitoring tool such as Elastic Stack

* Archive it for later analysis
  * `tar cvfz ~/archive.tgz hacked_file1 path/to/hacked_file2`
  * delete them
  * `git reset --hard`

* Image Capture or record screen
  * QuickTime
  * Obsproject

## Useful code
* monitoring status change
```
while true; do git status; date; sleep 5; done
```  
