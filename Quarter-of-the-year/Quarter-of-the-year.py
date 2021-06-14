def quarter_of(month):
  if type(month) == int :
    return (1 if month == 1 or month == 2 or month == 3 
        else 2 if month == 4 or month == 5 or month == 6
        else 3 if month == 7 or month == 8 or month == 9
        else 4 if month == 10 or month == 11 or month == 12
        else 'Not a valid month number')