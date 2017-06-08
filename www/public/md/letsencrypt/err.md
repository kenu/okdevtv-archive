```
certbot-auto certonly --renew-by-default -a standalone -d okky.kr
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Renewing an existing certificate
Performing the following challenges:
tls-sni-01 challenge for okky.kr
Waiting for verification...
Cleaning up challenges
Failed authorization procedure. okky.kr (tls-sni-01): urn:acme:error:connection :: The server could not connect to the client to verify the domain :: Failed to connect to 111.92.191.51:443 for tls-sni-01 challenge

IMPORTANT NOTES:
 - The following errors were reported by the server:

   Domain: okky.kr
   Type:   connection
   Detail: Failed to connect to 111.92.191.51:443 for tls-sni-01
   challenge

   To fix these errors, please make sure that your domain name was
   entered correctly and the DNS A record(s) for that domain
   contain(s) the right IP address. Additionally, please check that
   your computer has a publicly routable IP address and that no
   firewalls are preventing the server from communicating with the
   client. If you're using the webroot plugin, you should also verify
   that you are serving files from the webroot path you provided.
```
