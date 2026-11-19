# Blog Demo Frontend

This project exists to test the TypeScript SDK automatically generated from the blog-rack project and
all of the plumbing involved.

## Available Scripts

To run this locally, you need a backend running.
You can run the backend in the [blog-rack](https://github.com/foobara-demo/blog-rack)
project with `rackup` there.

You can start this frontend with:

```bash
npm run dev
```

## Regenerating the TypeScript SDK

You can regenerate the TypeScript SDK by running:

```bash
foob g typescript-remote-commands --auto-dirty-queries --manifest-url http://localhost:9292/manifest
```

## License

This project is dual licensed under your choice of the Apache-2.0 license and the MIT license.
Please see LICENSE.txt for more info.
