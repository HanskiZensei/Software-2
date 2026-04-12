from flask import Flask
import mysql.connector
app = Flask(__name__)

yhteys = mysql.connector.connect(
    host='127.0.0.1',
    port=3306,
    database='flight_game',
    user='hade',
    password='New_password.',
    autocommit=True
)
@app.route('/kenttä/<kentta>')
def lentsikka(kentta):
    kursori = yhteys.cursor(dictionary=True)
    sql = "Select ident, name, municipality FROM airport WHERE ident = %s"
    kursori.execute(sql, (kentta,))
    tulos = kursori.fetchone()

    if tulos:
        return {
            "ICAO": tulos["ident"],
            "Name": tulos["name"],
            "Municipality": tulos["municipality"]
        }
    else:
        return {"error": "Airport not found"}, 404

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)
