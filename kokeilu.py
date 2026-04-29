class Car:
    def __init__(self, license_plate, top_speed):
        self.license_plate = license_plate
        self.top_speed = top_speed
        self.current_speed = 0
        self.travelled_distance = 0

new_car = Car("ABC-123", "142 km/h")

print(f"License plate: {new_car.license_plate}\n"
      f"Top speed: {new_car.top_speed}\n"
      f"Current speed: {new_car.current_speed} km/h\n"
      f"Travelled distance: {new_car.travelled_distance} km")

