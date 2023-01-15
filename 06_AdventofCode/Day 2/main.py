#Part One
file = open("input.txt", "r")
content = file.read()
list_of_content = content.split("\n")
file.close()

list_of_matches = []
counter = 0;

for i in range(len(list_of_content)):
    list_of_matches.append(list_of_content[i].split(' '))

for i in range(len(list_of_matches)):
    if list_of_matches[i][0] == "A":
        if list_of_matches[i][1] == "X":
            counter += 4
        elif list_of_matches[i][1] == "Y":
            counter += 8
        elif list_of_matches[i][1] == "Z":
            counter += 3
    elif list_of_matches[i][0] == "B":
        if list_of_matches[i][1] == "X":
            counter += 1
        elif list_of_matches[i][1] == "Y":
            counter += 5
        elif list_of_matches[i][1] == "Z":
            counter += 9
    elif list_of_matches[i][0] == "C":
        if list_of_matches[i][1] == "X":
            counter += 7
        elif list_of_matches[i][1] == "Y":
            counter += 2
        elif list_of_matches[i][1] == "Z":
            counter += 6

print("Part One: " + str(counter))
counter = 0
#Part Two

for i in range(len(list_of_matches)):
    if list_of_matches[i][1] == "X":
        if list_of_matches[i][0] == "A":
            counter += 3
        elif list_of_matches[i][0] == "B":
            counter += 1
        elif list_of_matches[i][0] == "C":
            counter += 2
    elif list_of_matches[i][1] == "Y":
        if list_of_matches[i][0] == "A":
            counter += 8
        elif list_of_matches[i][0] == "B":
            counter += 9
        elif list_of_matches[i][0] == "C":
            counter += 7
    elif list_of_matches[i][1] == "Z":
        if list_of_matches[i][0] == "A":
            counter += 4
        elif list_of_matches[i][0] == "B":
            counter += 5
        elif list_of_matches[i][0] == "C":
            counter += 6

print("Part Two: " + str(counter))

# A - Z + 0 + 3 = 1
# B - X + 0 + 1 = 2
# C - Y + 0 + 2 = 3

# A + Y + 6 + 2 = 8
# B + Z + 6 + 3 = 9
# C + X + 6 + 1 = 7

# A / X + 3 + 1 = 4
# B / Y + 3 + 2 = 5
# C / Z + 3 + 3 = 6