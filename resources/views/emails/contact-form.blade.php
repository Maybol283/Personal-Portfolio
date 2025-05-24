<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
        }

        h1 {
            color: #ff204e;
        }

        .field {
            margin-bottom: 10px;
        }

        .label {
            font-weight: bold;
        }

        .message {
            background: #fff;
            padding: 15px;
            border-radius: 3px;
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>New Contact Form Submission</h1>

        <div class="field">
            <span class="label">Name:</span> {{ $data['firstName'] }} {{ $data['lastName'] }}
        </div>

        <div class="field">
            <span class="label">Email:</span> {{ $data['email'] }}
        </div>

        @if(isset($data['phoneNumber']) && $data['phoneNumber'])
        <div class="field">
            <span class="label">Phone:</span> {{ $data['phoneNumber'] }}
        </div>
        @endif

        <div class="message">
            <span class="label">Message:</span>
            <p>{{ $data['message'] }}</p>
        </div>
    </div>
</body>

</html>