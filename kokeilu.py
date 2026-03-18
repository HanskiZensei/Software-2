class Koira:
    def __init__(self, uusinimi, uusisyntymavuosi):
        self.nimi = uusinimi
        self.syntymavuosi = uusisyntymavuosi
        self.haukahdus =

    def hauku(self, kerrat):
        for _ in range(kerrat):
            print(self.haukahdus)


koira = Koira("Rekku", 2020), "Hau!"
koira2 = Koira("Piski", 2010, "Vuh!")

print(f"Koiran nimi on {koira.nimi}, syntynyt: {koira.syntymavuosi}")
