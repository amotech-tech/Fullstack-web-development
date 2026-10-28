

#make parameter optional-make it default
def divide(a=1,b=1,should_round=False):
    res =a/b
    if should_round==True:
        return round(res,2)
    else:
        return res

print(divide())
