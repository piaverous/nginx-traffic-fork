## Fork GET requests from a main server to a secondary one

### Getting started

Easy as 1-2-3, just make sure you have `docker` locally, and run `docker-compose up` !

### Testing it works

Look at the logs you get for both containers, `app1` and `app2` when making requests: 
* `curl localhost/potato` produces a log for both apps
* `curl -X POST localhost/potato` produces logs for app1 only!

🎉
