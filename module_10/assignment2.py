class Elevator:
    def __init__(self, bottom_floor, top_floor):
        self.current_floor = bottom_floor
        self.bottom_floor = bottom_floor
        self.top_floor = top_floor

    def go_to_floor(self, floor):
        if floor < self.bottom_floor or floor > self.top_floor:
            return

        if self.current_floor < floor:
            for h in range(floor - self.current_floor):
                self.floor_up()
                print(f"Current floor: {self.current_floor}")
        elif self.current_floor > floor:
            for h in range(self.current_floor - floor):
                self.floor_down()
                print(f"Current floor: {self.current_floor}")
        else:
            print(f"Current floor: {self.current_floor}")
        return

    def floor_up(self):
        self.current_floor += 1

    def floor_down(self):
        self.current_floor -= 1


class Building:
    def __init__(self, bottom_floor, top_floor, num_elevators):
        self.bottom_floor = bottom_floor
        self.top_floor = top_floor
        self.elevators = []
        for h in range(num_elevators):
            self.elevators.append(Elevator(bottom_floor, top_floor))

    def run_elevator(self, elevator_number, target_floor):
        if 0 <= elevator_number < len(self.elevators):
            self.elevators[elevator_number].go_to_floor(target_floor)