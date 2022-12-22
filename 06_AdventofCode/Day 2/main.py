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

print(counter)

#Part Two
