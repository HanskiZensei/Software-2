"""class Car:
    def __init__(self, license_plate, top_speed):
        self.license_plate = license_plate
        self.top_speed = top_speed
        self.current_speed = 0
        self.travelled_distance = 0

    def accelerate(self, amount: int):
        new_speed = self.current_speed + amount
        if new_speed > self.top_speed:
            new_speed = self.top_speed
        elif new_speed < 0:
            new_speed = 0
        self.current_speed = new_speed


new_car: Car = Car("ABC-123", 142)
new_car.accelerate(30)
new_car.accelerate(70)
new_car.accelerate(50)


print(f"License plate: {new_car.license_plate}\n"
      f"Top speed: {new_car.top_speed} km/h\n"
      f"Current speed: {new_car.current_speed}\n"
      f"Travelled distance: {new_car.travelled_distance}")


new_car.accelerate(-200)


print(f"After emergency braking:\n"
      f"Current speed: {new_car.current_speed} km/h")

class Elevator:
    def __init__(self, lowest_floor, highest_floor):
        self.lowest_floor = lowest_floor
        self.highest_floor = highest_floor
        self.current_floor = lowest_floor

    def move_to_floor(self, floor):
        if self.current_floor < floor:
            for h in range(floor-self.current_floor):
                self.floor_up()
                print(f"Current floor: {self.current_floor} ")
        elif self.current_floor > floor:
            for h in range(self.current_floor-floor):
                self.floor_down()
                print(f"Current floor: {self.current_floor} ")
        else:
            print(f"Current floor: {self.current_floor} ")
        return

    def floor_up(self):
        self.current_floor += 1

    def floor_down(self):
        self.current_floor -= 1


hissi = Elevator(1, 10)

print("Let's move to floor 5: ")
hissi.move_to_floor(5)

print("Let's move back to the bottom floor: ")
hissi.move_to_floor(0)
"""


