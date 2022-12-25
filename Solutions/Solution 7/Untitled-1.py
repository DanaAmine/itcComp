print("Give a string:")
value = input()
try:
    print(int(value))
except ValueError:
    print("bad string")
