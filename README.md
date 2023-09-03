# Brand Website

This project is a single-page web application that implements a design provided in [Figma](https://www.figma.com/file/Am0lCt8ic0YRfLflLq8Klb/Bulma-CSS-UI-Kit---Front-end-Test?type=design&node-id=305-12037&mode=design&t=agqSeL7vmFweNj1q-0).

## Getting Started

Follow these instructions to get the project up and running on your local machine.

```bash
git clone https://github.com/sabeloeric/brand_website
```

```bash
npm install
```

```bash
npm start
```

## Usage

Once the project is running, you can interact with it by opening your web browser and accessing the URL http://localhost:3000. The web page should display the responsive layout and case studies slider as per the provided design.

## API Integration
The project fetches case studies data from the following API endpoint:

API Endpoint: 
- https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws

The case studies are retrieved and displayed on the web page as a slider.

Incase the fetch fails, the case studies will be loaded from a local file to ensure we always display them.


## Deployed on Vercel

This project has been deployed using Vercel and is available on this link:

- [Website link](https://brand-website-three.vercel.app/)