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

```
traceroute okky.kr
traceroute to okky.kr (111.92.191.51), 64 hops max, 52 byte packets
 1  172.20.10.1 (172.20.10.1)  3.338 ms  3.036 ms  2.775 ms
 2  * * *
 3  10.51.140.97 (10.51.140.97)  101.625 ms  62.803 ms  33.812 ms
 4  59.153.222.17 (59.153.222.17)  35.836 ms  62.802 ms  44.849 ms
 5  103.37.29.41 (103.37.29.41)  84.327 ms  88.064 ms  81.857 ms
 6  111.91.235.17 (111.91.235.17)  82.072 ms  113.655 ms  83.628 ms
 7  111.91.235.30 (111.91.235.30)  101.914 ms
    103.37.31.26 (103.37.31.26)  95.253 ms  99.754 ms
 8  ix-xe-7-1-5-2-0.tcore1.hk2-hong-kong.as6453.net (180.87.112.181)  66.054 ms  66.079 ms  57.697 ms
 9  116.0.67.101 (116.0.67.101)  80.005 ms  87.213 ms  93.634 ms
10  1.213.148.153 (1.213.148.153)  123.632 ms  165.784 ms  123.905 ms
11  61.42.201.129 (61.42.201.129)  122.052 ms
    1.213.145.213 (1.213.145.213)  138.786 ms
    210.120.102.241 (210.120.102.241)  131.815 ms
12  1.213.147.254 (1.213.147.254)  109.576 ms
    61.43.235.210 (61.43.235.210)  131.142 ms
    1.208.105.42 (1.208.105.42)  117.229 ms
13  203.233.15.182 (203.233.15.182)  108.993 ms
    1.213.104.245 (1.213.104.245)  131.755 ms
    203.233.17.210 (203.233.17.210)  137.232 ms
14  211.172.248.6 (211.172.248.6)  148.963 ms
    182.162.64.142 (182.162.64.142)  135.361 ms
    110.45.128.14 (110.45.128.14)  613.491 ms
15  182.162.152.18 (182.162.152.18)  128.110 ms
    182.162.152.78 (182.162.152.78)  149.835 ms  119.546 ms
16  211.172.248.182 (211.172.248.182)  120.736 ms  135.266 ms  115.843 ms
17  * * *
18  * * *
19  * * *
20  * * *
21  * * *
22  * * *
23  * * *
24  * * *
25  * * *
26  * * *
27  * * *
28  * * *
29  * * *
30  * * *
31  * * *
32  * * *
33  * * *
34  * * *
35  * * *
36  * * *
37  * * *
38  * * *
39  * * *
40  * * *
41  * * *
42  * * *
43  * * *
44  * * *
45  * * *
46  * * *
47  * * *
48  * * *
49  * * *
50  * * *
51  * * *
52  * * *
53  * * *
54  * * *
55  * * *
56  * * *
57  * * *
58  * * *
59  * * *
60  * * *
61  * * *
62  * * *
63  * * *
64  * * *
➜  ~ 
```
