class Car:
    def __init__(self, license_plate, maximum_speed, accelerate):
        self.license_plate = license_plate
        self.maximum_speed = maximum_speed
        self.current_speed = 0
        self.travelled_distance = 0
        self.accelerate = accelerate

