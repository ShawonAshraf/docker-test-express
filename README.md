# docker-test-express

Code for [Docker এবংএকটি ExpressJS অ্যাপ্লিকেশন](https://medium.com/@sashraf94/docker-এবংএকটি-expressjs-অ্যাপ্লিকেশন-1d49a605246a) on Medium.

# Running on your computer
- Install Docker for your OS
- Clone the repo
- run the following
```bash
docker build -t docker-test-express .
```

```bash
docker container run --name ourapp -p 3000:3000 docker-test-express
```
- Follow the rest from the Medium post.
