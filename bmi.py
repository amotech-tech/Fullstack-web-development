weight=input("please enter your weight in kgs")
height=input("please enter your height in m")

w= float(weight)
h=float(height)
bmi=w/h**2


if bmi < 18.5:
    print("you are underweight")
elif bmi>=18.5 and bmi <=24.5:
    print("you are healthy")
elif bmi>=25.0 and bmi <=29.9:
    print("you are overweight")
elif bmi>=30 and bmi <=34.9:
    print("you are obese class 1")
elif bmi>=35 and bmi <=39.9:
    print("you are obese class 2")
else:
    print("you are obese class 3")
