# Twitter card with like action & push update using Sever Sent Events

This is a simple example of how to use Server Sent Events to push updates to a client. It updates the Twitter card with the number of likes. The client can also post a like to the server.

## How to run

1. Install the dependencies with `npm install`
2. Run the React app in `dev` mode with `npm run dev`

## How it works

Assuming you have the backend running from [this repo](https://github.com/patrickstolc/distributed-counter), with the default configuration, you can open the React app using the following URL

```bash
http://localhost:5173/?userId={userId}
```

Where `{userId}` is the user id you want to use. The user id is used to identify the user and to keep track of the likes.
