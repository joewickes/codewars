def flip(d, a):
    if d == "R":
        a.sort()
        return a
    else :
        a.sort(reverse=True)
        return a