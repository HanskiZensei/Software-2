import random
class Car:
    def __init__(self, license_plate, maximum_speed):
        self.license_plate = license_plate
        self.maximum_speed = maximum_speed
        self.current_speed = 0
        self.travelled_distance = 0

    def accelerate(self, amount):
        new_speed = self.current_speed + amount
        if new_speed > self.maximum_speed:
            new_speed = self.maximum_speed
        elif new_speed < 0:
            new_speed = 0
        self.current_speed = new_speed

    def drive(self, hours):
        hour = hours * self.current_speed
        total = hour + self.travelled_distance
        self.travelled_distance = total


new_car = Car("ABC-123", 142)

class Race:
    def __init__(self, name, distance, cars):
        self.name = name
        self.distance = distance
        self.cars = cars


    def hour_passes(self):
        for car in self.cars:
            change = random.randint(-10, 15)
            car.accelerate(change)
            car.drive(1)


    def print_status(self):
        print(f"{'Licence plate':<10} | {'Maximum speed':<5} | {'Current speed':<5} | {'Travelled distance':<10}")
        print("-" * 45)
        for car in self.cars:
            print(f"{car.license_plate:<10} | {car.maximum_speed:<5} | {car.current_speed} | {car.travelled_distance:<10}")


    def race_finished(self):
        for car in self.cars:
            if car.travelled_distance >= self.distance:
                return True
        return False