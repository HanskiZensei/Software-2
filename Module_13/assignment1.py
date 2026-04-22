from flask import Flask

app = Flask(__name__)


@app.route('/alkuluku/<int:integer>')
def alkuluku(integer):
    prime = True
    if integer <= 1:
        prime = False

    else:
        for i in range(2, integer):
            if integer % i == 0:
                prime = False
                break

    if prime:
        print(f"{integer} is a prime number. ")

    return {
        "Number": integer,
        "isPrime": prime
    }


if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)
