  Scientific Calculator (React + Make.com)

# Scientific Calculator (React + Make.com)

This project is a **scientific calculator** built with **React**, utilizing a webhook powered by **Make.com** to process and evaluate mathematical expressions. It supports basic arithmetic, trigonometric, logarithmic, and other advanced mathematical operations.

## Features

*   Basic arithmetic: Addition, subtraction, multiplication, division
*   Advanced operations: Square, square root, exponents, trigonometric functions (sin, cos, tan), logarithmic functions (log, ln)
*   Input validation and spacing for better readability
*   External API/webhook integration using **Make.com** to evaluate expressions

## Technologies Used

*   React (Frontend)
*   Make.com (Webhook for backend processing)
*   JavaScript (Expression handling)
*   Tailwind CSS (Styling)

## Setup Instructions

1.  Clone this repository: `git clone https://github.com/your-username/scientific-calculator.git`
2.  Navigate to the project directory: `cd scientific-calculator`
3.  Install dependencies: `npm install`
4.  Create a `.env` file and add your Make.com webhook URL as an environment variable:

```
REACT_APP_WEBHOOK_URL=your-make-webhook-url
```

6.  Start the app: `npm start`
7.  To build for production: `npm run build`

## Make.com Webhook Integration

This project uses a **Make.com** webhook to process mathematical expressions. The React app sends an expression to the webhook, which evaluates it using a mathematical library and returns the result. The result is then displayed in the app.

Make sure to set up a scenario in Make.com that processes the incoming request and calculates the result.

### Webhook Example

```

    const math = require('mathjs');

    function handleExpression(expression) {
      try {
        const result = math.evaluate(expression);
        return { result };
      } catch (error) {
        return { result: "Error" };
      }
    }
  
```

## Deployment on Vercel

1.  Ensure the **Make.com** webhook URL is publicly accessible.
2.  Deploy your app to Vercel using either:

*   **Vercel CLI**: Run `vercel` in your terminal.
*   **GitHub Integration**: Push your project to GitHub and connect it to Vercel.

4.  Set your webhook URL as an environment variable in Vercel's dashboard (Settings > Environment Variables).

## Future Enhancements

*   Add more advanced mathematical operations
*   Improve UI/UX
*   Enhance error handling for invalid expressions

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.