class Car:
    def __init__(self, license_plate, maximum_speed):
        self.license_plate = license_plate
        self.maximum_speed = maximum_speed
        self.current_speed = 0
        self.travelled_distance = 0


new_car = Car("ABC-123", "142 km/h")

print(f"License plate: {new_car.license_plate}\n"
      f"Maximum speed: {new_car.maximum_speed}\n"
      f"Current speed: {new_car.current_speed} km/h\n"
      f"Travelled distance: {new_car.travelled_distance} km")
