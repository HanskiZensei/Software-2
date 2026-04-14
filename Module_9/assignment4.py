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


def race(cars):
    finished = False
    while not finished:
        for car in cars:
            car.accelerate(random.randint(-10, 15))
            car.drive(1)
            if car.travelled_distance >= 10000:
                finished = True
    return cars
