# Rasa NLU Model Trainer

A small Express app for sending JSON training data to the legacy Rasa NLU HTTP API. It is useful when working with older Rasa projects that still expose the `/train` endpoint.

This project targets the pre-1.0 Rasa NLU API. It does not support current YAML training files or the modern unified `rasa` CLI.

## Run it locally

You need Node.js and a Rasa NLU server listening on port `5000`.

```bash
npm install
npm start
```

Open `http://localhost:3000`, paste JSON training data into the form, and submit it. `trainData.json` is included as a sample.

If Rasa is running elsewhere, set its base URL before starting the app:

```bash
RASA_URL=http://localhost:5000 npm start
```

On PowerShell:

```powershell
$env:RASA_URL = "http://localhost:5000"
npm start
```

The web app port can be changed with the `PORT` environment variable.

## Project layout

- `server.js` - Express server and call to the Rasa training endpoint
- `views/index.ejs` - training form and result view
- `public/style.css` - page styling
- `trainData.json` - example JSON training data

## Limitations

- JSON input only; Markdown and YAML training formats are not handled.
- The backend uses the retired `request` package because this repository preserves an older Rasa integration.
- There is no authentication. Run it locally or behind a trusted proxy.
