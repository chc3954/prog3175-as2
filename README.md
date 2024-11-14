# prog3175-as2

Name: Hyunchul Cho (8752831)

Github Repo: https://github.com/chc3954/prog3175-as2

## To run this app

1. Install the required dependencies: `npm install`
2. Start the server: `npm start`
3. Then, the server will start running on `http://localhost:3000`

## API Endpoints

### Get All Times of Day

- URL: GET /api/timesOfDay
- Response:

```
["Morning", "Afternoon", "Evening"]
```

### Get All Languages

- URL: GET /api/languages
- Response:

```
["English", "French", "Spanish"]
```

### Greet

- URL: POST /api/greet
- Request body (example):

```
{
  "timeOfDay": "Morning",
  "language": "English",
  "tone": "Casual"
}
```

- Response:

```
{
  "greetingMessage": "Good morning!"
}
```
