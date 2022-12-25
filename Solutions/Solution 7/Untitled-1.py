print("Give a string:")
value = input()
numbers = [0,1,2,3,4,5,6,7,8,9]
try:
    print(int(value))
except ValueError:
    print("bad string")